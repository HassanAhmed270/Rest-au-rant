import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import bgAbout from '../assets/bgAbout.png'
import bgSmoke from '../assets/bgSmoke.png'
import bgInterior from '../assets/bgInterior.jpg'
import {
  FireIcon,
  LeafIcon,
  CommunityIcon,
  TimelineIcon,
  LocationIcon,
  CalendarIcon,
  UtensilsIcon,
  MusicIcon,
  DrinkIcon,
  PartyIcon,
  SmokeIcon
} from '../components/icons/AboutIcons'

// Import chef images
import chefKhalid from '../assets/chefs/chef-khalid.jpg'
import chefAyesha from '../assets/chefs/chef-ayesha.jpg'
import chefRizwan from '../assets/chefs/chef-rizwan.jpg'

const chefs = [
  { 
    name: 'Chef Khalid Mehmood', 
    role: 'Head Pitmaster & Founder', 
    exp: '20+ Years', 
    specialty: 'Texas Brisket & Ribs',
    image: chefKhalid,
    bio: 'Trained in Texas and Memphis, Chef Khalid brings authentic American BBQ techniques to Karachi.'
  },
  { 
    name: 'Chef Ayesha Tariq', 
    role: 'Executive Chef', 
    exp: '12+ Years', 
    specialty: 'BBQ Fusion & Desserts',
    image: chefAyesha,
    bio: 'A culinary innovator who blends traditional Pakistani flavors with global BBQ techniques.'
  },
  { 
    name: 'Chef Rizwan Ali', 
    role: 'Grill Master', 
    exp: '8+ Years', 
    specialty: 'Burgers & Platters',
    image: chefRizwan,
    bio: 'Known for his expertise in grilling and creating unforgettable platter experiences.'
  },
]

const milestones = [
  { year: '2014', event: 'BBQ Nights opens its first outlet in DHA Karachi' },
  { year: '2016', event: 'Awarded "Best BBQ Restaurant" by Karachi Food Awards' },
  { year: '2018', event: 'Expanded to Phase 5 — grew to a team of 60+ staff' },
  { year: '2021', event: 'Launched online ordering and delivery across Karachi' },
  { year: '2023', event: 'Opened rooftop dining experience — The Smoke Terrace' },
  { year: '2024', event: 'Served our 500,000th customer — still going strong' },
]

const About = () => {
  return (
    <div className="bg-smoke-900 pt-20">
      {/* Page Hero - with bgAbout image */}
      <section className="relative py-32 px-4 sm:px-6 overflow-hidden border-b border-coal-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgAbout})`,
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-smoke-900/95 via-smoke-900/85 to-smoke-900/90" />
        </div>
        
        {/* Radial Gradient Accent */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at top left, rgba(255,90,10,0.15) 0%, transparent 70%)'
        }} />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="font-accent text-ember-500 text-sm tracking-[0.3em] uppercase mb-4">— Our Story —</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Born From Fire,<br /><span className="text-ember-500 italic">Built on Flavor</span>
          </h1>
          <p className="font-body text-xl text-coal-200 max-w-2xl leading-relaxed">
            BBQ Nights didn't start in a boardroom. It started in a backyard in Karachi, 
            where Chef Khalid spent weekends perfecting the art of low-and-slow smoking.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle eyebrow="Our Origin" title="The BBQ Nights Story" />
            <div className="space-y-5 font-body text-coal-400 leading-relaxed text-base">
              <p>
                It started in 2014 with a single smoker, a borrowed trailer, and an obsession 
                with authentic American BBQ techniques applied to the bold flavors of Pakistan. 
                Chef Khalid Mehmood had spent years studying under pitmasters in Texas and 
                Memphis — and he brought that knowledge home.
              </p>
              <p>
                The first BBQ Nights was a 20-seater in DHA Phase 6. Within six months, 
                queues stretched around the block. People had never tasted brisket smoked 
                for 14 hours in Karachi. They were hooked.
              </p>
              <p>
                A decade later, we've served half a million guests, earned every major food 
                award in the city, and never once compromised on the fundamentals: 
                real wood, real time, real craft.
              </p>
            </div>
          </div>
          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-smoke-700 border border-coal-700 rounded-xl h-80 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ember-900/20 to-transparent" />
              <img 
                src={bgInterior} 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <p className="font-accent text-coal-500 text-sm tracking-wider uppercase relative z-10">Restaurant Interior</p>
              <p className="font-body text-coal-700 text-xs mt-1 relative z-10">Est. 2014 • Karachi</p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-ember-600 text-white font-display text-lg font-bold px-5 py-3 rounded-sm shadow-ember">
              Since 2014
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-smoke-800 border-y border-coal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionTitle eyebrow="Our Mission" title="What We Stand For" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: FireIcon, title: 'Authenticity', desc: 'Every technique, every sauce, every cut — true to the tradition of American BBQ, adapted for Karachi\'s bold palate.' },
              { icon: LeafIcon, title: 'Quality', desc: 'We source only the finest ingredients. No frozen meat, no pre-made sauces, no shortcuts — ever.' },
              { icon: CommunityIcon, title: 'Community', desc: 'We believe food brings people together. BBQ Nights is a place for family, friends, and celebration.' },
            ].map((m) => (
              <div key={m.title} className="bg-smoke-700 border border-coal-800 rounded-lg p-7 text-center hover:border-ember-800 transition-all duration-300 hover:transform hover:-translate-y-1">
                <m.icon className="w-12 h-12 text-ember-500 mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-coal-100 mb-3">{m.title}</h3>
                <p className="font-body text-coal-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section - With Real Images */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Our Team" title="The People Behind the Smoke" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {chefs.map((chef) => (
            <div key={chef.name} className="group text-center bg-smoke-700 border border-coal-800 rounded-xl overflow-hidden hover:border-ember-700 transition-all duration-300 hover:shadow-xl">
              {/* Chef Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={chef.image} 
                  alt={chef.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smoke-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <div className="inline-block bg-ember-600/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-accent text-white">
                    {chef.role}
                  </div>
                </div>
              </div>
              
              {/* Chef Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-coal-100 mb-2">{chef.name}</h3>
                <p className="font-body text-coal-400 text-sm mb-4 leading-relaxed">
                  {chef.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <span className="bg-smoke-600 border border-coal-700 text-coal-400 font-body px-3 py-1 rounded-sm text-xs flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    {chef.exp}
                  </span>
                  <span className="bg-ember-900/50 border border-ember-800 text-ember-400 font-body px-3 py-1 rounded-sm text-xs flex items-center gap-1">
                    <UtensilsIcon className="w-3 h-3" />
                    {chef.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

  {/* Timeline */}
<section className="relative py-24 bg-smoke-800 border-y border-coal-800 overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${bgSmoke})`,
    }}
  >
    {/* Dark Overlay for better text readability */}
    <div className="absolute inset-0 bg-smoke-800/90" />
  </div>
  
  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
    <SectionTitle eyebrow="Our Journey" title="A Decade of Smoke" center />
    
    <div className="relative mt-12">
      {/* Timeline Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ember-500/30 -translate-x-1/2" />
      
      {/* Timeline Items */}
      <div className="space-y-8">
        {milestones.map((m, i) => (
          <div key={m.year} className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Event Card */}
            <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div className="bg-smoke-800/80 backdrop-blur-sm border border-coal-700 rounded-lg p-4 inline-block max-w-xs hover:border-ember-600 hover:bg-smoke-800/90 transition-all duration-300">
                <p className="font-body text-coal-300 text-sm">{m.event}</p>
              </div>
            </div>
            
            {/* Timeline Node */}
            <div className="relative z-10 w-12 h-12 bg-ember-600 border-2 border-ember-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-ember-500/20">
              <TimelineIcon className="w-5 h-5 text-white" />
            </div>
            
            {/* Year */}
            <div className={`flex-1 ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <span className="font-display text-ember-400 font-bold text-2xl drop-shadow-lg">{m.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Dining Atmosphere */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="The Experience" title="More Than a Meal" center />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { icon: LocationIcon, label: 'Rooftop Terrace' },
            { icon: MusicIcon, label: 'Live BBQ Sessions' },
            { icon: DrinkIcon, label: 'Premium Mocktails' },
            { icon: PartyIcon, label: 'Private Events' },
          ].map((item) => (
            <div key={item.label} className="bg-smoke-700 border border-coal-800 rounded-xl p-6 text-center hover:border-ember-700 transition-all duration-300 group hover:transform hover:-translate-y-1">
              <item.icon className="w-12 h-12 text-ember-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-accent text-coal-300 text-sm tracking-wider uppercase">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="primary" size="lg">Book a Table 🍽️</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About