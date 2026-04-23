import { useState } from "react";
import NutriLayout from "../components/layout/NutriLayout";

import ChatSidebar from "../components/chat/ChatSidebar";
import ChatWindow from "../components/chat/ChatWindow";
import MessageInput from "../components/chat/MessageInput";

import { useChat } from "../../../context/ChatContext";

export default function NutriChat() {
  const {
    conversations,
    selected,
    setSelected,
    messages,
    sendMessage,
    sendFile,
    deleteConversation,
    deleteMessage,
    currentUser,
  } = useChat();

  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteConversation = () => {
    if (selected) deleteConversation(selected.id);
  };

  const handleDeleteMessage = (messageId) => {
    if (selected) deleteMessage(selected.id, messageId);
  };

  return (
    <NutriLayout>
      <div className="h-[calc(100vh-4rem)] flex overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
        {/* SIDEBAR */}
        <div className="w-80 shrink-0">
          <ChatSidebar
            conversations={conversations}
            selectedId={selected?.id}
            onSelect={setSelected}
            currentUserRole={currentUser?.role}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* CHAT */}
        <div className="flex-1 flex flex-col">
          <ChatWindow
            messages={selected ? messages[selected.id] || [] : []}
            currentUserId={currentUser?.id}
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
      </div>
    </NutriLayout>
  );
}
