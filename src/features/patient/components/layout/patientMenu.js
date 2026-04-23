import {
  LayoutDashboard,
  ClipboardList,
  Pill,
  BookOpen,
  TrendingUp,
  FileText,
  Calendar,
  MessageCircle,
  Bell,
  HelpCircle,
  Settings,
} from "lucide-react";

export const patientMenu = [
  { name: "Painel", icon: LayoutDashboard, path: "/paciente", end: true },
  { name: "Planos", icon: ClipboardList, path: "/paciente/planos" },
  { name: "Prescrições", icon: Pill, path: "/paciente/prescricoes" },
  { name: "Diário", icon: BookOpen, path: "/paciente/diario" },
  { name: "Evolução", icon: TrendingUp, path: "/paciente/evolucao" },
  { name: "Formulários", icon: FileText, path: "/paciente/formularios" },
  { name: "Agenda", icon: Calendar, path: "/paciente/agenda" },
  { name: "Chat", icon: MessageCircle, path: "/paciente/chat" },
  { name: "Notificações", icon: Bell, path: "/paciente/notificacoes" },
  { name: "Ajuda", icon: HelpCircle, path: "/paciente/ajuda" },
  { name: "Configurações", icon: Settings, path: "/paciente/config" },
];
