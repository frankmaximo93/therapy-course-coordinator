
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Filter, Mail, Phone, Calendar, File, MoreHorizontal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Customers() {
  const customers = [
    { id: 1, name: "Maria Silva", email: "maria@email.com", phone: "(11) 98765-4321", lastVisit: "10/03/2024", preferredTherapy: "Terapia Holística", status: "active" },
    { id: 2, name: "João Pereira", email: "joao@email.com", phone: "(11) 91234-5678", lastVisit: "15/03/2024", preferredTherapy: "Reiki", status: "active" },
    { id: 3, name: "Ana Oliveira", email: "ana@email.com", phone: "(11) 99876-5432", lastVisit: "05/03/2024", preferredTherapy: "Cristaloterapia", status: "active" },
    { id: 4, name: "Carlos Santos", email: "carlos@email.com", phone: "(11) 94321-8765", lastVisit: "01/03/2024", preferredTherapy: "Acupuntura", status: "inactive" },
    { id: 5, name: "Patricia Lima", email: "patricia@email.com", phone: "(11) 93456-7890", lastVisit: "20/02/2024", preferredTherapy: "Terapia Holística", status: "active" },
    { id: 6, name: "Roberto Alves", email: "roberto@email.com", phone: "(11) 97890-1234", lastVisit: "25/02/2024", preferredTherapy: "Reiki", status: "inactive" },
  ];

  const activeCustomers = customers.filter(customer => customer.status === "active");
  const inactiveCustomers = customers.filter(customer => customer.status === "inactive");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Clientes</h1>
        <Button className="px-4 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Buscar cliente por nome, email, telefone..." />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Nome (A-Z)</SelectItem>
              <SelectItem value="name-desc">Nome (Z-A)</SelectItem>
              <SelectItem value="last-visit">Última Visita</SelectItem>
              <SelectItem value="most-appointments">Mais Agendamentos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="all">Todos ({customers.length})</TabsTrigger>
          <TabsTrigger value="active">Ativos ({activeCustomers.length})</TabsTrigger>
          <TabsTrigger value="inactive">Inativos ({inactiveCustomers.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card className="border border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Nome</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Contato</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Última Visita</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Terapia Preferida</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b border-border hover:bg-muted/30">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-3">
                            <span className="text-sm font-medium text-primary">
                              {customer.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-medium">{customer.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="w-3 h-3 mr-2 text-muted-foreground" />
                            {customer.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="w-3 h-3 mr-2 text-muted-foreground" />
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{customer.lastVisit}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{customer.preferredTherapy}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          customer.status === 'active' 
                            ? 'bg-green-50 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {customer.status === 'active' ? 'Ativo' : 'Inativo'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <File className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="active">
          <Card className="border border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Nome</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Contato</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Última Visita</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Terapia Preferida</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {activeCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b border-border hover:bg-muted/30">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-3">
                            <span className="text-sm font-medium text-primary">
                              {customer.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-medium">{customer.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="w-3 h-3 mr-2 text-muted-foreground" />
                            {customer.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="w-3 h-3 mr-2 text-muted-foreground" />
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{customer.lastVisit}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{customer.preferredTherapy}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                          Ativo
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <File className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="inactive">
          <Card className="border border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Nome</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Contato</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Última Visita</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Terapia Preferida</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {inactiveCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b border-border hover:bg-muted/30">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-3">
                            <span className="text-sm font-medium text-primary">
                              {customer.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-medium">{customer.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="w-3 h-3 mr-2 text-muted-foreground" />
                            {customer.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="w-3 h-3 mr-2 text-muted-foreground" />
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{customer.lastVisit}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{customer.preferredTherapy}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          Inativo
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <File className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                          </Button>
                        </div>
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
  );
}
