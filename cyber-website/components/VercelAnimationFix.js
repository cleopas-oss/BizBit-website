import { useEffect, useState } from 'react'

export default function VercelAnimationFix() {
  const [deploymentInfo, setDeploymentInfo] = useState({
    isVercel: false,
    animationsWorking: false,
    cssLoaded: false
  })

  useEffect(() => {
    // Check if we're on Vercel
    const isVercel = process.env.NODE_ENV === 'production' || 
                     typeof window !== 'undefined' && 
                     (window.location.hostname.includes('vercel.app') || 
                      window.location.hostname.includes('vercel.com'))

    // Check if CSS animations are working
    const testElement = document.createElement('div')
    testElement.style.animation = 'simpleGradient 1s ease infinite'
    document.body.appendChild(testElement)
    
    const animationsWorking = window.getComputedStyle(testElement).animationName !== 'none'
    document.body.removeChild(testElement)

    // Check if our CSS file is loaded
    const cssLoaded = Array.from(document.styleSheets).some(sheet => {
      try {
        return sheet.href && sheet.href.includes('style.css')
      } catch (e) {
        return false
      }
    })

    setDeploymentInfo({
      isVercel,
      animationsWorking,
      cssLoaded
    })

    // Force animation fallback if needed
    if (isVercel && !animationsWorking) {
      console.log('🔧 Vercel deployment detected - applying animation fixes')
      
      // Add fallback animation styles directly to document
      const fallbackStyle = document.createElement('style')
      fallbackStyle.textContent = `
        body::before {
          content: '' !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: -10 !important;
          pointer-events: none !important;
          background: linear-gradient(135deg,
            rgba(59, 130, 246, 0.2) 0%,
            rgba(147, 51, 234, 0.2) 25%,
            rgba(16, 185, 129, 0.2) 50%,
            rgba(245, 158, 11, 0.2) 75%,
            rgba(239, 68, 68, 0.2) 100%) !important;
          background-size: 400% 400% !important;
          animation: vercelFallback 15s ease infinite !important;
        }
        
        @keyframes vercelFallback {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .bizbit-wa {
          animation: vercelFloat 3s ease-in-out infinite !important;
        }
        
        @keyframes vercelFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `
      document.head.appendChild(fallbackStyle)
    }
  }, [])

  // Only show in development or if there are issues
  if (process.env.NODE_ENV === 'production' && deploymentInfo.animationsWorking) {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      left: '10px',
      background: deploymentInfo.isVercel ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 100, 200, 0.9)',
      color: 'white',
      padding: '8px 12px',
      borderRadius: '6px',
      fontSize: '11px',
      fontFamily: 'monospace',
      zIndex: 9998,
      maxWidth: '200px'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        {deploymentInfo.isVercel ? '🚀 Vercel' : '🔧 Dev'} Status
      </div>
      <div style={{ fontSize: '10px' }}>
        <div style={{ color: deploymentInfo.cssLoaded ? '#4ade80' : '#ef4444' }}>
          CSS: {deploymentInfo.cssLoaded ? 'Loaded' : 'Missing'}
        </div>
        <div style={{ color: deploymentInfo.animationsWorking ? '#4ade80' : '#ef4444' }}>
          Animations: {deploymentInfo.animationsWorking ? 'Working' : 'Fixed'}
        </div>
      </div>
    </div>
  )
}