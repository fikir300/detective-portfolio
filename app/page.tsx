'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CaseBoard() {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-detective-black p-4">
      
      {/* 1. CRT SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* 2. HUD DATA POINTS - Fixed Overlap: Hidden on mobile (hidden md:block) */}
      <div className="hidden md:block absolute top-10 left-10 font-mono text-[9px] opacity-30 space-y-1">
        <p>LAT: 40.7128° N</p>
        <p>LONG: 74.0060° W</p>
        <p>LOC: NEW_YORK_NY</p>
      </div>
      
      {/* 3. MAIN CORE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-20 flex flex-col items-center w-full max-w-sm md:max-w-none"
      >
        {/* Scanner Circle - Reduced size for mobile */}
        <div className="mb-6 md:mb-12 relative group">
           <div className="absolute inset-0 rounded-full border-2 border-detective-crimson animate-ping opacity-10"></div>
           <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-detective-crimson/30 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-[0_0_50px_rgba(138,31,45,0.2)]">
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-detective-crimson flex items-center justify-center transition-all ${glitch ? 'scale-110 opacity-50' : 'scale-100 opacity-100'}`}>
                <div className="w-3 h-3 bg-detective-crimson rounded-sm animate-pulse"></div>
              </div>
           </div>
        </div>

        {/* Title & Warning - FIXED COLOR AND SIZE */}
        <div className="text-center space-y-4 mb-8 md:mb-12 px-2">
            <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-detective-ink drop-shadow-[0_0_15px_rgba(197,160,89,0.2)]">
              THE SUSPECT <br className="md:hidden" /> FILES
            </h1>
            <p className="font-mono text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.8em] text-detective-crimson font-bold uppercase animate-pulse">
               Access Restricted // Authorized Eyes Only
            </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col items-center gap-6 w-full">
            <Link href="/identity" className="w-full max-w-[280px] md:max-w-none">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-detective-crimson text-white px-8 md:px-16 py-4 md:py-5 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs shadow-[0_0_30px_rgba(138,31,45,0.4)]"
              >
                ▶ BYPASS SECURITY
              </motion.button>
            </Link>

            {/* Status indicators - Simplified for mobile */}
            <div className="flex items-center gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                    <span className="text-[8px] md:text-[10px] font-mono opacity-30 uppercase mb-1">Status</span>
                    <span className="text-[8px] md:text-[10px] font-mono text-green-500 font-bold uppercase">Online</span>
                </div>
                <div className="h-6 md:h-8 w-[1px] bg-white/10"></div>
                <div className="flex flex-col items-center">
                    <span className="text-[8px] md:text-[10px] font-mono opacity-30 uppercase mb-1">Database</span>
                    <span className="text-[8px] md:text-[10px] font-mono text-detective-ink font-bold uppercase">Case_001</span>
                </div>
            </div>
        </div>
      </motion.div>

      {/* 4. DECORATIVE HUD BRACKETS - Hidden on mobile to prevent overlapping */}
      <div className="hidden lg:block absolute top-20 left-20 w-32 h-32 border-t border-l border-white/5 pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-20 right-20 w-32 h-32 border-b border-r border-white/5 pointer-events-none"></div>

      {/* 5. TYPING LOG - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-10 left-10 font-mono text-[10px] text-detective-ink/40">
        <p className="animate-pulse">{`> DATA DECRYPTION COMMENCING...`}</p>
      </div>

    </div>
  )
}