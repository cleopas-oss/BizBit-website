// Critical CSS for immediate animation loading on Vercel
export default function CriticalCSS() {
  return (
    <style jsx global>{`
      /* CRITICAL: Inline CSS for immediate Vercel deployment */
      
      /* Guaranteed background animation - loads before external CSS */
      html {
        background: linear-gradient(135deg,
          rgba(59, 130, 246, 0.08) 0%,
          rgba(147, 51, 234, 0.08) 25%,
          rgba(16, 185, 129, 0.08) 50%,
          rgba(245, 158, 11, 0.08) 75%,
          rgba(239, 68, 68, 0.08) 100%);
        background-size: 400% 400%;
        animation: criticalGradient 20s ease infinite;
        min-height: 100vh;
      }
      
      @keyframes criticalGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      /* Ensure modern background container is positioned correctly */
      #modern-background {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: -1 !important;
        pointer-events: none !important;
        overflow: hidden !important;
      }
      
      /* Critical WhatsApp button positioning */
      .bizbit-wa {
        position: fixed !important;
        right: 1.5rem !important;
        bottom: 1.5rem !important;
        z-index: 99999 !important;
        width: 72px !important;
        height: 72px !important;
        background: #25D366 !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18) !important;
        text-decoration: none !important;
        transition: transform 0.3s ease !important;
      }
      
      .bizbit-wa:hover {
        transform: translateY(-6px) !important;
      }
      
      /* Disable animations for reduced motion */
      @media (prefers-reduced-motion: reduce) {
        html {
          animation: none !important;
          background: rgba(59, 130, 246, 0.02) !important;
        }
        
        .bizbit-wa {
          transition: none !important;
        }
        
        .bizbit-wa:hover {
          transform: none !important;
        }
      }
    `}</style>
  )
}