'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CaseBoard() {
  const [glitch, setGlitch] = useState(false)

  // Subtle "Glitch" effect to make the terminal feel real
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden bg-detective-black p-4">
      
      {/* 1. THE CRT SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* 2. HUD DATA POINTS (Corners) */}
      <div className="absolute top-10 left-10 font-mono text-[9px] opacity-30 space-y-1">
        <p>LAT: 40.7128° N</p>
        <p>LONG: 74.0060° W</p>
        <p>LOC: NEW_YORK_NY</p>
      </div>
      <div className="absolute bottom-10 right-10 font-mono text-[9px] opacity-30 text-right space-y-1">
        <p>SYS_VER: 2.4.1</p>
        <p>ENC_MODE: AES_256</p>
        <p>PACKET_STATUS: SECURE</p>
      </div>

      {/* 3. MAIN INTERACTIVE CORE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-20 flex flex-col items-center"
      >
        {/* The "Scanner" or Seal */}
        <div className="mb-12 relative group">
           {/* Pulsing Outer Rings */}
           <div className="absolute inset-0 rounded-full border-2 border-detective-crimson animate-ping opacity-10"></div>
           <div className="absolute inset-[-10px] rounded-full border border-detective-ink/10 animate-reverse-spin opacity-20"></div>
           
           <div className="w-32 h-32 rounded-full border-4 border-detective-crimson/30 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-[0_0_50px_rgba(138,31,45,0.2)]">
              <div className={`w-16 h-16 rounded-full border-2 border-detective-crimson flex items-center justify-center transition-all ${glitch ? 'scale-110 opacity-50' : 'scale-100 opacity-100'}`}>
                <div className="w-4 h-4 bg-detective-crimson rounded-sm animate-pulse"></div>
              </div>
           </div>
        </div>

        {/* Title & Warning */}
        <div className="text-center space-y-2 mb-12">
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-detective-ink to-[#4a3a2b]">
              THE SUSPECT FILES
            </h1>
            <p className="font-mono text-[11px] tracking-[0.8em] text-detective-crimson font-bold uppercase animate-pulse">
               Access Restricted // Authorized Eyes Only
            </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col items-center gap-6">
            <Link href="/identity">
              <motion.button 
                whileHover={{ scale: 1.05, letterSpacing: "0.6em" }}
                whileTap={{ scale: 0.95 }}
                className="bg-detective-crimson text-white px-16 py-5 font-black uppercase tracking-[0.4em] text-xs shadow-[0_0_30px_rgba(138,31,45,0.4)] hover:shadow-[0_0_50px_rgba(138,31,45,0.6)] transition-all"
              >
                ▶ BYPASS SECURITY
              </motion.button>
            </Link>

            <div className="flex items-center gap-10">
                <div className="flex flex-col items-center">
                    <span className="text-[10px] font-mono opacity-30 uppercase mb-1">Status</span>
                    <span className="text-[10px] font-mono text-green-500 font-bold uppercase">Online</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div className="flex flex-col items-center">
                    <span className="text-[10px] font-mono opacity-30 uppercase mb-1">Database</span>
                    <span className="text-[10px] font-mono text-detective-ink font-bold uppercase">Case_001</span>
                </div>
            </div>
        </div>
      </motion.div>

      {/* 4. DECORATIVE HUD BRACKETS */}
      <div className="absolute top-20 left-20 w-32 h-32 border-t border-l border-white/5 pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 border-b border-r border-white/5 pointer-events-none"></div>

      {/* 5. TYPING LOG (Bottom Left) */}
      <div className="absolute bottom-10 left-10 font-mono text-[10px] text-detective-ink/40 hidden md:block">
        <p className="animate-pulse">{`> SEARCHING FOR THREAT_ACTOR: "CIPHER"...`}</p>
        <p>{`> MATCH FOUND: 100.00%`}</p>
        <p>{`> DATA DECRYPTION COMMENCING...`}</p>
      </div>

      <style jsx>{`
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-reverse-spin {
          animation: reverse-spin 10s linear infinite;
        }
      `}</style>
    </div>
  )
}