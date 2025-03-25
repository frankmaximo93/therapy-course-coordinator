
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Clock, Plus, Save, User, CalendarClock, CalendarRange } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function SchedulingConfig() {
  const [activeDurationsTab, setActiveDurationsTab] = useState("terapias");
  
  // Dados simulados para tipos de serviços
  const serviceTypes = [
    { id: 1, name: "Reiki", duration: 60, price: 120, color: "#4f46e5" },
    { id: 2, name: "Terapia Holística", duration: 90, price: 150, color: "#8b5cf6" },
    { id: 3, name: "Cristaloterapia", duration: 60, price: 130, color: "#ec4899" },
    { id: 4, name: "Florais", duration: 45, price: 100, color: "#10b981" },
    { id: 5, name: "Acupuntura", duration: 50, price: 110, color: "#f59e0b" },
  ];
  
  // Dados simulados para campos personalizados
  const customFields = [
    { id: 1, name: "Indicação", type: "select", options: ["Amigo", "Google", "Instagram", "Facebook", "Outro"], required: true, screen: "cadastro" },
    { id: 2, name: "Alergias", type: "text", options: [], required: false, screen: "cadastro" },
    { id: 3, name: "Medicamentos em uso", type: "textarea", options: [], required: false, screen: "cadastro" },
    { id: 4, name: "Objetivo da terapia", type: "select", options: ["Bem-estar", "Saúde física", "Equilíbrio emocional", "Espiritualidade", "Outro"], required: true, screen: "agendamento" },
    { id: 5, name: "Observações do agendamento", type: "textarea", options: [], required: false, screen: "agendamento" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Configuração de Agendamentos</h1>
        <Button className="px-4 bg-primary hover:bg-primary/90">
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <Tabs defaultValue="duracao" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="duracao">Duração e Tipos</TabsTrigger>
          <TabsTrigger value="campos">Campos Personalizados</TabsTrigger>
          <TabsTrigger value="geral">Configurações Gerais</TabsTrigger>
        </TabsList>

        <TabsContent value="duracao" className="space-y-6 mt-6">
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Duração dos Serviços</CardTitle>
              <CardDescription>Configure o tempo de duração para cada tipo de serviço</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={activeDurationsTab} onValueChange={setActiveDurationsTab} className="w-full">
                <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
                  <TabsTrigger value="terapias" className="rounded-md px-3 py-1 text-sm">
                    Terapias
                  </TabsTrigger>
                  <TabsTrigger value="cursos" className="rounded-md px-3 py-1 text-sm">
                    Cursos/Workshops
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Tipos de Serviços</h3>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" /> Adicionar Serviço
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Nome</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Duração (min)</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Preço (R$)</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Cor</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceTypes.map((service) => (
                        <tr key={service.id} className="border-b border-border hover:bg-muted/30">
                          <td className="py-3 px-4 font-medium">{service.name}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{service.duration} min</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">R$ {service.price.toFixed(2)}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <div 
                                className="w-5 h-5 rounded-full border border-border" 
                                style={{ backgroundColor: service.color }}
                              ></div>
                              <span>{service.color}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="ghost" size="sm">Editar</Button>
                              <Button variant="ghost" size="sm" className="text-destructive">Excluir</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Adicionar Novo Serviço</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service-name">Nome do Serviço</Label>
                      <Input id="service-name" placeholder="Ex: Massagem Relaxante" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-duration">Duração (minutos)</Label>
                      <Input id="service-duration" type="number" placeholder="Ex: 60" min="5" step="5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service-price">Preço (R$)</Label>
                      <Input id="service-price" type="number" placeholder="Ex: 120.00" min="0" step="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-color">Cor</Label>
                      <div className="flex space-x-2">
                        <Input id="service-color" type="color" className="w-12 h-10 p-1" defaultValue="#4f46e5" />
                        <Input id="service-color-hex" className="flex-1" defaultValue="#4f46e5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service-description">Descrição</Label>
                    <Textarea id="service-description" placeholder="Descreva o serviço" className="min-h-[80px]" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="service-active" defaultChecked />
                    <Label htmlFor="service-active">Serviço ativo para agendamento</Label>
                  </div>
                  
                  <Button className="w-full mt-2">Adicionar Serviço</Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campos" className="space-y-6 mt-6">
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Campos Personalizados</CardTitle>
              <CardDescription>Adicione campos extras para coleta de informações no cadastro e agendamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Campos Ativos</h3>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-1" /> Novo Campo
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Nome do Campo</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tipo</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Obrigatório</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tela</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customFields.map((field) => (
                      <tr key={field.id} className="border-b border-border hover:bg-muted/30">
                        <td className="py-3 px-4 font-medium">{field.name}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">
                            {field.type === "text" ? "Texto simples" : 
                             field.type === "textarea" ? "Texto longo" : 
                             field.type === "select" ? "Lista de opções" : field.type}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          {field.required ? 
                            <Badge className="bg-blue-100 text-blue-800">Sim</Badge> : 
                            <Badge variant="outline">Não</Badge>
                          }
                        </td>
                        <td className="py-3 px-4 capitalize">
                          {field.screen}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="sm">Editar</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Excluir</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Adicionar Novo Campo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="field-name">Nome do Campo</Label>
                    <Input id="field-name" placeholder="Ex: Problemas de saúde prévios" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Tipo de Campo</Label>
                    <RadioGroup defaultValue="text">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="text" id="field-type-text" />
                          <Label htmlFor="field-type-text">Texto simples</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="textarea" id="field-type-textarea" />
                          <Label htmlFor="field-type-textarea">Texto longo</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="select" id="field-type-select" />
                          <Label htmlFor="field-type-select">Lista de opções</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="date" id="field-type-date" />
                          <Label htmlFor="field-type-date">Data</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="number" id="field-type-number" />
                          <Label htmlFor="field-type-number">Número</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="field-options">Opções (para lista de opções, separadas por vírgula)</Label>
                    <Textarea id="field-options" placeholder="Ex: Opção 1, Opção 2, Opção 3" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Exibir em</Label>
                    <RadioGroup defaultValue="cadastro">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cadastro" id="field-screen-cadastro" />
                        <Label htmlFor="field-screen-cadastro">Tela de cadastro do cliente</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="agendamento" id="field-screen-agendamento" />
                        <Label htmlFor="field-screen-agendamento">Tela de agendamento</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ambos" id="field-screen-ambos" />
                        <Label htmlFor="field-screen-ambos">Ambas as telas</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="field-required" />
                    <Label htmlFor="field-required">Campo obrigatório</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="field-active" defaultChecked />
                    <Label htmlFor="field-active">Campo ativo</Label>
                  </div>
                  
                  <Button className="w-full mt-2">Adicionar Campo</Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="geral" className="space-y-6 mt-6">
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Configurações Gerais de Agendamento</CardTitle>
              <CardDescription>Configure as regras básicas para todos os agendamentos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium flex items-center">
                  <CalendarClock className="w-4 h-4 mr-2 text-primary" />
                  Horários de Funcionamento
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="work-start">Horário de Início</Label>
                    <Input id="work-start" type="time" defaultValue="08:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="work-end">Horário de Término</Label>
                    <Input id="work-end" type="time" defaultValue="19:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lunch-start">Início do Almoço</Label>
                    <Input id="lunch-start" type="time" defaultValue="12:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lunch-end">Fim do Almoço</Label>
                    <Input id="lunch-end" type="time" defaultValue="13:00" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Dias de Funcionamento</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map((day, index) => (
                      <Badge 
                        key={index} 
                        variant={index < 6 ? "default" : "outline"}
                        className={index < 6 ? "" : "opacity-70"}
                      >
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium flex items-center">
                  <CalendarRange className="w-4 h-4 mr-2 text-primary" />
                  Intervalos e Limites
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="interval">Intervalo entre Agendamentos (min)</Label>
                    <Select defaultValue="15">
                      <SelectTrigger id="interval">
                        <SelectValue placeholder="Selecione o intervalo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Sem intervalo</SelectItem>
                        <SelectItem value="5">5 minutos</SelectItem>
                        <SelectItem value="10">10 minutos</SelectItem>
                        <SelectItem value="15">15 minutos</SelectItem>
                        <SelectItem value="30">30 minutos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="advance-days">Dias de Antecedência para Agendamento</Label>
                    <Input id="advance-days" type="number" defaultValue="30" min="1" max="365" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Número máximo de dias no futuro para permitir agendamentos
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-advance">Antecedência Mínima (horas)</Label>
                    <Input id="min-advance" type="number" defaultValue="2" min="0" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Quantas horas antes o cliente precisa agendar (0 para permitir agendamento imediato)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cancel-limit">Limite para Cancelamento (horas)</Label>
                    <Input id="cancel-limit" type="number" defaultValue="24" min="0" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Quantas horas antes o cliente pode cancelar sem penalidade
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium flex items-center">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  Políticas de Agendamento
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allow-online" className="font-medium">Permitir Agendamento Online</Label>
                      <p className="text-sm text-muted-foreground">Clientes podem agendar diretamente pelo site/app</p>
                    </div>
                    <Switch id="allow-online" defaultChecked />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="require-approval" className="font-medium">Exigir Aprovação Manual</Label>
                      <p className="text-sm text-muted-foreground">Agendamentos precisam ser aprovados pela administração</p>
                    </div>
                    <Switch id="require-approval" />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="require-deposit" className="font-medium">Exigir Pagamento Antecipado</Label>
                      <p className="text-sm text-muted-foreground">Cliente deve pagar uma taxa para confirmar agendamento</p>
                    </div>
                    <Switch id="require-deposit" />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notify-admin" className="font-medium">Notificar Administrador</Label>
                      <p className="text-sm text-muted-foreground">Enviar notificação para cada novo agendamento</p>
                    </div>
                    <Switch id="notify-admin" defaultChecked />
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
