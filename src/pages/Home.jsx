import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import heroBg from '../assets/heroBg.png'

// BBQ assets
import kababRoll from '../assets/kababroll.jpg'
import malaiBoti from '../assets/malaiboti.jpg'
import chickenTikka from '../assets/chickentikka.jpg'
import beefBoti from '../assets/beefboti.jpg'
import fries from '../assets/fries.jpg'

import {
  WoodSmokeIcon,
  ClockIcon,
  MeatIcon,
  ChefIcon,
  DeliveryIcon,
  SauceIcon
} from '../components/icons/WhyUsIcons'

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Food Blogger',
    text: 'Best BBQ in Karachi! The kabab rolls are next level.',
    rating: 5,
  },
  {
    name: 'Sara Malik',
    role: 'Regular Customer',
    text: 'Malai boti is super juicy and flavorful. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Tariq Hussain',
    role: 'Corporate Client',
    text: 'Perfect BBQ platter for office events. Everyone loved it.',
    rating: 5,
  },
]
const renderStars = (count) => {
  return Array.from({ length: count }).map((_, i) => (
    <span key={i} className="text-amber-500 text-lg">★</span>
  ))
}
const featuredDishes = [
  {
    image: kababRoll,
    name: 'Kabab Roll',
    desc: 'Smoky seekh kabab wrapped in soft naan with chutney',
    price: 'Rs. 450'
  },
  {
    image: malaiBoti,
    name: 'Malai Boti',
    desc: 'Creamy, juicy chicken boti grilled over charcoal',
    price: 'Rs. 850'
  },
  {
    image: chickenTikka,
    name: 'Chicken Tikka',
    desc: 'Spicy, char-grilled chicken with traditional masala',
    price: 'Rs. 780'
  },
  {
    image: beefBoti,
    name: 'Beef Boti',
    desc: 'Tender beef cubes slow-cooked over real coal fire',
    price: 'Rs. 950'
  },
  {
    image: fries,
    name: 'French Fries',
    desc: 'Crispy, golden fries served with your favorite dipping sauce',
    price: 'Rs. 200'
  },

]


const whyUs = [
  {
    icon: <WoodSmokeIcon />,
    title: 'Real Wood Smoke',
    desc: 'We use only authentic hardwood — hickory, mesquite, post oak — for that irreplaceable smoky depth.'
  },
  {
    icon: <ClockIcon />,
    title: 'Low & Slow Method',
    desc: 'Our meats cook 8–14 hours for maximum flavor, tenderness, and that perfect smoke ring.'
  },
  {
    icon: <MeatIcon />,
    title: 'Premium Cuts Only',
    desc: 'Fresh chicken, beef, and mutton — no compromise on quality.'
  },
  {
    icon: <ChefIcon />,
    title: 'Pitmaster Craft',
    desc: 'Expert chefs trained in authentic BBQ techniques.'
  },
  {
    icon: <DeliveryIcon />,
    title: 'Fast Delivery',
    desc: 'Hot BBQ delivered quickly within your area.'
  },
  {
    icon: <SauceIcon />,
    title: 'House-Made Sauces',
    desc: 'All sauces and marinades are made fresh daily in-house.'
  }
]


const Home = () => {
  return (
    <div className="bg-smoke-900">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0" style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.75) contrast(1.1)'
        }} />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-white font-bold mb-6">
            Taste The Real <span className="text-ember-500">BBQ Flame</span>
          </h1>

          <p className="text-coal-300 text-lg mb-8">
            Kabab Rolls • Malai Boti • Chicken Tikka • Beef Boti — Fresh off the grill
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="primary" size="lg">Explore Menu</Button>
            </Link>
            <Link to="/order">
              <Button variant="secondary" size="lg">Order Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="BBQ Favorites"
          title="Our Signature Grill Items"
          subtitle="Smoky, juicy, and freshly prepared BBQ straight from the grill."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredDishes.map((dish, i) => (
            <div key={i} className="bg-smoke-700 border border-coal-800 rounded-lg overflow-hidden hover:border-ember-700 transition">
              <img src={dish.image} alt={dish.name} className="h-40 w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-coal-100 font-bold">{dish.name}</h3>
                <p className="text-coal-400 text-xs mt-1">{dish.desc}</p>
                <p className="text-ember-400 mt-2 font-bold">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-smoke-800 border-y border-coal-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="BBQ Done Right"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="p-6 bg-smoke-700 border border-coal-800 rounded-lg">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-coal-100 font-bold mb-2">{item.title}</h3>
                <p className="text-coal-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionTitle eyebrow="Reviews" title="What Customers Say" center />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-smoke-700 border border-coal-800 p-6 rounded-lg hover:border-ember-700 transition"
            >
              {/* Stars */}
              <div className="mb-3 flex gap-1">
                {renderStars(t.rating)}
              </div>

              {/* Text */}
              <p className="text-coal-300 text-sm mb-5 italic">
                "{t.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ember-800 text-white rounded-full flex items-center justify-center font-bold">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-coal-100 font-bold">{t.name}</h4>
                  <p className="text-coal-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready for Real BBQ?
        </h2>
        <p className="text-coal-400 mb-8">
          Order Kabab Rolls, Malai Boti, Chicken Tikka & more
        </p>

        <Link to="/order">
          <Button variant="primary" size="lg"> Order Now</Button>
        </Link>
      </section>

    </div>
  )
}

export default Home