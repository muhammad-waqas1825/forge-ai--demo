'use client'
import { useState } from 'react'
import { Rocket, Zap, Globe, Code, Database, Github } from "lucide-react"

export default function Dashboard() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [showLogs, setShowLogs] = useState(false)
  const [prompt, setPrompt] = useState("")

  const handleGenerate = () => {
    if (!prompt) return
    setIsGenerating(true)
    setShowLogs(true)
    setTimeout(() => setIsGenerating(false), 3000)
  }

  const fakeApps = [
    { name: 'saas-dashboard', status: 'Live', url: 'saas-dashboard.forgeai.app', region: 'Global' },
    { name: 'ecommerce-store', status: 'Live', url: 'ecommerce-store.forgeai.app', region: 'Global' },
    { name: 'ai-blog-platform', status: 'Building', url: 'Deploying...', region: 'Global' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full h-48 bg-gradient-to-r from-black via-zinc-900 to-black flex items-center justify-center border-b border-zinc-800">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Zap className="h-8 w-8 text-white" />
            <h1 className="text-4xl font-bold">Forge AI</h1>
          </div>
          <p className="text-zinc-400">Ship Apps With a Prompt</p>
          <p className="text-zinc-500 text-sm mt-1">AI-Powered Infrastructure Automation</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Create New Application</h2>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-zinc-900 p-3 rounded-lg mb-4 border border-zinc-800 h-24 resize-none" 
            placeholder="Example: Build a SaaS dashboard with user authentication, Stripe payments, and PostgreSQL database..."
          />
          <button 
            onClick={handleGenerate} 
            disabled={isGenerating || !prompt}
            className="bg-white text-black hover:bg-zinc-200 disabled:opacity-50 px-4 py-2 rounded-md font-medium flex items-center gap-2"
          >
            <Rocket className="h-4 w-4" /> 
            {isGenerating ? "Generating..." : "Generate Application"}
          </button>
          
          {showLogs && (
            <div className="mt-6 bg-zinc-950 p-4 rounded-lg font-mono text-sm border border-zinc-800">
              <p className="text-green-400">{'>'} Analyzing prompt: "{prompt}"</p>
              <p className="text-green-400">{'>'} Planning architecture: Next.js 14 + Tailwind + Prisma</p>
              <p className="text-green-400">{'>'} Generating database schema...</p>
              <p className="text-green-400">{'>'} Writing API routes and authentication...</p>
              <p className="text-green-400">{'>'} Provisioning global edge network...</p>
              <p className="text-green-400">{'>'} Deployment complete: https://new-app.forgeai.app</p>
              <p className="text-yellow-400 mt-3 text-xs">
                *UI simulation demonstrating product vision. Production AI generation available post-MVP.
              </p>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5" /> Your Applications
          </h3>
          <div className="space-y-4">
            {fakeApps.map(app => (
              <div key={app.name} className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <div>
                  <p className="font-semibold">{app.name}</p>
                  <p className="text-sm text-zinc-400">{app.url}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-zinc-400">{app.region}</span>
                  <span className={`text-xs px-2 py-1 rounded ${app.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {app.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}