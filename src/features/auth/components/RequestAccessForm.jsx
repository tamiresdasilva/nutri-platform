import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RequestAccessForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [showPatientInfo, setShowPatientInfo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!name || !email || !message) {
        throw new Error("Preencha todos os campos");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* NOME */}
      <input
        type="text"
        placeholder="Nome completo"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
        bg-gray-50 dark:bg-[#020617]
        text-gray-900 dark:text-white
        outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* EMAIL */}
      <input
        type="email"
        placeholder="E-mail"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
        bg-gray-50 dark:bg-[#020617]
        text-gray-900 dark:text-white
        outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* MENSAGEM */}
      <textarea
        rows={4}
        placeholder="Fale um pouco sobre você..."
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
        bg-gray-50 dark:bg-[#020617]
        text-gray-900 dark:text-white
        outline-none resize-none focus:ring-2 focus:ring-green-400"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      {/* ERRO */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* SUCESSO */}
      {success && (
        <p className="text-green-600 text-sm">
          Solicitação enviada com sucesso!
        </p>
      )}

      {/* BOTÃO */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition shadow-md disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Solicitar acesso"}
      </button>

      {/* LINKS */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3 space-y-3">
        <p>Estamos liberando acesso gradualmente</p>

        <div className="h-px bg-gray-200 dark:bg-gray-700" />

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-green-600 font-medium hover:underline"
        >
          Já possui convite? Fazer login →
        </button>

        <div>
          <button
            type="button"
            onClick={() => setShowPatientInfo((prev) => !prev)}
            className="hover:underline"
          >
            Sou paciente
          </button>
        </div>
      </div>

      {showPatientInfo && (
        <div className="mt-4 p-4 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            O acesso é disponibilizado pelo seu nutricionista. Entre em contato
            com o profissional responsável.
          </p>
        </div>
      )}
    </form>
  );
}
