import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <main className="min-h-screen grid md:grid-cols-2">
      {/* LEFT */}
      <section className="flex items-center justify-center p-8 bg-white dark:bg-[#020617]">
        <div className="w-full max-w-md space-y-6">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-xl font-bold">
              N
            </div>
            <span className="font-semibold text-gray-900 dark:text-white text-lg">
              NomeApp
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Bem-vindo de volta
          </h1>

          <p className="text-gray-500 dark:text-gray-400">
            Acesse sua conta para continuar
          </p>

          <LoginForm />
        </div>
      </section>

      {/* RIGHT */}
      <section className="hidden md:flex items-center justify-center bg-[#FAF7F2] dark:bg-[#020617]">
        <div className="max-w-sm p-8 bg-white dark:bg-[#0B1220] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Gestão inteligente para nutricionistas
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Organize pacientes, consultas e planos alimentares em um só lugar.
          </p>
        </div>
      </section>
    </main>
  );
}
