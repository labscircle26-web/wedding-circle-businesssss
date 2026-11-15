import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-display text-burgundy mb-4">Pricing</h1>
      <p className="text-gray-600 mb-10">Simple and transparent. Full pricing details coming soon.</p>

      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="bg-white border border-gold/30 rounded p-8">
          <h2 className="font-display text-2xl text-burgundy mb-2">Free</h2>
          <p className="text-4xl font-display text-burgundy my-4">₹0</p>
          <ul className="text-sm text-gray-600 space-y-2 text-left mb-6">
            <li>• Basic profile</li>
            <li>• Appear in search</li>
            <li>• Receive enquiries</li>
          </ul>
          <Link to="/register" className="block py-2 border border-burgundy text-burgundy rounded hover:bg-burgundy hover:text-white">Get Started</Link>
        </div>
        <div className="bg-burgundy text-ivory rounded p-8">
          <h2 className="font-display text-2xl mb-2">Pro</h2>
          <p className="text-4xl font-display my-4">Coming Soon</p>
          <ul className="text-sm text-ivory/80 space-y-2 text-left mb-6">
            <li>• Featured placement</li>
            <li>• Verified badge</li>
            <li>• Priority support</li>
          </ul>
          <button disabled className="w-full py-2 bg-gold text-burgundy rounded opacity-70 cursor-not-allowed">Notify Me</button>
        </div>
      </div>
    </div>
  )
}
