import { useState } from "react";

export default function ForgotPasswordForm({ setSuccess, setEmail }) {
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1000));

      if (!emailInput) {
        throw new Error("Informe seu e-mail");
      }

      setEmail(emailInput); // 👈 sobe o email pra page
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
          bg-gray-50 dark:bg-[#020617]
          text-gray-900 dark:text-white
          outline-none focus:ring-2 focus:ring-green-400"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
      >
        {loading ? "Enviando..." : "Enviar instruções"}
      </button>
    </form>
  );
}
