export default function FAQ() {
  const faqs = [
    { q: 'Is it free to create a profile?', a: 'Yes. Creating a basic profile is completely free.' },
    { q: 'How do enquiries work?', a: 'Clients fill a short form on your profile. You receive the details and can contact them directly.' },
    { q: 'How do I get verified?', a: 'Submit your profile. Our team reviews it and adds the Verified badge once approved.' },
    { q: 'Can I upload my own photos?', a: 'Yes. Portfolio and cover photos will be supported once uploads are enabled.' },
    { q: 'Is this only for India?', a: 'Yes. Wedding Circle Business is focused on Indian wedding professionals and cities.' },
  ]

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-display text-burgundy mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-gold/30 pb-4">
            <h2 className="font-medium text-burgundy mb-1">{f.q}</h2>
            <p className="text-gray-600 text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
