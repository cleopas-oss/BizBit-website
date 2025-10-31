import { useCallback, useEffect, useState } from 'react'

export default function ParticlesBackground() {
  const [isClient, setIsClient] = useState(false)
  const [Particles, setParticles] = useState(null)
  const [loadSlim, setLoadSlim] = useState(null)

  // Dynamic import to avoid SSR issues
  useEffect(() => {
    const loadParticles = async () => {
      try {
        const [particlesModule, slimModule] = await Promise.all([
          import('@tsparticles/react'),
          import('@tsparticles/slim')
        ])
        
        setParticles(() => particlesModule.default)
        setLoadSlim(() => slimModule.loadSlim)
        setIsClient(true)
        
        console.log('✅ Particles modules loaded successfully')
      } catch (error) {
        console.error('❌ Failed to load particles modules:', error)
      }
    }

    loadParticles()
  }, [])

  // Initialize particles engine
  const particlesInit = useCallback(async (engine) => {
    if (loadSlim) {
      try {
        await loadSlim(engine)
        console.log('✅ Particles engine initialized')
      } catch (error) {
        console.error('❌ Failed to initialize particles engine:', error)
      }
    }
  }, [loadSlim])

  // Particles loaded callback
  const particlesLoaded = useCallback(async () => {
    console.log('✅ Particles loaded and ready')
  }, [])

  // Don't render until client-side and modules are loaded
  if (!isClient || !Particles || !loadSlim) {
    return (
      <div 
        id="particles-fallback"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.1,
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
    )
  }

  // Check for reduced motion preference
  const prefersReduced = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Don't render particles if user prefers reduced motion
  if (prefersReduced) {
    return null
  }

  // Check if mobile device
  const isMobile = typeof window !== 'undefined' && (
    /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) || 
    window.innerWidth < 768
  )

  // Particles configuration
  const particlesConfig = {
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: !isMobile,
          mode: "grab"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    particles: {
      color: {
        value: "#00aaff"
      },
      links: {
        color: "#00aaff",
        distance: isMobile ? 100 : 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: {
        enable: false
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out"
        },
        random: false,
        speed: isMobile ? 0.8 : 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: isMobile ? 15 : 25
      },
      opacity: {
        value: 0.6
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}