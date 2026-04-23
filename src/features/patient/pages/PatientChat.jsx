import { useEffect } from "react";
import PatientLayout from "../components/layout/PatientLayout";

import ChatWindow from "../../nutritionist/components/chat/ChatWindow";
import MessageInput from "../../nutritionist/components/chat/MessageInput";

import { useChat } from "../../../context/ChatContext";

export default function PatientChat() {
  const {
    conversations,
    selected,
    setSelected,
    messages,
    sendMessage,
    sendFile,
    deleteConversation,
    deleteMessage,
  } = useChat();

  // A patient has exactly one conversation — select it automatically.
  useEffect(() => {
    if (conversations.length > 0 && !selected) {
      setSelected(conversations[0]);
    }
  }, [conversations, selected, setSelected]);

  const handleDeleteConversation = () => {
    if (selected) deleteConversation(selected.id);
  };

  const handleDeleteMessage = (messageId) => {
    if (selected) deleteMessage(selected.id, messageId);
  };

  return (
    <PatientLayout>
      <div className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
        <ChatWindow
          messages={selected ? messages[selected.id] || [] : []}
          currentUserId={useChat().currentUser?.id}
          selectedUser={selected}
          onDeleteConversation={handleDeleteConversation}
          onDeleteMessage={handleDeleteMessage}
        />

        <MessageInput
          onSendMessage={sendMessage}
          onSendFile={sendFile}
          disabled={!selected}
        />
      </div>
    </PatientLayout>
  );
}
