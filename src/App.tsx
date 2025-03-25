
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
import Customers from "./pages/Customers";
import CrmDashboard from "./pages/CrmDashboard";
import RemindersConfig from "./pages/RemindersConfig";
import Finances from "./pages/Finances";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            } 
          />
          <Route 
            path="/scheduling" 
            element={
              <AppLayout>
                <Scheduling />
              </AppLayout>
            } 
          />
          <Route 
            path="/scheduling/config" 
            element={
              <AppLayout>
                <SchedulingConfig />
              </AppLayout>
            } 
          />
          <Route 
            path="/customers" 
            element={
              <AppLayout>
                <Customers />
              </AppLayout>
            } 
          />
          <Route 
            path="/crm" 
            element={
              <AppLayout>
                <CrmDashboard />
              </AppLayout>
            } 
          />
          <Route 
            path="/crm/reminders" 
            element={
              <AppLayout>
                <RemindersConfig />
              </AppLayout>
            } 
          />
          <Route 
            path="/finances" 
            element={
              <AppLayout>
                <Finances />
              </AppLayout>
            } 
          />
          <Route 
            path="/courses" 
            element={
              <AppLayout>
                <Courses />
              </AppLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
