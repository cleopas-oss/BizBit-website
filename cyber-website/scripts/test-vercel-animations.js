#!/usr/bin/env node

/**
 * Vercel Animation Test Script
 * Run this after deployment to verify animations are working
 */

const https = require('https')
const fs = require('fs')

function testVercelDeployment(url) {
  console.log('🚀 Testing Vercel deployment animations...')
  console.log(`📍 URL: ${url}`)
  
  https.get(url, (res) => {
    let data = ''
    
    res.on('data', (chunk) => {
      data += chunk
    })
    
    res.on('end', () => {
      console.log('\n📊 Deployment Test Results:')
      
      // Check if CSS is included
      const hasCSSLink = data.includes('/assets/css/style.css')
      console.log(`${hasCSSLink ? '✅' : '❌'} CSS file linked: ${hasCSSLink}`)
      
      // Check if ModernBackground component is rendered
      const hasModernBg = data.includes('modern-bg-container')
      console.log(`${hasModernBg ? '✅' : '❌'} ModernBackground component: ${hasModernBg}`)
      
      // Check if critical CSS is included
      const hasCriticalCSS = data.includes('criticalGradient')
      console.log(`${hasCriticalCSS ? '✅' : '❌'} Critical CSS included: ${hasCriticalCSS}`)
      
      // Check if WhatsApp button is present
      const hasWhatsApp = data.includes('bizbit-wa')
      console.log(`${hasWhatsApp ? '✅' : '❌'} WhatsApp button: ${hasWhatsApp}`)
      
      // Check if animation keyframes are present
      const hasKeyframes = data.includes('simpleGradient') || data.includes('criticalGradient')
      console.log(`${hasKeyframes ? '✅' : '❌'} Animation keyframes: ${hasKeyframes}`)
      
      console.log('\n🔧 Recommendations:')
      if (!hasCSSLink) {
        console.log('- Check CSS file path in Layout.js')
      }
      if (!hasModernBg) {
        console.log('- Verify ModernBackground component is imported and used')
      }
      if (!hasCriticalCSS) {
        console.log('- Ensure CriticalCSS component is included')
      }
      if (!hasKeyframes) {
        console.log('- Check if CSS animations are being stripped during build')
      }
      
      console.log('\n📝 Next Steps:')
      console.log('1. Open browser dev tools on the deployed site')
      console.log('2. Check Console for any CSS loading errors')
      console.log('3. Inspect Elements to verify animation classes are applied')
      console.log('4. Test on different devices/browsers')
    })
  }).on('error', (err) => {
    console.error('❌ Error testing deployment:', err.message)
  })
}

// Get URL from command line argument
const url = process.argv[2]
if (!url) {
  console.log('Usage: node scripts/test-vercel-animations.js <vercel-url>')
  console.log('Example: node scripts/test-vercel-animations.js https://your-app.vercel.app')
  process.exit(1)
}

testVercelDeployment(url)