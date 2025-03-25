
import { Card } from "@/components/ui/card";
import { BarChart2, Calendar, DollarSign, Users } from "lucide-react";

export default function Dashboard() {
  // Sample data
  const stats = [
    { title: "Agendamentos", value: "127", change: "+12%", icon: <Calendar size={20} />, color: "bg-blue-50 text-blue-600" },
    { title: "Novos Clientes", value: "32", change: "+8%", icon: <Users size={20} />, color: "bg-green-50 text-green-600" },
    { title: "Receita Mensal", value: "R$ 24.500", change: "+18%", icon: <DollarSign size={20} />, color: "bg-purple-50 text-purple-600" },
    { title: "Ocupação", value: "86%", change: "+4%", icon: <BarChart2 size={20} />, color: "bg-amber-50 text-amber-600" },
  ];

  const upcomingAppointments = [
    { client: "Maria Silva", service: "Terapia Holística", time: "Hoje, 14:00", room: "Sala 2" },
    { client: "João Pereira", service: "Reiki", time: "Hoje, 15:30", room: "Sala 1" },
    { client: "Ana Oliveira", service: "Cristaloterapia", time: "Amanhã, 10:00", room: "Sala 3" },
    { client: "Carlos Santos", service: "Acupuntura", time: "Amanhã, 11:30", room: "Sala 2" },
  ];

  const courses = [
    { title: "Formação em Reiki", students: 18, progress: 65, startDate: "02/03/2024" },
    { title: "Curso de Cristaloterapia", students: 12, progress: 30, startDate: "15/04/2024" },
    { title: "Workshop de Meditação", students: 24, progress: 10, startDate: "10/05/2024" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Última atualização: agora</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 hover:shadow-md transition-shadow border border-border/50">
            <div className="flex items-center">
              <div className={`p-2 rounded ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <span className="ml-2 text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-border/50">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold">Próximos Agendamentos</h2>
            <button className="text-sm text-primary hover:underline">Ver Todos</button>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-border">
              {upcomingAppointments.map((appointment, index) => (
                <li key={index} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{appointment.client}</p>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{appointment.time}</p>
                    <p className="text-xs text-muted-foreground">{appointment.room}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="border border-border/50">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold">Cursos em Andamento</h2>
            <button className="text-sm text-primary hover:underline">Ver Todos</button>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {courses.map((course, index) => (
                <li key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{course.title}</p>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                      {course.students} alunos
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Iniciado em {course.startDate}</span>
                    <span>{course.progress}% completo</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
