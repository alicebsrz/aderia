// frontend/src/data/products.js
// REMOVEMOS TODAS AS LINHAS DE "import ... from '../assets/...' "

// As imagens agora são strings que apontam para a pasta 'public'
export const products = [
  // --- SKINCARE ---
  { id: 1, name: 'SunShield Daily Protector', price: 24.99, rating: 5, category: 'Skincare', type: 'Sunscreen', image: '/images/products/protetorsolar.jpg?w=800&format=webp' },
  { id: 2, name: 'Radiant Glow Serum', price: 32.50, rating: 5, category: 'Skincare', type: 'Serum', image: '/images/products/serum-1.jpg?w=800&format=webp' },
  { id: 3, name: 'Night Repair Serum', price: 35.00, rating: 4, category: 'Skincare', type: 'Serum', image: '/images/products/serum-2.jpg?w=800&format=webp' },
  { id: 4, name: 'Plumping Lip Serum', price: 18.00, rating: 5, category: 'Skincare', type: 'Serum', image: '/images/products/lipserum.jpg?w=800&format=webp' },
  { id: 5, name: 'PureFlow Facial Cleanser', price: 19.99, rating: 5, category: 'Skincare', type: 'Cleanser', image: '/images/products/gelfacial.jpg?w=800&format=webp' },
  { id: 6, name: 'HydroBoost Moisturizer', price: 28.00, rating: 4, category: 'Skincare', type: 'Cream', image: '/images/products/hidratante-1.jpeg?w=800&format=webp' },
  { id: 7, name: 'ScalpRevive Hair Tonic', price: 22.00, rating: 4, category: 'Skincare', type: 'Tonic', image: '/images/products/tonico-capilar.jpg?w=800&format=webp' },
  { id: 8, name: 'AquaBalance Facial Toner', price: 21.50, rating: 5, category: 'Skincare', type: 'Tonic', image: '/images/products/tonico-facial-1.jpg?w=800&format=webp', images: ['/images/products/tonico-facial-1.jpg?w=800&format=webp', '/images/products/tonico-facial-2.jpeg?w=800&format=webp'] },
  { id: 9, name: 'Intense Repair Cream', price: 30.00, rating: 5, category: 'Skincare', type: 'Cream', image: '/images/products/hidratante-reparador.jpg?w=800&format=webp' },
  { id: 10, name: 'CalmEssence Soothing Cream', price: 29.50, rating: 5, category: 'Skincare', type: 'Cream', image: '/images/products/hidratante-acalmante.jpg?w=800&format=webp' },
  { id: 11, name: 'CloudCleanse Foaming Cleanser', price: 23.00, rating: 5, category: 'Skincare', type: 'Cleanser', image: '/images/products/espuma-limpante-facial.jpg?w=800&format=webp' },
  { id: 12, name: 'FreshBloom Body Splash', price: 15.00, rating: 4, category: 'Skincare', type: 'Body Care', image: '/images/products/colonia.jpg?w=800&format=webp' },
  // --- MAKEUP ---
  { id: 13, name: 'PetalGlow Blush', price: 18.50, rating: 5, category: 'Makeup', type: 'Blush', image: '/images/products/blush-1.jpeg?w=800&format=webp', images: ['/images/products/blush-1.jpeg?w=800&format=webp', '/images/products/blush-2.jpeg?w=800&format=webp'] },
  { id: 14, name: 'StayAllDay Setting Spray', price: 25.00, rating: 5, category: 'Makeup', type: 'Setting Spray', image: '/images/products/fixador-1.jpg?w=800&format=webp', images: ['/images/products/fixador-1.jpg?w=800&format=webp', '/images/products/fixador-2.jpg?w=800&format=webp', '/images/products/fixador-3.jpg?w=800&format=webp'], options: [{ name: 'Glow', image: '/images/products/fixador-glow.jpg?w=800&format=webp' }, { name: 'Matte', image: '/images/products/fixador-matte.jpeg?w=800&format=webp' }] },
  { id: 15, name: 'VelvetMatte Lipstick', price: 16.00, rating: 5, category: 'Makeup', type: 'Lipstick', image: '/images/products/batom.jpg?w=800&format=webp' },
  { id: 16, name: 'Precision Point Eyeliner', price: 14.50, rating: 4, category: 'Makeup', type: 'Eyeliner', image: '/images/products/delineador.jpg?w=800&format=webp' },
  { id: 17, name: 'SkyHigh Lash Mascara', price: 17.00, rating: 5, category: 'Makeup', type: 'Mascara', image: '/images/products/mascara-cilios.jpg?w=800&format=webp' },
  { id: 18, name: 'SecondSkin Foundation', price: 38.00, rating: 5, category: 'Makeup', type: 'Foundation', image: '/images/products/base.jpeg?w=800&format=webp' },
  { id: 19, name: 'JuicyGloss Tint', price: 15.50, rating: 4, category: 'Makeup', type: 'Lip Gloss', image: '/images/products/gloss-tint.jpg?w=800&format=webp' },
  { id: 20, name: 'LuxeShine Lip Gloss', price: 20.00, rating: 5, category: 'Makeup', type: 'Lip Gloss', image: '/images/products/batom-gloss.jpg?w=800&format=webp', options: [{ name: 'Coral', image: '/images/products/batom-gloss-cor-01.jpg?w=800&format=webp' }, { name: 'Rose', image: '/images/products/batom-gloss-cor-02.jpeg?w=800&format=webp' }, { name: 'Ruby', image: '/images/products/batom-gloss-cor-03.jpeg?w=800&format=webp' }] },
  { id: 21, name: 'CrystalClear Gloss', price: 19.00, rating: 5, category: 'Makeup', type: 'Lip Gloss', image: '/images/products/gloss.jpeg?w=800&format=webp', options: [{ name: 'Crystal', image: '/images/products/gloss-01.jpg?w=800&format=webp' }, { name: 'Champagne', image: '/images/products/gloss-02.jpg?w=800&format=webp' }, { name: 'Gold', image: '/images/products/gloss-03.jpg?w=800&format=webp' }] },
];

// Importante: Note que não precisamos mais importar as imagens em nenhum componente do frontend (CatalogProductCard, ProductDetailPage, etc.). O caminho de texto que vem dos dados (ex: <img src={product.image} />) funcionará diretamente, pois o Vite sabe encontrar os arquivos na pasta public.