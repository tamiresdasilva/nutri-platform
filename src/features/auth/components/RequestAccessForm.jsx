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
      // 🔹 simulação (depois vira API)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // validação simples
      if (!name || !email || !message) {
        throw new Error("Preencha todos os campos");
      }

      setSuccess(true);

      // limpa form
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* NOME */}
      <div>
        <label className="text-sm text-gray-600 dark:text-gray-400">
          Nome e sobrenome
        </label>
        <input
          type="text"
          placeholder="Ex: Ana Souza"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#020617] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-green-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm text-gray-600 dark:text-gray-400">
          E-mail
        </label>
        <input
          type="email"
          placeholder="seu@email.com"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#020617] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* MENSAGEM */}
      <div>
        <label className="text-sm text-gray-600 dark:text-gray-400">
          Fale um pouco sobre você
        </label>
        <textarea
          rows={4}
          placeholder="Ex: Sou nutricionista clínica, atendo pacientes com foco em emagrecimento e reeducação alimentar e gostaria de utilizar a plataforma para organizar meus atendimentos..."
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#020617] text-gray-900 dark:text-white outline-none resize-none focus:ring-2 focus:ring-green-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      {/* ERRO */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* SUCESSO */}
      {success && (
        <p className="text-green-600 text-sm">
          Solicitação enviada com sucesso! Você será avisado quando o acesso for
          liberado.
        </p>
      )}

      {/* BOTÃO */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white py-3 rounded-xl font-semibold transition shadow-md disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Solicitar acesso"}
      </button>

      {/* INFO + LINKS */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 space-y-3 mt-4">
        <p>Estamos liberando acesso gradualmente para nutricionistas</p>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="space-y-1">
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
              className="text-gray-500 dark:text-gray-400 hover:underline"
            >
              Sou paciente
            </button>
          </div>
        </div>
      </div>

      {showPatientInfo && (
        <div className="mt-4 p-4 rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
            O acesso à plataforma é disponibilizado pelo seu nutricionista. Caso
            ainda não tenha recebido suas credenciais, entre em contato com o
            profissional responsável pelo seu acompanhamento.
          </p>
        </div>
      )}
    </form>
  );
}
