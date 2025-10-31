import { useState } from 'react'
import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import ServiceCard from '../../components/ServiceCard'
import SearchInput from '../../components/SearchInput'
import fs from 'fs'
import path from 'path'

export default function ServicesPage({ services }) {
  const [filteredServices, setFilteredServices] = useState(services)
  const [currentCategory, setCurrentCategory] = useState('all')

  const handleSearchResults = (results) => {
    setFilteredServices(results)
  }

  const handleCategoryFilter = (category) => {
    setCurrentCategory(category)
  }

  // Get service count by category
  const getServiceCount = (category) => {
    if (category === 'all') return services.length
    return services.filter(service => service.category === category).length
  }

  const categories = ['all', ...new Set(services.map(service => service.category))]

  return (
    <Layout 
      title="Our Services | BizBit Solutions"
      description="Comprehensive tech and business services for Kenyan SMEs including web development, M-Pesa integration, networking, accounting, and digital marketing."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our Services
            </h1>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Comprehensive tech and business solutions designed specifically for Kenyan SMEs. 
              From websites to M-Pesa integration, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">32+ Services</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">8 Categories</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Expert Team</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Local Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Search and Filter */}
        <SearchInput 
          services={services}
          onResults={handleSearchResults}
          onCategoryFilter={handleCategoryFilter}
        />

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentCategory === 'all' ? 'All Services' : currentCategory}
            <span className="text-gray-500 font-normal ml-2">
              ({filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'})
            </span>
          </h2>
          
          {filteredServices.length !== services.length && (
            <button
              onClick={() => {
                setFilteredServices(services)
                setCurrentCategory('all')
              }}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Show all services
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="fas fa-search text-gray-300 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or browse all categories.
            </p>
            <button
              onClick={() => {
                setFilteredServices(services)
                setCurrentCategory('all')
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              View All Services
            </button>
          </div>
        )}

        {/* Category Overview */}
        {currentCategory === 'all' && filteredServices.length === services.length && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Browse by Category
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.slice(1).map((category) => (
                <div
                  key={category}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                  onClick={() => setCurrentCategory(category)}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{category}</h4>
                  <p className="text-sm text-gray-600">
                    {getServiceCount(category)} {getServiceCount(category) === 1 ? 'service' : 'services'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We create custom solutions 
            tailored to your specific business needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Get Custom Quote
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'services.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)

    return {
      props: {
        services: data.services || []
      }
    }
  } catch (error) {
    console.error('Error loading services data:', error)
    return {
      props: {
        services: []
      }
    }
  }
}