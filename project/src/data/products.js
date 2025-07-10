export const categories = [
  {
    id: '1',
    name: 'Dresses',
    slug: 'dresses',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Jewelry',
    slug: 'jewelry',
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Makeup',
    slug: 'makeup',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Handbags',
    slug: 'handbags',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    name: 'Shoes',
    slug: 'shoes',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const products = [
  // Dresses
  {
    id: '1',
    name: 'Elegant Evening Dress',
    price: 89.99,
    originalPrice: 120.99,
    description: 'Stunning evening dress perfect for special occasions. Made with premium fabric and elegant design.',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'dresses',
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy'],
    tags: ['evening', 'elegant', 'party']
  },
  {
    id: '2',
    name: 'Floral Summer Dress',
    price: 45.99,
    originalPrice: 65.99,
    description: 'Beautiful floral print dress perfect for summer days. Light and comfortable fabric.',
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'dresses',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    featured: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Pink', 'Blue', 'Yellow'],
    tags: ['floral', 'summer', 'casual']
  },
  {
    id: '3',
    name: 'Little Black Dress',
    price: 75.99,
    description: 'Classic little black dress that never goes out of style. Perfect for any occasion.',
    image: 'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'dresses',
    rating: 4.9,
    reviewCount: 234,
    inStock: true,
    featured: false,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    tags: ['classic', 'black', 'versatile']
  },

  // Jewelry
  {
    id: '4',
    name: 'Diamond Stud Earrings',
    price: 199.99,
    originalPrice: 249.99,
    description: 'Elegant diamond stud earrings with brilliant cut diamonds. Perfect for everyday wear.',
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1927260/pexels-photo-1927260.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1927261/pexels-photo-1927261.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'jewelry',
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    featured: true,
    sizes: ['One Size'],
    colors: ['Silver', 'Gold'],
    tags: ['diamond', 'earrings', 'elegant']
  },
  {
    id: '5',
    name: 'Gold Chain Necklace',
    price: 129.99,
    description: 'Beautiful 18k gold plated chain necklace. Delicate and perfect for layering.',
    image: 'https://images.pexels.com/photos/1927260/pexels-photo-1927260.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1927260/pexels-photo-1927260.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1927261/pexels-photo-1927261.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'jewelry',
    rating: 4.5,
    reviewCount: 98,
    inStock: true,
    featured: true,
    sizes: ['16"', '18"', '20"'],
    colors: ['Gold'],
    tags: ['gold', 'necklace', 'delicate']
  },

  // Makeup
  {
    id: '6',
    name: 'Luxury Lipstick Collection',
    price: 59.99,
    originalPrice: 79.99,
    description: 'Premium lipstick collection with 12 stunning shades. Long-lasting and moisturizing formula.',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2533267/pexels-photo-2533267.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2533268/pexels-photo-2533268.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'makeup',
    rating: 4.8,
    reviewCount: 189,
    inStock: true,
    featured: true,
    sizes: ['One Size'],
    colors: ['Multi'],
    tags: ['lipstick', 'collection', 'luxury']
  },

  // Handbags
  {
    id: '7',
    name: 'Designer Leather Handbag',
    price: 159.99,
    originalPrice: 199.99,
    description: 'Luxurious leather handbag with elegant design. Perfect for work and special occasions.',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1152079/pexels-photo-1152079.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'handbags',
    rating: 4.8,
    reviewCount: 123,
    inStock: true,
    featured: true,
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan'],
    tags: ['leather', 'designer', 'elegant']
  },

  // Shoes
  {
    id: '8',
    name: 'Elegant High Heels',
    price: 79.99,
    description: 'Comfortable and stylish high heels perfect for parties and formal events.',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464626/pexels-photo-1464626.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464627/pexels-photo-1464627.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    featured: true,
    sizes: ['5', '6', '7', '8', '9', '10'],
    colors: ['Black', 'Red', 'Nude'],
    tags: ['heels', 'elegant', 'party']
  }
];

// Mock orders data
export const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'Delivered',
    total: 245.97,
    items: [
      {
        id: '1',
        name: 'Elegant Evening Dress',
        price: 89.99,
        quantity: 1,
        size: 'M',
        image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: '4',
        name: 'Diamond Stud Earrings',
        price: 199.99,
        quantity: 1,
        size: 'One Size',
        image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-01-20',
    status: 'Shipped',
    total: 149.98,
    items: [
      {
        id: '6',
        name: 'Luxury Lipstick Collection',
        price: 59.99,
        quantity: 1,
        size: 'One Size',
        image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: '7',
        name: 'Designer Leather Handbag',
        price: 159.99,
        quantity: 1,
        size: 'One Size',
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ]
  }
];