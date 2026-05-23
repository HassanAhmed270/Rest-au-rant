import Button from './Button'

const ProductCard = ({
  item,
  onAddToCart,
  cartQuantity = 0,
  onIncrease,
  onDecrease
}) => {

  const badgeColors = {
    'Best Seller': 'bg-ember-600 text-white',
    "Chef's Pick": 'bg-amber-700 text-white',
    'Fan Fav': 'bg-orange-700 text-white',
    'Limited': 'bg-red-800 text-white',
    'Premium': 'bg-yellow-700 text-white',
    'Spicy': 'bg-red-600 text-white',
    'Value Deal': 'bg-green-800 text-white',
    'Best Value': 'bg-green-700 text-white',
    'Popular': 'bg-blue-800 text-white',
    'Signature': 'bg-purple-800 text-white',
    'Must Try': 'bg-ember-700 text-white',
    'Seasonal': 'bg-teal-800 text-white',
    'Share': 'bg-pink-800 text-white',
  }

  return (
    <div className="group relative bg-smoke-700 border border-coal-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-ember-700 hover:shadow-card-hover hover:-translate-y-1 flex flex-col">

      {/* IMAGE SECTION */}
      <div className="relative h-48 bg-smoke-600 overflow-hidden">

        {/* Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-smoke-900/80 via-transparent to-transparent" />

        {/* Badge */}
        {item.badge && (
          <span
            className={`absolute top-3 left-3 z-20 text-xs font-accent font-semibold px-2.5 py-1 rounded-sm tracking-wider ${
              badgeColors[item.badge] || 'bg-ember-600 text-white'
            }`}
          >
            {item.badge}
          </span>
        )}

        {/* Price */}
        <span className="absolute bottom-3 right-3 z-20 font-accent font-bold text-xl text-ember-400">
          Rs. {item.price}
        </span>

      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">

        {/* Category */}
        <span className="text-xs font-accent text-coal-500 uppercase tracking-widest mb-1">
          {item.category}
        </span>

        {/* Name */}
        <h3 className="font-display text-lg font-bold text-coal-100 mb-2 leading-tight">
          {item.name}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-coal-400 leading-relaxed flex-1 mb-4">
          {item.description}
        </p>

        {/* CART CONTROLS */}
        {cartQuantity > 0 ? (
          <div className="flex items-center gap-2">

            <button
              onClick={onDecrease}
              className="w-9 h-9 rounded-sm bg-smoke-600 border border-coal-700 text-coal-200 hover:bg-ember-700 hover:border-ember-600 transition-colors font-bold text-lg flex items-center justify-center"
            >
              −
            </button>

            <span className="flex-1 text-center font-accent font-bold text-ember-400 text-lg">
              {cartQuantity}
            </span>

            <button
              onClick={onIncrease}
              className="w-9 h-9 rounded-sm bg-ember-700 border border-ember-600 text-white hover:bg-ember-600 transition-colors font-bold text-lg flex items-center justify-center"
            >
              +
            </button>

          </div>
        ) : (
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => onAddToCart(item)}
          >
            Add to Order
          </Button>
        )}

      </div>
    </div>
  )
}

export default ProductCard