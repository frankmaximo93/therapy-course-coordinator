
import { useState } from "react";
import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <SideMenu isOpen={sidebarOpen} />
        <main className="flex-1 overflow-auto p-6 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
