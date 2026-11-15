import { useState } from 'react'

const sections = ['Overview', 'Verifications', 'Categories', 'Reviews', 'Professionals']

export default function Admin() {
  const [active, setActive] = useState('Overview')

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-display text-burgundy mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6 text-sm md:text-base">Manage professionals, categories, reviews, and platform settings.</p>

      <div className="flex gap-1 overflow-x-auto pb-2 mb-6 border-b">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`px-3 md:px-4 py-2 text-sm whitespace-nowrap border-b-2 ${active === s ? 'border-burgundy text-burgundy font-medium' : 'border-transparent text-gray-600'}`}
          >
            {s}
          </button>
        ))}
      </div>

      {active === 'Overview' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      )}

      {active === 'Verifications' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-4">Verification Queue</h2>
          <div className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-3 gap-2">
              <div>
                <div className="font-medium">Dream Decor • Hyderabad</div>
                <div className="text-gray-500">Wedding Decorators</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-burgundy text-white rounded text-xs">Approve</button>
                <button className="px-3 py-1 border rounded text-xs">Reject</button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-3 gap-2">
              <div>
                <div className="font-medium">Beat & Melody • Pune</div>
                <div className="text-gray-500">DJs and Musicians</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-burgundy text-white rounded text-xs">Approve</button>
                <button className="px-3 py-1 border rounded text-xs">Reject</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {active === 'Categories' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-4">Category Management</h2>
          <div className="flex gap-2 mb-4">
            <input placeholder="New category name" className="border rounded px-3 py-2 flex-1" />
            <button className="px-4 py-2 bg-burgundy text-white rounded text-sm">Add</button>
          </div>
          <div className="space-y-2 text-sm">
            {['Photographers', 'Makeup Artists', 'Wedding Venues', 'Decorators'].map(c => (
              <div key={c} className="flex justify-between items-center border-b py-2">
                <span>{c}</span>
                <button className="text-red-600 text-xs">Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {active === 'Reviews' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-4">Review Moderation</h2>
          <p className="text-sm text-gray-500">Reported reviews will appear here for approval or removal.</p>
          <div className="mt-4 border rounded p-3 text-sm">
            <div className="font-medium">Review on Aarav Photography</div>
            <div className="text-gray-500 mt-1">“Great work but delayed delivery...” — Reported</div>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 bg-burgundy text-white rounded text-xs">Keep</button>
              <button className="px-3 py-1 border rounded text-xs">Remove</button>
            </div>
          </div>
        </div>
      )}

      {active === 'Professionals' && (
        <div className="bg-white p-6 rounded border border-gold/30">
          <h2 className="font-display text-xl text-burgundy mb-4">All Professionals</h2>
          <p className="text-sm text-gray-500">Full list with search and status filters will be available with backend.</p>
        </div>
      )}
    </div>
  )
}
