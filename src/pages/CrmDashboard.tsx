
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar as CalendarIcon, Users, Gift, Megaphone, Plus, Search, Filter } from "lucide-react";

export default function CrmDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Dados simulados para lembretes e campanhas
  const reminders = [
    { id: 1, type: "birthday", customer: "Maria Silva", date: "15/04/2024", message: "Aniversário - Enviar mensagem personalizada" },
    { id: 2, type: "followup", customer: "João Pereira", date: "12/04/2024", message: "Acompanhamento pós-terapia de Reiki" },
    { id: 3, type: "campaign", customer: "Grupo: Interessados em Cristaloterapia", date: "20/04/2024", message: "Divulgação do novo curso de Cristaloterapia Avançada" },
    { id: 4, type: "presale", customer: "Ana Oliveira", date: "18/04/2024", message: "Oferecer pacote promocional de Terapia Holística" },
    { id: 5, type: "birthday", customer: "Carlos Santos", date: "25/04/2024", message: "Aniversário - Enviar cupom de desconto" },
  ];

  const campaigns = [
    { id: 1, name: "Lançamento Curso de Reiki Nível 2", status: "active", audience: "Alunos de Reiki Nível 1", scheduled: "15/04/2024", type: "email" },
    { id: 2, name: "Promoção de Outono", status: "scheduled", audience: "Todos os clientes", scheduled: "01/05/2024", type: "whatsapp" },
    { id: 3, name: "Aniversariantes do Mês", status: "recurring", audience: "Clientes aniversariantes", scheduled: "Mensal", type: "email" },
    { id: 4, name: "Follow-up pós-terapia", status: "automated", audience: "Clientes após atendimento", scheduled: "Automático (7 dias após)", type: "email" },
    { id: 5, name: "Workshop Terapias Integrativas", status: "draft", audience: "Todos os interessados", scheduled: "Não agendado", type: "email" },
  ];

  // Helper para determinar o ícone baseado no tipo de lembrete
  const getReminderIcon = (type: string) => {
    switch (type) {
      case "birthday":
        return <Gift className="h-4 w-4 text-pink-500" />;
      case "followup":
        return <Users className="h-4 w-4 text-blue-500" />;
      case "campaign":
        return <Megaphone className="h-4 w-4 text-purple-500" />;
      case "presale":
        return <Bell className="h-4 w-4 text-green-500" />;
      default:
        return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  // Helper para determinar a cor do badge de status
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "scheduled":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "recurring":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "automated":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200";
      case "draft":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-foreground">CRM Dashboard</h1>
        <div className="flex gap-2">
          <Button className="px-4 bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Nova Campanha
          </Button>
          <Button variant="outline" className="px-4">
            <Bell className="w-4 h-4 mr-2" />
            Novo Lembrete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="border border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
                Calendário de Campanhas
              </CardTitle>
              <CardDescription>
                Visualize e gerencie campanhas e lembretes programados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border rounded-md p-3"
              />
            </CardContent>
            <CardFooter className="pt-0 flex justify-between">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Aniversários</Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Campanhas</Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Lembretes</Badge>
            </CardFooter>
          </Card>

          <Card className="border border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Filtros Rápidos</CardTitle>
              <CardDescription>Refine sua visualização</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo de Lembrete</label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer border-primary text-primary">Todos</Badge>
                  <Badge variant="outline" className="cursor-pointer">Aniversários</Badge>
                  <Badge variant="outline" className="cursor-pointer">Campanhas</Badge>
                  <Badge variant="outline" className="cursor-pointer">Follow-ups</Badge>
                  <Badge variant="outline" className="cursor-pointer">Pré-venda</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Período</label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer border-primary text-primary">Todos</Badge>
                  <Badge variant="outline" className="cursor-pointer">Hoje</Badge>
                  <Badge variant="outline" className="cursor-pointer">Esta semana</Badge>
                  <Badge variant="outline" className="cursor-pointer">Este mês</Badge>
                </div>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Buscar por cliente ou campanha" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="reminders" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="reminders">Lembretes</TabsTrigger>
              <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
            </TabsList>

            <TabsContent value="reminders" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Próximos Lembretes</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="w-3.5 h-3.5" /> Filtrar
                  </Button>
                  <Button size="sm" className="h-8">
                    <Plus className="w-3.5 h-3.5 mr-1" /> Adicionar
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                {reminders.map((reminder) => (
                  <div key={reminder.id} className="flex items-start p-3 rounded-md border border-border bg-card">
                    <div className="bg-primary/10 p-2 rounded-md">
                      {getReminderIcon(reminder.type)}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">{reminder.customer}</p>
                        <span className="text-sm text-muted-foreground">{reminder.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{reminder.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="campaigns" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Campanhas</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="w-3.5 h-3.5" /> Filtrar
                  </Button>
                  <Button size="sm" className="h-8">
                    <Plus className="w-3.5 h-3.5 mr-1" /> Nova Campanha
                  </Button>
                </div>
              </div>

              <Card className="border border-border/50">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Campanha</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Audiência</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Agendamento</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tipo</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((campaign) => (
                        <tr key={campaign.id} className="border-b border-border hover:bg-muted/30">
                          <td className="py-3 px-4 font-medium">{campaign.name}</td>
                          <td className="py-3 px-4 text-sm">{campaign.audience}</td>
                          <td className="py-3 px-4 text-sm">{campaign.scheduled}</td>
                          <td className="py-3 px-4 text-sm">
                            <Badge variant="outline">{campaign.type}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusBadgeClass(campaign.status)}>
                              {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
