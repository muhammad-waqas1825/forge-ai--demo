'use client'
import { useState } from 'react'

export default function ForgeAI() {
  const [prompt, setPrompt] = useState('')
  const [logs, setLogs] = useState<string[]>([])
  const [isBuilding, setIsBuilding] = useState(false)

  const handleGenerate = () => {
    if (!prompt) return
    setIsBuilding(true)
    setLogs(['Initializing Forge AI Engine...'])
    setTimeout(() => setLogs(prev => [...prev, 'Analyzing prompt structure...']), 800)
    setTimeout(() => setLogs(prev => [...prev, 'Provisioning AWS infrastructure...']), 1600)
    setTimeout(() => setLogs(prev => [...prev, 'Deploying to global edge network...']), 2400)
    setTimeout(() => setLogs(prev => [...prev, '✅ Application live at: your-app.forgeai.app']), 3200)
    setTimeout(() => setIsBuilding(false), 3500)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '48px 24px'}}>
        
        <div style={{background: '#fbbf24', color: '#000', padding: '8px 16px', borderRadius: '6px', marginBottom: '32px', fontSize: '14px'}}>
          ⚠️ PROTOTYPE DEMO - UI/UX Vision Only. Backend development begins post-funding.
        </div>

        <header style={{textAlign: 'center', marginBottom: '64px'}}>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
            <div style={{width: '48px', height: '48px', background: 'linear-gradient(135deg, #f97316, #dc2626)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'}}>⚡</div>
            <h1 style={{fontSize: '48px', fontWeight: 'bold', margin: 0}}>Forge AI</h1>
          </div>
          <p style={{fontSize: '20px', color: '#94a3b8', margin: '8px 0'}}>Ship Apps With a Prompt</p>
          <p style={{color: '#64748b'}}>AI-Powered Infrastructure Automation</p>
        </header>

        <div style={{background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', borderRadius: '16px', padding: '32px', backdropFilter: 'blur(20px)', marginBottom: '48px'}}>
          <h2 style={{fontSize: '24px', marginBottom: '24px'}}>Create New Application</h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Build a SaaS dashboard with user authentication and Stripe payments"
            style={{width: '100%', height: '120px', background: '#0f172a', border: '1px solid #475569', borderRadius: '8px', padding: '12px', color: 'white', fontSize: '16px', marginBottom: '16px', fontFamily: 'inherit'}}
          />
          <button
            onClick={handleGenerate}
            disabled={isBuilding}
            style={{width: '100%', background: isBuilding ? '#475569' : 'linear-gradient(135deg, #f97316, #dc2626)', border: 'none', padding: '16px', borderRadius: '8px', color: 'white', fontSize: '18px', fontWeight: '600', cursor: isBuilding ? 'not-allowed' : 'pointer'}}
          >
            {isBuilding ? 'Building...' : '⚡ Generate Application'}
          </button>
          
          {logs.length > 0 && (
            <div style={{marginTop: '24px', background: '#000', borderRadius: '8px', padding: '16px', fontFamily: 'monospace', fontSize: '14px'}}>
              {logs.map((log, i) => (
                <div key={i} style={{color: '#4ade80', marginBottom: '4px'}}>{`> ${log}`}</div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 style={{fontSize: '24px', marginBottom: '24px'}}>Your Applications</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
            {[
              {name: 'saas-dashboard', url: 'saas-dashboard.forgeai.app', status: 'Live'},
              {name: 'ecommerce-store', url: 'ecommerce-store.forgeai.app', status: 'Live'},
              {name: 'ai-blog-platform', url: 'ai-blog-platform.forgeai.app', status: 'Building'},
            ].map((app) => (
              <div key={app.name} style={{background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', borderRadius: '12px', padding: '24px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
                  <h4 style={{margin: 0}}>{app.name}</h4>
                  <span style={{fontSize: '12px', padding: '4px 12px', borderRadius: '12px', background: app.status === 'Live' ? 'rgba(34,197,94,0.2)' : 'rgba(234,179,8,0.2)', color: app.status === 'Live' ? '#4ade80' : '#facc15'}}>
                    {app.status}
                  </span>
                </div>
                <p style={{color: '#64748b', fontSize: '14px', margin: '0 0 16px 0'}}>{app.url}</p>
                <div style={{display: 'flex', gap: '8px'}}>
                  <button style={{flex: 1, background: '#334155', border: 'none', padding: '8px', borderRadius: '6px', color: 'white', fontSize: '14px'}}>View</button>
                  <button style={{flex: 1, background: '#1e293b', border: '1px solid #475569', padding: '8px', borderRadius: '6px', color: 'white', fontSize: '14px'}}>Logs</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}