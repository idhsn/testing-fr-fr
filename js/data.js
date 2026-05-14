const products = [
  {
    id: 1,
    name: "Juzey Aura",
    price: 1850,
    category: "Floral",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    notes: "Rose, Jasmine, Bergamot",
    description: "A luminous and radiant fragrance that captures the essence of a blooming garden at dawn. Juzey Aura is a delicate balance of fresh bergamot and intoxicating floral notes."
  },
  {
    id: 2,
    name: "Juzey Noir",
    price: 2100,
    category: "Oriental",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800",
    notes: "Vanilla, Black Pepper, Amber",
    description: "Intense, mysterious, and undeniably seductive. Rich vanilla creates a deep base, sparked by the sharp intrigue of black pepper."
  },
  {
    id: 3,
    name: "Juzey Bloom",
    price: 1650,
    category: "Floral",
    image: "https://images.unsplash.com/photo-1594034183956-62111d4e0e47?auto=format&fit=crop&q=80&w=800",
    notes: "Peony, White Musk, Freesia",
    description: "Soft, romantic, and endlessly captivating. A gentle whisper of white musk grounds the bright, joyful notes of peony and freesia."
  },
  {
    id: 4,
    name: "Juzey Essence",
    price: 2400,
    category: "Woody",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    notes: "Sandalwood, Amber, Cardamom",
    description: "The purest distillation of luxury. A warm, golden aura of amber and sacred sandalwood, spiced perfectly with exotic cardamom."
  },
  {
    id: 5,
    name: "Juzey Velvet",
    price: 1950,
    category: "Woody",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800",
    notes: "Patchouli, Iris, Cedar",
    description: "Smooth, rich, and tactile. The powdery elegance of iris meets the earthy patchouli in a stunning display of olfactory artistry."
  },
  {
    id: 6,
    name: "Juzey Lumière",
    price: 1750,
    category: "Fresh",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    notes: "Orange Blossom, Honey, Lemon",
    description: "Liquid sunshine captured in a bottle. Radiates joy and warmth with its golden blend of honeyed orange blossom and zesty lemon."
  },
  {
    id: 7,
    name: "Juzey Nectar",
    price: 1550,
    category: "Fresh",
    image: "https://images.unsplash.com/photo-1615397323282-311abec27cc7?auto=format&fit=crop&q=80&w=800",
    notes: "Peach, Mandarin, Green Tea",
    description: "A sparkling and vivacious scent. Sweet peach nectar blends with crisp green tea for an effortlessly chic everyday fragrance."
  },
  {
    id: 8,
    name: "Juzey Mystique",
    price: 2200,
    category: "Oriental",
    image: "https://images.unsplash.com/photo-1595532542520-5029477449ab?auto=format&fit=crop&q=80&w=800",
    notes: "Frankincense, Dark Cherry, Myrrh",
    description: "An intoxicating evening fragrance. Deep, luscious dark cherry enveloped in ancient, smoky frankincense and myrrh."
  },
  {
    id: 9,
    name: "Ultimate Gift Basket",
    price: 4500,
    category: "Gift Sets",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=800",
    notes: "Aura, Noir, and Essence",
    description: "The ultimate expression of luxury. This magnificent gift basket features our three most iconic fragrances, beautifully presented in a velvet-lined signature Juzey box."
  }
];

// Helper functions for data
function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

function getFeaturedProducts() {
  return products.slice(0, 4); // Show 4 on home page
}

function getAllProducts() {
  return products;
}
