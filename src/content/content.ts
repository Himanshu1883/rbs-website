import type { StaticImageData } from "next/image";

import bridalChandelier from "@/assets/images/bridal-red-chandelier.jpg";
import bridalPaisley from "@/assets/images/bridal-red-paisley.jpg";
import bridalNeonSign from "@/assets/images/bridal-neon-sign.jpg";
import bridalPinkBraid from "@/assets/images/bridal-pink-braid.jpg";
import bridalOutdoorMaroon from "@/assets/images/bridal-outdoor-maroon.jpg";
import bridalYellowHenna from "@/assets/images/bridal-yellow-henna.jpg";
import bridalMaroonLilies from "@/assets/images/bridal-maroon-lilies.jpg";
import bridalYellowWithRachna from "@/assets/images/bridal-yellow-with-rachna.jpg";
import partyChinHand from "@/assets/images/party-orange-chin-hand.jpg";
import partyEarring from "@/assets/images/party-orange-earring.jpg";
import partySilverGown from "@/assets/images/party-silver-gown.jpg";
import partyPinkEmerald from "@/assets/images/party-pink-emerald.jpg";
import hairOmbreSalon from "@/assets/images/hair-ombre-salon.jpg";
import hairGoldBraid from "@/assets/images/hair-gold-braid.jpg";
import hairAuburnCurls from "@/assets/images/hair-auburn-curls.jpg";
import mensGroomingChair from "@/assets/images/mens-grooming-chair.jpg";
import ownerPortrait from "@/assets/images/owner-rachna-portrait.jpg";
import ownerFull from "@/assets/images/owner-rachna-full.jpg";
import ownerLogoWall from "@/assets/images/owner-rachna-logo-wall.jpg";
import studioLogoWall from "@/assets/images/studio-working-logo-wall.jpeg";
import studioMirror from "@/assets/images/studio-working-mirror.jpeg";
import studioGlamorous from "@/assets/images/studio-glamorous-moments.jpg";
import studioMakeupSession from "@/assets/images/studio-makeup-session.jpg";
import studioGaneshBlessing from "@/assets/images/studio-ganesh-blessing.jpg";
import sittingConsult from "@/assets/images/sitting-consult.jpg";
import sittingTrial from "@/assets/images/sitting-trial.jpg";
import sittingTheDay from "@/assets/images/sitting-the-day.jpg";
import heroStudioEnsemble from "@/assets/images/hero-studio-ensemble.jpg";
import heroStudioLineup from "@/assets/images/hero-studio-lineup.jpg";
import beforeBridalBraid from "@/assets/images/before-bridal-braid.jpg";
import afterBridalBraid from "@/assets/images/after-bridal-braid.jpg";
import beforeBridalMaroon from "@/assets/images/before-bridal-maroon.jpg";
import afterBridalMaroon from "@/assets/images/after-bridal-maroon.jpg";
import beforePartyEmerald from "@/assets/images/before-party-emerald.jpg";
import afterPartyEmerald from "@/assets/images/after-party-emerald.jpg";
import beforePartySilver from "@/assets/images/before-party-silver.jpg";
import afterPartySilver from "@/assets/images/after-party-silver.jpg";
import logoSource from "@/assets/images/logo-source.jpeg";

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
  bridalNeonSign: {
    src: bridalNeonSign,
    alt: "Bride in a yellow dupatta and embroidered lehenga in front of the RBS Make-Over neon sign",
    objectPosition: "50% 12%",
  },
  bridalPinkBraid: {
    src: bridalPinkBraid,
    alt: "Bridal makeup with a gold-wrapped braid, nath and polki jewellery in a pink embroidered lehenga",
    objectPosition: "50% 12%",
  },
  bridalOutdoorMaroon: {
    src: bridalOutdoorMaroon,
    alt: "Outdoor bridal portrait in maroon dupatta with kundan jewellery and red chooda",
    objectPosition: "50% 16%",
  },
  bridalYellowHenna: {
    src: bridalYellowHenna,
    alt: "Bride in yellow dupatta with hennaed hands, nath and emerald jewellery",
    objectPosition: "50% 18%",
  },
  bridalMaroonLilies: {
    src: bridalMaroonLilies,
    alt: "Bridal makeup in maroon and gold with polki jewellery beside white lilies",
    objectPosition: "50% 18%",
  },
  bridalYellowWithRachna: {
    src: bridalYellowWithRachna,
    alt: "Rachna Bhardwaj with a bride in a yellow dupatta and embroidered lehenga",
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
  partySilverGown: {
    src: partySilverGown,
    alt: "Party glam with copper waves, sapphire necklace and a crystal gown",
    objectPosition: "50% 18%",
  },
  partyPinkEmerald: {
    src: partyPinkEmerald,
    alt: "Party makeup with emerald jewellery, maang tikka and a pink embroidered blouse",
    objectPosition: "50% 16%",
  },
  hairOmbreSalon: {
    src: hairOmbreSalon,
    alt: "Long ombre hair colour finished in the RBS Make-Over salon chair",
    objectPosition: "50% 22%",
  },
  hairGoldBraid: {
    src: hairGoldBraid,
    alt: "Bridal braid wrapped in gold jewellery and finished with a shell and pearl paranda",
    objectPosition: "50% 18%",
  },
  hairAuburnCurls: {
    src: hairAuburnCurls,
    alt: "Glossy auburn curls with pearl pins, styled at RBS Make-Over",
    objectPosition: "50% 40%",
  },
  mensGroomingChair: {
    src: mensGroomingChair,
    alt: "Men's haircut and grooming in the RBS Make-Over chair",
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
  ownerLogoWall: {
    src: ownerLogoWall,
    alt: "Rachna Bhardwaj in a Banarasi saree in front of the RBS Make-Over logo wall",
    objectPosition: "50% 12%",
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
  studioMakeupSession: {
    src: studioMakeupSession,
    alt: "Rachna Bhardwaj finishing a bridal look in front of the RBS Make-Over logo wall",
    objectPosition: "50% 20%",
  },
  studioGaneshBlessing: {
    src: studioGaneshBlessing,
    alt: "Rachna Bhardwaj with a bride holding a marigold-adorned Ganesh idol at the studio",
    objectPosition: "50% 18%",
  },
  sittingConsult: {
    src: sittingConsult,
    alt: "Rachna Bhardwaj applying makeup to a client at the RBS Make-Over logo wall",
    objectPosition: "50% 18%",
  },
  sittingTrial: {
    src: sittingTrial,
    alt: "Close-up of bridal eye makeup, lashes, nath and polki jewellery",
    objectPosition: "50% 42%",
  },
  sittingTheDay: {
    src: sittingTheDay,
    alt: "Finished bridal look with gold-wrapped braid, nath and pink embroidered lehenga",
    objectPosition: "50% 12%",
  },
  heroStudioEnsemble: {
    src: heroStudioEnsemble,
    alt: "Rachna Bhardwaj with bridal and party looks from RBS Make-Over",
    objectPosition: "50% 42%",
  },
  heroStudioLineup: {
    src: heroStudioLineup,
    alt: "Rachna Bhardwaj with brides at RBS Make-Over studio",
    objectPosition: "50% 45%",
  },
  beforeBridalBraid: {
    src: beforeBridalBraid,
    alt: "Client before bridal makeup",
    objectPosition: "50% 18%",
  },
  afterBridalBraid: {
    src: afterBridalBraid,
    alt: "Bridal makeup with gold-wrapped braid, nath and polki jewellery",
    objectPosition: "50% 12%",
  },
  beforeBridalMaroon: {
    src: beforeBridalMaroon,
    alt: "Client before bridal makeup at RBS Make-Over",
    objectPosition: "50% 18%",
  },
  afterBridalMaroon: {
    src: afterBridalMaroon,
    alt: "Outdoor bridal portrait in maroon dupatta with kundan jewellery",
    objectPosition: "50% 16%",
  },
  beforePartyEmerald: {
    src: beforePartyEmerald,
    alt: "Client before party makeup",
    objectPosition: "50% 16%",
  },
  afterPartyEmerald: {
    src: afterPartyEmerald,
    alt: "Party makeup with emerald jewellery and a pink embroidered blouse",
    objectPosition: "50% 16%",
  },
  beforePartySilver: {
    src: beforePartySilver,
    alt: "Client before hair colour and party glam",
    objectPosition: "50% 18%",
  },
  afterPartySilver: {
    src: afterPartySilver,
    alt: "Party glam with copper waves and a crystal gown",
    objectPosition: "50% 18%",
  },
  logoSource: {
    src: logoSource,
    alt: "RBS Make-Over unisex makeup studio logo",
    objectPosition: "50% 50%",
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
  {
    src: "/reels/makeup-in-chair.mp4",
    title: "In the chair",
  },
  {
    src: "/reels/studio-glam.mp4",
    title: "Studio glam",
  },
  {
    src: "/reels/bridal-closeup.mp4",
    title: "Bridal close-up",
  },
  {
    src: "/reels/look-complete.mp4",
    title: "Look complete",
  },
];

export const hero = {
  eyebrow: "Unisex makeup studio · Delhi NCR",
  title: "Where every face becomes a celebration.",
  subtitle:
    "Bridal HD and airbrush, party glam, hair and men's grooming — by Rachna Bhardwaj, certified at Chandni Singh Makeup Academy.",
  primaryCta: { href: "#contact", label: "Book your look" },
  secondaryCta: { href: "#gallery", label: "View the work" },
  panels: [images.heroStudioEnsemble, images.heroStudioLineup],
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

export const services: Array<{
  id: string;
  number: string;
  title: string;
  price: string;
  description: string;
  images: SiteImage[];
  bullets: string[];
}> = [
  {
    id: "bridal",
    number: "01",
    title: "Bridal",
    price: "From ₹10,000",
    description:
      "HD, airbrush and celebrity bridal looks with hairdo, lashes and saree draping. Built for pheras, photographs and a long day of joy.",
    images: [
      images.bridalYellowHenna,
      images.bridalNeonSign,
      images.bridalPaisley,
      images.bridalChandelier,
    ],
    bullets: ["Bridal HD", "Airbrush", "Celebrity finish", "Trial available"],
  },
  {
    id: "party",
    number: "02",
    title: "Party & occasion",
    price: "Ask for today's lookbook",
    description:
      "Smoky, shimmer and soft-glam makeup for receptions, engagements, festivals and nights that deserve a second glance.",
    images: [
      images.partyChinHand,
      images.partyEarring,
      images.partySilverGown,
      images.partyPinkEmerald,
    ],
    bullets: ["Reception", "Engagement", "Festive", "Soft glam"],
  },
  {
    id: "hair",
    number: "03",
    title: "Hair studio",
    price: "Cut · colour · style",
    description:
      "Cuts, colour, spa and occasion hair — from sleek updos to the kind of movement that photographs like silk.",
    images: [
      images.hairAuburnCurls,
      images.hairGoldBraid,
      images.hairOmbreSalon,
    ],
    bullets: ["Cut & finish", "Colour", "Occasion hair", "Hair spa"],
  },
  {
    id: "mens",
    number: "04",
    title: "Men's grooming",
    price: "Unisex studio",
    description:
      "Beard, cut and grooming for grooms, guests and everyday sharpness. A unisex studio, not an afterthought.",
    images: [images.mensGroomingChair],
    bullets: ["Haircut", "Beard", "Groom look", "Styling"],
  },
];

export const showcase = [
  {
    id: "bridal",
    number: "01",
    title: "Bridal",
    kicker: "Pheras, portraits, forever.",
    copy: "Maroon, yellow, polki and a face that still looks like you. Rachna's bridal work is built for close-ups — eyes, jewellery and skin in the same frame.",
    images: [images.bridalMaroonLilies, images.bridalYellowWithRachna],
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
    copy: "Glossy auburn curls against the RBS Make-Over wall — colour and occasion hair that sits beside the makeup chair, not after it.",
    images: [images.hairAuburnCurls, images.hairGoldBraid],
  },
];

export const about = {
  eyebrow: "The artist",
  title: "Rachna Bhardwaj",
  lead: "Founder of RBS Make-Over. Makeup artist, bridal specialist, and the pair of hands behind the pink face-line on the studio wall.",
  body: [
    "Rachna trained at Chandni Singh Makeup Academy and built a unisex studio around one idea: makeup should feel like you, only more luminous. Bridal HD and airbrush, party glam, hair and men's grooming all sit under the same roof.",
    "The work on this site is hers — lehengas, polki, smoky eyes, and the Banarasi on the logo wall. The chair, the mirror lights and the pink face-line are the same room you walk into.",
  ],
  certification: "Certified by Chandni Singh Makeup Academy",
  products:
    "MAC, Huda Beauty, Kryolan, Bobbi Brown, Chanel, Anastasia Beverly Hills, Sephora, Inglot and more.",
};

export const processSteps: Array<{
  number: string;
  title: string;
  copy: string;
  image?: SiteImage;
}> = [
  {
    number: "01",
    title: "Consult",
    copy: "Share the outfit, the light, the hour you'll be seen. Rachna maps skin, jewellery and hair before a brush is lifted.",
    image: images.sittingConsult,
  },
  {
    number: "02",
    title: "Trial",
    copy: "A paid trial locks the brief — base, eyes, hairdo — so the event morning is calm, not experimental.",
    image: images.sittingTrial,
  },
  {
    number: "03",
    title: "The day",
    copy: "Studio or on-location. HD or airbrush. Lashes, draping and a last look in the mirror before you walk out.",
    image: images.sittingTheDay,
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

export const galleryFilters = ["All", "Bridal", "Party", "Hair", "Men's", "Studio"] as const;
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
    id: "neon-sign",
    image: images.bridalNeonSign,
    category: "Bridal" as GalleryFilter,
  },
  {
    id: "yellow-henna",
    image: images.bridalYellowHenna,
    category: "Bridal" as GalleryFilter,
  },
  {
    id: "pink-braid",
    image: images.bridalPinkBraid,
    category: "Bridal" as GalleryFilter,
  },
  {
    id: "outdoor-maroon",
    image: images.bridalOutdoorMaroon,
    category: "Bridal" as GalleryFilter,
  },
  {
    id: "maroon-lilies",
    image: images.bridalMaroonLilies,
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
  {
    id: "silver-gown",
    image: images.partySilverGown,
    category: "Party" as GalleryFilter,
  },
  {
    id: "pink-emerald",
    image: images.partyPinkEmerald,
    category: "Party" as GalleryFilter,
  },
  {
    id: "auburn-curls",
    image: images.hairAuburnCurls,
    category: "Hair" as GalleryFilter,
  },
  {
    id: "gold-braid",
    image: images.hairGoldBraid,
    category: "Hair" as GalleryFilter,
  },
  {
    id: "ombre-salon",
    image: images.hairOmbreSalon,
    category: "Hair" as GalleryFilter,
  },
  {
    id: "mens-chair",
    image: images.mensGroomingChair,
    category: "Men's" as GalleryFilter,
  },
  {
    id: "glamorous",
    image: images.studioGlamorous,
    category: "Studio" as GalleryFilter,
  },
  {
    id: "ganesh",
    image: images.studioGaneshBlessing,
    category: "Studio" as GalleryFilter,
  },
];

export const beforeAfter = [
  {
    id: "bridal-braid",
    label: "Bridal HD",
    before: images.beforeBridalBraid,
    after: images.afterBridalBraid,
  },
  {
    id: "bridal-maroon",
    label: "Bridal lehenga",
    before: images.beforeBridalMaroon,
    after: images.afterBridalMaroon,
  },
  {
    id: "party-emerald",
    label: "Party glam",
    before: images.beforePartyEmerald,
    after: images.afterPartyEmerald,
  },
  {
    id: "party-silver",
    label: "Hair & evening",
    before: images.beforePartySilver,
    after: images.afterPartySilver,
  },
];

export const testimonials = [
  {
    quote:
      "I looked like myself, only more luminous. The jewellery and the eyes sat in the same photograph — nothing fought for attention.",
    name: "A bridal client",
  },
  {
    quote:
      "Party makeup that lasted the whole reception. Smoky, warm, and still comfortable by the last dance.",
    name: "A party booking",
  },
  {
    quote:
      "The studio wall, the chair, the calm. It felt like a real house of makeup, not a kit arriving at the door.",
    name: "A studio visit",
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
