import { createContext, useContext, useEffect, useState } from "react";
import { mockUsers } from "../mocks/users";
import { useAuth } from "./AuthContext";

const ChatContext = createContext();

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
          conv_pac_1: [
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

  // GERAR CONVERSAS DINAMICAMENTE
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
          const convId = `conv_${patient.id}`;
          const msgs = messages[convId] || [];
          const lastMsg = msgs[msgs.length - 1];

          return {
            id: convId,
            userId: patient.id,
            name: patient.name,
            avatar: patient.avatar,
            lastMessage: lastMsg?.text || "",
            lastMessageAt: lastMsg?.sentAt || "",
            unread: 0,
          };
        });
    }

    if (currentUser.role === "paciente") {
      const nutri = mockUsers.find((u) => u.id === currentUser.nutritionistId);

      if (nutri) {
        const convId = `conv_${nutri.id}`;
        const msgs = messages[convId] || [];
        const lastMsg = msgs[msgs.length - 1];

        convs = [
          {
            id: convId,
            userId: nutri.id,
            name: nutri.name,
            avatar: nutri.avatar,
            lastMessage: lastMsg?.text || "",
            lastMessageAt: lastMsg?.sentAt || "",
            unread: 0,
          },
        ];
      }
    }

    setConversations(convs);
  }, [currentUser, messages]);

  // salvar mensagens no localStorage
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

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

  return (
    <ChatContext.Provider
      value={{
        conversations,
        selected,
        setSelected,
        messages,
        sendMessage,
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
