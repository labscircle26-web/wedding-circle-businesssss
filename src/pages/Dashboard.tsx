import { Link } from 'react-router-dom'

const tabs = ['Overview', 'My Profile', 'Portfolio', 'Services', 'Enquiries', 'Reviews', 'Analytics', 'Subscription', 'Settings']

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-display text-burgundy">Business Dashboard</h1>
        <Link to="/profile/1" className="text-sm text-burgundy underline">Preview Public Profile</Link>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 border-b">
        {tabs.map((t) => (
          <button key={t} className="px-4 py-2 text-sm whitespace-nowrap hover:text-burgundy border-b-2 border-transparent hover:border-burgundy">
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded border border-gold/30">
          <div className="text-sm text-gray-500">Profile Views</div>
          <div className="text-3xl font-display text-burgundy mt-1">1,248</div>
        </div>
        <div className="bg-white p-6 rounded border border-gold/30">
          <div className="text-sm text-gray-500">Enquiries</div>
          <div className="text-3xl font-display text-burgundy mt-1">37</div>
        </div>
        <div className="bg-white p-6 rounded border border-gold/30">
          <div className="text-sm text-gray-500">Rating</div>
          <div className="text-3xl font-display text-burgundy mt-1">4.8</div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded border border-gold/30">
        <h2 className="font-display text-xl text-burgundy mb-4">Recent Enquiries</h2>
        <p className="text-gray-500 text-sm">Enquiry list will appear here once the backend is connected. Customer data is never shown publicly.</p>
        <div className="mt-4 space-y-3">
          <div className="border-b pb-3 text-sm">
            <div className="font-medium">Priya Sharma • Mumbai</div>
            <div className="text-gray-500">Wedding on 15 Dec • Photography enquiry</div>
          </div>
          <div className="border-b pb-3 text-sm">
            <div className="font-medium">Rahul Verma • Delhi</div>
            <div className="text-gray-500">Pre-wedding shoot request</div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-400">
        Dashboard UI ready. Authentication, real uploads, and enquiry storage will be added in the next milestone.
      </div>
    </div>
  )
}
