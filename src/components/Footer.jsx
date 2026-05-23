import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {
  WhatsAppIcon,
  FacebookIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon
} from '../components/icons/ContactIcons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-smoke-900 to-black border-t border-ember-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-ember-600 to-ember-700 rounded-lg flex items-center justify-center text-2xl shadow-lg group-hover:shadow-ember-500/20 transition-all duration-300">
                <img src={logo} alt="BBQ Nights Logo" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <span className="font-display text-xl font-bold bg-gradient-to-r from-white to-ember-400 bg-clip-text text-transparent block">BBQ Nights</span>
                <span className="font-accent text-ember-500 text-xs tracking-widest">Real Smoke. Real Flavor.</span>
              </div>
            </Link>
            <p className="font-body text-coal-400 text-sm leading-relaxed mb-6">
              Authentic BBQ crafted with passion, wood smoke, and generations of pitmaster tradition.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-smoke-800/50 backdrop-blur-sm border border-coal-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:border-green-500 hover:scale-110 transition-all duration-300 group"
                title="WhatsApp"
              >
                <WhatsAppIcon className="p-1 w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-smoke-800/50 backdrop-blur-sm border border-coal-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 group"
                title="Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:hello@bbqnights.pk"
                className="w-10 h-10 bg-smoke-800/50 backdrop-blur-sm border border-coal-700 rounded-lg flex items-center justify-center hover:bg-ember-600 hover:border-ember-500 hover:scale-110 transition-all duration-300 group"
                title="Email"
              >
                <EmailIcon className="w-5 h-5 text-ember-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-accent text-white font-semibold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-ember-600 to-ember-400" /> Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Our Menu', to: '/menu' },
                { label: 'Order Online', to: '/order' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group font-body text-coal-400 hover:text-ember-400 text-sm transition-all duration-300 flex items-center gap-2">
                    <span className="text-ember-600 text-xs group-hover:translate-x-1 transition-transform">▶</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-accent text-white font-semibold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-ember-600 to-ember-400" /> Opening Hours
            </h4>
            <ul className="space-y-3">
              {[
                { day: 'Mon – Thu', time: '12:00 PM – 11:00 PM' },
                { day: 'Fri – Sat', time: '12:00 PM – 1:00 AM' },
                { day: 'Sunday', time: '1:00 PM – 11:00 PM' },
              ].map((h) => (
                <li key={h.day} className="flex justify-between text-sm pb-3 border-b border-coal-800/50">
                  <span className="font-body text-coal-400">{h.day}</span>
                  <span className="font-accent text-ember-400 font-medium">{h.time}</span>
                </li>
              ))}
              <li className="text-sm pt-2">
                <span className="inline-flex items-center gap-2 font-body text-green-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Currently Open
                </span>
              </li>
            </ul>
          </div>
          {/* Contact Section - Enhanced */}
          <div>
            <h4 className="font-accent text-white font-semibold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-ember-600 to-ember-400" />
              Get In Touch
            </h4>

            <ul className="space-y-5 text-sm">

              {/* Location */}
              <li className="flex items-start gap-3 group">
                <LocationIcon className="w-5 h-5 text-ember-500 mt-0.5 flex-shrink-0 group-hover:text-ember-400 transition-colors" />
                <span className="font-body text-coal-400 leading-relaxed group-hover:text-coal-300 transition-colors">
                  Plot 42, Khayaban-e-Ittehad, DHA Phase 6, Karachi, Pakistan
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3 group">
                <PhoneIcon className="w-5 h-5 text-ember-500 flex-shrink-0 group-hover:text-ember-400 transition-colors" />
                <a
                  href="tel:+923001234567"
                  className="font-body text-coal-400 hover:text-ember-400 transition-all duration-300"
                >
                  +92 300 123 4567
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 group">
                <EmailIcon className="w-5 h-5 text-ember-500 flex-shrink-0 group-hover:text-ember-400 transition-colors" />
                <a
                  href="mailto:hello@bbqnights.pk"
                  className="font-body text-coal-400 hover:text-ember-400 transition-all duration-300"
                >
                  hello@bbqnights.pk
                </a>
              </li>

             

            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Enhanced */}
      <div className="border-t border-coal-800/50 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-coal-500 text-sm">
              © {year} BBQ Nights. All rights reserved.
            </p>
            <p className="font-body text-coal-600 text-xs flex items-center gap-1">
              Crafted with <span className="text-red-500 animate-pulse">🔥</span> in Karachi, Pakistan
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-3 pt-3 border-t border-coal-800/30">
            <a
              href="https://hacommercex.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="font-body text-coal-600 text-sm hover:text-ember-400 transition-all duration-300 hover:translate-x-1"
            >
              Developed by HACommerceX
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer