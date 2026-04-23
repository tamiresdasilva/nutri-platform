import { useState, useRef } from "react";
import { Send, Paperclip, Smile } from "lucide-react";

export default function MessageInput({
  onSendMessage,
  disabled = false,
  placeholder = "Digite sua mensagem...",
}) {
  const [draft, setDraft] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    const trimmed = draft.trim();
    if (!trimmed || disabled) return;
    onSendMessage?.(trimmed);
    setDraft("");
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    // Send on Enter, newline on Shift+Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e) => {
    setDraft(e.target.value);
    // Auto-grow textarea up to ~5 lines
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 120) + "px";
    }
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
        {/* Extra actions */}
        <div className="flex items-center gap-1 pb-0.5">
          <button
            disabled={disabled}
            aria-label="Anexar arquivo"
            className="p-1.5 rounded-lg text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition disabled:pointer-events-none"
          >
            <Paperclip size={16} />
          </button>
          <button
            disabled={disabled}
            aria-label="Emoji"
            className="p-1.5 rounded-lg text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition disabled:pointer-events-none"
          >
            <Smile size={16} />
          </button>
        </div>

        {/* Text input */}
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

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={!canSend}
          aria-label="Enviar mensagem"
          className={`
            shrink-0 w-9 h-9 flex items-center justify-center rounded-xl transition
            ${
              canSend
                ? "bg-green-500 hover:bg-green-600 text-white shadow-sm cursor-pointer"
                : "bg-gray-100 dark:bg-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed"
            }
          `}
        >
          <Send size={16} className={canSend ? "" : ""} />
        </button>
      </div>

      <p className="text-[11px] text-gray-300 dark:text-gray-700 text-center mt-1.5 select-none">
        Enter para enviar · Shift+Enter para nova linha
      </p>
    </div>
  );
}
