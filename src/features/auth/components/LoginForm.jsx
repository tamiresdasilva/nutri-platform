import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../services/authService";
import { useAuth } from "../../../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginRequest(email, password);

      // 🔥 garante formato único SEMPRE
      const user = data.user ?? data;

      login({ user });

      if (user.role === "nutricionista") {
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
    <form onSubmit={handleSubmit} className="space-y-5" aria-busy={loading}>
      {/* EMAIL */}
      <div>
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="E-mail"
          autoComplete="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
          bg-gray-50 dark:bg-[#020617]
          text-gray-900 dark:text-white
          outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={error ? "login-error" : undefined}
          required
        />
      </div>

      {/* SENHA */}
      <div>
        <label htmlFor="password" className="sr-only">
          Senha
        </label>

        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            autoComplete="current-password"
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-[#020617]
            text-gray-900 dark:text-white
            outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby={error ? "login-error" : undefined}
            required
          />

          {/* BOTÃO OLHO */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            aria-pressed={showPassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1
            text-gray-500 hover:text-gray-700 dark:hover:text-gray-300
            focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-md"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex justify-between items-center mt-2 text-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <input id="remember" type="checkbox" className="accent-green-500" />
            <label htmlFor="remember">Lembrar-me</label>
          </div>

          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded cursor-pointer"
          >
            Esqueceu sua senha?
          </button>
        </div>
      </div>

      {/* ERRO */}
      {error && (
        <p
          id="login-error"
          role="alert"
          aria-live="assertive"
          className="text-red-500 text-sm"
        >
          {error}
        </p>
      )}

      {/* BOTÃO LOGIN */}
      <button
        type="submit"
        disabled={loading}
        aria-disabled={loading}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition shadow-md disabled:opacity-60
        focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
      >
        {loading ? "Entrando..." : "Login"}
      </button>

      {/* SOLICITAR ACESSO */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
        Não possui conta?{" "}
        <button
          type="button"
          onClick={() => navigate("/request-access")}
          className="text-green-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded cursor-pointer"
        >
          Solicitar acesso
        </button>
      </p>
    </form>
  );
}
