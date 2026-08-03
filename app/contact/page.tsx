'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [priority, setPriority] = useState('ROUTINE')
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE')

  useEffect(() => {
    resetTerminal();
  }, [])

  function resetTerminal() {
    setTerminalLines(['> INITIALIZING SECURE CHANNEL... OK', '> ENCRYPTION ENABLED: AES-256-GCM', '> AWAITING TRANSMISSION...'])
  }

  function handleNewTransmission() {
    setStatus('IDLE');
    resetTerminal();
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    setStatus('SENDING');
    setTerminalLines(prev => [...prev, '> UPLOADING DATA TO SECURE SERVER...']);

    const formData = new FormData(event.target);
    // GET YOUR KEY FROM https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 
    formData.append("priority", priority);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
    });
    
    const result = await response.json();
    if (result.success) {
        setStatus('SUCCESS');
        setTerminalLines(prev => [...prev, '> TRANSMISSION SUCCESSFUL.', '> CHANNEL ENCRYPTED & CLOSED.']);
    } else {
        setStatus('ERROR');
        setTerminalLines(prev => [...prev, '> ERROR: UPLINK FAILED.']);
    }
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 min-h-screen">
      {/* Page Header */}
      <div className="border-b border-detective-ink/20 pb-4 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-typewriter uppercase tracking-tighter text-detective-ink">Secure Comm</h2>
          <p className="text-[10px] opacity-40 uppercase tracking-[0.4em]">EV-007 · Transmission Hub</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: THE TERMINAL FORM */}
        <div className="lg:col-span-7">
          <div className="bg-[#111] border border-detective-crimson/30 shadow-2xl relative overflow-hidden">
            <div className="bg-white/5 border-b border-white/10 p-3 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-900 opacity-50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-900 opacity-50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-900 opacity-50"></div>
              </div>
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">SECURE_TERMINAL_V2.4</span>
            </div>

            <div className="p-8 space-y-8">
              <div className="font-mono text-[11px] space-y-1 min-h-[80px] border-b border-white/5 pb-4 mb-4">
                {terminalLines.map((line, i) => (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={i} 
                    className={line.includes('SUCCESS') ? 'text-green-500 font-bold' : 'text-detective-ink'}>
                    {line}
                  </motion.p>
                ))}
              </div>

              {status === 'SUCCESS' ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center py-12 space-y-6 text-center">
                    <div className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 text-2xl font-bold animate-pulse">✓</div>
                    <h3 className="text-white font-black uppercase text-xl tracking-widest">Transmission Logged</h3>
                    <button onClick={handleNewTransmission} className="bg-white text-black px-8 py-3 font-black uppercase tracking-widest text-[10px] hover:bg-detective-ink transition-colors">▶ New Transmission</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase font-black text-detective-ink tracking-widest block">Operative Name *</label>
                            <input name="name" required type="text" className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white focus:border-detective-crimson outline-none font-mono" placeholder="NAME_REQUIRED" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase font-black text-detective-ink tracking-widest block">Organization</label>
                            <input name="organization" type="text" className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white focus:border-detective-crimson outline-none font-mono" placeholder="AGENCY_REF" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase font-black text-detective-ink tracking-widest block">Priority Level</label>
                        <div className="grid grid-cols-4 gap-2">
                            {['ROUTINE', 'PRIORITY', 'URGENT', 'CRITICAL'].map((level) => (
                                <button key={level} type="button" onClick={() => setPriority(level)} className={`py-3 text-[9px] font-black border transition-all ${priority === level ? 'bg-detective-crimson border-detective-crimson text-white shadow-[0_0_15px_rgba(138,31,45,0.3)]' : 'border-white/10 text-white/30'}`}>
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase font-black text-detective-ink tracking-widest block">Message Content *</label>
                        <textarea name="message" required rows={4} className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white focus:border-detective-crimson outline-none font-mono" placeholder="ENTER_TRANSMISSION..."></textarea>
                    </div>
                    <button disabled={status === 'SENDING'} type="submit" className="w-full bg-detective-crimson py-4 font-black text-white uppercase tracking-[0.4em] text-xs hover:bg-red-800 transition-all shadow-xl disabled:opacity-50">
                        {status === 'SENDING' ? '▶ TRANSMITTING...' : '▶ Send Secure Transmission ◀'}
                    </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CHANNELS & STATUS */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Social Links Block */}
          <div className="border border-detective-ink/10 bg-[#1a1614] p-8 shadow-xl">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
               <span className="w-1 h-4 bg-detective-ink"></span>
               Direct Channels
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Encrypted Email', val: 'fikiralex644@gmail.com', icon: '◆' },
                { label: 'Source Repository', val: 'github.com/fikir300', icon: '◇' },
                { label: 'Professional Network', val: 'linkedin.com/in/fikirte-alemayehu', icon: '□' },
                { label: 'Field Reports', val: '@fikir_a', icon: '○' },
              ].map((channel, i) => (
                <div key={i} className="group cursor-pointer flex items-center justify-between border-b border-white/5 pb-4 hover:border-detective-ink/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-detective-ink text-sm group-hover:scale-125 transition-transform">{channel.icon}</span>
                    <div>
                      <p className="text-[9px] uppercase opacity-40 font-bold tracking-widest">{channel.label}</p>
                      <p className="text-sm font-mono text-white/80">{channel.val}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download CV Block */}
          <div className="border border-detective-ink/10 bg-black/40 p-8 flex justify-between items-center group cursor-pointer hover:bg-detective-ink/5 transition-colors">
            <a href="/cv.pdf" target="_blank" className="flex-1">
                <p className="text-[9px] opacity-40 uppercase font-bold mb-1 tracking-tighter">Declassified Document</p>
                <h4 className="text-lg font-black font-typewriter uppercase tracking-tighter">Download Full Dossier</h4>
                <p className="text-[10px] font-mono opacity-30 mt-1">CV_FIKIRTE_ALEMAYEHU.pdf — 2.4MB</p>
            </a>
            <div className="w-12 h-12 border border-detective-ink/30 rounded-full flex items-center justify-center group-hover:border-detective-ink group-hover:bg-detective-ink group-hover:text-black transition-all">
               <span className="text-xl">↓</span>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="bg-green-950/10 border border-green-500/20 p-6 flex gap-5 items-center">
             <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-20"></div>
             </div>
             <div>
                <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">Operative Available</p>
                <p className="text-[10px] opacity-40 leading-tight mt-1">Currently accepting new missions. Typical response within 24 hours.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}