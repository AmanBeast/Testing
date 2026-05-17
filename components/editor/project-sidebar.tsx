"use client";

import { X, Plus, Folder, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Background backdrop blur when open */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-20 transition-all duration-500 cursor-pointer"
          onClick={onClose}
        />
      )}

      {/* Floating sliding sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-64px)] w-80 bg-black/95 border-r border-white/5 backdrop-blur-xl z-30 flex flex-col justify-between transition-all duration-300 ease-in-out select-none shadow-[25px_0_50px_-20px_rgba(0,0,0,0.7)] ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Top/Main contents container */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <div className="h-14 flex items-center justify-between px-6 border-b border-white/5">
            <span className="text-xs font-mono tracking-[0.25em] font-medium text-white uppercase">
              Projects
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-all duration-300"
              aria-label="Close sidebar"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Project Tabs list */}
          <Tabs defaultValue="my-projects" className="flex flex-col flex-1 overflow-hidden">
            <div className="px-6 py-4">
              <TabsList className="grid grid-cols-2 bg-white/[0.02] border border-white/5 p-1 rounded-lg h-9">
                <TabsTrigger
                  value="my-projects"
                  className="text-[10px] font-mono tracking-widest cursor-pointer rounded-md text-zinc-400 data-[state=active]:bg-white/5 data-[state=active]:text-white transition-all duration-300 uppercase"
                >
                  My projects
                </TabsTrigger>
                <TabsTrigger
                  value="shared"
                  className="text-[10px] font-mono tracking-widest cursor-pointer rounded-md text-zinc-400 data-[state=active]:bg-white/5 data-[state=active]:text-white transition-all duration-300 uppercase"
                >
                  Shared
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Scrollable Tabs viewports */}
            <div className="flex-1 overflow-hidden px-6 pb-4">
              {/* My Projects Panel */}
              <TabsContent
                value="my-projects"
                className="h-full flex flex-col items-center justify-center border border-dashed border-white/5 rounded-xl bg-white/[0.005] p-6 focus-visible:outline-none"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-500 shadow-inner">
                    <Folder className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[11px] font-mono tracking-widest font-medium text-zinc-200 uppercase">
                      No Projects Yet
                    </h3>
                    <p className="text-[9px] font-mono text-zinc-500 tracking-wide leading-relaxed">
                      Create your first canvas to begin collaborating in real-time.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Shared Panel */}
              <TabsContent
                value="shared"
                className="h-full flex flex-col items-center justify-center border border-dashed border-white/5 rounded-xl bg-white/[0.005] p-6 focus-visible:outline-none"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-500 shadow-inner">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[11px] font-mono tracking-widest font-medium text-zinc-200 uppercase">
                      Shared With You
                    </h3>
                    <p className="text-[9px] font-mono text-zinc-500 tracking-wide leading-relaxed">
                      Real-time shared canvases will show up here when you are invited.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer Area with full width Action button */}
        <div className="p-6 border-t border-white/5 bg-white/[0.005]">
          <Button
            className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 font-mono text-[10px] font-bold tracking-widest py-5 rounded-xl transition-all duration-300 shadow-lg cursor-pointer uppercase"
            onClick={() => {
              // Reserved for new project dialog trigger in future units
            }}
          >
            <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
