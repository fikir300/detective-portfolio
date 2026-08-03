'use client'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    name: "Frontend Division",
    code: "FD-44",
    skills: [
      { name: "React / Next.js", level: 98, label: "EXPERT", color: "#FFD67A" },
      { name: "TypeScript", level: 96, label: "EXPERT", color: "#FFD67A" },
      { name: "CSS / Tailwind", level: 94, label: "HIGH", color: "#22c55e" },
      { name: "Framer Motion", level: 88, label: "VERIFIED", color: "#9ca3af" },
    ]
  },
  {
    name: "Backend Operations",
    code: "BO-21",
    skills: [
      { name: "Node.js", level: 95, label: "EXPERT", color: "#FFD67A" },
      { name: "Python", level: 90, label: "HIGH", color: "#22c55e" },
      { name: "PostgreSQL", level: 92, label: "HIGH", color: "#22c55e" },
      { name: "FastAPI", level: 85, label: "VERIFIED", color: "#9ca3af" },
    ]
  },
  {
    name: "AI & Intelligence",
    code: "AI-09",
    skills: [
      { name: "OpenAI API", level: 90, label: "HIGH", color: "#22c55e" },
      { name: "LangChain", level: 88, label: "VERIFIED", color: "#9ca3af" },
      { name: "RAG Systems", level: 84, label: "VERIFIED", color: "#9ca3af" },
      { name: "LLM Systems", level: 75, label: "CONFIRMED", color: "#4b5563" },
    ]
  }
]

const SkillModule = ({ skill }: any) => {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <div className="border border-white/5 bg-black/20 p-4 flex flex-col items-center relative group hover:border-detective-ink/30 transition-colors">
      {/* Small Corner Accents */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-detective-ink/20"></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-detective-ink/20"></div>

      <div className="relative w-20 h-20 mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="1.5" fill="transparent" className="text-white/5" />
          <motion.circle
            cx="40" cy="40" r={radius} stroke={skill.color} strokeWidth="3" fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="square"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-sm font-bold" style={{ color: skill.color }}>
          {skill.level}%
        </div>
      </div>

      <div className="text-center w-full">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-white leading-tight mb-1 truncate">
          {skill.name}
        </h4>
        <div className="text-[7px] font-bold text-detective-ink/40 uppercase tracking-tighter">
          SEC_LEVEL: {skill.label}
        </div>
      </div>
    </div>
  );
};

export default function SkillsReport() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 min-h-screen">
      
      {/* Header Section */}
      <div className="border-l-4 border-detective-crimson pl-6 mb-16">
        <h2 className="text-5xl font-black font-typewriter uppercase tracking-tighter leading-none mb-2">Capability Assessment</h2>
        <p className="text-[10px] opacity-40 uppercase tracking-[0.5em] font-mono">Archive Reference: SYST_REPORT_V2.4</p>
      </div>

      {/* Structured Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <div key={i} className="flex flex-col">
            {/* Category Header */}
            <div className="bg-detective-ink/5 border-t border-l border-r border-detective-ink/20 p-3 flex justify-between items-center">
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">{group.name}</span>
              <span className="text-[9px] font-mono opacity-30 tracking-widest">{group.code}</span>
            </div>

            {/* The Skill Modules (2x2 Rigid Grid) */}
            <div className="grid grid-cols-2 border border-detective-ink/20">
              {group.skills.map((skill, si) => (
                <SkillModule key={si} skill={skill} />
              ))}
            </div>

            {/* Bottom Status Bar for each section */}
            <div className="bg-black/40 border-b border-l border-r border-detective-ink/20 p-2 text-[8px] font-mono opacity-30 uppercase text-center tracking-widest">
              Validation: Confirmed By Agent_K
            </div>
          </div>
        ))}
      </div>

      {/* Global Background Grid (Makes it look like graph paper) */}
      <style jsx global>{`
        body {
          background-image: 
            linear-gradient(to right, rgba(197, 160, 89, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(197, 160, 89, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
      
      {/* Bottom Authentication Stamp */}
      <div className="mt-20 flex justify-center">
        <div className="border-2 border-red-900/40 p-3 opacity-20 rotate-[-3deg] font-typewriter uppercase text-4xl font-black select-none pointer-events-none">
          Verified Operative
        </div>
      </div>
    </div>
  );
}