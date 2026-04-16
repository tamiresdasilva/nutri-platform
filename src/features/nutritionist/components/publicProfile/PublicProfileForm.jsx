import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ThemeSelector from "./ThemeSelector";
import { HelpCircle } from "lucide-react";

export default function PublicProfileForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    slug: "",
    title: "",
    tagline: "",
    image: null,
    bio: "",
    theme: "clean",

    instagram: "",
    facebook: "",
    youtube: "",

    ctaType: "whatsapp",
    ctaValue: "",

    seoDescription: "",
    city: "",
    keywords: "",

    serviceMode: "online",
    onlineInstructions: "",
    onlineAvailability: "",
    locations: [{ name: "", address: "", hours: "" }],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleLocationChange(index, field, value) {
    const updated = [...form.locations];
    updated[index][field] = value;

    setForm((prev) => ({
      ...prev,
      locations: updated,
    }));
  }

  function addLocation() {
    setForm((prev) => ({
      ...prev,
      locations: [...prev.locations, { name: "", address: "", hours: "" }],
    }));
  }

  function removeLocation(index) {
    const updated = form.locations.filter((_, i) => i !== index);
    setForm((prev) => ({
      ...prev,
      locations: updated,
    }));
  }

  return (
    <form className="max-w-5xl mx-auto space-y-6">
      {/* IDENTIDADE */}
      <div className="bg-white dark:bg-[#0B1220] rounded-2xl shadow-sm p-6 space-y-5">
        <h2 className="text-lg font-semibold">Identidade do perfil</h2>

        <div>
          <label className="text-sm text-gray-600 flex items-center gap-1">
            Endereço do perfil
            <HelpCircle size={14} />
          </label>

          <div className="flex mt-1">
            <span className="px-3 flex items-center bg-gray-100 dark:bg-gray-800 rounded-l-lg text-sm text-gray-500">
              nutriapp.com.br/
            </span>

            <input
              name="slug"
              placeholder="seu-nome"
              onChange={handleChange}
              className="flex-1 px-4 py-2 rounded-r-lg
              bg-gray-50 dark:bg-[#020617]
              outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <input
          name="title"
          placeholder="Título profissional"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#020617]
          outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          name="tagline"
          placeholder="Frase de destaque"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#020617]
          outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea
          name="bio"
          rows={4}
          placeholder="Apresentação"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#020617]
          outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* TEMA */}
      <ThemeSelector
        selected={form.theme}
        onSelect={(theme) => setForm((prev) => ({ ...prev, theme }))}
      />

      {/* REDES */}
      <div className="bg-white dark:bg-[#0B1220] rounded-2xl shadow-sm p-6 space-y-4">
        <h2 className="text-lg font-semibold">Redes sociais</h2>

        {[
          { name: "instagram", prefix: "instagram.com/" },
          { name: "facebook", prefix: "facebook.com/" },
          { name: "youtube", prefix: "youtube.com/" },
        ].map((item) => (
          <div key={item.name}>
            <label className="text-sm text-gray-600 capitalize">
              {item.name}
            </label>

            <div className="flex mt-1">
              <span className="px-3 flex items-center bg-gray-100 dark:bg-gray-800 rounded-l-lg text-sm text-gray-500">
                {item.prefix}
              </span>

              <input
                name={item.name}
                placeholder="usuario"
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded-r-lg
                bg-gray-50 dark:bg-[#020617]
                outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-[#0B1220] rounded-2xl shadow-sm p-6 space-y-5">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Modo de atendimento
        </h2>

        {/* SELECT */}
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Como você atende?
          </label>

          <select
            name="serviceMode"
            value={form.serviceMode}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 rounded-lg
      bg-gray-50 dark:bg-[#020617]
      outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="online">Online</option>
            <option value="presencial">Presencial</option>
            <option value="hybrid">Híbrido</option>
          </select>
        </div>

        {/* ONLINE */}
        {(form.serviceMode === "online" || form.serviceMode === "hybrid") && (
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300">
              Atendimento online
            </h3>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Instruções
              </label>

              <textarea
                name="onlineInstructions"
                placeholder="Ex: Atendimento via Google Meet, envio de plano por WhatsApp..."
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg
          bg-gray-50 dark:bg-[#020617]
          outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Disponibilidade
              </label>

              <input
                name="onlineAvailability"
                placeholder="Ex: Seg a Sex, 08h às 18h"
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 rounded-lg
          bg-gray-50 dark:bg-[#020617]
          outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
        )}

        {/* PRESENCIAL */}
        {(form.serviceMode === "presencial" ||
          form.serviceMode === "hybrid") && (
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300">
              Locais de atendimento
            </h3>

            {form.locations.map((loc, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gray-50 dark:bg-[#020617] space-y-3"
              >
                <input
                  placeholder="Nome do local"
                  value={loc.name}
                  onChange={(e) =>
                    handleLocationChange(index, "name", e.target.value)
                  }
                  className="w-full px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                />

                <input
                  placeholder="Endereço"
                  value={loc.address}
                  onChange={(e) =>
                    handleLocationChange(index, "address", e.target.value)
                  }
                  className="w-full px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                />

                <input
                  placeholder="Horários"
                  value={loc.hours}
                  onChange={(e) =>
                    handleLocationChange(index, "hours", e.target.value)
                  }
                  className="w-full px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                />

                <button
                  type="button"
                  onClick={() => removeLocation(index)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remover local
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addLocation}
              className="text-sm text-green-600 hover:underline"
            >
              + Adicionar novo local
            </button>
          </div>
        )}
      </div>

      {/* SEO + CTA LADO A LADO */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* SEO */}
        <div className="bg-white dark:bg-[#0B1220] rounded-2xl shadow-sm p-6 space-y-3">
          <h2 className="font-semibold">SEO</h2>

          <input
            name="seoDescription"
            placeholder="Descrição"
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#020617]
            outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            name="city"
            placeholder="Cidade"
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#020617]
            outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            name="keywords"
            placeholder="Palavras-chave"
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#020617]
            outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* CTA */}
        <div className="bg-white dark:bg-[#0B1220] rounded-2xl shadow-sm p-6 space-y-5">
          <h2 className="font-semibold text-gray-900 dark:text-white">
            Botão de ação
          </h2>

          {/* TIPO */}
          <div>
            <label
              htmlFor="ctaType"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Tipo de contato
            </label>

            <select
              id="ctaType"
              name="ctaType"
              value={form.ctaType}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg 
      bg-gray-50 dark:bg-[#020617]
      text-gray-900 dark:text-white
      outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="email">E-mail</option>
            </select>
          </div>

          {/* VALOR DINÂMICO */}
          <div>
            <label
              htmlFor="ctaValue"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              {form.ctaType === "whatsapp"
                ? "Número do WhatsApp"
                : "E-mail profissional"}
            </label>

            <input
              id="ctaValue"
              name="ctaValue"
              type={form.ctaType === "email" ? "email" : "tel"}
              placeholder={
                form.ctaType === "whatsapp"
                  ? "(DDD) 99999-9999"
                  : "seuemail@exemplo.com"
              }
              value={form.ctaValue}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg
      bg-gray-50 dark:bg-[#020617]
      text-gray-900 dark:text-white
      outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* PREVIEW DO BOTÃO */}
          <div className="pt-2">
            <p className="text-xs text-gray-500 mb-2">Pré-visualização</p>

            <button
              type="button"
              className="w-full py-3 rounded-lg bg-green-500 text-white font-medium
      hover:bg-green-600 transition
      focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Entre em contato
            </button>
          </div>
        </div>
      </div>

      {/* AÇÕES (CENTRALIZADAS) */}
      <div className="flex justify-center gap-4 pt-4">
        <button
          type="button"
          onClick={() => navigate("/nutri/perfil/preview", { state: { form } })}
          className="px-6 py-2 rounded-lg bg-gray-100 dark:bg-gray-800
          hover:bg-gray-200 dark:hover:bg-gray-700 transition
          focus:ring-2 focus:ring-green-400"
        >
          Visualizar
        </button>

        <button
          type="button"
          className="px-6 py-2 rounded-lg bg-[#F59E0B] text-white
          hover:bg-[#D97706] transition
          focus:ring-2 focus:ring-orange-400"
        >
          Salvar
        </button>

        <button
          type="button"
          className="px-6 py-2 rounded-lg bg-green-500 text-white
          hover:bg-green-600 transition
          focus:ring-2 focus:ring-green-400"
        >
          Publicar
        </button>
      </div>
    </form>
  );
}
