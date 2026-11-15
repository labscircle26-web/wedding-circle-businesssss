import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-gold/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-display text-burgundy font-semibold">
            Wedding Circle Business
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/explore" className="hover:text-burgundy">Explore</Link>
            <Link to="/register" className="hover:text-burgundy">Join as Professional</Link>
            <Link to="/dashboard" className="px-4 py-2 bg-burgundy text-white rounded hover:bg-burgundy/90">
              Dashboard
            </Link>
          </nav>
          <button className="md:hidden text-burgundy">Menu</button>
        </div>
      </div>
    </header>
  )
}
