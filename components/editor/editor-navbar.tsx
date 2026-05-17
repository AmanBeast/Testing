"use client";

import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-black/90 border-b border-white/5 backdrop-blur-md sticky top-0 z-40 select-none">
      {/* Left section: Sidebar toggle */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="h-9 w-9 text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg cursor-pointer"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono tracking-[0.2em] font-medium text-white">
            ghost AI
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-zinc-600 bg-zinc-950 px-2 py-0.5 rounded border border-white/5 uppercase">
            Alpha
          </span>
        </div>
      </div>

      {/* Center section: Minimal Status Indicator */}
      <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.01]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
          LIVE CANVAS
        </span>
      </div>

      {/* Right section: User Profile Menu */}
      <div className="flex items-center gap-4">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8 border border-white/10 hover:border-white/20 transition-all duration-300",
            },
          }}
        />
      </div>
    </header>
  );
}
