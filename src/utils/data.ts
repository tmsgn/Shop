export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "iPhone 14",
    description: "Latest Apple iPhone with advanced camera and performance.",
    price: 2999,
    brand: "Apple",
    category: "Phone",
    inStock: true,
    specs: {
      RAM: "6GB",
      Camera: "48MP",
      Battery: "3279mAh",
      Storage: "128GB",
      Processor: "A15 Bionic",
      Display: "6.1 inch OLED",
    },
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg",
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image: "https://m.media-amazon.com/images/I/417tEj3iJ8L._AC_SX679_.jpg",
      },
    ],
    reviews: [],
    rating: 3.5,
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Logitech MX Keys Advanced Wireless Keyboard",
    description:
      "Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap. Backlighting and premium build quality.",
    price: 102.99,
    brand: "Logitech",
    category: "Accessories",
    inStock: true,
    specs: {
      Layout: "Full-size",
      Connectivity: "Bluetooth, USB-C",
      BatteryLife: "10 days",
      Backlight: "Yes",
      Weight: "810g",
    },
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "https://m.media-amazon.com/images/I/71gOLg2-kqL._AC_SX679_.jpg",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "Good keyboard for typing.",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          role: "ADMIN",
        },
      },
    ],
    rating: 5,
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Apple iPhone 13, 64GB",
    description:
      "Refurbished iPhone 13 with 64GB storage. Professionally inspected and cleaned. Comes with charger and cable.",
    price: 40,
    brand: "Apple",
    category: "Phone",
    inStock: true,
    specs: {
      RAM: "4GB",
      Camera: "12MP Dual",
      Battery: "3240mAh",
      Storage: "64GB",
      Processor: "A15 Bionic",
      Display: "6.1 inch OLED",
    },
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "https://m.media-amazon.com/images/I/61g+McQpg7L._AC_SX679_.jpg",
      },
      {
        color: "Blue",
        colorCode: "#0000FF",
        image: "https://m.media-amazon.com/images/I/713Om9vCHUL._AC_SX679_.jpg",
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image: "https://m.media-amazon.com/images/I/61thdjmfHcL._AC_SX679_.jpg",
      },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment: "Good enough. I like the camera and casing.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          role: "ADMIN",
        },
      },
    ],
    rating: 4,
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "Logitech MX Master 2S Wireless Mouse",
    description:
      "Cross-computer control, ergonomic design, and hyper-fast scrolling. Rechargeable and works on any surface.",
    price: 70,
    brand: "Logitech",
    category: "Accessories",
    inStock: true,
    specs: {
      Connectivity: "Bluetooth, USB",
      BatteryLife: "70 days",
      Weight: "145g",
      DPI: "4000",
      Buttons: 7,
    },
    images: [
      {
        color: "Graphite",
        colorCode: "#383838",
        image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SX679_.jpg",
      },
    ],
    reviews: [],
    rating: 3,
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'Smart Watch, 1.85" IP68 Waterproof with Bluetooth Calls',
    description:
      "Smartwatch with fitness tracking, heart rate monitor, call support, and over 100 sport modes. Compatible with Android and iOS.",
    price: 50,
    brand: "Nerunsa",
    category: "Watch",
    inStock: true,
    specs: {
      Display: '1.85" AMOLED',
      Waterproof: "IP68",
      Battery: "300mAh",
      Connectivity: "Bluetooth 5.0",
      Sensors: "Heart rate, Accelerometer",
      Compatibility: "Android, iOS",
    },
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "https://m.media-amazon.com/images/I/71s4mjiit3L._AC_SX679_.jpg",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "https://m.media-amazon.com/images/I/71zbWSRMaYL._AC_SX679_.jpg",
      },
    ],
    reviews: [],
    rating: 4,
  },
];