import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-burgundy text-ivory mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-display text-xl mb-4">Wedding Circle Business</h3>
          <p className="text-ivory/80">Discover. Connect. Grow.</p>
          <p className="mt-2 text-ivory/70">India’s dedicated platform for wedding professionals.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-ivory/80">
            <li><Link to="/explore?category=Photographers" className="hover:text-gold">Photographers</Link></li>
            <li><Link to="/explore?category=Wedding%20Decorators" className="hover:text-gold">Decorators</Link></li>
            <li><Link to="/explore?category=Makeup%20Artists" className="hover:text-gold">Makeup Artists</Link></li>
            <li><Link to="/explore?category=Wedding%20Venues" className="hover:text-gold">Venues</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-ivory/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
            <li><Link to="/privacy" className="hover:text-gold">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">For Professionals</h4>
          <ul className="space-y-2 text-ivory/80">
            <li><Link to="/register" className="hover:text-gold">Register Free</Link></li>
            <li><Link to="/dashboard" className="hover:text-gold">Dashboard</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/30 text-center py-6 text-ivory/60 text-xs">
        © 2026 Wedding Circle Business. All rights reserved.
      </div>
    </footer>
  )
}
