
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Scheduling from "./pages/Scheduling";
import SchedulingConfig from "./pages/SchedulingConfig";
import SchedulingNew from "./pages/SchedulingNew";
import Customers from "./pages/Customers";
import CustomersNew from "./pages/CustomersNew";
import CrmDashboard from "./pages/CrmDashboard";
import RemindersConfig from "./pages/RemindersConfig";
import Finances from "./pages/Finances";
import FinancesNew from "./pages/FinancesNew";
import Courses from "./pages/Courses";
import CoursesNew from "./pages/CoursesNew";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/scheduling" element={<AppLayout><Scheduling /></AppLayout>} />
          <Route path="/scheduling/config" element={<AppLayout><SchedulingConfig /></AppLayout>} />
          <Route path="/scheduling/new" element={<AppLayout><SchedulingNew /></AppLayout>} />
          <Route path="/customers" element={<AppLayout><Customers /></AppLayout>} />
          <Route path="/customers/new" element={<AppLayout><CustomersNew /></AppLayout>} />
          <Route path="/crm" element={<AppLayout><CrmDashboard /></AppLayout>} />
          <Route path="/crm/reminders" element={<AppLayout><RemindersConfig /></AppLayout>} />
          <Route path="/finances" element={<AppLayout><Finances /></AppLayout>} />
          <Route path="/finances/new" element={<AppLayout><FinancesNew /></AppLayout>} />
          <Route path="/courses" element={<AppLayout><Courses /></AppLayout>} />
          <Route path="/courses/new" element={<AppLayout><CoursesNew /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
