import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'

export default function SearchInput({ services, onResults, onCategoryFilter }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [fuse, setFuse] = useState(null)

  // Get unique categories
  const categories = ['all', ...new Set(services.map(service => service.category))]

  // Initialize Fuse.js
  useEffect(() => {
    const fuseOptions = {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'summary', weight: 0.3 },
        { name: 'category', weight: 0.2 },
        { name: 'features', weight: 0.1 }
      ],
      threshold: 0.3,
      includeScore: true
    }
    
    setFuse(new Fuse(services, fuseOptions))
  }, [services])

  // Handle search and filtering
  useEffect(() => {
    let filteredServices = services

    // Apply category filter first
    if (selectedCategory !== 'all') {
      filteredServices = services.filter(service => service.category === selectedCategory)
    }

    // Apply search filter
    if (searchTerm.trim() && fuse) {
      const searchResults = fuse.search(searchTerm)
      const searchedServices = searchResults.map(result => result.item)
      
      // If category is selected, intersect the results
      if (selectedCategory !== 'all') {
        filteredServices = searchedServices.filter(service => 
          filteredServices.some(filtered => filtered.slug === service.slug)
        )
      } else {
        filteredServices = searchedServices
      }
    }

    onResults(filteredServices)
  }, [searchTerm, selectedCategory, services, fuse, onResults])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    if (onCategoryFilter) {
      onCategoryFilter(e.target.value)
    }
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSelectedCategory('all')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* Category Filter */}
        <div className="md:w-64">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {categories.slice(1).map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Button */}
        {(searchTerm || selectedCategory !== 'all') && (
          <button
            onClick={clearSearch}
            className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
          >
            <i className="fas fa-times"></i>
            Clear
          </button>
        )}
      </div>

      {/* Search Stats */}
      <div className="mt-4 text-sm text-gray-600">
        {searchTerm && (
          <span>
            Searching for "{searchTerm}"
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </span>
        )}
        {!searchTerm && selectedCategory !== 'all' && (
          <span>Showing services in {selectedCategory}</span>
        )}
      </div>
    </div>
  )
}