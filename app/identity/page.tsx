import React from 'react';

export default function IdentityPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      
      {/* 1. THE GRID PARENT (This is what fixes the layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN (Takes up 4 of 12 columns) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Dossier Card */}
          <div className="bg-[#f2e8cf] text-black p-6 shadow-2xl relative transform -rotate-1 border border-black/10 w-full max-w-[350px] mx-auto lg:mx-0">
            
            {/* Folder Tab */}
            <div className="absolute -top-6 left-6 bg-[#d4c8a8] px-4 py-1 text-[10px] font-bold uppercase border-t border-l border-r border-black/20">
                Dossier
            </div>

            <div className="relative mb-6 mx-auto w-full max-w-[260px]">
              <div className="border-4 border-black/5 p-1 bg-white shadow-inner aspect-[3/4] overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Fikirte Alemayehu" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                />
              </div>

              {/* Red Stamp */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-red-700 px-3 py-1 rotate-[-25deg] pointer-events-none z-10 whitespace-nowrap">
                <span className="text-red-700 font-black text-xl md:text-2xl uppercase tracking-widest select-none">
                    Classified
                </span>
              </div>
            </div>

            {/* Text info below photo */}
            <div className="space-y-4 font-mono uppercase text-[11px]">
               <div>
                  <h3 className="text-xl font-black tracking-tighter border-b border-black/10 pb-1">Fikirte Alemayehu</h3>
                  <p className="opacity-60 italic mt-1">AKA: Cipher</p>
               </div>
               <div className="space-y-2">
                  <p className="border-b border-black/5 pb-1"><span className="opacity-50">Occupation:</span> Full-Stack Engineer</p>
                  <p className="border-b border-black/5 pb-1"><span className="opacity-50">Org:</span> Independent / Freelance</p>
                  <p className="text-red-800 font-bold">Threat: Moderate — Highly Skilled</p>
               </div>
            </div>
          </div>

          {/* Current Status Box (Grouped with the left column) */}
          <div className="border border-green-500/30 bg-green-950/10 p-4">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Current Status: Active</p>
             </div>
             <p className="text-[10px] opacity-60 italic pl-5 text-detective-ink">Subject is currently accepting new assignments</p>
          </div>
        </div>

        {/* RIGHT COLUMN (Takes up 8 of 12 columns) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Agent Assessment */}
          <section>
            <h3 className="text-detective-ink font-bold mb-4 flex items-center gap-4 uppercase text-xs tracking-[0.2em]">
                <span className="h-4 w-1 bg-detective-ink"></span>
                Agent Assessment — Biographical Summary
            </h3>
            <div className="space-y-4 font-mono text-sm leading-relaxed opacity-80 italic">
                <p>
                    Subject CIPHER is a seasoned full-stack engineer with over 3 years of operational experience in deploying mission-critical applications. Known for clean architecture, pixel-perfect interfaces, and a disturbing fondness for TypeScript strict mode.
                </p>
            </div>
            <div className="mt-6 border border-detective-ink/20 bg-detective-ink/5 p-4 relative">
                <div className="absolute -top-1.5 left-4 w-3 h-3 rounded-full bg-red-700 border border-black/40 shadow-inner"></div>
                <p className="font-serif text-xl text-detective-ink/90 italic">
                    Note: Subject appears to enjoy the challenge. Consider approach carefully. — Field Agent K.
                </p>
            </div>
          </section>

          {/* Current Objectives */}
          <section>
            <h3 className="text-detective-ink font-bold mb-6 flex items-center gap-4 uppercase text-xs tracking-[0.2em]">
                <span className="h-4 w-1 bg-detective-ink"></span>
                Current Objective
            </h3>
            <div className="space-y-3">
               {[
                 { title: "Build scalable AI-integrated web platforms", status: "In Progress" },
                 { title: "Contribute to open-source investigation tools", status: "Active" },
                 { title: "Research emerging LLM application patterns", status: "Ongoing" },
                 { title: "Mentor junior agents in the craft", status: "Active" }
               ].map((obj, i) => (
                 <div key={i} className="flex items-center justify-between border-b border-detective-ink/10 pb-2">
                    <div className="flex items-center gap-3">
                        <span className="text-red-700 text-xs">▶</span>
                        <p className="font-mono text-xs uppercase opacity-80">{obj.title}</p>
                    </div>
                    <span className={`text-[8px] font-bold border px-2 py-0.5 uppercase ${obj.status === 'In Progress' ? 'border-yellow-600/50 text-yellow-500 bg-yellow-500/5' : 'border-green-500/50 text-green-500 bg-green-500/5'}`}>
                        {obj.status}
                    </span>
                 </div>
               ))}
            </div>
          </section>

          {/* Known Technologies Grid */}
          <section className="pt-4 border-t border-detective-ink/10">
             <h3 className="text-detective-ink font-bold mb-8 flex items-center gap-4 uppercase text-xs tracking-[0.2em]">
                <span className="h-4 w-1 bg-detective-ink"></span>
                Known Technologies — Confirmed Capabilities
             </h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
                {[
                    { cat: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
                    { cat: "Backend", items: ["Node.js", "Python", "Express", "FastAPI"] },
                    { cat: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
                    { cat: "AI / ML", items: ["OpenAI API", "LangChain", "HuggingFace", "RAG Systems"] },
                    { cat: "DevOps", items: ["AWS", "Docker", "GitHub Actions", "Vercel"] },
                    { cat: "Design", items: ["Figma", "Framer", "Illustrator", "UX Research"] }
                ].map((skill, i) => (
                    <div key={i}>
                        <h4 className="text-[10px] font-bold uppercase text-detective-ink/80 mb-3 border-b border-detective-ink/20 pb-1 tracking-widest">{skill.cat}</h4>
                        <ul className="space-y-1.5">
                            {skill.items.map(item => (
                                <li key={item} className="flex items-center gap-2 text-[10px] opacity-60 font-mono">
                                    <span className="text-detective-ink/50 font-bold tracking-tighter">○</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}