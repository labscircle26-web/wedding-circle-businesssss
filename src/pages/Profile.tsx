import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { professionals } from '../data/professionals'

export default function Profile() {
  const { id } = useParams()
  const pro = professionals.find((p) => p.id === id)
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  if (!pro) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p>Profile not found.</p>
        <Link to="/explore" className="text-burgundy underline mt-4 inline-block">Back to Explore</Link>
      </div>
    )
  }

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setShowEnquiry(false)
      setSent(false)
      setForm({ name: '', phone: '', message: '' })
    }, 2000)
  }

  return (
    <div>
      <div className="relative h-64 md:h-96">
        <img src={pro.coverImage} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-16 relative">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img src={pro.logo} alt="Logo" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow" />
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-display text-burgundy">{pro.name}</h1>
                {pro.verified && <span className="text-xs bg-gold text-burgundy px-2 py-1 rounded">Verified</span>}
              </div>
              <p className="text-gray-600 mt-1">{pro.category} • {pro.city}, {pro.state}</p>
              <p className="text-gold mt-1">★ {pro.rating} • {pro.reviews} reviews • {pro.experience} experience</p>
              <p className="mt-4 text-gray-700">{pro.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-display text-burgundy">₹{pro.startingPrice.toLocaleString()}</div>
              <div className="text-sm text-gray-500">starting from</div>
              <button
                onClick={() => setShowEnquiry(true)}
                className="mt-3 px-6 py-2 bg-burgundy text-white rounded hover:bg-burgundy/90"
              >
                Send Enquiry
              </button>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="font-display text-xl text-burgundy mb-3">Services</h2>
            <div className="flex flex-wrap gap-2">
              {pro.services.map((s) => (
                <span key={s} className="px-3 py-1 bg-blush text-burgundy text-sm rounded">{s}</span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl text-burgundy mb-3">Portfolio</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded overflow-hidden">
                  <img src={pro.coverImage} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">Portfolio gallery placeholder — real uploads coming soon.</p>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl text-burgundy mb-3">Reviews</h2>
            <p className="text-gray-500 text-sm">Verified customer reviews will appear here. No fabricated testimonials.</p>
          </div>
        </div>
      </div>

      {showEnquiry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowEnquiry(false)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            {sent ? (
              <div className="text-center py-8">
                <p className="text-burgundy font-display text-xl">Enquiry sent!</p>
                <p className="text-sm text-gray-500 mt-2">The professional will contact you soon.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl text-burgundy mb-4">Send Enquiry to {pro.name}</h3>
                <form onSubmit={handleEnquiry} className="space-y-3">
                  <input
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                  <input
                    required
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                  <textarea
                    placeholder="Message (optional)"
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full border rounded px-3 py-2 h-20"
                  />
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setShowEnquiry(false)} className="flex-1 border py-2 rounded">Cancel</button>
                    <button type="submit" className="flex-1 bg-burgundy text-white py-2 rounded">Send</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
