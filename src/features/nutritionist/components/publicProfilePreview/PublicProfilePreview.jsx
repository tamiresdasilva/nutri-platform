import { useLocation } from "react-router-dom";
import themes from "./ThemeConfig";

export default function PublicProfilePreview() {
  const location = useLocation();
  const data = location.state?.form;

  if (!data) {
    return (
      <div className="p-10 text-center text-gray-500">
        Nenhum dado para visualizar.
      </div>
    );
  }

  const theme = themes[data.theme];

  return (
    <div
      className={`${theme.background} ${theme.text} min-h-screen scroll-smooth`}
    >
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-black/40 backdrop-blur z-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold">{data.title || "Nutricionista"}</span>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#sobre" className="hover:opacity-70">
              Sobre
            </a>
            <a href="#especialidades" className="hover:opacity-70">
              Especialidades
            </a>
            <a href="#atendimento" className="hover:opacity-70">
              Atendimento
            </a>
            <a href="#contato" className="hover:opacity-70">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {data.title || "Nome da Nutricionista"}
          </h1>

          <p className="text-lg opacity-70">
            {data.tagline || "Transformando sua alimentação em saúde"}
          </p>

          {data.ctaValue && (
            <a
              href={
                data.ctaType === "whatsapp"
                  ? `https://wa.me/${data.ctaValue}`
                  : `mailto:${data.ctaValue}`
              }
              className={`inline-block px-8 py-3 rounded-xl text-white font-medium ${theme.primary} hover:opacity-90 transition`}
            >
              Entre em contato
            </a>
          )}
        </div>

        <div className="flex justify-center">
          <img
            src={data.image || "https://placehold.co/400"}
            alt="Nutricionista"
            className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>
      </section>

      {/* SOBRE */}
      {data.bio && (
        <section
          id="sobre"
          className="py-20 px-6 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-6">Sobre</h2>
          <p className="opacity-80 leading-relaxed">{data.bio}</p>
        </section>
      )}

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Especialidades
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Emagrecimento", "Reeducação alimentar", "Nutrição esportiva"].map(
            (item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-sm text-center hover:shadow-md transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section
        id="atendimento"
        className="py-20 px-6 max-w-4xl mx-auto space-y-10"
      >
        <h2 className="text-2xl font-semibold text-center">
          Formas de atendimento
        </h2>

        {(data.serviceMode === "online" || data.serviceMode === "hybrid") && (
          <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-sm">
            <h3 className="font-semibold mb-2">💻 Online</h3>
            <p>{data.onlineInstructions}</p>
            <p className="text-sm opacity-70">{data.onlineAvailability}</p>
          </div>
        )}

        {(data.serviceMode === "presencial" ||
          data.serviceMode === "hybrid") && (
          <div className="space-y-4">
            {data.locations.map((loc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur shadow-sm"
              >
                <p className="font-medium">{loc.name}</p>
                <p className="text-sm">{loc.address}</p>
                <p className="text-xs opacity-70">{loc.hours}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA FINAL */}
      {data.ctaValue && (
        <section id="contato" className="py-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Pronto para começar?</h2>

          <a
            href={
              data.ctaType === "whatsapp"
                ? `https://wa.me/${data.ctaValue}`
                : `mailto:${data.ctaValue}`
            }
            className={`inline-block px-8 py-3 rounded-xl text-white font-medium ${theme.primary}`}
          >
            Entre em contato
          </a>
        </section>
      )}

      {/* FOOTER */}
      <footer className="py-10 text-center border-t mt-10">
        <p className="text-sm opacity-60">
          © 2026 {data.title || "Nutricionista"}
        </p>

        <p className="text-xs mt-2 opacity-40">Feito com NomeApp</p>
      </footer>
    </div>
  );
}
