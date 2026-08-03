'use client'
import { motion } from 'framer-motion'

export default function FolderCard({ id, title, cat, status, type, desc, tech = [], image }: any) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="relative group cursor-pointer h-full"
    >
      {/* Folder Tab */}
      <div className="flex items-end">
        <div 
          className="bg-[#2a2420] border-t border-l border-r border-detective-ink/20 px-4 py-1 text-[9px] font-bold text-detective-ink"
          style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)' }}
        >
          {id}
        </div>
      </div>

      {/* Main Folder Body */}
      <div className="bg-[#241f1c] border border-detective-ink/20 p-5 shadow-2xl relative overflow-hidden h-full flex flex-col">
        
        {/* Subtle Watermark */}
        <div className="absolute -right-2 bottom-12 text-detective-ink/5 font-black text-5xl rotate-[-15deg] select-none pointer-events-none uppercase">
          {status}
        </div>

        {/* Tags */}
        <div className="flex justify-between items-center mb-5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-1 h-3 bg-red-800"></div>
            <span className="text-red-700 font-bold text-[9px] tracking-widest uppercase">{type}</span>
          </div>
          <div className="border border-green-500/30 px-2 py-0.5 text-[8px] text-green-500 uppercase bg-green-500/5 font-bold">
            {status}
          </div>
        </div>

        {/* Project Image */}
        <div className="w-full h-40 bg-black mb-5 border border-white/5 relative overflow-hidden">
            <img 
              src={image || "https://via.placeholder.com/400x225"} 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex-1 flex flex-col">
          <p className="text-[9px] text-detective-ink/40 uppercase font-bold mb-1">{cat}</p>
          <h3 className="text-lg font-black font-typewriter tracking-tight leading-tight mb-3 group-hover:text-white">
            {title}
          </h3>
          
          <p className="text-[11px] opacity-70 leading-relaxed font-mono italic mb-6 flex-1">
            "{desc}"
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tech.map((tag: string) => (
              <span key={tag} className="border border-detective-ink/10 px-1.5 py-0.5 text-[8px] opacity-40 font-bold uppercase">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-widest text-detective-ink group-hover:text-white">▶ Open Dossier</span>
            <span className="text-[8px] opacity-20 font-mono italic">REF_SEC_993</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}