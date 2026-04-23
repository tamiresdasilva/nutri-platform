import {
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardList,
  FileText,
  Pill,
  BarChart3,
  MessageCircle,
  Bell,
  User,
  HelpCircle,
  Settings,
} from "lucide-react";

export const nutriMenu = [
  { name: "Painel", icon: LayoutDashboard, path: "/nutri", end: true },
  { name: "Pacientes", icon: Users, path: "/nutri/pacientes" },
  { name: "Agenda", icon: Calendar, path: "/nutri/agenda" },
  {
    name: "Planos Alimentares",
    icon: ClipboardList,
    path: "/nutri/planos-alimentares",
  },
  { name: "Formulários", icon: FileText, path: "/nutri/formularios" },
  { name: "Prescrições", icon: Pill, path: "/nutri/prescricoes" },
  { name: "Relatórios", icon: BarChart3, path: "/nutri/relatorios" },
  { name: "Chat", icon: MessageCircle, path: "/nutri/chat" },
  { name: "Notificações", icon: Bell, path: "/nutri/notificacoes" },
  { name: "Perfil Público", icon: User, path: "/nutri/perfil" },
  { name: "Ajuda", icon: HelpCircle, path: "/nutri/ajuda" },
  { name: "Configurações", icon: Settings, path: "/nutri/config" },
];
