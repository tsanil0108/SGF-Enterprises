export const siteInfo = {
  developer: 'SGF Enterprises',
  project: 'Elegance Heights',
  tagline: 'Your Spacious New Abode in the Suburbs',
  address: 'Off Link Road, Malad East, Mumbai',
  phone: '+91 98200 12345',
  email: 'sales@sgfelegance.com',
  reraNumber: 'P51800012345',
};

// Single-page navigation — every link is an in-page anchor (id of a <section>)
// so clicking a nav item smooth-scrolls down the same page instead of routing.
export const navLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About SGF', path: '#about' },
  { label: 'Project', path: '#project' },
  { label: 'Amenities', path: '#amenities' },
  { label: 'Floor Plans', path: '#floor-plans' },
  { label: 'Gallery', path: '#gallery' },
  { label: 'Location', path: '#location' },
  { label: 'Contact', path: '#contact' },
];

export const heroStats = [
  { value: '10+', label: 'Years of Trust' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '5000+', label: 'Happy Families' },
  { value: '100%', label: 'RERA Registered' },
];

// Stats strip used specifically on the About page (matches PDF: 5 stats)
export const aboutStats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '5000+', label: 'Happy Families' },
  { value: '5M+', label: 'Sq. Ft. Developed' },
  { value: '100%', label: 'Commitment to Quality' },
];

// About page values grid (matches PDF: 5 values, no numbering — not a sequence)
export const companyValues = [
  {
    title: 'Integrity',
    description: 'We believe in transparency, honesty and ethical business practices.',
  },
  {
    title: 'Quality',
    description: 'Delivering superior quality in every project with attention to detail.',
  },
  {
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do.',
  },
  {
    title: 'Innovation',
    description: 'Embracing modern technology and innovative designs.',
  },
  {
    title: 'Sustainability',
    description: 'Building eco-friendly spaces for a better tomorrow.',
  },
];

// Dark "Our Commitment" banner items (matches PDF)
export const commitmentItems = [
  { title: 'Timely Delivery' },
  { title: 'Best-in-Class Construction' },
  { title: 'Trust & Reliability' },
  { title: 'Building Relationships' },
];

// Project hero quick-facts row (matches PDF: G+2 Podium / Prime Location / Affordable Luxury / 1&2 BHK)
export const projectQuickFacts = [
  { icon: 'building', label: 'G+2 Podium + 38 Storey Tower' },
  { icon: 'pin', label: 'Prime Location — Malad East' },
  { icon: 'diamond', label: 'Affordable Luxury, Premium Living' },
  { icon: 'home', label: '1 & 2 BHK Spacious Homes' },
];

// Dark navy feature strip under the Project hero (matches PDF's utility-icon bar)
export const projectFeatureStrip = [
  { icon: 'valet', label: '24 Hrs Valet Parking' },
  { icon: 'solar', label: 'Solar Powered Common Area' },
  { icon: 'ev', label: 'Electric Charging Points' },
  { icon: 'waste', label: 'Waste Management System' },
  { icon: 'lift', label: '5 High Speed Lifts' },
];

// Project highlights strip (matches PDF: Italian Marble Lobby / Amenities / Connectivity / etc.)
export const projectHighlightsStrip = [
  { icon: 'marble', label: 'Italian Marble Entrance Lobby' },
  { icon: 'amenities', label: 'Luxury Lifestyle Amenities' },
  { icon: 'connect', label: 'Excellent Connectivity' },
  { icon: 'design', label: 'Thoughtfully Designed Homes' },
  { icon: 'shield', label: '24x7 Security with CCTV' },
  { icon: 'solar', label: 'Solar Powered Common Area' },
];

export const amenities = [
  { title: 'Infinity Swimming Pool', category: 'Leisure', image: '/images/InfinityPool.png' },
  { title: 'Landscaped Sky Garden', category: 'Leisure', image: '/images/Garden.png' },
  { title: 'Fully Equipped Gymnasium', category: 'Wellness', image: '/images/Gymnasium.png' },
  { title: 'Yoga & Meditation Deck', category: 'Wellness', image: '/images/Yoga_MeditationDeck.png' },
  { title: 'Kids\u2019 Play Area', category: 'Family', image: '/images/KidsPlayArea.png' },
  { title: 'Multipurpose Clubhouse', category: 'Community', image: '/images/indoorgame.png' },
  { title: 'Indoor Games Room', category: 'Community', image: '/images/IndoorGamesRoom.png' },
  { title: 'Jogging Track', category: 'Wellness', image: '/images/Garden.png' },
  { title: 'Amphitheatre', category: 'Community', image: '/images/SkylineView.png' },
  { title: 'Senior Citizen Sit-out', category: 'Family', image: '/images/Yoga_MeditationDeck.png' },
  { title: 'Co-working Lounge', category: 'Community', image: '/images/indoorgame.png' },
  { title: 'Party Lawn', category: 'Leisure', image: '/images/Garden.png' },
  { title: 'Pet Park', category: 'Family', image: '/images/KidsPlayArea.png' },
  { title: '24x7 Security & CCTV', category: 'Safety', image: '/images/24x7_Security_CCTV.png' },
  { title: 'Rainwater Harvesting', category: 'Sustainability', image: '/images/building.png' },
  { title: 'EV Charging Points', category: 'Sustainability', image: '/images/building.png' },
  { title: 'Solar-lit Pathways', category: 'Sustainability', image: '/images/Facade.png' },
  { title: 'Grand Double-height Lobby', category: 'Arrival', image: '/images/Lobby.png' },
];

export const floorPlans = [
  {
    id: '1bhk',
    type: '1 BHK',
    carpetArea: '405 sq.ft.',
    configuration: 'Living / Kitchen, 1 Bedroom, 1 Bathroom',
    price: 'On Request',
    image: '/images/1_BHK_Layout.png',
  },
  {
    id: '2bhk',
    type: '2 BHK',
    carpetArea: '620 sq.ft.',
    configuration: 'Living / Kitchen, 2 Bedrooms, 2 Bathrooms',
    price: 'On Request',
    image: '/images/2_BHK_Layout.png',
  },
  {
    id: '2bhk-premium',
    type: '2 BHK Premium',
    carpetArea: '685 sq.ft.',
    configuration: 'Living / Kitchen, 2 Bedrooms, 2 Bathrooms, Balcony',
    price: 'On Request',
    image: '/images/SampleFloorPlan2_BHK.jpeg',
  },
];

// Why Elegance Heights bullet list (Project page highlights section)
export const projectWhyList = [
  'Vastu-compliant layouts across all unit types',
  'Double-height entrance lobby with concierge desk',
  'Podium-level landscaped amenity deck',
  'Earthquake-resistant RCC structure, MahaRERA registered',
];

export const projectSpecs = [
  { label: 'Location', value: 'Malad East, Mumbai' },
  { label: 'Configuration', value: '1 & 2 BHK Residences' },
  { label: 'Towers', value: '1 Tower, G+32 Storeys' },
  { label: 'Total Units', value: '288 Homes' },
  { label: 'Possession', value: 'Dec 2028' },
  { label: 'RERA No.', value: 'P51800012345' },
];

export const galleryImages = [
  { id: 1, caption: 'Tower Facade at Dusk', category: 'Exterior', image: '/images/Facade.png' },
  { id: 2, caption: 'Grand Entrance Lobby', category: 'Interior', image: '/images/Lobby.png' },
  { id: 3, caption: 'Living Room Interiors', category: 'Interior', image: '/images/LivingRoom.png' },
  { id: 4, caption: 'Rooftop Infinity Pool', category: 'Amenity', image: '/images/InfinityPool.png' },
  { id: 5, caption: 'Landscaped Podium Garden', category: 'Amenity', image: '/images/Garden.png' },
  { id: 6, caption: 'Aerial Skyline View', category: 'Exterior', image: '/images/SkylineView.png' },
  { id: 7, caption: 'Clubhouse Lounge', category: 'Amenity', image: '/images/indoorgame.png' },
  { id: 8, caption: 'Tower Elevation', category: 'Exterior', image: '/images/building.png' },
];

export const connectivity = [
  { place: 'Malad Railway Station', distance: '2.1 km' },
  { place: 'Western Express Highway', distance: '1.5 km' },
  { place: 'Infiniti Mall', distance: '3.0 km' },
  { place: 'Inorbit Mall', distance: '4.2 km' },
  { place: 'International Airport', distance: '9.8 km' },
  { place: 'Reputed Schools', distance: 'Within 2 km' },
  { place: 'Multi-speciality Hospitals', distance: 'Within 3 km' },
  { place: 'Upcoming Metro Station', distance: '900 m' },
];

export const achievements = [
  { value: '10+', label: 'Years in Real Estate' },
  { value: '25+', label: 'Projects Completed' },
  { value: '5000+', label: 'Families Housed' },
  { value: '100%', label: 'On-time RERA Delivery' },
];