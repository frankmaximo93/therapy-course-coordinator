
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Bell, Megaphone, Gift, Clock, Plus, Save, Settings, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RemindersConfig() {
  // Estados para controle dos templates
  const [activeTab, setActiveTab] = useState("templates");
  
  // Dados simulados para templates de mensagens
  const messageTemplates = [
    { id: 1, name: "Lembrete de Aniversário", type: "birthday", status: "active", content: "Olá {{nome}}, a equipe do Centro Holístico deseja um feliz aniversário! Como presente, oferecemos 15% de desconto em qualquer terapia este mês." },
    { id: 2, name: "Follow-up pós-terapia", type: "followup", status: "active", content: "Olá {{nome}}, esperamos que esteja se sentindo bem após sua sessão de {{terapia}}. Gostaríamos de saber como foi sua experiência. Tem algum feedback para compartilhar?" },
    { id: 3, name: "Lembrete de Agendamento", type: "appointment", status: "active", content: "Olá {{nome}}, lembramos que você tem um agendamento de {{terapia}} amanhã às {{horario}} com {{terapeuta}}. Confirma sua presença?" },
    { id: 4, name: "Divulgação de Curso", type: "campaign", status: "active", content: "Olá {{nome}}, estamos com inscrições abertas para o curso de {{curso}}. As aulas começam em {{data_inicio}}. Vagas limitadas!" },
    { id: 5, name: "Reativação de Cliente", type: "presale", status: "draft", content: "Olá {{nome}}, sentimos sua falta! Faz {{dias_inativo}} dias desde sua última visita. Que tal agendar uma nova sessão? Temos novidades!" },
  ];

  // Dados simulados para regras automáticas
  const automationRules = [
    { id: 1, name: "Lembrete de Aniversário", type: "birthday", status: "active", trigger: "Data de aniversário", days: 0, template: "Lembrete de Aniversário", channels: ["email", "whatsapp"] },
    { id: 2, name: "Follow-up pós-terapia", type: "followup", status: "active", trigger: "Após atendimento", days: 7, template: "Follow-up pós-terapia", channels: ["email"] },
    { id: 3, name: "Lembrete de Agendamento", type: "appointment", status: "active", trigger: "Antes do agendamento", days: 1, template: "Lembrete de Agendamento", channels: ["whatsapp", "sms"] },
    { id: 4, name: "Reativação Cliente Inativo", type: "presale", status: "inactive", trigger: "Dias sem atendimento", days: 60, template: "Reativação de Cliente", channels: ["email", "whatsapp"] },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Configuração de Lembretes e Campanhas</h1>
        <Button className="px-4 bg-primary hover:bg-primary/90">
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="rules">Regras Automáticas</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6 mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Templates de Mensagem</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Template
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {messageTemplates.map((template) => (
              <Card key={template.id} className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{template.name}</CardTitle>
                      <CardDescription>Tipo: {template.type}</CardDescription>
                    </div>
                    <Badge className={template.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                      {template.status === "active" ? "Ativo" : "Rascunho"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm bg-secondary/50 p-3 rounded-md whitespace-pre-wrap">
                    {template.content}
                  </p>
                  <div className="flex justify-end mt-4 space-x-2">
                    <Button variant="ghost" size="sm">
                      <Trash className="w-4 h-4 mr-1" /> Excluir
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-1" /> Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Criar Novo Template</CardTitle>
              <CardDescription>Configure uma nova mensagem modelo para suas comunicações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="template-name">Nome do Template</Label>
                  <Input id="template-name" placeholder="Ex: Lembrete de Aniversário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template-type">Tipo</Label>
                  <Select>
                    <SelectTrigger id="template-type">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Aniversário</SelectItem>
                      <SelectItem value="followup">Follow-up</SelectItem>
                      <SelectItem value="appointment">Agendamento</SelectItem>
                      <SelectItem value="campaign">Campanha</SelectItem>
                      <SelectItem value="presale">Pré-venda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="template-content">Conteúdo da Mensagem</Label>
                <Textarea 
                  id="template-content" 
                  placeholder="Digite o conteúdo da mensagem. Use {{nome}} para inserir o nome do cliente e outros campos personalizados." 
                  className="min-h-[120px]"
                />
                <p className="text-xs text-muted-foreground">
                  Campos disponíveis: {{nome}}, {{terapia}}, {{data}}, {{horario}}, {{terapeuta}}, {{curso}}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="template-status" />
                <Label htmlFor="template-status">Ativar template imediatamente</Label>
              </div>

              <Button className="w-full">Salvar Template</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="space-y-6 mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Regras de Automação</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nova Regra
            </Button>
          </div>

          <Card className="border border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Nome</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tipo</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Gatilho</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Template</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Canais</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {automationRules.map((rule) => (
                    <tr key={rule.id} className="border-b border-border hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{rule.name}</td>
                      <td className="py-3 px-4 text-sm">{rule.type}</td>
                      <td className="py-3 px-4 text-sm">
                        {rule.trigger} {rule.days > 0 ? `(${rule.days} dias)` : ""}
                      </td>
                      <td className="py-3 px-4 text-sm">{rule.template}</td>
                      <td className="py-3 px-4 text-sm">
                        <div className="flex gap-1">
                          {rule.channels.map((channel, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {channel}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={rule.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                          {rule.status === "active" ? "Ativo" : "Inativo"}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Trash className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Criar Nova Regra de Automação</CardTitle>
              <CardDescription>Configure quando e como as mensagens serão enviadas automaticamente</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rule-name">Nome da Regra</Label>
                  <Input id="rule-name" placeholder="Ex: Lembrete de Aniversário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rule-type">Tipo</Label>
                  <Select>
                    <SelectTrigger id="rule-type">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Aniversário</SelectItem>
                      <SelectItem value="followup">Follow-up</SelectItem>
                      <SelectItem value="appointment">Agendamento</SelectItem>
                      <SelectItem value="presale">Pré-venda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Gatilho</Label>
                <RadioGroup defaultValue="birthday">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="birthday" id="trigger-birthday" />
                    <Label htmlFor="trigger-birthday">Data de aniversário</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="appointment" id="trigger-appointment" />
                    <Label htmlFor="trigger-appointment">Antes do agendamento</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="after-appointment" id="trigger-after" />
                    <Label htmlFor="trigger-after">Após atendimento</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="inactive" id="trigger-inactive" />
                    <Label htmlFor="trigger-inactive">Cliente inativo</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rule-days">Dias (antes/depois do evento)</Label>
                  <Input id="rule-days" type="number" placeholder="Ex: 1" min="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rule-template">Template de Mensagem</Label>
                  <Select>
                    <SelectTrigger id="rule-template">
                      <SelectValue placeholder="Selecione o template" />
                    </SelectTrigger>
                    <SelectContent>
                      {messageTemplates.map(template => (
                        <SelectItem key={template.id} value={String(template.id)}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Canais de Envio</Label>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="channel-email" />
                    <Label htmlFor="channel-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="channel-whatsapp" />
                    <Label htmlFor="channel-whatsapp">WhatsApp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="channel-sms" />
                    <Label htmlFor="channel-sms">SMS</Label>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="rule-status" />
                <Label htmlFor="rule-status">Ativar regra imediatamente</Label>
              </div>

              <Button className="w-full">Salvar Regra</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6 mt-6">
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Configurações Gerais</CardTitle>
              <CardDescription>Defina as preferências gerais do sistema de CRM</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium">Ativação de Recursos</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enable-birthday" className="font-medium">Lembretes de Aniversário</Label>
                      <p className="text-sm text-muted-foreground">Enviar automaticamente mensagens em aniversários de clientes</p>
                    </div>
                    <Switch id="enable-birthday" defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enable-followup" className="font-medium">Follow-up pós-terapia</Label>
                      <p className="text-sm text-muted-foreground">Enviar automaticamente mensagens após sessões de terapia</p>
                    </div>
                    <Switch id="enable-followup" defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enable-appointment" className="font-medium">Lembretes de Agendamento</Label>
                      <p className="text-sm text-muted-foreground">Enviar lembretes antes de agendamentos marcados</p>
                    </div>
                    <Switch id="enable-appointment" defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enable-inactive" className="font-medium">Reativação de Clientes</Label>
                      <p className="text-sm text-muted-foreground">Enviar mensagens para clientes inativos após período definido</p>
                    </div>
                    <Switch id="enable-inactive" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="font-medium">Canais de Comunicação</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="email-sender">Email do Remetente</Label>
                    <Input id="email-sender" placeholder="Ex: contato@centroholistico.com.br" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp-number">Número do WhatsApp</Label>
                    <Input id="whatsapp-number" placeholder="Ex: +55 11 98765-4321" />
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <Switch id="save-message-history" defaultChecked />
                    <Label htmlFor="save-message-history">Salvar histórico de todas as mensagens enviadas</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="px-4 bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
