import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../services/authService";
import { useAuth } from "../../../context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginRequest(email, password);

      login(data);

      // redirect por role
      if (data.user.role === "nutricionista") {
        navigate("/nutri");
      } else {
        navigate("/paciente");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* EMAIL */}
      <div>
        <label className="text-sm text-gray-600 dark:text-gray-400">
          E-mail
        </label>
        <input
          type="email"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#020617] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* SENHA */}
      <div>
        <label className="text-sm text-gray-600 dark:text-gray-400">
          Senha
        </label>
        <input
          type="password"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#020617] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-green-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* ESQUECEU SENHA */}
        <div className="text-right mt-2">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-green-600 hover:underline"
          >
            Esqueceu sua senha?
          </button>
        </div>
      </div>

      {/* ERRO */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* BOTÃO */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white py-3 rounded-xl font-semibold transition shadow-md disabled:opacity-60"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>

      {/* SOLICITAR ACESSO */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Não possui conta?{" "}
        <button
          type="button"
          onClick={() => navigate("/request-access")}
          className="text-green-600 font-medium hover:underline"
        >
          Solicitar acesso
        </button>
      </p>
    </form>
  );
}
