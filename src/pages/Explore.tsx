import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { professionals, categories } from '../data/professionals'

export default function Explore() {
  const [searchParams] = useSearchParams()
  const initialCat = searchParams.get('category') || ''
  const initialQ = searchParams.get('q') || ''
  const initialCity = searchParams.get('city') || ''
  const [query, setQuery] = useState(initialQ)
  const [category, setCategory] = useState(initialCat)
  const [city, setCity] = useState(initialCity)
  const [sort, setSort] = useState('relevance')

  const filtered = useMemo(() => {
    let list = professionals.filter((p) => {
      const q = query.toLowerCase()
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.city.toLowerCase().includes(q)
      const matchesCat = !category || p.category === category
      const matchesCity = !city || p.city.toLowerCase().includes(city.toLowerCase())
      return matchesQuery && matchesCat && matchesCity
    })
    if (sort === 'newest') list = [...list].reverse()
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [query, category, city, sort])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-display text-burgundy mb-6">Explore Professionals</h1>

      <div className="bg-white p-4 rounded border border-gold/30 mb-8 grid md:grid-cols-4 gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, category, city"
          className="border rounded px-3 py-2"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded px-3 py-2">
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="border rounded px-3 py-2"
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded px-3 py-2">
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No professionals found. Try different filters.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.id} to={`/profile/${p.id}`} className="bg-white border border-gold/20 rounded overflow-hidden hover:border-burgundy transition">
              <img src={p.coverImage} alt={p.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-display text-xl text-burgundy">{p.name}</h3>
                  {p.verified && <span className="text-xs bg-gold/20 text-burgundy px-2 py-0.5 rounded">Verified</span>}
                </div>
                <p className="text-sm text-gray-600 mt-1">{p.category} • {p.city}, {p.state}</p>
                <p className="text-sm mt-2">Starting ₹{p.startingPrice.toLocaleString()}</p>
                <p className="text-gold text-sm mt-1">★ {p.rating} ({p.reviews} reviews)</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
