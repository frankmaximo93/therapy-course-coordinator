
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Users, Calendar, BookOpen, ClipboardList } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Courses() {
  // Sample data for courses
  const activeCourses = [
    { 
      id: 1, 
      title: "Formação em Reiki", 
      description: "Curso completo de formação em Reiki níveis 1, 2 e 3.",
      startDate: "02/03/2024", 
      endDate: "30/06/2024", 
      instructor: "Maria Oliveira",
      price: 1200,
      totalStudents: 18, 
      maxStudents: 20,
      progress: 65,
      status: "active"
    },
    { 
      id: 2, 
      title: "Curso de Cristaloterapia", 
      description: "Aprenda a utilizar cristais para equilibrar energias e promover bem-estar.",
      startDate: "15/04/2024", 
      endDate: "10/07/2024", 
      instructor: "João Silva",
      price: 950,
      totalStudents: 12, 
      maxStudents: 15,
      progress: 30,
      status: "active"
    },
    { 
      id: 3, 
      title: "Workshop de Meditação", 
      description: "Técnicas avançadas de meditação para equilíbrio emocional.",
      startDate: "10/05/2024", 
      endDate: "15/05/2024", 
      instructor: "Carlos Santos",
      price: 350,
      totalStudents: 24, 
      maxStudents: 30,
      progress: 10,
      status: "active"
    },
  ];

  const upcomingCourses = [
    { 
      id: 4, 
      title: "Aromaterapia Avançada", 
      description: "Curso completo sobre o uso terapêutico de óleos essenciais.",
      startDate: "15/06/2024", 
      endDate: "20/08/2024", 
      instructor: "Ana Oliveira",
      price: 850,
      totalStudents: 8, 
      maxStudents: 15,
      progress: 0,
      status: "upcoming"
    },
    { 
      id: 5, 
      title: "Terapia Holística Integrativa", 
      description: "Formação completa em terapias integrativas e holísticas.",
      startDate: "01/07/2024", 
      endDate: "30/11/2024", 
      instructor: "Maria Oliveira",
      price: 1800,
      totalStudents: 5, 
      maxStudents: 12,
      progress: 0,
      status: "upcoming"
    },
  ];

  const pastCourses = [
    { 
      id: 6, 
      title: "Introdução ao Reiki", 
      description: "Curso básico de introdução às técnicas de Reiki.",
      startDate: "10/01/2024", 
      endDate: "15/02/2024", 
      instructor: "Maria Oliveira",
      price: 600,
      totalStudents: 15, 
      maxStudents: 15,
      progress: 100,
      status: "completed"
    },
    { 
      id: 7, 
      title: "Workshop de Florais", 
      description: "Introdução ao uso terapêutico de florais de Bach.",
      startDate: "05/02/2024", 
      endDate: "25/02/2024", 
      instructor: "Patricia Lima",
      price: 450,
      totalStudents: 12, 
      maxStudents: 15,
      progress: 100,
      status: "completed"
    },
  ];

  const allCourses = [...activeCourses, ...upcomingCourses, ...pastCourses];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Cursos e Formações</h1>
        <Button className="px-4 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Novo Curso
        </Button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Buscar cursos..." />
        </div>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-md">
          <TabsTrigger value="all">Todos ({allCourses.length})</TabsTrigger>
          <TabsTrigger value="active">Em Andamento ({activeCourses.length})</TabsTrigger>
          <TabsTrigger value="upcoming">Próximos ({upcomingCourses.length})</TabsTrigger>
          <TabsTrigger value="completed">Concluídos ({pastCourses.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {activeCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {pastCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Course Card Component
function CourseCard({ course }) {
  return (
    <Card className="overflow-hidden border border-border/50 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{course.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course.description}</p>
          </div>
          <div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              course.status === 'active' 
                ? 'bg-green-50 text-green-700' 
                : course.status === 'upcoming'
                ? 'bg-blue-50 text-blue-700'
                : 'bg-gray-100 text-gray-700'
            }`}>
              {course.status === 'active' 
                ? 'Em Andamento' 
                : course.status === 'upcoming'
                ? 'Próximo'
                : 'Concluído'}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{course.startDate} - {course.endDate}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{course.totalStudents}/{course.maxStudents} alunos</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{course.instructor}</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-1 text-sm">
            <span className="font-medium">Progresso</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="font-semibold text-lg">
            R$ {course.price.toLocaleString('pt-BR')}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8">
              <ClipboardList className="w-4 h-4 mr-2" />
              Detalhes
            </Button>
            <Button size="sm" className="h-8">
              <Users className="w-4 h-4 mr-2" />
              Alunos
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
