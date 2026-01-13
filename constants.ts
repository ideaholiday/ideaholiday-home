import { Package, Quote, User, UserRole } from './types';

export const COMPANY_DETAILS = {
  name: "Idea Holiday Private Limited",
  address: "Office No 129, Deva Palace, Viram Khand 1, Gomti Nagar, Lucknow, India",
  email: "info@ideaholiday.com",
  clientId: "669144046620-dr4v4553lo3nvpbus5b1b2h8h8a5uiq9.apps.googleusercontent.com",
  phone: "+91 9696 777 391",
  logo: "/logo.png", // Ensure logo.png is placed in the public folder
  businessHours: {
    weekdays: "Monday – Saturday: 10:00 AM – 7:00 PM",
    sunday: "Closed"
  },
  socials: {
    facebook: "https://www.facebook.com/ideaholiday.in",
    instagram: "https://www.instagram.com/ideaholiday1/",
    linkedin: "#",
    youtube: "#"
  }
};

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Super Admin', email: 'admin@ideaholiday.com', role: UserRole.ADMIN },
  { id: 'u2', name: 'Rahul Sharma', email: 'rahul.staff@ideaholiday.com', role: UserRole.STAFF },
  { id: 'u3', name: 'Best Travels Agency', email: 'agent@partner.com', role: UserRole.AGENT },
  { id: 'u4', name: 'Ground Team Delhi', email: 'ops@vendors.com', role: UserRole.OPERATOR },
];

export const POPULAR_DESTINATIONS = [
  { name: "Thailand", image: "https://picsum.photos/800/600?random=10" },
  { name: "Dubai", image: "https://picsum.photos/800/600?random=11" },
  { name: "Bali", image: "https://picsum.photos/800/600?random=12" },
  { name: "Vietnam", image: "https://picsum.photos/800/600?random=13" },
  { name: "Singapore", image: "https://picsum.photos/800/600?random=14" },
  { name: "Maldives", image: "https://picsum.photos/800/600?random=15" }
];

export const MOCK_PACKAGES: Package[] = [
  {
    id: 'p1',
    title: 'Magical Maldives Honeymoon',
    image: 'https://picsum.photos/800/600?random=1',
    price: 45000,
    duration: '4 Nights / 5 Days',
    location: 'Maldives',
    category: 'Honeymoon'
  },
  {
    id: 'p2',
    title: 'Swiss Alps Adventure',
    image: 'https://picsum.photos/800/600?random=2',
    price: 120000,
    duration: '6 Nights / 7 Days',
    location: 'Switzerland',
    category: 'International'
  },
  {
    id: 'p3',
    title: 'Royal Rajasthan Heritage',
    image: 'https://picsum.photos/800/600?random=3',
    price: 35000,
    duration: '5 Nights / 6 Days',
    location: 'India',
    category: 'Domestic'
  },
  {
    id: 'p4',
    title: 'Dubai Shopping Festival',
    image: 'https://picsum.photos/800/600?random=4',
    price: 55000,
    duration: '4 Nights / 5 Days',
    location: 'UAE',
    category: 'Family'
  }
];

export const MOCK_QUOTES: Quote[] = [
  {
    id: 'IH-88219',
    clientName: 'Mr. Amit Verma',
    destination: 'Kerala',
    travelDate: '2024-11-15',
    pax: 2,
    status: 'Confirmed',
    totalCost: 25000,
    markup: 5000,
    sellingPrice: 30000,
    assignedTo: 'u4', // Assigned to Operator
    agentId: 'u3',
    itinerary: [
      { day: 1, title: 'Arrival in Cochin', description: 'Pick up from airport and transfer to hotel.', meals: ['Dinner'] },
      { day: 2, title: 'Munnar Sightseeing', description: 'Visit tea gardens and Mattupetty Dam.', meals: ['Breakfast', 'Dinner'] }
    ]
  },
  {
    id: 'IH-99102',
    clientName: 'Ms. Sarah Jenkins',
    destination: 'Golden Triangle',
    travelDate: '2024-12-01',
    pax: 4,
    status: 'Sent',
    totalCost: 40000,
    markup: 8000,
    sellingPrice: 48000,
    assignedTo: 'u4',
    agentId: 'u3',
    itinerary: [
      { day: 1, title: 'Delhi Arrival', description: 'City tour of Old Delhi.', meals: ['Dinner'] }
    ]
  }
];

export const CONTENT = {
  about: {
    title: "About Idea Holiday Private Limited",
    intro: "Idea Holiday Private Limited is a fast-growing travel company based in India, serving both retail travelers (B2C) and travel agents (B2B). Our mission is to simplify travel planning with smart technology, expert guidance, and reliable services. We believe travel should be stress-free, transparent, and memorable. With a strong partner network and modern tools, we deliver quality travel experiences worldwide.",
    vision: "To become a trusted global travel brand offering innovative and affordable travel solutions.",
    mission: "To empower travelers and travel agents with seamless travel planning, honest pricing, and exceptional support."
  },
  services: [
    "Domestic & International Tour Packages",
    "Honeymoon & Family Tours",
    "Group Tours & Corporate Travel",
    "Visa Services",
    "B2B Travel Solutions"
  ],
  globalDmc: {
    title: "Global DMC Solution",
    subtitle: "Your Trusted Destination Management Partner Worldwide",
    intro: "Idea Holiday Private Limited serves as a premier Global Destination Management Company (DMC), offering comprehensive on-ground services for travel agents and tour operators. We bridge the gap between you and your clients' dream destinations with our extensive network and local expertise. Whether it's arranging luxury transfers, booking exclusive local experiences, or managing large group logistics, our global presence ensures flawless execution.",
    features: [
        { title: "Local Expertise", desc: "Deep knowledge of 50+ destinations with local teams." },
        { title: "B2B Exclusive Rates", desc: "Direct contracting with hotels and fleets for best pricing." },
        { title: "24/7 Ground Support", desc: "Round-the-clock assistance for your clients while traveling." },
        { title: "Customized Logistics", desc: "Tailored solutions for MICE, FIT, and GIT movements." }
    ]
  },
  legal: {
    privacy: `Idea Holiday Private Limited respects your privacy and is committed to protecting your personal information.

Information We Collect:
Name, email, phone number
Travel preferences
Booking and enquiry details

How We Use Your Information:
To process enquiries and bookings
To provide customer support
To improve our services

Data Security:
We implement appropriate security measures to protect your data.

Third-Party Sharing:
We do not sell or share your personal information with third parties except where required for service fulfillment.

By using our website, you agree to this Privacy Policy.`,
    terms: `All bookings are subject to availability.
Prices are subject to change without prior notice.
Travel documents are the responsibility of the traveler.
Visa approval is at the sole discretion of the respective embassy.
Cancellation and refund policies vary by service provider.
Idea Holiday Private Limited acts as a facilitator between customers and service providers.`,
    refund: `Cancellation charges depend on suppliers’ policies.
Refunds, if applicable, will be processed within 7–14 working days.
Service fees are non-refundable.
Please contact info@ideaholiday.com for refund assistance.`,
    disclaimer: `Idea Holiday Private Limited is not responsible for delays, changes, or cancellations due to unforeseen circumstances such as weather, strikes, or government regulations.`
  }
};