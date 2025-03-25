
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CalendarClock, Search, Plus } from "lucide-react";

export default function Scheduling() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const timeSlots = [
    { time: "08:00", status: "available" },
    { time: "09:00", status: "booked", client: "Maria Silva", service: "Terapia Holística", room: "Sala 2" },
    { time: "10:00", status: "available" },
    { time: "11:00", status: "available" },
    { time: "12:00", status: "lunch" },
    { time: "13:00", status: "available" },
    { time: "14:00", status: "booked", client: "João Pereira", service: "Reiki", room: "Sala 1" },
    { time: "15:00", status: "available" },
    { time: "16:00", status: "available" },
    { time: "17:00", status: "booked", client: "Ana Oliveira", service: "Cristaloterapia", room: "Sala 3" },
    { time: "18:00", status: "available" },
    { time: "19:00", status: "available" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Agendamento</h1>
        <Button className="px-4 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Novo Agendamento
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 border border-border/50">
            <div className="space-y-2 mb-4">
              <h2 className="font-medium flex items-center">
                <CalendarClock className="w-4 h-4 mr-2 text-primary" />
                Calendário
              </h2>
              <p className="text-sm text-muted-foreground">Selecione uma data para ver os horários disponíveis.</p>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md p-3"
            />
          </Card>
          
          <Card className="p-6 border border-border/50">
            <div className="space-y-2 mb-4">
              <h2 className="font-medium">Filtros</h2>
              <p className="text-sm text-muted-foreground">Refine a visualização dos agendamentos.</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Terapeuta</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os terapeutas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os terapeutas</SelectItem>
                    <SelectItem value="joao">João Silva</SelectItem>
                    <SelectItem value="maria">Maria Oliveira</SelectItem>
                    <SelectItem value="carlos">Carlos Santos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Sala</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas as salas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as salas</SelectItem>
                    <SelectItem value="sala1">Sala 1</SelectItem>
                    <SelectItem value="sala2">Sala 2</SelectItem>
                    <SelectItem value="sala3">Sala 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Serviço</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os serviços" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os serviços</SelectItem>
                    <SelectItem value="reiki">Reiki</SelectItem>
                    <SelectItem value="acupuntura">Acupuntura</SelectItem>
                    <SelectItem value="holistica">Terapia Holística</SelectItem>
                    <SelectItem value="cristal">Cristaloterapia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Buscar cliente" />
              </div>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="border border-border/50">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h2 className="font-semibold">Horários do Dia</h2>
              <p className="text-sm text-muted-foreground">
                {date?.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {timeSlots.map((slot, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-md flex justify-between items-center border ${
                      slot.status === "available" ? "border-green-200 bg-green-50" :
                      slot.status === "booked" ? "border-blue-200 bg-blue-50" :
                      "border-amber-200 bg-amber-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div 
                        className={`w-4 h-4 rounded-full mr-3 ${
                          slot.status === "available" ? "bg-green-500" :
                          slot.status === "booked" ? "bg-blue-500" :
                          "bg-amber-500"
                        }`}
                      ></div>
                      <span className="font-medium">{slot.time}</span>
                    </div>
                    <div>
                      {slot.status === "available" && (
                        <Button variant="outline" size="sm" className="text-xs h-8">
                          Agendar
                        </Button>
                      )}
                      {slot.status === "booked" && (
                        <div className="text-right">
                          <p className="text-sm font-medium">{slot.client}</p>
                          <p className="text-xs text-muted-foreground">{slot.service} • {slot.room}</p>
                        </div>
                      )}
                      {slot.status === "lunch" && (
                        <span className="text-sm text-amber-700">Horário de Almoço</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
