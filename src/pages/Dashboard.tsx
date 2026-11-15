import { useState } from 'react'
import { Link } from 'react-router-dom'

const tabs = ['Overview', 'My Profile', 'Portfolio', 'Services', 'Enquiries', 'Reviews', 'Analytics', 'Subscription', 'Settings']

export default function Dashboard() {
  const [active, setActive] = useState('Overview')

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-display text-burgundy">Business Dashboard</h1>
        <Link to="/profile/1" className="text-sm text-burgundy underline">Preview Public Profile</Link>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-2 mb-6 border-b scrollbar-hide">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-3 md:px-4 py-2 text-sm whitespace-nowrap border-b-2 ${active === t ? 'border-burgundy text-burgundy font-medium' : 'border-transparent text-gray-600'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {active === 'Overview' && (
        <div>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-white p-5 rounded border border-gold/30">
              <div className="text-sm text-gray-500">Profile Views</div>
              <div className="text-3xl font-display text-burgundy mt-1">1,248</div>
            </div>
            <div className="bg-white p-5 rounded border border-gold/30">
              <div className="text-sm text-gray-500">Enquiries</div>
              <div className="text-3xl font-display text-burgundy mt-1">37</div>
            </div>
            <div className="bg-white p-5 rounded border border-gold/30">
              <div className="text-sm text-gray-500">Rating</div>
              <div className="text-3xl font-display text-burgundy mt-1">4.8</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded border border-gold/30">
            <h2 className="font-display text-xl text-burgundy mb-4">Recent Enquiries</h2>
            <div className="space-y-3 text-sm">
              <div className="border-b pb-3">
                <div className="font-medium">Priya Sharma • Mumbai</div>
                <div className="text-gray-500">Wedding on 15 Dec • Photography enquiry</div>
              </div>
              <div className="border-b pb-3">
                <div className="font-medium">Rahul Verma • Delhi</div>
                <div className="text-gray-500">Pre-wedding shoot request</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {active === 'My Profile' && (
        <div className="bg-white p-6 rounded border border-gold/30 space-y-4">
          <h2 className="font-display text-xl text-burgundy">Edit Profile</h2>
          <input placeholder="Business name" className="w-full border rounded px-3 py-2" defaultValue="Aarav Photography" />
          <textarea placeholder="Description" className="w-full border rounded px-3 py-2 h-24" defaultValue="Cinematic wedding photography..." />
          <input placeholder="City" className="w-full border rounded px-3 py-2" defaultValue="Mumbai" />
          <button className="px-6 py-2 bg-burgundy text-white rounded">Save Changes</button>
        </div>
      )}

      {active === 'Portfolio' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-4">Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm">Image {i}</div>
            ))}
          </div>
          <button className="px-4 py-2 border border-burgundy text-burgundy rounded text-sm">Upload Photos</button>
          <p className="text-xs text-gray-400 mt-3">Uploads will be available after backend is connected.</p>
        </div>
      )}

      {active === 'Services' && (
        <div className="bg-white p-6 rounded border border-gold/30 space-y-3">
          <h2 className="font-display text-xl text-burgundy">Services & Pricing</h2>
          <div className="border rounded p-3 flex justify-between text-sm">
            <span>Wedding Photography</span>
            <span>₹45,000</span>
          </div>
          <div className="border rounded p-3 flex justify-between text-sm">
            <span>Pre-wedding</span>
            <span>₹25,000</span>
          </div>
          <button className="px-4 py-2 border border-burgundy text-burgundy rounded text-sm">Add Service</button>
        </div>
      )}

      {active === 'Enquiries' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-4">All Enquiries</h2>
          <p className="text-sm text-gray-500">Full enquiry list with status will appear here once backend is connected.</p>
        </div>
      )}

      {active === 'Reviews' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-4">Reviews</h2>
          <p className="text-sm text-gray-500">Customer reviews will be shown here. No fabricated reviews.</p>
        </div>
      )}

      {active === 'Analytics' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-4">Analytics</h2>
          <p className="text-sm text-gray-500">Views, enquiry sources, and profile performance charts coming soon.</p>
        </div>
      )}

      {active === 'Subscription' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-2">Subscription</h2>
          <p className="text-sm text-gray-600 mb-4">You are currently on the Free plan.</p>
          <Link to="/pricing" className="text-burgundy underline text-sm">View plans</Link>
        </div>
      )}

      {active === 'Settings' && (
        <div className="bg-white p-6 rounded border border-gold/30 space-y-4">
          <h2 className="font-display text-xl text-burgundy">Settings</h2>
          <input placeholder="Contact phone" className="w-full border rounded px-3 py-2" />
          <input placeholder="Contact email" className="w-full border rounded px-3 py-2" />
          <button className="px-6 py-2 bg-burgundy text-white rounded">Save</button>
        </div>
      )}
    </div>
  )
}
