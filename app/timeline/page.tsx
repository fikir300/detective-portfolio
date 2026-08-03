'use client'
import { motion } from 'framer-motion'

const events = [
  { 
    year: '2018', 
    title: 'First Contact', 
    note: 'Subject encountered C++. Initial exposure deemed "addictive".', 
    side: 'left',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80'
  },
  { 
    year: '2020', 
    title: 'Operation: Full Stack', 
    note: 'Mastered the React/Node ecosystem. Threat level elevated.', 
    side: 'right',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80' 
  },
  { 
    year: '2022', 
    title: 'AI Integration', 
    note: 'Subject began merging LLMs into production environments.', 
    side: 'left',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80' 
  },
  { 
    year: '2024', 
    title: 'Still At Large', 
    note: 'Subject continues to ship products. Investigation ongoing.', 
    side: 'right',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80' 
  },
]

export default function Timeline() {
  return (
    <div className="max-w-5xl mx-auto py-12 md:py-20 relative bg-black/20 rounded-xl px-4 overflow-hidden">
      
      {/* 1. RESPONSIVE RED STRING */}
      {/* Mobile: Pushed to the left (left-8) | Desktop: Centered (md:left-1/2) */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-red-800/60 top-0 z-0 shadow-[0_0_10px_rgba(153,27,27,0.5)]"></div>

      <div className="space-y-16 md:space-y-32 relative z-10">
        {events.map((ev, index) => (
          /* Mobile: standard flex-row | Desktop: alternating sides */
          <div key={index} className={`flex items-center w-full md:justify-between ${ev.side === 'right' ? 'md:flex-row-reverse' : 'flex-row'}`}>
            
            {/* 2. RESPONSIVE POLAROID CARD */}
            <motion.div 
              initial={{ opacity: 0, x: ev.side === 'left' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              /* Mobile: takes most width (w-[85%]) | Desktop: stays smaller (w-[38%]) */
              className="w-[85%] ml-12 md:ml-0 md:w-[38%] bg-[#f2e8cf] p-3 shadow-[10px_10px_30px_rgba(0,0,0,0.5)] relative border-b-4 md:border-b-8 border-black/10 group"
            >
              {/* Responsive Pin - Aligns with the string on mobile */}
              <div className="absolute -top-4 left-[-28px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-red-600 rounded-full shadow-lg border-2 border-black/20 z-20">
                <div className="w-1 h-1 bg-white/40 rounded-full ml-1 mt-1"></div>
              </div>

              {/* Image Container */}
              <div className="bg-white p-1.5 md:p-2 shadow-inner mb-3 md:mb-4 overflow-hidden aspect-video">
                <img 
                  src={ev.image} 
                  alt={ev.title} 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="px-1 pb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[9px] md:text-[10px] text-red-800 font-black tracking-widest">{ev.year}</span>
                  <span className="text-[7px] md:text-[8px] bg-black/5 px-1 uppercase font-bold text-black/40 tracking-tighter italic">Top Secret</span>
                </div>
                <h3 className="font-mono text-xs md:text-sm text-black font-black uppercase leading-tight border-b border-black/10 pb-1">{ev.title}</h3>
                <p className="font-serif text-base md:text-xl text-blue-900 mt-2 md:mt-3 leading-tight italic tracking-tight opacity-90">
                  "{ev.note}"
                </p>
              </div>

              {/* Tape detail */}
              <div className="absolute -top-3 -left-4 w-10 md:w-12 h-5 md:h-6 bg-white/20 backdrop-blur-md rotate-[-35deg] pointer-events-none"></div>
            </motion.div>

            {/* 3. CONNECTOR LINE - Hidden on mobile to save space */}
            <div className="hidden md:block w-[38%] relative">
               <div className={`absolute top-0 h-[1px] bg-red-800/30 w-full ${ev.side === 'left' ? 'left-0' : 'right-0'}`}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="mt-20 md:mt-32 text-center px-4">
        <div className="inline-block border-2 border-red-700 p-4 md:p-6 bg-black/40 backdrop-blur-sm">
           <h4 className="font-mono text-red-600 text-xs md:text-sm tracking-[0.3em] font-bold uppercase mb-2">Security Warning</h4>
           <p className="font-mono text-[8px] md:text-[10px] text-detective-ink/60 uppercase">End of documented timeline — status: <span className="text-green-500 font-bold">UNRESOLVED</span></p>
        </div>
      </div>
    </div>
  )
}