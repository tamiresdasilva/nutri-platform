import { useState, useRef } from "react";
import { Send, Paperclip, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

export default function MessageInput({
  onSendMessage,
  onSendFile,
  disabled = false,
  placeholder = "Digite sua mensagem...",
}) {
  const [draft, setDraft] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleSend = () => {
    const trimmed = draft.trim();
    if (!trimmed || disabled) return;

    onSendMessage?.(trimmed);
    setDraft("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e) => {
    setDraft(e.target.value);

    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 120) + "px";
    }
  };

  const handleAttachClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onSendFile?.(file);
    e.target.value = "";
  };

  const handleEmojiClick = (emojiData) => {
    setDraft((prev) => prev + emojiData.emoji);
  };

  const canSend = draft.trim().length > 0 && !disabled;

  return (
    <div className="shrink-0 bg-white dark:bg-[#0B1220] border-t border-gray-100 dark:border-gray-800 px-4 py-3">
      <div
        className={`
          flex items-end gap-2 rounded-2xl px-3 py-2
          bg-[#FAF7F2] dark:bg-gray-800
          border transition
          ${
            disabled
              ? "border-gray-100 dark:border-gray-800 opacity-50 cursor-not-allowed"
              : "border-gray-200 dark:border-gray-700 focus-within:border-green-400/60 focus-within:ring-2 focus-within:ring-green-400/20"
          }
        `}
      >
        {/* Ações */}
        <div className="relative flex items-center gap-1 pb-0.5">
          {/* Input file */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Botão anexar */}
          <button
            type="button"
            disabled={disabled}
            onClick={handleAttachClick}
            className="p-1.5 rounded-lg text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition disabled:pointer-events-none"
          >
            <Paperclip size={16} />
          </button>

          {/* Botão emoji */}
          <button
            type="button"
            disabled={disabled}
            onClick={() => setEmojiOpen((o) => !o)}
            className={`
              p-1.5 rounded-lg transition disabled:pointer-events-none
              ${
                emojiOpen
                  ? "text-green-500 bg-green-50 dark:bg-green-900/20"
                  : "text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
              }
            `}
          >
            <Smile size={16} />
          </button>

          {/* Picker */}
          {emojiOpen && (
            <div className="absolute bottom-full left-0 mb-2 z-30">
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                theme={
                  document.documentElement.classList.contains("dark")
                    ? "dark"
                    : "light"
                }
                lazyLoadEmojis
                searchPlaceHolder="Buscar emoji..."
                previewConfig={{ showPreview: false }}
              />
            </div>
          )}
        </div>

        {/* Input texto */}
        <textarea
          ref={textareaRef}
          rows={1}
          disabled={disabled}
          value={draft}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder={
            disabled ? "Selecione uma conversa para começar" : placeholder
          }
          className="
            flex-1 resize-none bg-transparent text-sm text-gray-800 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none leading-relaxed py-1
            disabled:cursor-not-allowed
          "
          style={{ maxHeight: 120, overflowY: "auto" }}
        />

        {/* Botão enviar */}
        <button
          type="button"
          onClick={handleSend}
          disabled={!canSend}
          className={`
            shrink-0 w-9 h-9 flex items-center justify-center rounded-xl transition
            ${
              canSend
                ? "bg-green-500 hover:bg-green-600 text-white shadow-sm cursor-pointer"
                : "bg-gray-100 dark:bg-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed"
            }
          `}
        >
          <Send size={16} />
        </button>
      </div>

      <p className="text-[11px] text-gray-300 dark:text-gray-700 text-center mt-1.5 select-none">
        Enter para enviar · Shift+Enter para nova linha
      </p>
    </div>
  );
}
