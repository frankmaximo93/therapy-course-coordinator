
import { Link } from "react-router-dom";
import { 
  Calendar, Clock, Users, FileText, DollarSign, BookOpen, 
  BarChart2, Home, Settings, Bell, MessageSquare, CalendarPlus,
  UserPlus, CreditCard, GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SideMenuProps {
  isOpen: boolean;
}

export function SideMenu({ isOpen }: SideMenuProps) {
  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Agendamento", icon: <Calendar size={20} />, path: "/scheduling" },
    { name: "Clientes", icon: <Users size={20} />, path: "/customers" },
    { name: "CRM", icon: <Bell size={20} />, path: "/crm" },
    { name: "Histórico", icon: <Clock size={20} />, path: "/history" },
    { name: "Finanças", icon: <DollarSign size={20} />, path: "/finances" },
    { name: "Cursos", icon: <BookOpen size={20} />, path: "/courses" },
    { name: "Relatórios", icon: <BarChart2 size={20} />, path: "/reports" },
    { name: "Mensagens", icon: <MessageSquare size={20} />, path: "/messages" },
    { name: "Documentos", icon: <FileText size={20} />, path: "/documents" },
    { name: "Configurações", icon: <Settings size={20} />, path: "/settings" }
  ];

  const quickActions = [
    { name: "Novo Agendamento", icon: <CalendarPlus size={16} />, path: "/scheduling/new" },
    { name: "Novo Cliente", icon: <UserPlus size={16} />, path: "/customers/new" },
    { name: "Nova Transação", icon: <CreditCard size={16} />, path: "/finances/new" },
    { name: "Novo Curso", icon: <GraduationCap size={16} />, path: "/courses/new" },
  ];

  return (
    <aside 
      className={`bg-white border-r border-border transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      } flex flex-col`}
    >
      <div className="p-4 border-b border-border flex justify-center items-center h-16">
        {isOpen ? (
          <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Therapy ERP
          </h1>
        ) : (
          <span className="text-xl font-bold text-primary">TE</span>
        )}
      </div>
      {isOpen && (
        <div className="p-2 border-b border-border">
          <p className="px-2 py-1 text-xs font-medium text-muted-foreground">Ações Rápidas</p>
          <div className="space-y-1">
            {quickActions.map((action) => (
              <Button
                key={action.name}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-muted-foreground hover:text-primary"
                asChild
              >
                <Link to={action.path}>
                  {action.icon}
                  <span className="ml-2 text-sm">{action.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-3 py-2.5 rounded-md transition-all
                hover:bg-secondary group
                ${window.location.pathname.startsWith(item.path) ? "bg-secondary text-primary" : "text-muted-foreground"}`}
              >
                <span className="text-current">{item.icon}</span>
                {isOpen && (
                  <span className="ml-3 text-sm font-medium text-current">{item.name}</span>
                )}
                {!isOpen && (
                  <span className="absolute left-20 bg-popover border border-border shadow-lg px-2 py-1 rounded ml-2 opacity-0 group-hover:opacity-100 text-xs whitespace-nowrap z-50">
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`p-4 ${isOpen ? "text-sm" : "text-xs"} text-muted-foreground text-center border-t border-border`}>
        {isOpen ? "© 2024 Therapy ERP" : "©"}
      </div>
    </aside>
  );
}
