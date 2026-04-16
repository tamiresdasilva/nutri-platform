import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
  IdCard,
  Upload,
} from "lucide-react";

export default function AccountSection() {
  const { auth } = useAuth();
  const user = auth?.user;

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    crn: "",
    birth: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function getInitials(name) {
    if (!name) return "";
    const parts = name.split(" ");
    const first = parts[0]?.[0] || "";
    const last = parts[parts.length - 1]?.[0] || "";
    return (first + last).toUpperCase();
  }

  return (
    <section className="space-y-4">
      {/* HEADER */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Dados da Conta
      </h2>

      {/* CARD */}
      <div className="bg-white dark:bg-[#0B1220] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
        {/* FOTO */}
        <div className="space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Foto de Perfil
          </p>

          <div className="flex items-center gap-4">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
                {getInitials(user?.name)}
              </div>
            )}

            <button className="flex items-center gap-2 px-3 py-2 text-sm border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <Upload size={16} />
              Fazer Upload
            </button>
          </div>

          <p className="text-xs text-gray-400">
            Tamanho máximo: 2MB. Formatos: JPG, PNG
          </p>
        </div>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* NOME */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              <User size={16} /> Nome Completo
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-[#020617]
            text-gray-900 dark:text-white
            outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>

          {/* CRN */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              <IdCard size={16} /> CRN (Registro profissional)
            </label>
            <input
              name="crn"
              value={form.crn}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-[#020617]
            text-gray-900 dark:text-white
            outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>

          {/* TELEFONE */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              <Phone size={16} /> Telefone
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-[#020617]
            text-gray-900 dark:text-white
            outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              <Mail size={16} /> E-mail
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-[#020617]
            text-gray-900 dark:text-white
            outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>

          {/* DATA */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              <Calendar size={16} /> Data de Nascimento
            </label>
            <input
              name="birth"
              value={form.birth}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-[#020617]
            text-gray-900 dark:text-white
            outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>

          {/* SENHA */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              <Lock size={16} /> Senha
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-[#020617]
            text-gray-900 dark:text-white
            outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* BOTÃO */}
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium transition">
          Salvar Alterações
        </button>
      </div>
    </section>
  );
}
