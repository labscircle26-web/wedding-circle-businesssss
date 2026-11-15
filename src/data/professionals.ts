export interface Package {
  name: string;
  price: number;
  description: string;
  includes: string[];
}

export interface Professional {
  id: string;
  name: string;
  category: string;
  city: string;
  state: string;
  rating: number;
  reviews: number;
  startingPrice: number;
  description: string;
  verified: boolean;
  coverImage: string;
  logo: string;
  experience: string;
  services: string[];
  packages: Package[];
}

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Aarav Photography',
    category: 'Photographers',
    city: 'Mumbai',
    state: 'Maharashtra',
    rating: 4.8,
    reviews: 124,
    startingPrice: 45000,
    description: 'Cinematic wedding photography capturing timeless moments across India.',
    verified: true,
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200',
    logo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200',
    experience: '8 years',
    services: ['Wedding Photography', 'Pre-wedding', 'Candid', 'Albums'],
    packages: [
      { name: 'Essential', price: 45000, description: 'Full day coverage', includes: ['1 photographer', '500 edited photos', 'Online gallery'] },
      { name: 'Premium', price: 75000, description: 'Full wedding + pre-wedding', includes: ['2 photographers', '800 photos', 'Album', 'Pre-wedding shoot'] },
      { name: 'Luxury', price: 120000, description: 'Complete cinematic package', includes: ['2 photographers', 'Cinematic film', 'Premium album', 'Drone'] },
    ],
  },
  {
    id: '2',
    name: 'Mehndi by Zara',
    category: 'Mehndi Artists',
    city: 'Delhi',
    state: 'Delhi',
    rating: 4.9,
    reviews: 89,
    startingPrice: 8000,
    description: 'Intricate bridal mehndi designs with traditional and contemporary styles.',
    verified: true,
    coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200',
    logo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200',
    experience: '12 years',
    services: ['Bridal Mehndi', 'Guest Mehndi', 'Custom Designs'],
    packages: [
      { name: 'Bridal Basic', price: 8000, description: 'Full hands + feet', includes: ['Traditional design', '2 hours'] },
      { name: 'Bridal Premium', price: 15000, description: 'Detailed bridal mehndi', includes: ['Custom design', 'Full arms', 'Touch-up'] },
      { name: 'Party Package', price: 25000, description: 'Bridal + guests', includes: ['Bridal full', 'Up to 10 guests'] },
    ],
  },
  {
    id: '3',
    name: 'Bloom & Petal',
    category: 'Florists',
    city: 'Bangalore',
    state: 'Karnataka',
    rating: 4.7,
    reviews: 67,
    startingPrice: 25000,
    description: 'Luxury floral arrangements for Indian weddings and receptions.',
    verified: false,
    coverImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200',
    logo: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200',
    experience: '6 years',
    services: ['Bridal Bouquet', 'Stage Decor', 'Table Centerpieces'],
    packages: [
      { name: 'Bouquet Only', price: 25000, description: 'Bridal + bridesmaids', includes: ['1 bridal bouquet', '4 bridesmaid bouquets'] },
      { name: 'Reception Decor', price: 80000, description: 'Tables + entrance', includes: ['Centerpieces', 'Entrance arch', 'Stage flowers'] },
      { name: 'Full Wedding', price: 150000, description: 'Complete floral coverage', includes: ['All events', 'Mandap', 'Stage', 'Tables'] },
    ],
  },
  {
    id: '4',
    name: 'Royal Caterers',
    category: 'Caterers',
    city: 'Jaipur',
    state: 'Rajasthan',
    rating: 4.6,
    reviews: 156,
    startingPrice: 1200,
    description: 'Authentic Rajasthani and multi-cuisine catering for grand weddings.',
    verified: true,
    coverImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200',
    logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200',
    experience: '15 years',
    services: ['Veg Thali', 'Live Counters', 'Dessert Stations'],
    packages: [
      { name: 'Silver (per plate)', price: 1200, description: 'Basic veg menu', includes: ['4 starters', '2 main', 'Dessert'] },
      { name: 'Gold (per plate)', price: 1800, description: 'Premium veg + live counters', includes: ['Live chat', 'Paneer dishes', 'Desserts'] },
      { name: 'Platinum (per plate)', price: 2500, description: 'Multi-cuisine grand menu', includes: ['Live stations', 'International dishes', 'Premium desserts'] },
    ],
  },
  {
    id: '5',
    name: 'Glamour Studio',
    category: 'Makeup Artists',
    city: 'Chandigarh',
    state: 'Punjab',
    rating: 4.9,
    reviews: 98,
    startingPrice: 15000,
    description: 'Bridal makeup that enhances natural beauty with a luxurious finish.',
    verified: true,
    coverImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200',
    logo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200',
    experience: '10 years',
    services: ['Bridal Makeup', 'Hair Styling', 'Party Makeup'],
    packages: [
      { name: 'Bridal Makeup', price: 15000, description: 'Full bridal look', includes: ['Makeup', 'Hair styling', 'Draping'] },
      { name: 'Bridal + Party', price: 22000, description: 'Wedding + reception', includes: ['Two looks', 'Hair change'] },
      { name: 'Family Package', price: 35000, description: 'Bridal + 3 family members', includes: ['Bridal full', '3 party makeups'] },
    ],
  },
  {
    id: '6',
    name: 'The Grand Venue',
    category: 'Wedding Venues',
    city: 'Udaipur',
    state: 'Rajasthan',
    rating: 4.8,
    reviews: 210,
    startingPrice: 350000,
    description: 'Palace-style wedding venue with lakeside views and royal hospitality.',
    verified: true,
    coverImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200',
    logo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=200',
    experience: '20 years',
    services: ['Banquet', 'Outdoor Lawn', 'Accommodation'],
    packages: [
      { name: 'Lawn Wedding', price: 350000, description: 'Outdoor ceremony + reception', includes: ['Lawn', 'Basic decor', 'Seating for 300'] },
      { name: 'Palace Package', price: 650000, description: 'Indoor + outdoor', includes: ['Banquet hall', 'Lawn', 'Accommodation for 50'] },
      { name: 'Royal Experience', price: 1200000, description: 'Full palace takeover', includes: ['Multiple venues', 'Stay for 100 guests', 'Catering coordination'] },
    ],
  },
  {
    id: '7',
    name: 'Beat & Melody',
    category: 'DJs and Musicians',
    city: 'Pune',
    state: 'Maharashtra',
    rating: 4.5,
    reviews: 73,
    startingPrice: 20000,
    description: 'Live bands and professional DJs for sangeet and reception nights.',
    verified: false,
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200',
    logo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200',
    experience: '7 years',
    services: ['DJ', 'Live Band', 'Sound System'],
    packages: [
      { name: 'DJ Only', price: 20000, description: '4 hours DJ', includes: ['DJ', 'Basic sound', 'Lights'] },
      { name: 'DJ + Band', price: 45000, description: 'Sangeet special', includes: ['DJ', 'Live singers', 'Full sound'] },
      { name: 'Full Night', price: 70000, description: 'Reception complete', includes: ['DJ', 'Band', 'Emcee', 'Lights'] },
    ],
  },
  {
    id: '8',
    name: 'Dream Decor',
    category: 'Wedding Decorators',
    city: 'Hyderabad',
    state: 'Telangana',
    rating: 4.7,
    reviews: 112,
    startingPrice: 80000,
    description: 'Full wedding decoration with floral, lighting and stage design.',
    verified: true,
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200',
    logo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=200',
    experience: '11 years',
    services: ['Stage Decor', 'Mandap', 'Entrance'],
    packages: [
      { name: 'Stage Only', price: 80000, description: 'Main stage design', includes: ['Backdrop', 'Lighting', 'Florals'] },
      { name: 'Mandap + Stage', price: 150000, description: 'Ceremony setup', includes: ['Mandap', 'Stage', 'Entrance'] },
      { name: 'Full Decor', price: 250000, description: 'Complete venue styling', includes: ['All areas', 'Lighting design', 'Custom theme'] },
    ],
  },
];

export const categories = [
  'Photographers',
  'Cinematographers',
  'Wedding Planners',
  'Event Coordinators',
  'Wedding Decorators',
  'Florists',
  'Makeup Artists',
  'Hairstylists',
  'Mehndi Artists',
  'Caterers',
  'Wedding Venues',
  'DJs and Musicians',
  'Choreographers',
  'Bridal Boutiques',
  'Jewellery Designers',
  'Wedding Invitation Designers',
  'Bakers',
  'Rental Services',
  'Lighting and Sound Providers',
  'Other Wedding Professionals',
];
