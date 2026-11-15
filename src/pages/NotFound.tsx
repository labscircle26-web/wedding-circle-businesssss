import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-display text-burgundy mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page not found.</p>
      <Link to="/" className="inline-block px-6 py-2 bg-burgundy text-white rounded hover:bg-burgundy/90">Go Home</Link>
    </div>
  )
}
