import RequestAccessForm from "../components/RequestAccessForm";

export default function RequestAccess() {
  return (
    <main className="min-h-screen grid md:grid-cols-2">
      {/* LEFT - BANNER */}
      <section
        className="hidden md:flex relative items-center justify-center p-10 overflow-hidden
        bg-linear-to-br from-green-400 via-green-500 to-emerald-600
        dark:from-green-900 dark:via-green-800 dark:to-emerald-900"
      >
        <div className="max-w-md text-white space-y-6 z-10">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur p-2 rounded-xl font-bold">
              N
            </div>
            <span className="font-semibold text-lg">NomeApp</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Faça parte da
            <br />
            <span className="font-extrabold">NomeApp</span>
          </h1>

          <p className="text-white/80">
            Estamos liberando acesso aos poucos para garantir a melhor
            experiência.
          </p>
        </div>

        {/* DECORAÇÕES */}
        <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-12.5 -left-12.5" />
        <div className="absolute w-40 h-40 bg-white/10 rounded-full bottom-10 right-10" />
        <div className="absolute w-24 h-24 bg-white/10 rounded-full bottom-32 left-20" />
      </section>

      {/* RIGHT - FORM */}
      <section className="flex items-center justify-center p-8 bg-gray-50 dark:bg-[#020617]">
        <div className="w-full max-w-md p-8 bg-white dark:bg-[#0B1220] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Solicitar acesso
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Cadastre-se na lista de espera
          </p>

          <RequestAccessForm />
        </div>
      </section>
    </main>
  );
}
