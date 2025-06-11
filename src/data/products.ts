export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  sizes: number[];
  colors: string[];
  category: string;
  reviewsCount: number;
  description: string;
}

export const products: Product[] = [
  {
    id: "shoe1",
    name: "Nike Air Max 270",
    price: 150.0,
    image: "/images/nike-air-max-270.jpg",
    rating: 4.6,
    sizes: [39, 40, 41, 42, 43],
    colors: ["black", "white", "blue"],
    category: "Sneakers",
    reviewsCount: 134,
    description: "Breathable mesh upper with Max Air cushioning for all-day comfort."
  },
  {
    id: "shoe2",
    name: "Adidas Ultraboost 22",
    price: 180.0,
    image: "/images/adidas-ultraboost-22.jpg",
    rating: 4.8,
    sizes: [40, 41, 42, 43],
    colors: ["black", "gray"],
    category: "Running",
    reviewsCount: 98,
    description: "Responsive running shoes with Primeknit upper and Boost sole."
  },
  {
    id: "shoe3",
    name: "New Balance 990v5",
    price: 175.0,
    image: "/images/nb-990v5.jpg",
    rating: 4.7,
    sizes: [39, 40, 41, 42],
    colors: ["navy", "gray"],
    category: "Casual",
    reviewsCount: 87,
    description: "Premium craftsmanship with comfortable everyday wear."
  },
  {
    id: "shoe4",
    name: "Puma RS-X",
    price: 120.0,
    image: "/images/puma-rsx.jpg",
    rating: 4.5,
    sizes: [38, 39, 40, 41, 42],
    colors: ["white", "red", "black"],
    category: "Sneakers",
    reviewsCount: 76,
    description: "Bold colors and retro design in a modern silhouette."
  },
  {
    id: "shoe5",
    name: "Asics Gel-Kayano 28",
    price: 160.0,
    image: "/images/asics-gel-kayano-28.jpg",
    rating: 4.9,
    sizes: [39, 40, 41, 42, 43],
    colors: ["blue", "gray"],
    category: "Running",
    reviewsCount: 102,
    description: "Stable and cushioned long-distance running shoes."
  },
  {
    id: "shoe6",
    name: "Nike Air Force 1",
    price: 110.0,
    image: "/images/nike-air-force-1.jpg",
    rating: 4.8,
    sizes: [38, 39, 40, 41, 42],
    colors: ["white", "black"],
    category: "Sneakers",
    reviewsCount: 150,
    description: "Classic leather sneakers with a timeless look."
  },
  {
    id: "shoe7",
    name: "Adidas NMD R1",
    price: 140.0,
    image: "/images/adidas-nmd-r1.jpg",
    rating: 4.7,
    sizes: [39, 40, 41, 42, 43],
    colors: ["black", "red"],
    category: "Casual",
    reviewsCount: 88,
    description: "Street-ready design with ultra-comfortable Boost sole."
  },
  {
    id: "shoe8",
    name: "Vans Old Skool",
    price: 70.0,
    image: "/images/vans-old-skool.jpg",
    rating: 4.5,
    sizes: [38, 39, 40, 41],
    colors: ["black", "white"],
    category: "Casual",
    reviewsCount: 105,
    description: "Iconic skate shoes with classic stripe and durable canvas."
  },
  {
    id: "shoe9",
    name: "Reebok Classic Leather",
    price: 90.0,
    image: "/images/reebok-classic-leather.jpg",
    rating: 4.4,
    sizes: [40, 41, 42],
    colors: ["white", "beige"],
    category: "Casual",
    reviewsCount: 72,
    description: "Timeless silhouette with soft leather and comfy sole."
  },
  {
    id: "shoe10",
    name: "Converse Chuck 70",
    price: 85.0,
    image: "/images/converse-chuck-70.jpg",
    rating: 4.6,
    sizes: [38, 39, 40, 41, 42],
    colors: ["white", "navy"],
    category: "Sneakers",
    reviewsCount: 110,
    description: "Vintage-inspired high tops with modern durability."
  },
  {
    id: "shoe11",
    name: "Saucony Triumph 20",
    price: 160.0,
    image: "/images/saucony-triumph-20.jpg",
    rating: 4.8,
    sizes: [40, 41, 42, 43],
    colors: ["gray", "lime"],
    category: "Running",
    reviewsCount: 92,
    description: "Max cushioned trainer for smooth and responsive rides."
  },
  {
    id: "shoe12",
    name: "On Cloud 5",
    price: 140.0,
    image: "/images/on-cloud-5.jpg",
    rating: 4.7,
    sizes: [39, 40, 41, 42],
    colors: ["black", "gray"],
    category: "Running",
    reviewsCount: 78,
    description: "Swiss-engineered lightweight shoes for everyday wear."
  },
  {
    id: "shoe13",
    name: "Jordan 1 Mid",
    price: 125.0,
    image: "/images/jordan-1-mid.jpg",
    rating: 4.9,
    sizes: [39, 40, 41, 42],
    colors: ["red", "white", "black"],
    category: "Sneakers",
    reviewsCount: 230,
    description: "Basketball legend with a mid-top twist."
  },
  {
    id: "shoe14",
    name: "Fila Disruptor II",
    price: 95.0,
    image: "/images/fila-disruptor-2.jpg",
    rating: 4.3,
    sizes: [38, 39, 40],
    colors: ["white", "pink"],
    category: "Casual",
    reviewsCount: 64,
    description: "Chunky silhouette with nostalgic 90s style."
  },
  {
    id: "shoe15",
    name: "Nike React Infinity Run 3",
    price: 160.0,
    image: "/images/nike-react-infinity.jpg",
    rating: 4.8,
    sizes: [40, 41, 42, 43],
    colors: ["green", "black"],
    category: "Running",
    reviewsCount: 101,
    description: "Injury-prevention-focused design for smoother runs."
  },
  {
    id: "shoe16",
    name: "Under Armour HOVR Phantom 3",
    price: 140.0,
    image: "/images/ua-hovr-phantom.jpg",
    rating: 4.6,
    sizes: [39, 40, 41, 42],
    colors: ["black", "gray"],
    category: "Running",
    reviewsCount: 80,
    description: "Sock-like fit and HOVR cushioning for a futuristic feel."
  },
  {
    id: "shoe17",
    name: "Balenciaga Triple S",
    price: 950.0,
    image: "/images/balenciaga-triple-s.jpg",
    rating: 4.2,
    sizes: [41, 42, 43],
    colors: ["gray", "beige"],
    category: "Sneakers",
    reviewsCount: 56,
    description: "High-fashion sneaker with bold, oversized style."
  },
  {
    id: "shoe18",
    name: "Nike Blazer Mid '77",
    price: 100.0,
    image: "/images/nike-blazer-mid.jpg",
    rating: 4.5,
    sizes: [38, 39, 40, 41, 42],
    colors: ["white", "green"],
    category: "Casual",
    reviewsCount: 95,
    description: "Retro hoops style with modern street appeal."
  },
  {
    id: "shoe19",
    name: "Yeezy Boost 350 V2",
    price: 220.0,
    image: "/images/yeezy-boost-350.jpg",
    rating: 4.9,
    sizes: [39, 40, 41, 42],
    colors: ["gray", "black"],
    category: "Sneakers",
    reviewsCount: 200,
    description: "Iconic silhouette with primeknit comfort and Boost sole."
  },
  {
    id: "shoe20",
    name: "Hoka Clifton 9",
    price: 145.0,
    image: "/images/hoka-clifton-9.jpg",
    rating: 4.8,
    sizes: [40, 41, 42, 43],
    colors: ["blue", "orange"],
    category: "Running",
    reviewsCount: 90,
    description: "Plush comfort with lightweight responsiveness for long runs."
  }
];
