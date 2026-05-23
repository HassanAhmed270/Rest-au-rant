const CategoryFilter = ({ categories, active, onChange }) => {

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`flex items-center gap-2 px-4 py-2 rounded-sm font-accent text-sm font-semibold tracking-wider uppercase transition-all duration-200 border ${
            active === cat
              ? 'bg-ember-600 text-white border-ember-600 shadow-ember'
              : 'bg-smoke-700 text-coal-300 border-coal-700 hover:border-ember-700 hover:text-ember-400'
          }`}
        >
          
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
