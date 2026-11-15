import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-display text-burgundy mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">We usually reply within 24 hours.</p>

      {sent ? (
        <div className="bg-white border border-gold/30 rounded p-8 text-center">
          <p className="font-display text-xl text-burgundy">Message sent</p>
          <p className="text-sm text-gray-500 mt-2">Thank you. We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded border border-gold/30">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full border rounded px-3 py-2 h-28" />
          </div>
          <button type="submit" className="w-full py-3 bg-burgundy text-white rounded hover:bg-burgundy/90">Send Message</button>
        </form>
      )}
    </div>
  )
}
