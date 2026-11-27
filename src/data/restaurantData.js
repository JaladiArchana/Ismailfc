import heroFeastImg from '../assets/images/hero-feast.jpg';
import aboutDiningImg from '../assets/images/about-dining.jpg';
import catBiryaniImg from '../assets/images/cat-biryani.jpg';
import catSpecialsImg from '../assets/images/cat-restaurant-specials.jpg';
import catBakeryImg from '../assets/images/cat-bakery.jpg';
import catCakesImg from '../assets/images/cat-cakes-pastries.jpg';
import catSweetsImg from '../assets/images/cat-sweets.jpg';
import catSnacksImg from '../assets/images/cat-snacks.jpg';
import bakeryCounterImg from '../assets/images/bakery-counter.jpg';

export const BUSINESS_INFO = {
  name: 'Ismail Food Court',
  shortCity: 'Ongole, Andhra Pradesh',
  address:
    'G25X+HJ9, 1st Lane, opposite to 1st Lane, Islampet, Gopal Nagar, Ongole, Andhra Pradesh 523001',
  phoneDisplay: '+91 9490677772',
  phoneHref: 'tel:+919490677772',
  whatsappNumber: '919490677772',
  hoursSummary: '9:00 AM – 11:00 PM',
  hoursDetail: 'Every day: 9 AM – 11 PM',
  rating: '3.9',
  ratingMax: '5',
  reviewCount: '2,328',
  services: ['Dine-in', 'Takeaway', 'Delivery'],
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Ismail+Food+Court+G25X%2BHJ9+1st+Lane+Islampet+Gopal+Nagar+Ongole+Andhra+Pradesh+523001',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=G25X%2BHJ9%2C%201st%20Lane%2C%20Islampet%2C%20Gopal%20Nagar%2C%20Ongole%2C%20Andhra%20Pradesh%20523001&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export function createWhatsAppUrl(customMessage) {
  const defaultMsg =
    'Hello Ismail Food Court, I would like to enquire about your menu / place an order.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home', path: '/' },
  { label: 'About', href: '#about', path: '/about' },
  { label: 'Menu', href: '#menu', path: '/menu' },
  { label: 'Bakery', href: '#bakery', path: '/bakery' },
  { label: 'Gallery', href: '#gallery', path: '/gallery' },
  { label: 'Contact', href: '#contact', path: '/contact' },
];

export const HERO_MEDIA = {
  image: heroFeastImg,
  alt: 'Steaming copper handi of saffron-infused Indian biryani served with raita and mirchi ka salan on a warm teakwood table',
};

export const ABOUT_DATA = {
  eyebrow: 'Welcome to Ismail Food Court',
  heading: 'A Place for Every Food Lover',
  paragraphs: [
    'Located in Gopal Nagar, Ongole, Ismail Food Court brings together satisfying restaurant meals and a well-stocked bakery counter under one welcoming roof.',
    'Whether you are stopping by for aromatic biryani and hot kitchen favourites with family, picking up fresh cakes, pastries, sweets, and savoury snacks for an occasion, or ordering for takeaway and delivery, our team focuses on warm hospitality and a comfortable dining experience.',
  ],
  image: aboutDiningImg,
  imageAlt:
    'Warm and inviting family dining room at a modern Indian restaurant with burgundy booth seating and brass lighting',
  highlights: [
    {
      title: 'Dine-in Comfort',
      detail: 'Relaxed seating suited for families, friends, and everyday meals.',
    },
    {
      title: 'Takeaway & Delivery',
      detail: 'Conveniently packed kitchen meals and bakery boxes ready to go.',
    },
    {
      title: 'Open Daily',
      detail: 'Serving guests every day from 9:00 AM – 11:00 PM.',
    },
  ],
};

/**
 * Menu Category Overview
 * Note: Specific menu items and live prices are not listed here to avoid
 * inventing unverified dishes or prices; sample descriptors are clearly marked.
 */
export const MENU_CATEGORIES = [
  {
    id: 'biryani',
    name: 'Biryani',
    tagline: 'Aromatic & Hearty',
    featured: true,
    image: catBiryaniImg,
    imageAlt: 'Aromatic Indian dum biryani garnished with fried onions, mint, and raita',
    description:
      'Fragrant basmati rice layered with spiced selections, slow-cooked and served hot with classic accompaniments.',
    sampleNote:
      'Sample category overview — contact the restaurant for today’s available biryani varieties, portions, and current pricing.',
    availability: 'Dine-in · Takeaway · Delivery',
  },
  {
    id: 'restaurant-specials',
    name: 'Restaurant Specials',
    tagline: 'Fresh from the Kitchen',
    featured: true,
    image: catSpecialsImg,
    imageAlt: 'Indian restaurant curry in a copper bowl alongside tandoori starters and garlic naan',
    description:
      'Generous main-course dishes, curries, starters, and warm flatbreads prepared fresh to order for lunch and dinner.',
    sampleNote:
      'Sample category overview — reach out via phone or WhatsApp for the full daily kitchen selection and prices.',
    availability: 'Dine-in · Takeaway · Delivery',
  },
  {
    id: 'bakery',
    name: 'Bakery',
    tagline: 'Oven-Fresh Counter',
    featured: false,
    image: catBakeryImg,
    imageAlt: 'Freshly baked golden puffs, soft buns, tea rusks, and cookies on wooden trays',
    description:
      'Flaky puffs, soft loaves, tea-time rusks, and everyday baked favourites ready throughout the day.',
    sampleNote:
      'Sample category overview — daily bakery tray availability varies by batch. Call or message us for today’s fresh bakes.',
    availability: 'Counter Pickup · Takeaway',
  },
  {
    id: 'cakes-pastries',
    name: 'Cakes & Pastries',
    tagline: 'Celebrations & Slices',
    featured: false,
    image: catCakesImg,
    imageAlt: 'Layered chocolate and fresh cream celebration cakes with delicate pastries',
    description:
      'Cream-layered celebration cakes and chilled individual pastries suited for birthdays, gatherings, and sweet cravings.',
    sampleNote:
      'Sample category overview — enquire directly for available flavours, weights, and cake pricing.',
    availability: 'Counter Pickup · Pre-order Enquiry',
  },
  {
    id: 'sweets',
    name: 'Sweets',
    tagline: 'Traditional Mithai',
    featured: false,
    image: catSweetsImg,
    imageAlt: 'Traditional Indian sweets platter featuring gulab jamun, kaju katli, and laddoo',
    description:
      'Classic Indian sweets crafted for everyday enjoyment, family visits, and festive gifting boxes.',
    sampleNote:
      'Sample category overview — ask our counter staff for today’s sweet assortments and box rates.',
    availability: 'Dine-in · Takeaway Boxes',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    tagline: 'Crispy & Savoury',
    featured: false,
    image: catSnacksImg,
    imageAlt: 'Crispy golden Indian samosas and pakoras served with mint and tamarind chutneys',
    description:
      'Crisp evening bites and savoury treats ideal for pairing with tea or sharing around the table.',
    sampleNote:
      'Sample category overview — check with us for current evening snack availability and pricing.',
    availability: 'Dine-in · Takeaway',
  },
];

/**
 * Sample Featured Selections
 * Strictly uses clearly marked sample content and transparent price placeholders.
 */
export const SAMPLE_SPECIALS = [
  {
    id: 'sample-biryani',
    name: 'Signature Dum Biryani',
    category: 'Biryani',
    badge: 'Sample Highlight',
    image: catBiryaniImg,
    imageAlt: 'Sample presentation of aromatic dum biryani with caramelized onions and raita',
    description:
      'Sample preview of our popular aromatic biryani category, served in generous portions with raita and gravy.',
    pricePlaceholder: 'Sample Listing · Price on enquiry',
  },
  {
    id: 'sample-kitchen-platter',
    name: 'Kitchen Curry & Breads',
    category: 'Restaurant Specials',
    badge: 'Sample Highlight',
    image: catSpecialsImg,
    imageAlt: 'Sample presentation of rich Indian curry, grilled starters, and warm naan',
    description:
      'Sample preview representing our hearty restaurant food offerings prepared for comfortable family dining.',
    pricePlaceholder: 'Sample Listing · Price on enquiry',
  },
  {
    id: 'sample-celebration-cake',
    name: 'Layered Cream & Truffle Cakes',
    category: 'Cakes & Pastries',
    badge: 'Sample Highlight',
    image: catCakesImg,
    imageAlt: 'Sample presentation of layered chocolate truffle and fresh cream celebration cakes',
    description:
      'Sample preview from our bakery showcase, featuring whole celebration cakes and individual pastry slices.',
    pricePlaceholder: 'Sample Listing · Price on enquiry',
  },
  {
    id: 'sample-mithai-snacks',
    name: 'Festive Sweets & Evening Snacks',
    category: 'Sweets & Snacks',
    badge: 'Sample Highlight',
    image: catSweetsImg,
    imageAlt: 'Sample presentation of traditional Indian sweets platter with gulab jamun and laddoo',
    description:
      'Sample preview highlighting traditional Indian sweets and crisp savoury bites packed fresh for takeaway.',
    pricePlaceholder: 'Sample Listing · Price on enquiry',
  },
];

export const BAKERY_HIGHLIGHTS = [
  {
    id: 'cakes',
    title: 'Cakes',
    subtitle: 'Celebration Ready',
    image: catCakesImg,
    imageAlt: 'Layered cream and chocolate celebration cakes on stands',
    description:
      'From birthdays to family milestones, explore freshly frosted layered cakes available in classic flavours. Contact our counter to check ready-to-pick options or enquire about custom orders.',
    points: ['Ready-to-takeaway whole cakes', 'Assorted classic flavours', 'Carefully boxed for travel'],
  },
  {
    id: 'pastries',
    title: 'Pastries',
    subtitle: 'Chilled & Delicate',
    image: bakeryCounterImg,
    imageAlt: 'Illuminated glass bakery showcase stocked with fresh pastries and cakes',
    description:
      'Individual layered pastries displayed fresh in our chilled showcase—ideal for an after-meal treat in the dining room or a quick takeaway box.',
    points: ['Single-serve pastry slices', 'Served fresh all day', 'Paired well with evening snacks'],
  },
  {
    id: 'bakery-products',
    title: 'Bakery Products',
    subtitle: 'Daily Warm Bakes',
    image: catBakeryImg,
    imageAlt: 'Flaky golden puffs, soft buns, and baked tea rusks on wooden trays',
    description:
      'Crisp, flaky puffs, soft buns, tea-time rusks, and cookies prepared for morning tea, quick snacks, and everyday household staples.',
    points: ['Flaky savoury puffs', 'Soft loaves & buns', 'Crisp tea-time rusks & biscuits'],
  },
  {
    id: 'sweets',
    title: 'Sweets',
    subtitle: 'Classic Mithai',
    image: catSweetsImg,
    imageAlt: 'Traditional Indian sweets including gulab jamun, kaju katli, and laddoo',
    description:
      'Rich traditional Indian sweets curated for festivals, family hospitality, and thoughtful takeaway gift packs.',
    points: ['Traditional syrupy & dry sweets', 'Family takeaway packs', 'Festive assortments'],
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-dining',
    title: 'Comfortable Family Dining',
    category: 'Restaurant Atmosphere',
    image: aboutDiningImg,
    alt: 'Inviting dining space with warm lighting and comfortable seating',
    span: 'tall',
  },
  {
    id: 'gal-biryani',
    title: 'Copper Handi Biryani',
    category: 'Biryani',
    image: heroFeastImg,
    alt: 'Steaming Indian biryani served in a copper handi with raita',
    span: 'wide',
  },
  {
    id: 'gal-bakery-showcase',
    title: 'The Bakery Showcase',
    category: 'Bakery Products',
    image: bakeryCounterImg,
    alt: 'Illuminated glass counter displaying cakes, pastries, and baked puffs',
    span: 'normal',
  },
  {
    id: 'gal-cakes',
    title: 'Celebration Cakes & Pastries',
    category: 'Cakes',
    image: catCakesImg,
    alt: 'Assorted cream cakes and chocolate pastries on marble stands',
    span: 'normal',
  },
  {
    id: 'gal-specials',
    title: 'Kitchen Curries & Tandoor',
    category: 'Food Photography',
    image: catSpecialsImg,
    alt: 'Butter masala curry, tandoori skewers, and garlic naan',
    span: 'normal',
  },
  {
    id: 'gal-puffs',
    title: 'Oven-Fresh Puffs & Rusks',
    category: 'Bakery Products',
    image: catBakeryImg,
    alt: 'Freshly baked golden puffs, soft buns, and tea rusks',
    span: 'normal',
  },
  {
    id: 'gal-sweets',
    title: 'Traditional Indian Sweets',
    category: 'Sweets',
    image: catSweetsImg,
    alt: 'Platter of gulab jamun, kaju katli, laddoo, and mysore pak',
    span: 'normal',
  },
  {
    id: 'gal-snacks',
    title: 'Crisp Evening Snacks',
    category: 'Snacks',
    image: catSnacksImg,
    alt: 'Crispy golden samosas and pakoras served with chutneys',
    span: 'normal',
  },
];

export const REVIEW_THEMES = [
  {
    id: 'portions',
    title: 'Generous portions',
    summary: 'Guests frequently appreciate satisfying serving sizes across meals and biryani plates.',
    icon: 'Utensils',
  },
  {
    id: 'prices',
    title: 'Reasonable prices',
    summary: 'Recognised by diners for offering good everyday value for families and groups.',
    icon: 'Wallet',
  },
  {
    id: 'staff',
    title: 'Polite staff',
    summary: 'Courteous and attentive counter and table hospitality throughout the day.',
    icon: 'Smile',
  },
  {
    id: 'service',
    title: 'Quick service',
    summary: 'Prompt preparation and smooth handling for both dine-in orders and quick takeaways.',
    icon: 'Clock',
  },
  {
    id: 'dining',
    title: 'Pleasant dining experience',
    summary: 'A welcoming atmosphere in Gopal Nagar suited for casual meals and bakery visits.',
    icon: 'Sparkles',
  },
];
