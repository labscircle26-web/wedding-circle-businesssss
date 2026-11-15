export default function Footer() {
  return (
    <footer className="bg-burgundy text-ivory mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-display text-xl mb-4">Wedding Circle Business</h3>
          <p className="text-ivory/80">Discover. Connect. Grow.</p>
          <p className="mt-2 text-ivory/70">India’s dedicated platform for wedding professionals.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-ivory/80">
            <li>Photographers</li>
            <li>Decorators</li>
            <li>Makeup Artists</li>
            <li>Venues</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-ivory/80">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">For Professionals</h4>
          <ul className="space-y-2 text-ivory/80">
            <li>Register Free</li>
            <li>Pricing (Coming Soon)</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/30 text-center py-6 text-ivory/60 text-xs">
        © 2026 Wedding Circle Business. All rights reserved.
      </div>
    </footer>
  )
}
