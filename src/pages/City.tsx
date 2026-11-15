import { useParams, Link } from 'react-router-dom'
import { professionals } from '../data/professionals'

export default function City() {
  const { city } = useParams()
  const name = city ? city.charAt(0).toUpperCase() + city.slice(1) : ''
  const list = professionals.filter(p => p.city.toLowerCase() === city?.toLowerCase())

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-display text-burgundy mb-2">Wedding Professionals in {name}</h1>
      <p className="text-gray-600 mb-8">Discover trusted wedding services in {name}.</p>

      {list.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No professionals listed in {name} yet.</p>
          <Link to="/explore" className="text-burgundy underline">Browse all</Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(p => (
            <Link key={p.id} to={`/profile/${p.id}`} className="bg-white border rounded overflow-hidden hover:border-burgundy">
              <img src={p.coverImage} alt={p.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-display text-lg text-burgundy">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.category}</p>
                <p className="text-sm mt-1">₹{p.startingPrice.toLocaleString()} onwards</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
