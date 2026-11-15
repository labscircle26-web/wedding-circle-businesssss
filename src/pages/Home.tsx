import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { professionals, categories } from '../data/professionals'

export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (city) params.set('city', city)
    navigate(`/explore?${params.toString()}`)
  }

  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600"
          alt="Indian wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-burgundy/60" />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
            Your Work Deserves to Be Discovered.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-ivory">
            India’s dedicated directory for wedding professionals. Create your profile, showcase your work, and grow your business.
          </p>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search service or category"
              className="px-4 py-3 rounded text-gray-900 w-full sm:w-64"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="px-4 py-3 rounded text-gray-900 w-full sm:w-48"
            />
            <button type="submit" className="px-6 py-3 bg-gold text-burgundy font-medium rounded hover:bg-gold/90">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-display text-burgundy text-center mb-10">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.slice(0, 10).map((cat) => (
            <Link
              key={cat}
              to={`/explore?category=${encodeURIComponent(cat)}`}
              className="bg-white border border-gold/40 p-4 text-center hover:border-burgundy transition rounded"
            >
              <div className="font-medium text-burgundy">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blush/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-display text-burgundy">Featured Professionals</h2>
            <Link to="/explore" className="text-burgundy text-sm underline">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {professionals.slice(0, 6).map((p) => (
              <Link key={p.id} to={`/profile/${p.id}`} className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition">
                <img src={p.coverImage} alt={p.name} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-display text-xl text-burgundy">{p.name}</h3>
                    {p.verified && <span className="text-xs bg-gold/20 text-burgundy px-2 py-0.5 rounded">Verified</span>}
                  </div>
                  <p className="text-sm text-gray-600">{p.category} • {p.city}</p>
                  <p className="mt-2 text-sm">₹{p.startingPrice.toLocaleString()} onwards</p>
                  <div className="mt-2 text-gold text-sm">★ {p.rating} ({p.reviews})</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-display text-burgundy mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl text-gold mb-3">1</div>
            <h3 className="font-display text-xl mb-2">Create Profile</h3>
            <p className="text-gray-600">Register free and set up your business page in minutes.</p>
          </div>
          <div>
            <div className="text-4xl text-gold mb-3">2</div>
            <h3 className="font-display text-xl mb-2">Showcase Work</h3>
            <p className="text-gray-600">Upload portfolio photos, videos, and list your services.</p>
          </div>
          <div>
            <div className="text-4xl text-gold mb-3">3</div>
            <h3 className="font-display text-xl mb-2">Get Discovered</h3>
            <p className="text-gray-600">Receive enquiries from couples and families across India.</p>
          </div>
        </div>
        <Link to="/register" className="inline-block mt-10 px-8 py-3 bg-burgundy text-white rounded hover:bg-burgundy/90">
          Become a Wedding Professional
        </Link>
      </section>
    </div>
  )
}
