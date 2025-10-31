import Layout from '../components/Layout'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'

export default function HomePage({ featuredServices }) {
  return (
    <Layout 
      title="BizBit Solutions | Monthly Tech & Business Services for Kenyan SMEs"
      description="BizBit Solutions offers all-in-one monthly tech and business services for Kenyan SMEs: websites, M-Pesa integration, cyber services, accounting, marketing, and more."
    >
      {/* Hero Section with TSParticles Background */}
      <section className="hero relative h-[560px] md:h-[640px]">
        {/* overlay content */}
        <div className="overlay relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="w-full grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/assets/images/logo.svg" alt="BizBit Solutions logo" className="h-10 mb-4" />
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                All-in-One Tech & Cyber Services for Kenyan SMEs
              </h1>
              <p className="text-xl text-white/90 mb-6">
                BizBit Solutions is your one-stop monthly tech partner for websites, M-Pesa, eCitizen, 
                accounting, marketing & more. Trusted by SMEs across Nairobi, Mombasa, Nakuru, and Kisumu.
              </p>
              <div className="flex gap-3">
                <Link href="/services">
                  <a className="cta-btn inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow">
                    Explore Services
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold">
                    Get a Quote
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <picture className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
                <source srcSet="/assets/images/hero-mobile.jpg" media="(max-width: 767px)" />
                <source srcSet="/assets/images/hero-desktop.jpg" media="(min-width: 768px)" />
                <img 
                  src="/assets/images/hero-desktop.jpg" 
                  alt="Kenyan business team using tech tools and digital systems powered by Bizbit Solutions" 
                  className="w-full rounded-lg object-cover" 
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Tech & Cyber Services in Kenya</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Web Development */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Website & System Development (M-Pesa Integrated)</h3>
            <p className="text-sm text-gray-600">
              Custom websites, e-commerce, POS, CRM, ERP, and seamless M-Pesa payment integration for Kenyan businesses.
            </p>
          </article>

          {/* Cyber Services */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Cyber Services: eCitizen, KRA, NSSF, NHIF, eTIMS, SHA</h3>
            <p className="text-sm text-gray-600">
              Fast, secure access to eCitizen, KRA, NSSF, NHIF, eTIMS, SHA, HELB, NTSA, and all government portals for filing, registration, and compliance.
            </p>
          </article>

          {/* Networking & CCTV */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Networking, CCTV & IT Consultancy</h3>
            <p className="text-sm text-gray-600">
              Structured cabling, wireless networks, CCTV installation, and expert IT consultancy for offices, shops, and SMEs.
            </p>
          </article>

          {/* M-Pesa & Payment Integrations */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">M-Pesa & Payment Integrations</h3>
            <p className="text-sm text-gray-600">
              Integrate M-Pesa APIs, online checkouts, business Tills, and mobile payments into your websites and systems for seamless transactions.
            </p>
          </article>

          {/* AI & Automation */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">AI Chatbots & Automation (Advanced)</h3>
            <p className="text-sm text-gray-600">
              Optional advanced service: AI chatbots, workflow automation, and analytics to make your business smarter and more efficient.
            </p>
          </article>

          {/* Accounting & Bookkeeping */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Accounting, Bookkeeping & Tax Filing</h3>
            <p className="text-sm text-gray-600">
              Bookkeeping, payroll, invoicing, tax filing, and compliance solutions for SMEs and startups in Kenya.
            </p>
          </article>

          {/* Brand & Digital Marketing */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Business Branding & Online Marketing</h3>
            <p className="text-sm text-gray-600">
              Social media marketing, SEO, graphic design, and branding to grow your business across Kenya.
            </p>
          </article>

          {/* Data Services */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Data Entry, Collection & Analytics</h3>
            <p className="text-sm text-gray-600">
              Professional data entry, collection, and analytics services for business intelligence and growth.
            </p>
          </article>
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link href="/services">
            <a className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              View All Services
            </a>
          </Link>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Service Packages for Kenyan SMEs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Free Consultancy */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">Free Consultancy</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Tech & business advice
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> No commitment required
                </li>
              </ul>
              <div className="text-blue-600 font-bold text-xl mb-4">Ksh 0</div>
            </div>
            <button className="cta-btn w-full" aria-label="Get Started with Free Consultancy">
              Get Started
            </button>
          </article>

          {/* Starter */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">Starter</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Website & System Setup (M-Pesa)
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Social Media Management
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Basic support
                </li>
              </ul>
              <div className="text-blue-600 font-bold text-xl mb-4">Ksh 4,500/mo</div>
            </div>
            <button className="cta-btn w-full" aria-label="Get Started with Starter Package">
              Get Started
            </button>
          </article>

          {/* Pro */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">Pro</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Advanced website & M-Pesa
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Bookkeeping & Monthly Reports
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Branding & Analytics
                </li>
              </ul>
              <div className="text-blue-600 font-bold text-xl mb-4">Ksh 9,500/mo</div>
            </div>
            <button className="cta-btn w-full" aria-label="Get Started with Pro Package">
              Get Started
            </button>
          </article>

          {/* Enterprise */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> All tech, cyber, legal, and marketing
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Government Compliance (eTIMS, eCitizen, SHA)
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Data Analytics Dashboard
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> AI Chatbots & Automation Tools
                </li>
              </ul>
              <div className="text-blue-600 font-bold text-xl mb-4">Ksh 19,500/mo</div>
            </div>
            <button className="cta-btn w-full" aria-label="Get Started with Enterprise Package">
              Get Started
            </button>
          </article>
        </div>
      </section>

      {/* Particles now handled globally via TSParticles in _app.js */}
    </Layout>
  )
}

export const getStaticProps = async () => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'services.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)

    // Get featured services (first 6 services)
    const featuredServices = data.services.slice(0, 6)

    return {
      props: {
        featuredServices
      }
    }
  } catch (error) {
    console.error('Error loading services data:', error)
    return {
      props: {
        featuredServices: []
      }
    }
  }
}