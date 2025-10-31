import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function ServiceDetailPage({ service, relatedServices }) {
  if (!service) {
    return (
      <Layout title="Service Not Found | BizBit Solutions">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <a className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              View All Services
            </a>
          </Link>
        </div>
      </Layout>
    )
  }

  const formatPrice = (price, currency) => {
    if (typeof price === 'string') return price
    return `${currency} ${price.toLocaleString()}`
  }

  const whatsappMessage = `Hello Bizbit Solutions, I need a quote for ${service.title}`
  const whatsappUrl = `https://wa.me/254716865277?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <Layout 
      title={`${service.title} | BizBit Solutions`}
      description={service.summary}
    >
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link href="/"><a className="hover:text-blue-600">Home</a></Link></li>
          <li><span className="mx-2">/</span></li>
          <li><Link href="/services"><a className="hover:text-blue-600">Services</a></Link></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-900 font-medium">{service.title}</li>
        </ol>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4">
                {service.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                {service.title}
              </h1>
              <p className="text-xl opacity-90 mb-6">
                {service.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Get Started Today
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp Quote
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <div className="w-full h-48 bg-white/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-cogs text-white/60 text-6xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About This Service</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {service.description}
            </p>

            <h3 className="text-2xl font-semibold mb-4">What's Included:</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Why Choose Our Services?</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  <i className="fas fa-users text-blue-600 mr-2"></i>
                  Expert Team
                </h4>
                <p className="text-gray-700 text-sm">
                  Our certified professionals have extensive experience in delivering quality solutions.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  <i className="fas fa-map-marker-alt text-purple-600 mr-2"></i>
                  Local Understanding
                </h4>
                <p className="text-gray-700 text-sm">
                  We understand the Kenyan market and business environment.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  <i className="fas fa-chart-line text-green-600 mr-2"></i>
                  Proven Results
                </h4>
                <p className="text-gray-700 text-sm">
                  Track record of successful implementations across various industries.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">
                  <i className="fas fa-headset text-yellow-600 mr-2"></i>
                  Ongoing Support
                </h4>
                <p className="text-gray-700 text-sm">
                  Comprehensive support and maintenance to ensure continued success.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 sticky top-4">
              <h3 className="font-semibold text-lg mb-4">Service Details</h3>
              <ul className="space-y-3 text-sm text-gray-700 mb-6">
                <li className="flex justify-between">
                  <strong>Price:</strong>
                  <span className="text-blue-600 font-semibold">
                    {formatPrice(service.price, service.currency)}
                  </span>
                </li>
                <li className="flex justify-between">
                  <strong>Delivery Time:</strong>
                  <span>{service.deliveryTime}</span>
                </li>
                <li className="flex justify-between">
                  <strong>Support:</strong>
                  <span>{service.support}</span>
                </li>
                <li className="flex justify-between">
                  <strong>Warranty:</strong>
                  <span>{service.warranty}</span>
                </li>
              </ul>

              <div className="space-y-3">
                <a
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  Get Quote
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Need Custom Solution?</h3>
              <p className="text-sm mb-4 opacity-90">
                We can customize our services to match your specific requirements.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <div key={relatedService.slug} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2">{relatedService.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedService.summary}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">
                      {formatPrice(relatedService.price, relatedService.currency)}
                    </span>
                    <Link href={`/services/${relatedService.slug}`}>
                      <a className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Learn More →
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-blue-50 p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started with {service.title}?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Get a Quote
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'services.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)

    const paths = data.services.map((service) => ({
      params: { slug: service.slug }
    }))

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.error('Error generating static paths:', error)
    return {
      paths: [],
      fallback: false
    }
  }
}

export const getStaticProps = async ({ params }) => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'services.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)

    const service = data.services.find((s) => s.slug === params.slug)

    if (!service) {
      return {
        notFound: true
      }
    }

    // Get related services (same category, excluding current service)
    const relatedServices = data.services
      .filter((s) => s.category === service.category && s.slug !== service.slug)
      .slice(0, 3)

    return {
      props: {
        service,
        relatedServices
      }
    }
  } catch (error) {
    console.error('Error loading service data:', error)
    return {
      notFound: true
    }
  }
}