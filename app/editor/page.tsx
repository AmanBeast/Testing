import EditorLayout from "@/components/editor/editor-layout";

export default function EditorPage() {
  return (
    <EditorLayout>
      {/* Sleek, premium centered system design canvas placeholder */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-6 text-center">
        {/* Ambient background glow inside the layout workspace */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_65%)] pointer-events-none" />

        {/* Branding box */}
        <div className="relative flex flex-col items-center justify-center px-12 py-8 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-[0_0_80px_-10px_rgba(255,255,255,0.03)] transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02] z-10">
          <h1 className="text-2xl md:text-3xl font-mono tracking-[0.35em] text-center bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent animate-pulse uppercase">
            ghost AI
          </h1>
          <p className="mt-3 text-[10px] font-mono tracking-[0.15em] text-zinc-500 uppercase">
            Collaborative System Design Canvas
          </p>
        </div>
      </div>
    </EditorLayout>
  );
}
