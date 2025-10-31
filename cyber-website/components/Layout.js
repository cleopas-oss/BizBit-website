import Head from 'next/head'
import Script from 'next/script'
import ModernBackground from './ModernBackground'
import ParticlesTest from './ParticlesTest'
import AnimationDebug from './AnimationDebug'
import CriticalCSS from './CriticalCSS'
import VercelAnimationFix from './VercelAnimationFix'

export default function Layout({ children, title = "BizBit Solutions", description = "All-in-one tech and business services for Kenyan SMEs" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>

      {/* Critical CSS for immediate loading */}
      <CriticalCSS />

      <div className="antialiased text-gray-800 bg-gray-50">
        {/* Modern Professional Background Animation */}
        <ModernBackground />
        {/* Debug Info (dev only) */}
        <ParticlesTest />
        {/* Animation Debug Panel */}
        <AnimationDebug />
        {/* Vercel Deployment Fix */}
        <VercelAnimationFix />
        {/* SIDEBAR NAVIGATION */}
        <div className="sidebar" id="sidebar">
          <div className="brand">
            <img src="/assets/images/logo.svg" alt="BizBit Solutions Logo" />
            <h2>BizBit <span className="text-blue-600">Solutions</span></h2>
          </div>
          
          <ul className="nav-links">
            <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
            
            {/* Web & System Development */}
            <li>
              <button className="dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-code"></i> Web & System Development
              </button>
              <ul className="dropdown-container">
                <li><a href="/services/website-design-seo">Website Design & SEO</a></li>
                <li><a href="/services/ecommerce-pos-systems">E-commerce & POS Systems</a></li>
                <li><a href="/services/crm-erp-implementation">CRM & ERP Implementation</a></li>
                <li><a href="/services/progressive-web-apps-pwa">Progressive Web Apps (PWA)</a></li>
              </ul>
            </li>
            
            {/* AI & Chatbot Solutions */}
            <li>
              <button className="dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-robot"></i> AI & Chatbot Solutions
              </button>
              <ul className="dropdown-container">
                <li><a href="/services/customer-service-chatbots">Customer Service Chatbots</a></li>
                <li><a href="/services/whatsapp-social-media-bots">WhatsApp & Social Media Bots</a></li>
                <li><a href="/services/recommendation-engines">Recommendation Engines</a></li>
                <li><a href="/services/machine-learning-models">Machine Learning Models</a></li>
              </ul>
            </li>
            
            {/* Networking & CCTV */}
            <li>
              <button className="dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-network-wired"></i> Networking & CCTV
              </button>
              <ul className="dropdown-container">
                <li><a href="/services/network-design-installation">Network Design & Installation</a></li>
                <li><a href="/services/cctv-surveillance-systems">CCTV & Surveillance Systems</a></li>
                <li><a href="/services/wireless-wifi-solutions">Wireless & WiFi Solutions</a></li>
                <li><a href="/services/network-security-firewalls">Network Security & Firewalls</a></li>
              </ul>
            </li>
            
            {/* M-Pesa Integration */}
            <li>
              <button className="dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-mobile-alt"></i> M-Pesa Integration
              </button>
              <ul className="dropdown-container">
                <li><a href="/services/daraja-api-integration">Daraja API Integration</a></li>
                <li><a href="/services/stk-push-payment-collection">STK Push & Payment Collection</a></li>
                <li><a href="/services/b2b-b2c-payment-solutions">B2B & B2C Payment Solutions</a></li>
                <li><a href="/services/transaction-tracking-reporting">Transaction Tracking & Reporting</a></li>
              </ul>
            </li>
            
            {/* Accounting & Bookkeeping */}
            <li>
              <button className="dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-calculator"></i> Accounting & Bookkeeping
              </button>
              <ul className="dropdown-container">
                <li><a href="/services/monthly-bookkeeping-packages">Monthly Bookkeeping Packages</a></li>
                <li><a href="/services/financial-reporting-dashboards">Financial Reporting Dashboards</a></li>
                <li><a href="/services/invoice-expense-management">Invoice & Expense Management</a></li>
                <li><a href="/services/tax-compliance-automation">Tax Compliance Automation</a></li>
              </ul>
            </li>
            
            {/* Digital Marketing */}
            <li>
              <button className="dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bullhorn"></i> Digital Marketing
              </button>
              <ul className="dropdown-container">
                <li><a href="/services/search-engine-optimization">Search Engine Optimization (SEO)</a></li>
                <li><a href="/services/social-media-management">Social Media Management</a></li>
                <li><a href="/services/content-marketing-strategy">Content Marketing Strategy</a></li>
                <li><a href="/services/email-marketing-campaigns">Email Marketing Campaigns</a></li>
              </ul>
            </li>
            
            {/* Business Services */}
            <li>
              <button className="dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-briefcase"></i> Business Services
              </button>
              <ul className="dropdown-container">
                <li><a href="/services/brand-strategy-business-identity">Brand Strategy & Business Identity</a></li>
                <li><a href="/services/business-automation-operations">Business Automation & Operations</a></li>
                <li><a href="/services/outsourced-back-office-support">Outsourced Back-Office Support</a></li>
                <li><a href="/services/client-dashboard-support-services">Client Dashboard & Support Services</a></li>
              </ul>
            </li>
            
            {/* Tax & Compliance Services */}
            <li>
              <button className="dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-file-invoice-dollar"></i> Tax & Compliance Services
              </button>
              <ul className="dropdown-container">
                <li><a href="/services/tax-advisory-filing">Tax Advisory & Filing</a></li>
                <li><a href="/services/ecitizen-government-services">eCitizen & Government Services</a></li>
                <li><a href="/services/ntsa-etims-sha-compliance">NTSA, eTIMS & SHA Compliance</a></li>
                <li><a href="/services/corporate-registration-legal-services">Corporate Registration & Legal Services</a></li>
              </ul>
            </li>
            
            <li><a href="/about"><i className="fas fa-info-circle"></i> About</a></li>
            <li><a href="/contact"><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </div>

        {/* SIDEBAR OVERLAY FOR MOBILE */}
        <div className="sidebar-overlay" id="sidebar-overlay"></div>

        {/* MAIN CONTENT */}
        <div className="main-content" id="main-content">
          {/* HAMBURGER TOGGLE BUTTON */}
          <button id="toggle-btn" className="hamburger" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>

          <main>
            {children}
          </main>
        </div>

        {/* WhatsApp floating contact button */}
        <a 
          id="bizbit-wa" 
          className="bizbit-wa" 
          href="https://wa.me/254716865277?text=Hello%20Bizbit%20Solutions%2C%20I%20need%20a%20quote" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Contact Bizbit Solutions on WhatsApp"
        >
          <svg className="bizbit-wa__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path fill="currentColor" d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 .03 5.34.03 12c0 2.12.55 4.17 1.6 6.01L0 24l6.3-1.58A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.18-3.48-8.52zM12 21.5a9.44 9.44 0 01-4.85-1.35l-.35-.21-3.74.94.99-3.64-.23-.38A9.5 9.5 0 1121.5 12 9.5 9.5 0 0112 21.5z"/>
            <path fill="#fff" d="M17.33 14.02c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.94 1.18c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2 0-.38-.02-.53-.02-.15-.67-1.6-.92-2.19-.24-.58-.48-.5-.67-.51-.17 0-.38-.02-.58-.02s-.53.07-.8.38c-.27.3-1.04 1.02-1.04 2.48 0 1.45 1.06 2.85 1.2 3.05.13.2 2.07 3.18 5.02 4.46 2.95 1.29 2.95.86 3.49.81.53-.05 1.78-.72 2.03-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/>
          </svg>
        </a>
      </div>

      <Script src="/assets/js/ui.js" strategy="afterInteractive" />
    </>
  )
}