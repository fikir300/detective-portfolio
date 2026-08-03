'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Case Board', href: '/', id: '00' },
  { name: 'Identity', href: '/identity', id: '01' },
  { name: 'Timeline', href: '/timeline', id: '02' },
  { name: 'Evidence', href: '/evidence', id: '03' },
  { name: 'Skills', href: '/skills', id: '04' },
  { name: 'Contact', href: '/contact', id: '05' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="relative z-[100] mb-8 md:mb-12">
      {/* 1. FIXED TOP LINE: Responsive text and hiding items on small screens */}
      <div className="flex justify-between items-center mb-4 px-2">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-white font-black text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
            ◆ THE SUSPECT FILES
          </span>
          {/* Hide the line and sub-text on mobile */}
          <span className="hidden md:block h-[1px] w-12 bg-detective-ink/30"></span>
          <span className="hidden lg:block text-[9px] font-mono opacity-40 uppercase tracking-widest">
            Global Intelligence Database
          </span>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          {/* Hide detailed Auth tag on very small phones */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[8px] md:text-[9px] opacity-40 uppercase">Auth:</span>
            <span className="bg-red-900/20 text-red-500 border border-red-500/30 px-2 py-0.5 text-[8px] md:text-[9px] font-bold tracking-tighter">
               CLASSIFIED
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[8px] md:text-[9px] text-green-500 font-bold uppercase tracking-widest">Active</span>
          </div>
        </div>
      </div>

      {/* 2. FIXED TABS: Enable horizontal scroll and prevent shrinking */}
      <div className="flex items-end gap-1 border-b border-detective-ink/20 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link key={item.href} href={item.href} className="relative group flex-shrink-0">
              <motion.div
                whileHover={{ y: isActive ? 0 : -4 }}
                className={`
                  relative px-4 md:px-6 py-2 transition-all duration-300 cursor-pointer
                  ${isActive 
                    ? 'bg-detective-paper text-black shadow-[0_-5px_20px_rgba(0,0,0,0.3)]' 
                    : 'bg-detective-brown/30 text-detective-ink hover:bg-detective-brown/50'}
                `}
                style={{
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', 
                }}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute top-0 left-0 w-full h-0.5 md:h-1 bg-red-700" 
                  />
                )}

                <div className="flex flex-col items-center">
                  <span className={`text-[7px] md:text-[8px] font-mono opacity-40 mb-[-2px] ${isActive ? 'text-black' : ''}`}>
                    FILE_{item.id}
                  </span>
                  <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-black' : 'group-hover:text-white'}`}>
                    {item.name}
                  </span>
                </div>
              </motion.div>
            </Link>
          )
        })}

        {/* Hide paper clip on mobile to save space */}
        <div className="hidden md:flex ml-auto mb-2 items-center">
           <div className="w-8 h-4 border-2 border-gray-500 rounded-full rotate-45 opacity-30"></div>
        </div>
      </div>

      {/* Shadow gradient */}
      <div className="absolute left-0 w-full h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

      {/* CSS to hide the scrollbar while allowing scrolling */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  )
}