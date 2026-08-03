'use client'
import FolderCard from '@/components/FolderCard'
import { motion } from 'framer-motion'

const projects = [
  { 
    id: 'EV-003-A', 
    title: 'OPERATION: NEURAL NEXUS', 
    cat: 'AI Platform', 
    status: 'SHIPPED', 
    type: 'TOP SECRET',
    desc: 'Full-stack AI SaaS platform enabling enterprise teams to build, deploy, and monitor LLM-powered agents.',
    tech: ['Next.js', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80' 
  },
  { 
    id: 'EV-003-B', 
    title: 'OPERATION: PHANTOM STORE', 
    cat: 'E-Commerce Platform', 
    status: 'CLOSED', 
    type: 'CONFIDENTIAL',
    desc: 'High-performance headless e-commerce engine processing $2.3M+ in annual transactions.',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80'
  },
  { 
    id: 'EV-003-C', 
    title: 'OPERATION: DARK MAP', 
    cat: 'Data Visualization', 
    status: 'ACTIVE', 
    type: 'RESTRICTED',
    desc: 'Real-time geospatial analytics dashboard monitoring 4,000+ assets across EMEA.',
    tech: ['React', 'MapboxGL', 'WebSockets', 'TimescaleDB'],
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80'
  },
]

export default function EvidenceLocker() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="border-b border-detective-ink/20 pb-4 mb-12">
        <h2 className="text-4xl font-typewriter uppercase">Evidence Locker</h2>
        <p className="text-[10px] opacity-50 uppercase tracking-widest">Classified Project Dossiers — Select a folder to open</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <FolderCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}