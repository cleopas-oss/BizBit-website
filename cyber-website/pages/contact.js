import Layout from '../components/Layout'

export default function ContactPage() {
  return (
    <Layout 
      title="Contact Us | BizBit Solutions"
      description="Get in touch with BizBit Solutions for your tech and business needs. We're here to help Kenyan SMEs succeed."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get a Quote</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mpesa-integration">M-Pesa Integration</option>
                  <option value="networking-cctv">Networking & CCTV</option>
                  <option value="accounting">Accounting & Bookkeeping</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="ai-chatbots">AI & Chatbots</option>
                  <option value="business-services">Business Services</option>
                  <option value="tax-compliance">Tax & Compliance</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-phone text-blue-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+254 716 865 277</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-envelope text-blue-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@bizbitsolutions.co.ke</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fab fa-whatsapp text-green-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/254716865277?text=Hello%20Bizbit%20Solutions%2C%20I%20need%20a%20quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}