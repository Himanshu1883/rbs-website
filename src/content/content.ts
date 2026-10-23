import type { StaticImageData } from "next/image";

import bridalChandelier from "@/assets/images/bridal-red-chandelier.jpg";
import bridalPaisley from "@/assets/images/bridal-red-paisley.jpg";
import partyChinHand from "@/assets/images/party-orange-chin-hand.jpg";
import partyEarring from "@/assets/images/party-orange-earring.jpg";
import ownerPortrait from "@/assets/images/owner-rachna-portrait.jpg";
import ownerFull from "@/assets/images/owner-rachna-full.jpg";
import studioLogoWall from "@/assets/images/studio-working-logo-wall.jpeg";
import studioMirror from "@/assets/images/studio-working-mirror.jpeg";
import studioGlamorous from "@/assets/images/studio-glamorous-moments.jpg";
import logoSource from "@/assets/images/logo-source.jpeg";

import stockHairStyling from "@/assets/stock/hair-styling.webp";
import stockSalonInterior from "@/assets/stock/salon-interior.webp";
import stockHairWash from "@/assets/stock/hair-wash.webp";
import stockMensGrooming from "@/assets/stock/mens-grooming.webp";
import stockMakeupBrushes from "@/assets/stock/makeup-brushes.webp";
import stockMakeupProducts from "@/assets/stock/makeup-products.webp";
import stockHairColor from "@/assets/stock/hair-color.webp";
import stockHairSalonCut from "@/assets/stock/hair-salon-cut.webp";
import stockBrideUpdo from "@/assets/stock/bride-updo.webp";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  objectPosition?: string;
  maxDisplayWidth?: number;
  isStock?: boolean;
  credit?: string;
  photographerUrl?: string;
};

export const site = {
  name: "RBS Make-Over",
  legalName: "RBS Make-Over",
  shortName: "RBS",
  tagline: "The art of looking unforgettable.",
  description:
    "Unisex makeup, bridal artistry, hair and grooming by Rachna Bhardwaj — certified by Chandni Singh Makeup Academy.",
  owner: "Rachna Bhardwaj",
  academy: "Chandni Singh Makeup Academy",
  location: "Delhi NCR",
  locationNote: "Studio visits by appointment. Exact address confirmed on booking.",
  hours: "By appointment",
  phone: "+91 73476 87124",
  phoneHref: "tel:+917347687124",
  whatsapp: "917347687124",
  instagram: "https://www.instagram.com/rbsmakeoverstudio/",
  instagramHandle: "@rbsmakeoverstudio",
  instagramFollowers: "2,500+",
  email: "",
  accent: "#E6007E",
  gold: "#C9A24B",
};

export const images: Record<string, SiteImage> = {
  bridalChandelier: {
    src: bridalChandelier,
    alt: "Bride in red sequin lehenga with emerald and diamond jewellery, bridal makeup by Rachna Bhardwaj",
    objectPosition: "50% 18%",
  },
  bridalPaisley: {
    src: bridalPaisley,
    alt: "Bridal makeup with golden shimmer eyes and red lehenga",
    objectPosition: "50% 18%",
  },
  partyChinHand: {
    src: partyChinHand,
    alt: "Party makeup look with orange lehenga and pearl jewellery",
    objectPosition: "50% 16%",
  },
  partyEarring: {
    src: partyEarring,
    alt: "Smoky eye party makeup with orange lehenga and polki jewellery",
    objectPosition: "50% 18%",
  },
  ownerPortrait: {
    src: ownerPortrait,
    alt: "Rachna Bhardwaj, professional makeup artist and founder of RBS Make-Over",
    objectPosition: "50% 12%",
  },
  ownerFull: {
    src: ownerFull,
    alt: "Rachna Bhardwaj, professional makeup artist and founder of RBS Make-Over",
    objectPosition: "50% 10%",
  },
  studioLogoWall: {
    src: studioLogoWall,
    alt: "Rachna Bhardwaj applying makeup to a client at RBS Make-Over studio",
    objectPosition: "50% 20%",
    maxDisplayWidth: 340,
  },
  studioMirror: {
    src: studioMirror,
    alt: "Rachna Bhardwaj applying makeup to a client at RBS Make-Over studio",
    objectPosition: "50% 20%",
    maxDisplayWidth: 230,
  },
  studioGlamorous: {
    src: studioGlamorous,
    alt: "Rachna Bhardwaj applying makeup to a client at RBS Make-Over studio",
    objectPosition: "40% 30%",
  },
  logoSource: {
    src: logoSource,
    alt: "RBS Make-Over unisex makeup studio logo",
    objectPosition: "50% 50%",
  },
  // REPLACE WITH CLIENT PHOTO
  stockHairStyling: {
    src: stockHairStyling,
    alt: "Hair styling in a salon chair",
    objectPosition: "50% 20%",
    isStock: true,
    credit: "Adam Winger / Unsplash",
    photographerUrl: "https://unsplash.com/photos/FkAZqQJTbXM",
  },
  // REPLACE WITH CLIENT PHOTO
  stockSalonInterior: {
    src: stockSalonInterior,
    alt: "Luxury salon interior with styling chairs",
    objectPosition: "50% 50%",
    isStock: true,
    credit: "Adam Winger / Unsplash",
    photographerUrl: "https://unsplash.com/photos/M4R8iaqPVp8",
  },
  // REPLACE WITH CLIENT PHOTO
  stockHairWash: {
    src: stockHairWash,
    alt: "Hair wash and salon conversation",
    objectPosition: "50% 20%",
    isStock: true,
    credit: "Adam Winger / Unsplash",
    photographerUrl: "https://unsplash.com/photos/WDmvpGs2060",
  },
  // REPLACE WITH CLIENT PHOTO
  stockMensGrooming: {
    src: stockMensGrooming,
    alt: "Men's beard grooming with clippers",
    objectPosition: "50% 20%",
    isStock: true,
    credit: "Amanda Vick / Unsplash",
    photographerUrl: "https://unsplash.com/photos/rhjvSdEYlqg",
  },
  // REPLACE WITH CLIENT PHOTO
  stockMakeupBrushes: {
    src: stockMakeupBrushes,
    alt: "Makeup brushes on a warm-toned surface",
    objectPosition: "50% 50%",
    isStock: true,
    credit: "Shamblen Studios / Unsplash",
    photographerUrl: "https://unsplash.com/photos/xwM61TPMlYk",
  },
  // REPLACE WITH CLIENT PHOTO
  stockMakeupProducts: {
    src: stockMakeupProducts,
    alt: "Assorted makeup products on a grey surface",
    objectPosition: "50% 50%",
    isStock: true,
    credit: "Element5 Digital / Unsplash",
    photographerUrl: "https://unsplash.com/photos/ceWgSMd8rvQ",
  },
  // REPLACE WITH CLIENT PHOTO
  stockHairColor: {
    src: stockHairColor,
    alt: "Warm copper hair colour in motion",
    objectPosition: "50% 30%",
    isStock: true,
    credit: "George Bohunicky / Unsplash",
    photographerUrl: "https://unsplash.com/photos/qJKT2rMU0VU",
  },
  // REPLACE WITH CLIENT PHOTO
  stockHairSalonCut: {
    src: stockHairSalonCut,
    alt: "Woman getting a haircut in a salon",
    objectPosition: "50% 20%",
    isStock: true,
    credit: "Ionela Mat / Unsplash",
    photographerUrl: "https://unsplash.com/photos/VJ1GXgakFOs",
  },
  // REPLACE WITH CLIENT PHOTO
  stockBrideUpdo: {
    src: stockBrideUpdo,
    alt: "Bridal hair styled in an elegant updo",
    objectPosition: "50% 18%",
    isStock: true,
    credit: "Alexander Mass / Unsplash",
    photographerUrl: "https://unsplash.com/photos/uXG_pkbauk8",
  },
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#instagram", label: "Reels" },
  { href: "#contact", label: "Book" },
];

export const reels = [
  {
    src: "/reels/bridal-transform.mp4",
    title: "Bridal transformation",
  },
  {
    src: "/reels/bridal-glow.mp4",
    title: "Bridal glow",
  },
  {
    src: "/reels/glam-look.mp4",
    title: "Flawless glam",
  },
  {
    src: "/reels/client-love.mp4",
    title: "Client love",
  },
];

export const hero = {
  eyebrow: "Unisex makeup studio · Delhi NCR",
  title: "Where every face becomes a celebration.",
  subtitle:
    "Bridal HD and airbrush, party glam, hair and men's grooming — by Rachna Bhardwaj, certified at Chandni Singh Makeup Academy.",
  primaryCta: { href: "#contact", label: "Book your look" },
  secondaryCta: { href: "#gallery", label: "View the work" },
  panels: [images.bridalChandelier, images.partyEarring, images.bridalPaisley],
};

export const marqueeItems = [
  "Bridal HD",
  "Airbrush",
  "Party glam",
  "Hair studio",
  "Men's grooming",
  "Pre-bridal",
  "Saree draping",
  "Unisex",
  "MAC · Huda · Kryolan",
  "Chandni Singh certified",
];

export const services = [
  {
    id: "bridal",
    number: "01",
    title: "Bridal",
    price: "From ₹10,000",
    description:
      "HD, airbrush and celebrity bridal looks with hairdo, lashes and saree draping. Built for pheras, photographs and a long day of joy.",
    image: images.bridalPaisley,
    bullets: ["Bridal HD", "Airbrush", "Celebrity finish", "Trial available"],
  },
  {
    id: "party",
    number: "02",
    title: "Party & occasion",
    price: "Ask for today's lookbook",
    description:
      "Smoky, shimmer and soft-glam makeup for receptions, engagements, festivals and nights that deserve a second glance.",
    image: images.partyChinHand,
    bullets: ["Reception", "Engagement", "Festive", "Soft glam"],
  },
  {
    id: "hair",
    number: "03",
    title: "Hair studio",
    price: "Cut · colour · style",
    description:
      "Cuts, colour, spa and occasion hair — from sleek updos to the kind of movement that photographs like silk.",
    image: images.stockHairSalonCut, // REPLACE WITH CLIENT PHOTO
    bullets: ["Cut & finish", "Colour", "Occasion hair", "Hair spa"],
  },
  {
    id: "mens",
    number: "04",
    title: "Men's grooming",
    price: "Unisex studio",
    description:
      "Beard, cut and grooming for grooms, guests and everyday sharpness. A unisex studio, not an afterthought.",
    image: images.stockMensGrooming, // REPLACE WITH CLIENT PHOTO
    bullets: ["Haircut", "Beard", "Groom look", "Styling"],
  },
];

export const showcase = [
  {
    id: "bridal",
    number: "01",
    title: "Bridal",
    kicker: "Pheras, portraits, forever.",
    copy: "Emerald, polki and red sequins against a face that still looks like you. Rachna's bridal work is built for close-ups — eyes, jewellery and skin in the same frame.",
    images: [images.bridalChandelier, images.bridalPaisley],
  },
  {
    id: "party",
    number: "02",
    title: "Party",
    kicker: "Smoky eyes. Warm gold. Night light.",
    copy: "Orange lehenga, pearl and polki, a hand at the earring. Party makeup that photographs rich and wears comfortably from the first toast to the last song.",
    images: [images.partyChinHand, images.partyEarring],
  },
  {
    id: "hair",
    number: "03",
    title: "Hair",
    kicker: "Colour, cut, occasion hair.",
    copy: "A full hair desk sits beside the makeup chair. Swap this stock frame for Rachna's own colour and styling photos as soon as they arrive.",
    images: [images.stockHairSalonCut, images.stockHairStyling], // REPLACE WITH CLIENT PHOTO
  },
  {
    id: "mens",
    number: "04",
    title: "Men's grooming",
    kicker: "Groom-ready. Everyday sharp.",
    copy: "Beard, cut and a clean finish for the men in the wedding party — and for anyone who wants the unisex studio treatment.",
    images: [images.stockMensGrooming, images.stockHairWash], // REPLACE WITH CLIENT PHOTO
  },
];

export const about = {
  eyebrow: "The artist",
  title: "Rachna Bhardwaj",
  lead: "Founder of RBS Make-Over. Makeup artist, bridal specialist, and the pair of hands behind the pink face-line on the studio wall.",
  body: [
    "Rachna trained at Chandni Singh Makeup Academy and built a unisex studio around one idea: makeup should feel like you, only more luminous. Bridal HD and airbrush, party glam, hair and men's grooming all sit under the same roof.",
    "The work on this site is hers — red lehengas, polki, smoky eyes, the cream-and-red Banarasi. The two behind-the-scenes frames are from her real studio, shot in front of the RBS Make-Over logo wall.",
  ],
  certification: "Certified by Chandni Singh Makeup Academy",
  products:
    "MAC, Huda Beauty, Kryolan, Bobbi Brown, Chanel, Anastasia Beverly Hills, Sephora, Inglot and more.",
};

export const processSteps = [
  {
    number: "01",
    title: "Consult",
    copy: "Share the outfit, the light, the hour you'll be seen. Rachna maps skin, jewellery and hair before a brush is lifted.",
    image: images.studioLogoWall,
  },
  {
    number: "02",
    title: "Trial",
    copy: "A paid trial locks the brief — base, eyes, hairdo — so the event morning is calm, not experimental.",
    image: images.studioMirror,
  },
  {
    number: "03",
    title: "The day",
    copy: "Studio or on-location. HD or airbrush. Lashes, draping and a last look in the mirror before you walk out.",
    image: images.studioGlamorous,
  },
];

export const whyUs = [
  {
    title: "A real studio",
    copy: "The logo wall is hers. You are not booking a travelling kit with nowhere to sit — you are walking into RBS Make-Over.",
  },
  {
    title: "Academy-trained",
    copy: "Certified by Chandni Singh Makeup Academy, with a bridal vocabulary built for Indian skin, jewellery and ceremony light.",
  },
  {
    title: "Unisex, on purpose",
    copy: "Bridal, party, hair and men's grooming under one name. The groom's chair is not a side note.",
  },
  {
    title: "Pro kits",
    copy: "MAC, Huda, Kryolan, Bobbi Brown, Chanel — event makeup that lasts from pheras to the last photograph.",
  },
];

export const galleryFilters = ["All", "Bridal", "Party", "Studio"] as const;
export type GalleryFilter = (typeof galleryFilters)[number];

export const gallery = [
  {
    id: "chandelier",
    image: images.bridalChandelier,
    category: "Bridal" as GalleryFilter,
  },
  {
    id: "paisley",
    image: images.bridalPaisley,
    category: "Bridal" as GalleryFilter,
  },
  {
    id: "chin-hand",
    image: images.partyChinHand,
    category: "Party" as GalleryFilter,
  },
  {
    id: "earring",
    image: images.partyEarring,
    category: "Party" as GalleryFilter,
  },
];

export const instagramTiles: Array<{
  id: string;
  image?: SiteImage;
  placeholder?: boolean;
}> = [
  { id: "1", image: images.bridalChandelier },
  { id: "2", image: images.bridalPaisley },
  { id: "3", image: images.partyChinHand },
  { id: "4", image: images.partyEarring },
  { id: "5", placeholder: true },
  { id: "6", placeholder: true },
  { id: "7", placeholder: true },
  { id: "8", placeholder: true },
  { id: "9", placeholder: true },
];

export const testimonials = [
  {
    quote:
      "I looked like myself, only more luminous. The jewellery and the eyes sat in the same photograph — nothing fought for attention.",
    name: "A bridal client",
    meta: "Placeholder note — replace with a real review",
    isPlaceholder: true,
  },
  {
    quote:
      "Party makeup that lasted the whole reception. Smoky, warm, and still comfortable by the last dance.",
    name: "A party booking",
    meta: "Placeholder note — replace with a real review",
    isPlaceholder: true,
  },
  {
    quote:
      "The studio wall, the chair, the calm. It felt like a real house of makeup, not a kit arriving at the door.",
    name: "A studio visit",
    meta: "Placeholder note — replace with a real review",
    isPlaceholder: true,
  },
];

export const bookingServices = [
  "Bridal HD",
  "Bridal airbrush",
  "Party makeup",
  "Engagement",
  "Hair",
  "Men's grooming",
  "Pre-bridal",
  "Other",
];
