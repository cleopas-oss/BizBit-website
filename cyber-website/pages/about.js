import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout 
      title="About Us | BizBit Solutions"
      description="Learn about BizBit Solutions - your trusted tech and business partner for Kenyan SMEs."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About BizBit Solutions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Your trusted partner for comprehensive tech and business solutions in Kenya
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At BizBit Solutions, we empower Kenyan SMEs with comprehensive tech and business services 
              that drive growth and success. From website development to M-Pesa integration, from 
              government compliance to digital marketing, we're your one-stop solution.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We understand the unique challenges facing Kenyan businesses and provide tailored 
              solutions that work in the local context while meeting international standards.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span>Local expertise with global standards</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span>Comprehensive service offerings</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span>Affordable monthly packages</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span>Dedicated customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}