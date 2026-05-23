const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const formatPrice = (price) => `Rs. ${price.toLocaleString()}`

  return (
    <div className="flex items-center gap-3 py-3 border-b border-coal-800 last:border-b-0">
      <div className="w-10 h-10 bg-smoke-600 rounded flex items-center justify-center text-xl flex-shrink-0">
        {item.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-coal-100 text-sm truncate">{item.name}</p>
        <p className="text-ember-400 font-accent text-sm font-bold">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          onClick={onDecrease}
          className="w-7 h-7 bg-smoke-600 border border-coal-700 text-coal-300 hover:bg-ember-700 hover:text-white rounded-sm text-sm font-bold transition-colors flex items-center justify-center"
        >
          −
        </button>
        <span className="w-6 text-center font-accent font-bold text-coal-100 text-sm">{item.quantity}</span>
        <button
          onClick={onIncrease}
          className="w-7 h-7 bg-ember-700 border border-ember-600 text-white hover:bg-ember-600 rounded-sm text-sm font-bold transition-colors flex items-center justify-center"
        >
          +
        </button>
      </div>
      <button
        onClick={onRemove}
        className="text-coal-600 hover:text-red-500 transition-colors ml-1 text-lg leading-none"
        title="Remove"
      >
        ×
      </button>
    </div>
  )
}

export default CartItem
