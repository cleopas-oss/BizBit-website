import { useEffect, useState } from 'react'

export default function ParticlesTest() {
  const [status, setStatus] = useState('Loading...')
  const [details, setDetails] = useState('')

  useEffect(() => {
    const checkBackground = () => {
      const modernBg = document.querySelector('#modern-background')
      const gradientBg = document.querySelector('.gradient-bg')
      const shapes = document.querySelectorAll('.shape')
      
      if (modernBg && gradientBg && shapes.length > 0) {
        setStatus('✅ Modern Background Active')
        setDetails(`${shapes.length} animated shapes`)
        console.log('✅ Modern background animation loaded successfully')
      } else if (modernBg) {
        setStatus('🔄 Background Loading')
        setDetails('Container found, loading animations...')
      } else {
        setStatus('❌ No Background')
        setDetails('Modern background not found')
      }
    }

    // Check after a short delay to allow components to render
    const timer = setTimeout(checkBackground, 500)
    return () => clearTimeout(timer)
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="particles-debug">
      <div>{status}</div>
      <div style={{ fontSize: '10px', opacity: 0.8 }}>{details}</div>
    </div>
  )
}