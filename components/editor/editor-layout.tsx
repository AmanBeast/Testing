"use client";

import { useState } from "react";
import EditorNavbar from "./editor-navbar";
import ProjectSidebar from "./project-sidebar";

interface EditorLayoutProps {
  children: React.ReactNode;
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden select-none">
      {/* Fixed top Editor Navbar */}
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* Main viewport area housing the floating sidebar and pages */}
      <div className="relative flex-1 flex flex-col overflow-hidden">
        {/* Floating Collapsible Project Sidebar (Does not push content) */}
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Dynamic page/canvas children content */}
        <main className="relative flex-1 flex flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
