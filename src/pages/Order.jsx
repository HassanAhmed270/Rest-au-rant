import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { menuItems, menuCategories } from '../data/menuData'
import CartItem from '../components/CartItem'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'

const DELIVERY_FEE = 120

const Order = () => {
  const [cart, setCart] = useState([])
  const [orderType, setOrderType] = useState('delivery')
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
    pickupTime: '',
    deliveryDate: '',
  })

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCat =
        activeCategory === 'All' || item.category === activeCategory

      const matchSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  const getCartQty = useCallback(
    (id) => {
      const found = cart.find((c) => c.id === id)
      return found ? found.quantity : 0
    },
    [cart]
  )

  const addToCart = useCallback((item) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.id === item.id)

      if (exists) {
        return prev.map((c) =>
          c.id === item.id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      }

      return [...prev, { ...item, quantity: 1 }]
    })

    setCartOpen(true)
  }, [])

  const increase = useCallback((id) => {
    setCart((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, quantity: c.quantity + 1 }
          : c
      )
    )
  }, [])

  const decrease = useCallback((id) => {
    setCart((prev) => {
      const item = prev.find((c) => c.id === id)

      if (item.quantity === 1) {
        return prev.filter((c) => c.id !== id)
      }

      return prev.map((c) =>
        c.id === id
          ? { ...c, quantity: c.quantity - 1 }
          : c
      )
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((c) => c.id !== id))
  }, [])

  const subtotal = cart.reduce(
    (sum, c) => sum + c.price * c.quantity,
    0
  )

  const total =
    subtotal + (orderType === 'delivery' ? DELIVERY_FEE : 0)

  const totalItems = cart.reduce(
    (sum, c) => sum + c.quantity,
    0
  )

  const formatPrice = (p) => `Rs. ${p.toLocaleString()}`

  const handleFormChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

  const handleOrder = () => {
    if (cart.length === 0) return

    setOrderPlaced(true)
    setCart([])
    setCartOpen(false)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-smoke-900 pt-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3050/3050159.png"
            alt="Celebration"
            className="w-24 h-24 object-contain mx-auto mb-6"
          />

          <h2 className="font-display text-4xl font-bold text-white mb-3">
            Order Placed!
          </h2>

          <p className="font-body text-coal-400 mb-2">
            Your BBQ is being prepared. We'll contact you shortly.
          </p>

          {orderType === 'delivery' ? (
            <p className="font-body text-coal-500 text-sm mb-8">
              Estimated delivery: 35–50 minutes
            </p>
          ) : (
            <p className="font-body text-coal-500 text-sm mb-8">
              Ready for pickup in: 20–30 minutes
            </p>
          )}

          <div className="bg-smoke-700 border border-coal-800 rounded-lg p-6 mb-8 text-left space-y-2">

            <p className="font-accent text-coal-300 text-xs tracking-widest uppercase mb-3">
              Order Summary
            </p>

            <div className="flex justify-between font-body text-sm text-coal-400">
              <span>Order Type</span>
              <span className="text-coal-200 capitalize">
                {orderType}
              </span>
            </div>

            <div className="flex justify-between font-body text-sm text-coal-400">
              <span>Total Paid</span>

              <span className="text-ember-400 font-bold">
                {formatPrice(total)}
              </span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">

            <button
              onClick={() => setOrderPlaced(false)}
              className="bg-ember-600 hover:bg-ember-500 text-white font-accent text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-sm transition-colors"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2913/2913098.png"
                alt="Fire"
                className="w-5 h-5 object-contain inline mr-2"
              />

              Order Again
            </button>

            <Link
              to="/"
              className="border border-coal-700 text-coal-300 hover:border-ember-700 hover:text-ember-400 font-accent text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-sm transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-smoke-900 pt-20 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center px-4 sm:px-6 border-b border-coal-800 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop"
          alt="Order Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,90,10,0.12) 0%, rgba(0,0,0,0.82) 70%)',
          }}
        />

        <div className="relative z-10 max-w-6xl w-full">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div className="text-center lg:text-left">

              <p className="font-accent text-ember-500 text-sm tracking-[0.35em] uppercase mb-5">
                Order Online
              </p>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                Build Your
                <span className="text-ember-500">
                  {' '}BBQ Order
                </span>
              </h1>

              <p className="mt-6 text-coal-300 text-base sm:text-lg max-w-2xl">
                Freshly grilled BBQ, smoky flavors, juicy burgers and
                signature rolls delivered hot to your doorstep.
              </p>
            </div>

            {/* TOGGLE */}
            <div className="flex bg-black/30 backdrop-blur-xl border border-white/10 rounded-full p-1 gap-1">

              {['delivery', 'pickup'].map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-accent text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                    orderType === type
                      ? 'bg-ember-600 text-white shadow-lg shadow-ember-900/40'
                      : 'text-coal-400 hover:text-white'
                  }`}
                >
                  {type === 'delivery' ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2821/2821543.png"
                      alt="Delivery"
                      className="w-5 h-5 object-contain"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1374/1374397.png"
                      alt="Pickup"
                      className="w-5 h-5 object-contain"
                    />
                  )}

                  {type}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8">

        {/* MENU SECTION */}
        <div className="flex-1 min-w-0">

          {/* SEARCH + CATEGORY */}
          <div className="sticky top-20 z-30 bg-smoke-900/95 backdrop-blur-xl border border-white/5 rounded-[28px] p-5 mb-8">

            <div className="space-y-5">

              {/* SEARCH */}
              <div className="relative max-w-md">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
                  alt="Search"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain opacity-60"
                />

                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-white/10 text-coal-200 placeholder-coal-600 font-body text-sm rounded-full pl-12 pr-5 py-3.5 focus:outline-none focus:border-ember-600 transition-all"
                />
              </div>

              {/* CATEGORY TABS */}
              <div className="flex flex-wrap gap-3">

                {menuCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 border font-medium ${
                      activeCategory === cat
                        ? 'bg-ember-600 text-white border-ember-600'
                        : 'border-white/10 text-coal-300 hover:border-ember-600 hover:text-ember-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}

              </div>
            </div>
          </div>

          {/* MENU GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

            {filtered.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onAddToCart={addToCart}
                cartQuantity={getCartQty(item.id)}
                onIncrease={() => increase(item.id)}
                onDecrease={() => decrease(item.id)}
              />
            ))}

          </div>
        </div>

        {/* CART SIDEBAR */}
        <div className="lg:w-96 flex-shrink-0">

          <div className="sticky top-24">

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="lg:hidden w-full flex items-center justify-between bg-smoke-700 border border-coal-700 rounded-sm px-4 py-3 mb-4 font-accent text-sm font-semibold text-coal-200"
            >
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                  alt="Cart"
                  className="w-5 h-5 object-contain inline mr-2"
                />

                Cart ({totalItems} items)
              </span>

              <span className="text-coal-500">
                {cartOpen ? '▲' : '▼'}
              </span>
            </button>

            <div className={`${cartOpen ? 'block' : 'hidden'} lg:block`}>

              <div className="bg-smoke-700 border border-coal-800 rounded-lg overflow-hidden">

                <div className="bg-smoke-600 border-b border-coal-800 px-5 py-4 flex items-center justify-between">

                  <h3 className="font-display text-lg font-bold text-white">
                    Your Order
                  </h3>

                  <span className="font-accent text-ember-400 text-sm font-bold">
                    {totalItems} items
                  </span>
                </div>

                {/* CART ITEMS */}
                <div className="px-5 py-3 max-h-64 overflow-y-auto">

                  {cart.length === 0 ? (
                    <div className="text-center py-8">

                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                        alt="Empty Cart"
                        className="w-16 h-16 object-contain mx-auto mb-2"
                      />

                      <p className="font-body text-coal-500 text-sm">
                        Your cart is empty
                      </p>

                      <p className="font-body text-coal-600 text-xs mt-1">
                        Add some BBQ magic!
                      </p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onIncrease={() => increase(item.id)}
                        onDecrease={() => decrease(item.id)}
                        onRemove={() => removeFromCart(item.id)}
                      />
                    ))
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order