import Link from 'next/link'

export default function ServiceCard({ service }) {
  const formatPrice = (price, currency) => {
    if (typeof price === 'string') return price
    return `${currency} ${price.toLocaleString()}`
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg text-gray-900 leading-tight">
          {service.title}
        </h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {service.category}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {service.summary}
      </p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-blue-600 font-bold text-lg">
          {formatPrice(service.price, service.currency)}
        </div>
        <div className="text-xs text-gray-500">
          {service.deliveryTime}
        </div>
      </div>
      
      {service.features && service.features.length > 0 && (
        <div className="mb-4">
          <ul className="text-xs text-gray-600 space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-check text-green-500 mr-2 mt-0.5 text-xs"></i>
                {feature}
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-gray-400 text-xs">
                +{service.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>
      )}
      
      <Link href={`/services/${service.slug}`}>
        <a className="block w-full bg-blue-600 text-white text-center py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm">
          Learn More
        </a>
      </Link>
    </div>
  )
}