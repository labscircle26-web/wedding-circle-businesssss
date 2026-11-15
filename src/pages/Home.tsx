import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { professionals, categories } from '../data/professionals'

export default function Home() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('')
  const [city, setCity] = useState('')
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (category) params.set('category', category)
    if (city) params.set('city', city)
    navigate(`/explore?${params.toString()}`)
  }

  return (
    <div className="bg-ivory">
      <section className="relative min-h-[85vh] flex items-center justify-center text-center text-white overflow-visible">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=80"
          alt="Indian wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/70 via-burgundy/50 to-burgundy/80" />
        <div className="relative z-20 max-w-4xl px-6 py-20 w-full">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">India’s Wedding Professionals</p>
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 leading-tight">
            Wedding Circle Hub
          </h1>
          <p className="text-lg md:text-xl text-ivory/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover exceptional wedding professionals. Elegant profiles, verified talent, and seamless connections across India.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto relative z-40">
            <div ref={dropdownRef} className="relative flex-1 z-50">
              <button
                type="button"
                onClick={() => setOpen(o => !o)}
                className="w-full px-5 py-4 bg-white text-gray-900 text-left flex justify-between items-center rounded-sm border border-gold/30"
              >
                <span className={category ? 'font-medium' : 'text-gray-500'}>{category || 'All Categories'}</span>
                <span className="text-burgundy">▾</span>
              </button>
              {open && (
                <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gold/30 rounded-sm shadow-2xl max-h-72 overflow-y-auto z-[100]">
                  <button type="button" onClick={() => { setCategory(''); setOpen(false); }} className="w-full text-left px-5 py-3 hover:bg-ivory text-sm text-gray-900">All Categories</button>
                  {categories.map((cat) => (
                    <button key={cat} type="button" onClick={() => { setCategory(cat); setOpen(false); }} className="w-full text-left px-5 py-3 hover:bg-ivory text-sm text-gray-900 border-t border-gold/10">
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="px-5 py-4 bg-white text-gray-900 rounded-sm flex-1 sm:max-w-[180px] border border-gold/30"
            />
            <button type="submit" className="px-8 py-4 bg-gold text-burgundy font-medium rounded-sm hover:bg-gold/90">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="bg-burgundy text-ivory">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-4xl font-display text-gold">500+</div><div className="text-xs tracking-wider uppercase mt-2 text-ivory/70">Professionals</div></div>
          <div><div className="text-4xl font-display text-gold">40+</div><div className="text-xs tracking-wider uppercase mt-2 text-ivory/70">Cities</div></div>
          <div><div className="text-4xl font-display text-gold">10k+</div><div className="text-xs tracking-wider uppercase mt-2 text-ivory/70">Enquiries</div></div>
          <div><div className="text-4xl font-display text-gold">4.8</div><div className="text-xs tracking-wider uppercase mt-2 text-ivory/70">Average Rating</div></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.25em] uppercase mb-3">Explore</p>
          <h2 className="text-3xl md:text-4xl font-display text-burgundy">Browse by Category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.slice(0, 10).map((cat) => (
            <Link key={cat} to={`/explore?category=${encodeURIComponent(cat)}`} className="group bg-white border border-gold/30 p-6 text-center hover:border-burgundy transition rounded-sm">
              <div className="font-display text-burgundy">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gold text-xs tracking-[0.25em] uppercase mb-2">Featured</p>
              <h2 className="text-3xl md:text-4xl font-display text-burgundy">Distinguished Professionals</h2>
            </div>
            <Link to="/explore" className="text-burgundy text-sm border-b border-burgundy/30">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {professionals.slice(0, 6).map((p) => (
              <Link key={p.id} to={`/profile/${p.id}`} className="group bg-ivory border border-gold/20 overflow-hidden hover:border-burgundy/40">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.coverImage} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  {p.verified && <span className="absolute top-3 right-3 text-xs bg-gold text-burgundy px-2 py-0.5">Verified</span>}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-burgundy mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.category} · {p.city}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gold/20">
                    <span className="text-sm">From ₹{p.startingPrice.toLocaleString()}</span>
                    <span className="text-gold text-sm">★ {p.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-gold text-xs tracking-[0.25em] uppercase mb-3">For Professionals</p>
        <h2 className="text-3xl md:text-4xl font-display text-burgundy mb-14">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div><div className="text-gold font-display text-3xl mb-4">01</div><h3 className="font-display text-xl text-burgundy mb-2">Create Profile</h3><p className="text-gray-600 text-sm">Join Wedding Circle Business and present your craft.</p></div>
          <div><div className="text-gold font-display text-3xl mb-4">02</div><h3 className="font-display text-xl text-burgundy mb-2">Showcase Work</h3><p className="text-gray-600 text-sm">Add portfolios, packages, and services.</p></div>
          <div><div className="text-gold font-display text-3xl mb-4">03</div><h3 className="font-display text-xl text-burgundy mb-2">Get Discovered</h3><p className="text-gray-600 text-sm">Receive enquiries from couples across India.</p></div>
        </div>
        <Link to="/register" className="inline-block mt-12 px-10 py-3.5 bg-burgundy text-ivory rounded-sm hover:bg-burgundy/90 text-sm">Join as Professional</Link>
      </section>
    </div>
  )
}
