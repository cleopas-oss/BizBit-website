import { useEffect, useState } from 'react'

export default function ModernBackground() {
  const [isClient, setIsClient] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    // Set client-side flag
    setIsClient(true)
    
    // Check for reduced motion preference safely
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReduced(mediaQuery.matches)
      
      // Listen for changes
      const handleChange = (e) => setPrefersReduced(e.matches)
      mediaQuery.addEventListener('change', handleChange)
      
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Always render the container for SSR compatibility
  return (
    <div 
      id="modern-background"
      className={`modern-bg-container ${prefersReduced ? 'reduced-motion' : ''}`}
      style={{
        // Inline critical styles for Vercel deployment
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Animated gradient background */}
      <div className="gradient-bg" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}></div>
      
      {/* Only render complex animations on client-side */}
      {isClient && (
        <>
          {/* Floating geometric shapes */}
          <div className="shapes-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
          </div>
          
          {/* Subtle grid pattern */}
          <div className="grid-pattern"></div>
          
          {/* Tech-style animated lines */}
          <div className="tech-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </>
      )}
    </div>
  )
}