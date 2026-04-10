import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { useState } from "react";

export default function ForgotPassword() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen grid md:grid-cols-2">
      {/* LEFT */}
      <section
        className="hidden md:flex relative items-center justify-center p-10 overflow-hidden
        bg-gradient-to-br from-green-400 via-green-500 to-emerald-600
        dark:from-green-900 dark:via-green-800 dark:to-emerald-900"
      >
        <div className="max-w-md text-white space-y-6 z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur p-2 rounded-xl font-bold">
              N
            </div>
            <span className="font-semibold text-lg">NomeApp</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight">Recuperar acesso</h1>

          <p className="text-white/80">
            Redefina sua senha de forma rápida e segura.
          </p>
        </div>
      </section>

      {/* RIGHT */}
      <section className="flex items-center justify-center p-8 bg-gray-50 dark:bg-[#020617]">
        <div className="w-full max-w-md p-8 bg-white dark:bg-[#0B1220] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          {!success ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Esqueceu sua senha?
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Digite seu e-mail para receber um link com as instruções.
              </p>

              <ForgotPasswordForm setSuccess={setSuccess} setEmail={setEmail} />
            </>
          ) : (
            <div className="space-y-5 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                O link de redefinição foi enviado
              </h2>

              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Verifique a caixa de entrada do e-mail{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {email}
                </span>
                . Caso não encontre, verifique também a pasta de spam ou lixo
                eletrônico.
              </p>

              <button
                onClick={() => (window.location.href = "/login")}
                className="text-green-600 font-medium hover:underline
                focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
              >
                Voltar para o login
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
