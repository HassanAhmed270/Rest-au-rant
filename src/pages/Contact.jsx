import { useState } from 'react'
import Button from '../components/Button'
import {EmailIcon,FacebookIcon}  from '../components/icons/ContactIcons'
import { CiClock2 } from "react-icons/ci";
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

  const handleSubmit = (e) => {
    e.preventDefault()

    setSent(true)

    setTimeout(() => setSent(false), 4000)

    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="bg-[#111111] pt-20 min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center border-b border-white/10 overflow-hidden">

        {/* BG IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,90,10,0.12) 0%, rgba(0,0,0,0.85) 70%)',
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 ">

            {/* LEFT */}
            <div className='py-8'>

              <p className="font-accent text-ember-500 text-sm tracking-[0.35em] uppercase mb-5">
                Get In Touch
              </p>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                Let's Talk
                <span className="text-ember-500"> BBQ</span>
              </h1>

              <p className="mt-6 text-coal-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Reach out for orders, reservations, catering, feedback or
                collaborations. We usually reply within minutes on WhatsApp.
              </p>

              {/* QUICK CONTACT */}
              <div className="mt-10 space-y-4">

                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-[#181818] border border-white/10 hover:border-green-600 transition-all rounded-2xl px-5 py-4 group"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2504/2504957.png"
                    alt="WhatsApp"
                    className="w-12 h-12 object-contain"
                  />

                  <div>
                    <p className="text-white font-semibold">
                      WhatsApp Support
                    </p>

                    <p className="text-coal-400 text-sm">
                      +92 300 123 4567
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@bbqnights.pk"
                  className="flex items-center gap-4 bg-[#181818] border border-white/10 hover:border-ember-600 transition-all rounded-2xl px-5 py-4"
                >
                  <EmailIcon className="w-12 h-12 text-coal-400" />

                  <div>
                    <p className="text-white font-semibold">
                      Email Address
                    </p>

                    <p className="text-coal-400 text-sm">
                      hello@bbqnights.pk
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 sm:p-10">

              {sent ? (
                <div className="text-center py-12">

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5290/5290441.png"
                    alt="Success"
                    className="w-24 h-24 object-contain mx-auto mb-6"
                  />

                  <h3 className="font-display text-3xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>

                  <p className="text-coal-400 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back
                    to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">

                    <p className="font-accent text-ember-500 text-xs tracking-[0.3em] uppercase mb-3">
                      Contact Form
                    </p>

                    <h2 className="font-display text-4xl font-bold text-white">
                      Send Message
                    </h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* ROW */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      <div>
                        <label className="text-coal-400 text-xs uppercase tracking-widest block mb-2">
                          Your Name
                        </label>

                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Ahmed Raza"
                          className="w-full bg-[#181818] border border-white/10 text-white placeholder-coal-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-ember-600 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-coal-400 text-xs uppercase tracking-widest block mb-2">
                          Phone
                        </label>

                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+92 300 000 0000"
                          className="w-full bg-[#181818] border border-white/10 text-white placeholder-coal-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-ember-600 transition-all"
                        />
                      </div>

                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="text-coal-400 text-xs uppercase tracking-widest block mb-2">
                        Email Address
                      </label>

                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full bg-[#181818] border border-white/10 text-white placeholder-coal-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-ember-600 transition-all"
                      />
                    </div>

                    {/* SUBJECT */}
                    <div>
                      <label className="text-coal-400 text-xs uppercase tracking-widest block mb-2">
                        Subject
                      </label>

                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#181818] border border-white/10 text-white rounded-2xl px-5 py-4 focus:outline-none focus:border-ember-600 transition-all"
                      >
                        <option value="">Select subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="reservation">Reservation</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="text-coal-400 text-xs uppercase tracking-widest block mb-2">
                        Message
                      </label>

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="w-full bg-[#181818] border border-white/10 text-white placeholder-coal-600 rounded-2xl px-5 py-4 focus:outline-none focus:border-ember-600 transition-all resize-none"
                      />
                    </div>

                    {/* BUTTON */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full rounded-2xl"
                    >
                      Send Message
                    </Button>

                    <p className="text-center text-coal-500 text-sm">
                      Prefer instant replies? Contact us on{' '}
                      <a
                        href="https://wa.me/923001234567"
                        className="text-ember-500 hover:text-ember-400 transition-colors"
                      >
                        WhatsApp
                      </a>
                    </p>

                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* HOURS */}
          <div className="bg-[#181818] border border-white/10 rounded-[28px] p-7">

            <div className="flex items-center gap-3 mb-5">

             <CiClock2 className="w-8 h-8 text-ember-500" />

              <h3 className="text-white text-2xl font-bold">
                Opening Hours
              </h3>
            </div>

            <div className="space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-coal-400">
                  Monday - Thursday
                </span>

                <span className="text-white">
                  12 PM - 11 PM
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-coal-400">
                  Friday - Saturday
                </span>

                <span className="text-ember-400">
                  12 PM - 1 AM
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-coal-400">
                  Sunday
                </span>

                <span className="text-white">
                  1 PM - 11 PM
                </span>
              </div>

            </div>
          </div>

          {/* LOCATION */}
          <div className="bg-[#181818] border border-white/10 rounded-[28px] p-7">

            <div className="flex items-center gap-3 mb-5">

              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Location"
                className="w-8 h-8 object-contain"
              />

              <h3 className="text-white text-2xl font-bold">
                Location
              </h3>
            </div>

            <p className="text-coal-400 leading-relaxed">
              Plot 42, Khayaban-e-Ittehad,
              <br />
              DHA Phase 6, Karachi, Pakistan
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 text-ember-500 hover:text-ember-400 transition-colors"
            >
              Open Google Maps →
            </a>
          </div>

          {/* SOCIAL */}
          <div className="bg-[#181818] border border-white/10 rounded-[28px] p-7">

            <div className="flex items-center gap-3 mb-5">

              <FacebookIcon className="w-8 h-8 text-ember-500" />

              <h3 className="text-white text-2xl font-bold">
                Social Media
              </h3>
            </div>

            <p className="text-coal-400 leading-relaxed mb-5">
              Follow us for BBQ specials, launches and latest updates.
            </p>

            <a
              href="https://facebook.com/bbqnights"
              target="_blank"
              rel="noreferrer"
              className="text-ember-500 hover:text-ember-400 transition-colors"
            >
              facebook.com/bbqnights →
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact