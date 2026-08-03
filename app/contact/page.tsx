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
    // Replace with your actual key
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
      <div className="border-b border-detective-ink/20 pb-4 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-typewriter uppercase tracking-tighter text-detective-ink">Secure Comm</h2>
          <p className="text-[10px] opacity-40 uppercase tracking-[0.4em]">EV-007 · Transmission Hub</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
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

              {/* Toggle visibility based on status */}
              {status === 'SUCCESS' ? (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="flex flex-col items-center py-12 space-y-6 text-center"
                >
                    <div className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 text-2xl font-bold animate-pulse">
                        ✓
                    </div>
                    <div>
                        <h3 className="text-white font-black uppercase text-xl tracking-widest">Transmission Logged</h3>
                        <p className="text-detective-ink/60 text-xs mt-2 font-mono">Message has been encrypted and routed to the agent's private server.</p>
                    </div>
                    <button 
                        onClick={handleNewTransmission}
                        className="bg-white text-black px-8 py-3 font-black uppercase tracking-widest text-[10px] hover:bg-detective-ink transition-colors"
                    >
                        ▶ New Transmission
                    </button>
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

                    <div className="space-y-3 pt-2">
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

                    <button 
                        disabled={status === 'SENDING'}
                        type="submit" 
                        className="w-full bg-detective-crimson py-4 font-black text-white uppercase tracking-[0.4em] text-xs hover:bg-red-800 transition-all shadow-xl disabled:opacity-50"
                    >
                        {status === 'SENDING' ? '▶ TRANSMITTING...' : '▶ Send Secure Transmission ◀'}
                    </button>
                </form>
              )}
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN (Social Links) stays the same */}
      </div>
    </div>
  )
}