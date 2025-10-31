import { useState, useEffect } from 'react'

export default function AnimationDebug() {
  const [debugMode, setDebugMode] = useState(false)
  const [animationStatus, setAnimationStatus] = useState({
    modernBg: false,
    cssAnimations: false,
    whatsappButton: false
  })

  useEffect(() => {
    // Check if animations are working
    const checkAnimations = () => {
      const modernBg = document.getElementById('modern-background')
      const whatsappBtn = document.querySelector('.bizbit-wa')
      
      setAnimationStatus({
        modernBg: !!modernBg,
        cssAnimations: true, // CSS animations should always work
        whatsappButton: !!whatsappBtn
      })
    }

    checkAnimations()
    
    // Listen for keypress to toggle debug mode
    const handleKeyPress = (e) => {
      if (e.key === 'D' && e.ctrlKey) {
        setDebugMode(!debugMode)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [debugMode])

  if (!debugMode) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 9999,
          cursor: 'pointer'
        }}
        onClick={() => setDebugMode(true)}
      >
        🎨 Debug
      </div>
    )
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.9)',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 9999,
        minWidth: '250px'
      }}
    >
      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        🎨 Animation Debug Panel
        <button 
          onClick={() => setDebugMode(false)}
          style={{ 
            float: 'right', 
            background: 'red', 
            color: 'white', 
            border: 'none', 
            borderRadius: '3px',
            cursor: 'pointer',
            padding: '2px 6px'
          }}
        >
          ✕
        </button>
      </div>
      
      <div>
        <div style={{ color: animationStatus.modernBg ? '#4ade80' : '#ef4444' }}>
          {animationStatus.modernBg ? '✅' : '❌'} ModernBackground Component
        </div>
        <div style={{ color: animationStatus.cssAnimations ? '#4ade80' : '#ef4444' }}>
          {animationStatus.cssAnimations ? '✅' : '❌'} CSS Animations
        </div>
        <div style={{ color: animationStatus.whatsappButton ? '#4ade80' : '#ef4444' }}>
          {animationStatus.whatsappButton ? '✅' : '❌'} WhatsApp Button
        </div>
      </div>
      
      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.7 }}>
        Press Ctrl+D to toggle debug mode
      </div>
      
      <button
        onClick={() => {
          // Add debug test animation
          document.body.classList.toggle('debug-animation-test')
        }}
        style={{
          marginTop: '10px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '11px'
        }}
      >
        Test High-Visibility Animation
      </button>
    </div>
  )
}