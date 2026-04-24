import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function ConfirmationDialog({
  open,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
}) {
  useEffect(() => {
    if (!open) return;

    const handler = (e) => {
      if (e.key === "Escape") onCancel?.();
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onCancel]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div
              className="w-full max-w-sm bg-white dark:bg-[#0B1220] rounded-2xl p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="text-red-500" />
                </div>
              </div>

              {/* TEXTO */}
              <h2 className="text-center font-semibold text-gray-800 dark:text-white">
                {title}
              </h2>

              <p className="text-center text-sm text-gray-500 mt-2">
                {description}
              </p>

              {/* BOTÕES */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={onCancel}
                  className="flex-1 py-2 rounded-xl bg-gray-100 hover:bg-gray-200"
                >
                  {cancelLabel}
                </button>

                <button
                  onClick={onConfirm}
                  className="flex-1 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white"
                >
                  {confirmLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
