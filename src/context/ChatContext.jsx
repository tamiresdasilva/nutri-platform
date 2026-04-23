import { createContext, useContext, useEffect, useState } from "react";
import { mockUsers } from "../mocks/users";
import { useAuth } from "./AuthContext";

const ChatContext = createContext();

/** garante que sempre será a mesma conversa entre dois usuários */
function getConvId(userA, userB) {
  return [userA, userB].sort().join("_");
}

export function ChatProvider({ children }) {
  const { auth } = useAuth();
  const currentUser = auth?.user;

  const [conversations, setConversations] = useState([]);
  const [selected, setSelected] = useState(null);

  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("chat_messages");

    return stored
      ? JSON.parse(stored)
      : {
          conv_nutri_1_pac_1: [
            {
              id: "m1",
              senderId: "pac_1",
              text: "Oi doutora!",
              sentAt: "10:30",
            },
            {
              id: "m2",
              senderId: "nutri_1",
              text: "Oi Luciano! Tudo bem?",
              sentAt: "10:31",
            },
          ],
        };
  });

  /** sincroniza entre abas/janelas */
  useEffect(() => {
    function syncMessages(event) {
      if (event.key === "chat_messages" && event.newValue) {
        setMessages(JSON.parse(event.newValue));
      }
    }

    window.addEventListener("storage", syncMessages);
    return () => window.removeEventListener("storage", syncMessages);
  }, []);

  /** persistência local */
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  /** gera conversas dinamicamente */
  useEffect(() => {
    if (!currentUser) return;

    let convs = [];

    if (currentUser.role === "nutricionista") {
      convs = mockUsers
        .filter(
          (user) =>
            user.role === "paciente" && user.nutritionistId === currentUser.id,
        )
        .map((patient) => {
          const convId = getConvId(currentUser.id, patient.id);
          const msgs = messages[convId] || [];

          const lastMsg =
            [...msgs].reverse().find((m) => m.type !== "file") ||
            msgs[msgs.length - 1];

          return {
            id: convId,
            userId: patient.id,
            name: patient.name,
            avatar: patient.avatar,
            lastMessage:
              lastMsg?.text ||
              (lastMsg?.fileName ? `📎 ${lastMsg.fileName}` : ""),
            lastMessageAt: lastMsg?.sentAt || "",
            unread: 0,
          };
        });
    }

    if (currentUser.role === "paciente") {
      const nutri = mockUsers.find((u) => u.id === currentUser.nutritionistId);

      if (nutri) {
        const convId = getConvId(currentUser.id, nutri.id);
        const msgs = messages[convId] || [];

        const lastMsg =
          [...msgs].reverse().find((m) => m.type !== "file") ||
          msgs[msgs.length - 1];

        convs = [
          {
            id: convId,
            userId: nutri.id,
            name: nutri.name,
            avatar: nutri.avatar,
            lastMessage:
              lastMsg?.text ||
              (lastMsg?.fileName ? `📎 ${lastMsg.fileName}` : ""),
            lastMessageAt: lastMsg?.sentAt || "",
            unread: 0,
          },
        ];
      }
    }

    setConversations(convs);
  }, [currentUser, messages]);

  /** ✉️ enviar mensagem */
  function sendMessage(text) {
    if (!selected || !currentUser) return;

    const newMessage = {
      id: Date.now().toString(),
      senderId: currentUser.id,
      text,
      sentAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => ({
      ...prev,
      [selected.id]: [...(prev[selected.id] || []), newMessage],
    }));
  }

  /** 📎 enviar arquivo */
  function sendFile(file) {
    if (!selected || !currentUser || !file) return;

    const fileURL = URL.createObjectURL(file);
    const isImage = file.type.startsWith("image/");

    const newMessage = {
      id: Date.now().toString(),
      senderId: currentUser.id,
      type: "file",
      fileName: file.name,
      fileURL,
      isImage,
      sentAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => ({
      ...prev,
      [selected.id]: [...(prev[selected.id] || []), newMessage],
    }));
  }

  /** 🗑️ deletar conversa */
  function deleteConversation(convId) {
    setMessages((prev) => {
      const next = { ...prev };
      delete next[convId];
      return next;
    });

    setSelected((prev) => (prev?.id === convId ? null : prev));
  }

  /** 🧹 deletar mensagem */
  function deleteMessage(convId, messageId) {
    setMessages((prev) => ({
      ...prev,
      [convId]: (prev[convId] || []).filter((m) => m.id !== messageId),
    }));
  }

  return (
    <ChatContext.Provider
      value={{
        conversations,
        selected,
        setSelected,
        messages,
        sendMessage,
        sendFile,
        deleteConversation,
        deleteMessage,
        currentUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
