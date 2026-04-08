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
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* EMAIL */}
      <div>
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
      </div>

      {/* SENHA */}
      <div>
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
          bg-gray-50 dark:bg-[#020617]
          text-gray-900 dark:text-white
          outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex justify-between items-center mt-2 text-sm">
          <label className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <input type="checkbox" className="accent-green-500" />
            Lembrar-me
          </label>

          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-green-600 hover:underline"
          >
            Esqueceu sua senha?
          </button>
        </div>
      </div>

      {/* ERRO */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* BOTÃO LOGIN */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition shadow-md disabled:opacity-60"
      >
        {loading ? "Entrando..." : "Login"}
      </button>

      {/* SOLICITAR ACESSO */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
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
