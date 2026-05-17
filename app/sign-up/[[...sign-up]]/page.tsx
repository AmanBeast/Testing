import { SignUp } from "@clerk/nextjs";
import { Brain, Users, FileText } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex bg-[#09090b] text-white select-none font-sans">
      {/* Left panel: Info section (hidden on small screens) with premium dark indigo/violet ambient backdrop glow */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-16 border-r border-white/5 bg-[#0c0c0e] relative overflow-hidden">
        {/* Colorful ambient glowing aura (Indigo/Violet emitter) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(99,102,241,0.1),rgba(139,92,246,0.06)_40%,transparent_70%)] pointer-events-none" />
        {/* Subtle grid pattern overlay for high-tech aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Top logo */}
        <div className="flex items-center gap-2 z-10">
          <div className="h-6 w-6 rounded-full bg-cyan-500 flex items-center justify-center">
            <span className="text-[10px] font-sans font-black text-black select-none leading-none">G</span>
          </div>
          <span className="text-sm font-sans font-semibold text-white tracking-wide">
            Ghost AI
          </span>
        </div>

        {/* Center content */}
        <div className="max-w-md flex flex-col gap-6 z-10">
          <h1 className="text-4xl lg:text-[44px] font-sans tracking-tight font-extrabold text-white leading-[1.1] max-w-lg">
            Design systems at the <br /> speed of thought.
          </h1>
          <p className="text-sm font-sans text-zinc-400 leading-relaxed max-w-md">
            Describe your architecture in plain English. Ghost AI maps it to a shared canvas your whole team can refine in real time.
          </p>
          
          <ul className="flex flex-col gap-6 mt-4 z-10">
            <li className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-xl mt-0.5">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-sans font-semibold text-white">AI Architecture Generation</h3>
                <p className="text-xs font-sans text-zinc-400 mt-1 leading-relaxed max-w-sm">
                  Describe your system, AI maps it to nodes and edges on a live canvas.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-xl mt-0.5">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-sans font-semibold text-white">Real-time Collaboration</h3>
                <p className="text-xs font-sans text-zinc-400 mt-1 leading-relaxed max-w-sm">
                  Live cursors, presence indicators, and shared node editing across your team.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-xl mt-0.5">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-sans font-semibold text-white">Instant Spec Generation</h3>
                <p className="text-xs font-sans text-zinc-400 mt-1 leading-relaxed max-w-sm">
                  Export a complete Markdown technical spec directly from the canvas graph.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Bottom copyright/footer + Next.js style circular logo */}
        <div className="flex items-center justify-between z-10">
          <p className="text-[11px] font-sans text-zinc-600">
            © 2026 Ghost AI. All rights reserved.
          </p>
          {/* Circular logo */}
          <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center bg-black/40 shadow-sm">
            <span className="text-[10px] font-mono font-black text-white leading-none select-none">N</span>
          </div>
        </div>
      </div>

      {/* Right panel: Centered Clerk form in pure pitch black */}
      <div className="flex-1 flex items-center justify-center p-6 bg-black relative">
        {/* Subtle grid background to match left panel but completely black base */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.001)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.001)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <SignUp
          appearance={{
            layout: {
              socialButtonsLayout: "grid",
            },
            elements: {
              cardBox: "w-full! max-w-[480px]! bg-transparent! shadow-none! z-10!",
              card: "border! border-white/5! bg-[#0f0f11]! p-10! rounded-2xl! w-full! shadow-[0_0_80px_rgba(0,0,0,0.5)]!",
              headerTitle: "font-sans! tracking-wide! text-md! text-white! font-bold! text-center!",
              headerSubtitle: "font-sans! text-xs! text-zinc-500! text-center! mt-1.5!",
              socialButtonsBlockButton: "border! border-white/5! bg-[#141416]! hover:bg-[#1b1b1e]! text-zinc-300! font-sans! text-xs py-2.5! rounded-lg! flex! items-center! justify-center! gap-2.5! transition-all! duration-300! w-full! cursor-pointer!",
              socialButtonsBlockButtonText: "font-sans! text-xs! font-semibold! text-zinc-300!",
              dividerRow: "my-6!",
              dividerLine: "bg-white/5!",
              dividerText: "font-sans! text-[9px]! text-zinc-600! uppercase! tracking-[0.2em]!",
              formFieldLabel: "font-sans! text-[10px]! text-zinc-400! uppercase! tracking-wider! mb-2! font-semibold!",
              formFieldInput: "w-full! bg-[#161619]! text-white! font-sans! text-sm! px-4! py-3! rounded-lg! border! border-white/5! focus:ring-2! focus:ring-cyan-500! focus:outline-none! transition-all! placeholder:text-zinc-500! font-medium!",
              formButtonPrimary: "w-full! bg-[#18c3d1]! hover:bg-[#20cbd7]! text-black! font-sans! text-xs! font-bold! uppercase! tracking-[0.2em]! py-3.5! rounded-lg! transition-all! duration-300! flex! items-center! justify-center! gap-1! cursor-pointer! mt-2!",
              footerText: "font-sans! text-xs! text-zinc-500! mt-4!",
              footerActionLink: "text-[#18c3d1]! hover:text-[#20cbd7]! font-sans! text-xs! font-semibold! transition-colors! duration-200!",
              footer: "mt-6! text-center!",
            },
          } as any}
        />
      </div>
    </div>
  );
}
