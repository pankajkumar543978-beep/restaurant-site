/**
 * Curated Gallery Photography Assets
 * John's Breakfast & Lunch (Calgary, AB)
 * 
 * NOTE: Strict Anti-Slop & Craft Guidelines:
 * - Natural daylight, authentic diner aesthetic.
 * - Warm tones (creams, warm wood, golden yolks, rich coffee, crisp bacon).
 * - Verified Unsplash high-resolution photography ready for responsive display and modal lightbox.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'breakfast' | 'diner-atmosphere' | 'lunch' | 'kitchen-classics';
  categoryLabel: string;
  caption: string;
  altText: string;
  imageUrl: string;
  thumbnailUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  featuredInHero?: boolean;
  photographerCredit?: {
    name: string;
    platform: string;
  };
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-benedict',
    title: 'Signature Eggs Benedict',
    category: 'breakfast',
    categoryLabel: 'Breakfast Classic',
    caption:
      'Silky golden hollandaise drizzled over poached Alberta eggs and grilled peameal bacon on toasted English muffins, accompanied by crisp diner hash browns.',
    altText:
      'Classic eggs benedict with hollandaise sauce, poached eggs, and fresh herbs on toasted English muffin',
    imageUrl:
      'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'landscape',
    featuredInHero: true,
  },
  {
    id: 'gallery-pancakes',
    title: 'Buttermilk Stack & Crispy Bacon',
    category: 'breakfast',
    categoryLabel: 'Sweet Morning',
    caption:
      'Golden, fluffy buttermilk pancakes stacked high, topped with melting whipped butter and served with pure Canadian maple syrup and thick-cut crispy bacon.',
    altText:
      'Stack of fluffy buttermilk pancakes with melting butter and maple syrup drip',
    imageUrl:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'portrait',
    featuredInHero: true,
  },
  {
    id: 'gallery-skillet',
    title: 'Loaded Breakfast Skillet',
    category: 'breakfast',
    categoryLabel: 'Hearty Breakfast',
    caption:
      'Sizzling cast-iron skillet loaded with seasoned breakfast home fries, diced bell peppers, onions, smoky bacon, and melted sharp cheddar crowned with sunny-side eggs.',
    altText:
      'Cast iron skillet filled with breakfast hash, fried eggs, and peppers on rustic wood table',
    imageUrl:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-poutine',
    title: 'Legendary Breakfast Poutine',
    category: 'breakfast',
    categoryLabel: 'Calgary Legend',
    caption:
      'Crispy golden fries tossed with authentic Quebec cheese curds, smothered in savory diner gravy and topped with bacon, green onions, and sunny eggs.',
    altText:
      'Hearty breakfast poutine topped with cheese curds, gravy, and fried eggs',
    imageUrl:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'square',
  },
  {
    id: 'gallery-omelette',
    title: 'Chorizo & Jack Cheese Omelette',
    category: 'breakfast',
    categoryLabel: '3-Egg Omelette',
    caption:
      'Fluffy three-egg folded omelette filled with spicy chorizo, sautéed bell peppers, sweet onions, and melted Monterey Jack, served with hot hash browns.',
    altText:
      'Freshly prepared fluffy folded 3-egg omelette garnished with fresh herbs and served on diner ceramic plate',
    imageUrl:
      'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-coffee',
    title: 'Always Fresh Diner Coffee',
    category: 'diner-atmosphere',
    categoryLabel: 'Warm Hospitality',
    caption:
      'Rich, steaming hot brewed coffee poured fresh into classic diner ceramic mugs with endless friendly refills from John and Wendy.',
    altText:
      'Steaming freshly brewed coffee being poured into a heavy ceramic diner mug on a wooden diner counter',
    imageUrl:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'portrait',
  },
  {
    id: 'gallery-toast-bacon',
    title: 'Two Egg Classic with Sourdough Toast',
    category: 'breakfast',
    categoryLabel: 'Diner Tradition',
    caption:
      'Two farm eggs cooked over easy, accompanied by thick-cut crispy bacon, grilled tomato slices, and hearty buttered toast with berry jam.',
    altText:
      'Sunny eggs with crispy bacon, grilled toast, and jam served under natural daylight',
    imageUrl:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-clubhouse',
    title: 'Classic Clubhouse Triple-Decker',
    category: 'lunch',
    categoryLabel: 'Lunch Favourite',
    caption:
      'Three layers of toasted bakery bread stacked high with shaved turkey breast, crisp smoked bacon, cheddar cheese, lettuce, tomato, and mayo, served with hot fries.',
    altText:
      'Triple-decker club sandwich cut in halves served with golden fries on a diner tray',
    imageUrl:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-interior',
    title: 'Warm & Cozy Diner Interior',
    category: 'diner-atmosphere',
    categoryLabel: 'Neighbourhood Warmth',
    caption:
      'A welcoming Mount Pleasant breakfast haven with cozy wooden booths, sunlit morning tables, and the friendly buzz of regular neighbours catching up.',
    altText:
      'Cozy, inviting diner interior with natural morning light streaming across wooden booth tables',
    imageUrl:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-storefront-patio',
    title: 'West-Facing Summer Patio & Storefront',
    category: 'diner-atmosphere',
    categoryLabel: 'Mount Pleasant NW',
    caption:
      'The sun-drenched outdoor patio along 4th Street NW, offering the perfect spot for warm Calgary morning coffee and eggs in the summer months.',
    altText:
      'Sunlit neighbourhood restaurant storefront and outdoor summer patio with bistro seating',
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'landscape',
  },
  {
    id: 'gallery-wonton-soup',
    title: 'Wendy’s Homemade Wonton Soup',
    category: 'kitchen-classics',
    categoryLabel: 'Family Recipe',
    caption:
      'Handmade pork and shrimp wontons in fragrant ginger-infused chicken broth with crisp baby bok choy—an authentic specialty crafted fresh daily.',
    altText:
      'Bowl of steaming wonton noodle soup with green scallions and tender dumplings',
    imageUrl:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    aspectRatio: 'square',
  },
];

export const getGalleryByCategory = (
  category: GalleryItem['category'] | 'all'
): GalleryItem[] => {
  if (category === 'all') return GALLERY_ITEMS;
  return GALLERY_ITEMS.filter((item) => item.category === category);
};

export default GALLERY_ITEMS;
