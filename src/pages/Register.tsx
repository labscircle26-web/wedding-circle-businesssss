import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/professionals'

export default function Register() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    category: '',
    city: '',
    phone: '',
    email: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-display text-burgundy text-center mb-2">Join as a Professional</h1>
      <p className="text-center text-gray-600 mb-8">Create your business profile in under 5 minutes. Free to start.</p>

      {step === 1 && (
        <form onSubmit={(e) => { e.preventDefault(); setStep(2) }} className="space-y-4 bg-white p-6 rounded border border-gold/30">
          <div>
            <label className="block text-sm font-medium mb-1">Business Name</label>
            <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select required value={form.category} onChange={(e) => setForm({...form, category: e.target.value})} className="w-full border rounded px-3 py-2">
              <option value="">Select</option>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input required value={form.city} onChange={(e) => setForm({...form, city: e.target.value})} className="w-full border rounded px-3 py-2" />
          </div>
          <button type="submit" className="w-full py-3 bg-burgundy text-white rounded">Continue</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded border border-gold/30">
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 border rounded">Back</button>
            <button type="submit" className="flex-1 py-3 bg-burgundy text-white rounded">Create Profile</button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="bg-white p-8 rounded border border-gold/30 text-center">
          <h2 className="font-display text-2xl text-burgundy mb-4">Profile Created!</h2>
          <p className="text-gray-600 mb-6">Your business profile is ready. Complete your portfolio and services from the dashboard.</p>
          <Link to="/dashboard" className="inline-block px-6 py-3 bg-burgundy text-white rounded">Go to Dashboard</Link>
        </div>
      )}
    </div>
  )
}
