export const SITE = {
  name: "Cafe BAE",
  tagline: "Good Food. Good Coffee. Good Vibes.",
  zomato: "https://www.zomato.com/ranchi/cafe-bae-lalpur",
  petpooja: "https://dinein.petpooja.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#location" },
] as const;

export const BRANDS = [
  {
    id: "cafe-bae",
    name: "Cafe BAE",
    subtitle: "The Original",
    tagline: "Western eats, Chinese noodles & Indian classics",
    vibe: "Colourful, modern interiors. Your everyday happy place.",
    address: "84, Hazaribagh Road, Lalpur, Ranchi 834001",
    hours: "8:00 AM – 10:00 PM",
    price: null,
    cta: { label: "View Menu", href: "https://dinein.petpooja.com" },
    instagram: "https://www.instagram.com/cafebae.ranchi/",
  },
  {
    id: "yellow",
    name: "YELLOW by Cafe BAE",
    subtitle: null,
    tagline: "An art café, where the morning spills in golden hues 🌻",
    vibe: "Van Gogh-inspired. Golden aesthetic. For the dreamers.",
    address: "Maria Height, Bypass Rd, Dibdih, Ranchi 834002",
    hours: "11:00 AM – 10:00 PM",
    price: null,
    cta: { label: "Explore", href: "https://www.instagram.com/yellowbycafebae/" },
    instagram: "https://www.instagram.com/yellowbycafebae/",
  },
  {
    id: "yaarana",
    name: "Yaarana Rooftop by Cafe BAE",
    subtitle: null,
    tagline: "Good nights, better views",
    vibe: "Rooftop dining. Open sky. Perfect for groups & evenings out.",
    address: "Cafe BAE, 84, Hazaribagh Road, Lalpur, Ranchi 834001",
    hours: "8:00 AM – 10:00 PM",
    price: "₹200–400 for two",
    cta: { label: "Reserve", href: "https://www.zomato.com/ranchi/cafe-bae-lalpur" },
    instagram: "https://www.instagram.com/cafebae.ranchi/",
  },
] as const;

export const ABOUT = {
  heading: "Your Happy Place",
  text: "Cafe BAE is Ranchi's go-to for good food, great coffee, and even better vibes. From a cozy café counter to a rooftop under the stars — we've built three spaces for every mood.",
  stats: [
    { value: "3", label: "Unique Spaces" },
    { value: "4.4★", label: "Google Rating" },
    { value: "₹200", label: "For Two (approx.)" },
  ],
} as const;

export const TESTIMONIALS = [
  {
    name: "Nikhil Chourasia",
    source: "Google",
    rating: 5,
    text: "An awesome place to chill.",
  },
  {
    name: "Ayushman Arun",
    source: "Google",
    rating: 5,
    text: "Brilliant food and vibrant ambience. Their Chinese food is a must try. We even loved the Tandoori Momos. The café is well located on road.",
  },
  {
    name: "Google Reviewer",
    source: "Google",
    rating: 5,
    text: "Yellow by Cafe Bae is the destination where you must go. The ambience, the food, the service and the music altogether create an experience you should have at least once. You will be surprised. Thank me later!",
  },
] as const;

export const LOCATIONS = [
  {
    name: "Cafe BAE + Yaarana Rooftop",
    address: "84, Hazaribagh Road, Near Hotel Arya, Opposite Manjusha Complex, Lalpur, Ranchi 834001",
    phone: "+91 90312 78991",
    hours: "8:00 AM – 10:00 PM (Daily)",
    maps: "https://maps.google.com/?q=Cafe+BAE+84+Hazaribagh+Road+Ranchi",
    whatsapp: "https://wa.me/919031278991",
    zomato: "https://www.zomato.com/ranchi/cafe-bae-lalpur",
  },
  {
    name: "YELLOW by Cafe BAE",
    address: "Maria Height, Bypass Road, Above Kachhap Helmet, Dibdih, Ranchi 834002",
    phone: "+91 88630 43577",
    hours: "11:00 AM – 10:00 PM (Daily)",
    maps: "https://maps.google.com/?q=Yellow+by+Cafe+BAE+Dibdih+Ranchi",
    whatsapp: "https://wa.me/918863043577",
    zomato: "https://www.zomato.com/ranchi/yellow-cafe-bae-doranda",
  },
] as const;

export const INSTAGRAM = {
  heading: "Follow Our Story",
  primary: {
    handle: "@cafebae.ranchi",
    url: "https://www.instagram.com/cafebae.ranchi/",
  },
  secondary: {
    handle: "@yellowbycafebae",
    url: "https://www.instagram.com/yellowbycafebae/",
  },
} as const;

export const FOOTER = {
  name: "Cafe BAE",
  tagline: "Good Food. Good Coffee. Good Vibes.",
  brands: "Cafe BAE · YELLOW by Cafe BAE · Yaarana Rooftop",
  social: {
    instagramBae: "https://www.instagram.com/cafebae.ranchi/",
    instagramYellow: "https://www.instagram.com/yellowbycafebae/",
    whatsapp: "https://wa.me/919031278991",
  },
  phone: "+91 90312 78991",
  legal: "© 2025 Cafe BAE. All rights reserved.",
  credit: { text: "Created by Sadique", url: "https://sadique.co" },
} as const;
