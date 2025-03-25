
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, TrendingDown, Plus, Download, Filter, BarChart2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

export default function Finances() {
  // Sample data
  const monthlyRevenue = [
    { name: "Jan", value: 18500 },
    { name: "Fev", value: 20200 },
    { name: "Mar", value: 24500 },
    { name: "Abr", value: 27800 },
    { name: "Mai", value: 24600 },
    { name: "Jun", value: 28900 },
  ];

  const revenueByService = [
    { name: "Terapia Holística", value: 35 },
    { name: "Reiki", value: 25 },
    { name: "Cursos", value: 20 },
    { name: "Cristaloterapia", value: 15 },
    { name: "Acupuntura", value: 5 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const transactions = [
    { id: 1, date: "18/03/2024", description: "Sessão de Terapia - Maria Silva", category: "Terapia Holística", amount: 150, type: "income" },
    { id: 2, date: "17/03/2024", description: "Curso de Reiki - 5 alunos", category: "Cursos", amount: 1500, type: "income" },
    { id: 3, date: "16/03/2024", description: "Aluguel do espaço", category: "Despesas Fixas", amount: 3500, type: "expense" },
    { id: 4, date: "15/03/2024", description: "Pagamento de comissões", category: "Comissões", amount: 2200, type: "expense" },
    { id: 5, date: "14/03/2024", description: "Sessão de Reiki - João Pereira", category: "Reiki", amount: 120, type: "income" },
    { id: 6, date: "13/03/2024", description: "Compra de materiais", category: "Materiais", amount: 580, type: "expense" },
    { id: 7, date: "12/03/2024", description: "Sessão de Cristaloterapia - Ana Oliveira", category: "Cristaloterapia", amount: 180, type: "income" },
    { id: 8, date: "11/03/2024", description: "Marketing nas redes sociais", category: "Marketing", amount: 450, type: "expense" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Finanças</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </Button>
          <Button className="px-4 bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Nova Transação
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 border border-border/50">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Receita Total (Mês)</p>
              <p className="text-2xl font-bold mt-1">R$ 24.500</p>
              <div className="flex items-center mt-1 text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">+12% vs mês anterior</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-border/50">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Despesas Totais (Mês)</p>
              <p className="text-2xl font-bold mt-1">R$ 15.200</p>
              <div className="flex items-center mt-1 text-red-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">+5% vs mês anterior</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-border/50">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Lucro Líquido (Mês)</p>
              <p className="text-2xl font-bold mt-1">R$ 9.300</p>
              <div className="flex items-center mt-1 text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">+18% vs mês anterior</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <BarChart2 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-border/50">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Margem de Lucro</p>
              <p className="text-2xl font-bold mt-1">38%</p>
              <div className="flex items-center mt-1 text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">+3% vs mês anterior</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border border-border/50 lg:col-span-2">
          <div className="p-6 border-b border-border">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Receita Mensal</h2>
              <Select defaultValue="6months">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">Últimos 3 meses</SelectItem>
                  <SelectItem value="6months">Últimos 6 meses</SelectItem>
                  <SelectItem value="year">Último ano</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyRevenue} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`R$ ${value}`, "Receita"]} />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="border border-border/50">
          <div className="p-6 border-b border-border">
            <h2 className="font-semibold">Receita por Serviço</h2>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueByService}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {revenueByService.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                <Tooltip formatter={(value) => [`${value}%`, "Participação"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="border border-border/50">
        <div className="p-6 border-b border-border">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Transações Recentes</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="w-4 h-4" />
                Filtros
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultValue="all">
            <div className="px-6 pt-3">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="income">Receitas</TabsTrigger>
                <TabsTrigger value="expense">Despesas</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Data</th>
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Descrição</th>
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Categoria</th>
                      <th className="text-right py-3 px-6 font-medium text-muted-foreground">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-border hover:bg-muted/30">
                        <td className="py-3 px-6">{transaction.date}</td>
                        <td className="py-3 px-6">{transaction.description}</td>
                        <td className="py-3 px-6">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.type === 'income' 
                              ? 'bg-green-50 text-green-700' 
                              : 'bg-red-50 text-red-700'
                          }`}>
                            {transaction.category}
                          </span>
                        </td>
                        <td className={`py-3 px-6 text-right font-medium ${
                          transaction.type === 'income' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {transaction.type === 'income' ? '+' : '-'} R$ {transaction.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="income" className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Data</th>
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Descrição</th>
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Categoria</th>
                      <th className="text-right py-3 px-6 font-medium text-muted-foreground">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions
                      .filter(t => t.type === 'income')
                      .map((transaction) => (
                        <tr key={transaction.id} className="border-b border-border hover:bg-muted/30">
                          <td className="py-3 px-6">{transaction.date}</td>
                          <td className="py-3 px-6">{transaction.description}</td>
                          <td className="py-3 px-6">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                              {transaction.category}
                            </span>
                          </td>
                          <td className="py-3 px-6 text-right font-medium text-green-600">
                            + R$ {transaction.amount}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="expense" className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Data</th>
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Descrição</th>
                      <th className="text-left py-3 px-6 font-medium text-muted-foreground">Categoria</th>
                      <th className="text-right py-3 px-6 font-medium text-muted-foreground">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions
                      .filter(t => t.type === 'expense')
                      .map((transaction) => (
                        <tr key={transaction.id} className="border-b border-border hover:bg-muted/30">
                          <td className="py-3 px-6">{transaction.date}</td>
                          <td className="py-3 px-6">{transaction.description}</td>
                          <td className="py-3 px-6">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700">
                              {transaction.category}
                            </span>
                          </td>
                          <td className="py-3 px-6 text-right font-medium text-red-600">
                            - R$ {transaction.amount}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}
