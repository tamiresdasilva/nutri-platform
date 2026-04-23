import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

/**
 * ConfirmationDialog — reusable modal for destructive actions.
 *
 * Props:
 *  open          boolean   — controls visibility
 *  title         string    — dialog heading
 *  description   string    — secondary text (danger context)
 *  confirmLabel  string    — label for the confirm button (default "Confirmar")
 *  cancelLabel   string    — label for the cancel button  (default "Cancelar")
 *  onConfirm     () => void
 *  onCancel      () => void
 */
export default function ConfirmationDialog({
  open,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
}) {
  // Close on ESC
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
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onCancel}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            key="dialog"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="confirm-dialog-title"
            aria-describedby="confirm-dialog-desc"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.93, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            <div
              className="
                pointer-events-auto w-full max-w-sm
                bg-white dark:bg-[#0B1220]
                border border-gray-100 dark:border-gray-700
                rounded-2xl shadow-2xl
                p-6
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/25 flex items-center justify-center">
                  <AlertTriangle
                    size={22}
                    className="text-red-500 dark:text-red-400"
                  />
                </div>
              </div>

              {/* Content */}
              <h2
                id="confirm-dialog-title"
                className="text-base font-semibold text-center text-gray-800 dark:text-white mb-1"
              >
                {title}
              </h2>
              {description && (
                <p
                  id="confirm-dialog-desc"
                  className="text-sm text-center text-gray-500 dark:text-gray-400 leading-relaxed"
                >
                  {description}
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={onCancel}
                  className="
                    flex-1 py-2.5 px-4 rounded-xl text-sm font-medium
                    bg-gray-100 dark:bg-gray-800
                    text-gray-700 dark:text-gray-300
                    hover:bg-gray-200 dark:hover:bg-gray-700
                    transition
                  "
                >
                  {cancelLabel}
                </button>
                <button
                  type="button"
                  onClick={onConfirm}
                  className="
                    flex-1 py-2.5 px-4 rounded-xl text-sm font-medium
                    bg-red-500 hover:bg-red-600
                    text-white
                    shadow-sm transition
                  "
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
