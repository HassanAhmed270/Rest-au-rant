import kababroll from '../assets/kababroll.jpg'
import chickenroll from '../assets/chickenroll.jpg'
import chickentikka from '../assets/chickentikka.jpg'
import beeftikka from '../assets/beeftikka.jpg'
import cola from '../assets/cola.jpg'
import fizup from '../assets/fizup.jpg'
import lemonade from '../assets/lemonade.jpg'

export const menuCategories = [
  'All',
  'BBQ Rolls',
  'Tikka',
  'Drinks'
]

export const menuItems = [
  // BBQ Rolls
  {
    id: 1,
    category: 'BBQ Rolls',
    name: 'Kabab Roll',
    image: kababroll,   // ✅ FIXED
    price: 'Rs. 450',
    description: 'Smoky seekh kabab wrapped in soft naan with chutney'
  },
  {
    id: 2,
    category: 'BBQ Rolls',
    name: 'Chicken Roll',
    image: chickenroll,  // ✅ FIXED
    price: 'Rs. 400',
    description: 'Juicy grilled chicken wrapped in paratha'
  },

  // Tikka
  {
    id: 3,
    category: 'Tikka',
    name: 'Chicken Tikka',
    image: chickentikka,
    price: 'Rs. 780',
    description: 'Spicy char-grilled chicken with smoky flavor'
  },
  {
    id: 4,
    category: 'Tikka',
    name: 'Beef Tikka',
    image: beeftikka,
    price: 'Rs. 900',
    description: 'Tender beef pieces grilled over charcoal'
  },

  // Drinks
  {
    id: 5,
    category: 'Drinks',
    name: 'Cola Next',
    image: cola,
    price: 'Rs. 120',
    description: 'Chilled soft drink'
  },
  {
    id: 6,
    category: 'Drinks',
    name: 'Fizup',
    image: fizup,
    price: 'Rs. 120',
    description: 'Refreshing citrus soda drink'
  },
  {
    id: 7,
    category: 'Drinks',
    name: 'Lemonade',
    image: lemonade,
    price: 'Rs. 100',
    description: 'Fresh lemon drink with mint'
  }
]