
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Save } from "lucide-react";
import { format } from "date-fns";

export default function CoursesNew() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [startDate, setStartDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    
    toast({
      title: "Curso criado com sucesso!",
      description: "O novo curso foi adicionado ao sistema.",
    });
    
    navigate("/courses");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Novo Curso</h1>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome do Curso</label>
              <Input placeholder="Digite o nome do curso" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Instrutor</label>
              <Input placeholder="Nome do instrutor" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Data de Início</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Selecione uma data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Valor</label>
              <Input type="number" placeholder="R$ 0,00" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Descrição</label>
              <Textarea
                placeholder="Descreva o curso, seus objetivos e conteúdo programático"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Materiais Necessários</label>
              <Textarea
                placeholder="Liste os materiais necessários para o curso"
                className="min-h-[100px]"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/courses")}
            >
              Cancelar
            </Button>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              Salvar Curso
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
