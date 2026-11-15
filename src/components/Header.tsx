import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isBusiness = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin') || location.pathname.startsWith('/register')

  const brand = isBusiness ? 'Wedding Circle Business' : 'Wedding Circle Hub'

  return (
    <header className="bg-white/90 backdrop-blur border-b border-gold/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={isBusiness ? '/dashboard' : '/'} className="flex items-center gap-2">
            <svg className="h-9 w-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="22" fill="#6E2433"/>
              <circle cx="50" cy="50" r="28" stroke="#C4A574" strokeWidth="1.5" fill="none"/>
              <circle cx="18" cy="28" r="10" fill="#F6F1E8" stroke="#C4A574" strokeWidth="1.5"/>
              <circle cx="82" cy="28" r="10" fill="#F6F1E8" stroke="#C4A574" strokeWidth="1.5"/>
              <circle cx="22" cy="78" r="9" fill="#6E2433" stroke="#C4A574" strokeWidth="1.5"/>
              <circle cx="78" cy="78" r="9" fill="#6E2433" stroke="#C4A574" strokeWidth="1.5"/>
              <line x1="50" y1="50" x2="18" y2="28" stroke="#C4A574" strokeWidth="1.5"/>
              <line x1="50" y1="50" x2="82" y2="28" stroke="#C4A574" strokeWidth="1.5"/>
              <line x1="50" y1="50" x2="22" y2="78" stroke="#C4A574" strokeWidth="1.5"/>
              <line x1="50" y1="50" x2="78" y2="78" stroke="#C4A574" strokeWidth="1.5"/>
            </svg>
            <span className="text-xl md:text-2xl font-display text-burgundy font-semibold">{brand}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {!isBusiness && (
              <>
                <Link to="/explore" className="hover:text-burgundy">Explore</Link>
                <Link to="/about" className="hover:text-burgundy">About</Link>
                <Link to="/register" className="hover:text-burgundy">Join as Professional</Link>
              </>
            )}
            {isBusiness && (
              <>
                <Link to="/dashboard" className="hover:text-burgundy">Dashboard</Link>
                <Link to="/" className="hover:text-burgundy">Back to Hub</Link>
              </>
            )}
            <Link to={isBusiness ? '/' : '/dashboard'} className="px-4 py-2 bg-burgundy text-white rounded hover:bg-burgundy/90">
              {isBusiness ? 'Exit' : 'Dashboard'}
            </Link>
          </nav>
          <button className="md:hidden text-burgundy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gold/30 px-4 py-4 space-y-3">
          {!isBusiness && (
            <>
              <Link to="/explore" className="block py-2" onClick={() => setOpen(false)}>Explore</Link>
              <Link to="/about" className="block py-2" onClick={() => setOpen(false)}>About</Link>
              <Link to="/register" className="block py-2" onClick={() => setOpen(false)}>Join as Professional</Link>
            </>
          )}
          {isBusiness && (
            <>
              <Link to="/dashboard" className="block py-2" onClick={() => setOpen(false)}>Dashboard</Link>
              <Link to="/" className="block py-2" onClick={() => setOpen(false)}>Back to Hub</Link>
            </>
          )}
          <Link to={isBusiness ? '/' : '/dashboard'} className="block py-2 font-medium text-burgundy" onClick={() => setOpen(false)}>
            {isBusiness ? 'Exit' : 'Dashboard'}
          </Link>
        </div>
      )}
    </header>
  )
}
