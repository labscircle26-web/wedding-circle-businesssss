export default function Admin() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-display text-burgundy mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Protected area — manage professionals, categories, reviews, and platform settings.</p>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded border border-gold/30">
          <div className="text-sm text-gray-500">Total Professionals</div>
          <div className="text-2xl font-display text-burgundy">1,842</div>
        </div>
        <div className="bg-white p-5 rounded border border-gold/30">
          <div className="text-sm text-gray-500">Pending Verification</div>
          <div className="text-2xl font-display text-burgundy">23</div>
        </div>
        <div className="bg-white p-5 rounded border border-gold/30">
          <div className="text-sm text-gray-500">Reported Reviews</div>
          <div className="text-2xl font-display text-burgundy">5</div>
        </div>
        <div className="bg-white p-5 rounded border border-gold/30">
          <div className="text-sm text-gray-500">Active Enquiries</div>
          <div className="text-2xl font-display text-burgundy">412</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded border border-gold/30">
        <h2 className="font-display text-xl text-burgundy mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-3 text-sm">
          <button className="border border-burgundy text-burgundy py-2 rounded hover:bg-burgundy hover:text-white">Approve Verifications</button>
          <button className="border border-burgundy text-burgundy py-2 rounded hover:bg-burgundy hover:text-white">Manage Categories</button>
          <button className="border border-burgundy text-burgundy py-2 rounded hover:bg-burgundy hover:text-white">Moderate Reviews</button>
          <button className="border border-burgundy text-burgundy py-2 rounded hover:bg-burgundy hover:text-white">Featured Listings</button>
          <button className="border border-burgundy text-burgundy py-2 rounded hover:bg-burgundy hover:text-white">Subscription Plans</button>
          <button className="border border-burgundy text-burgundy py-2 rounded hover:bg-burgundy hover:text-white">Platform Analytics</button>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        Admin UI scaffold ready. Authentication and real moderation tools will be implemented with the backend.
      </p>
    </div>
  )
}
