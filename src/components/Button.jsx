const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', disabled = false }) => {
  const base = 'inline-flex items-center justify-center font-accent font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-ember-500 focus:ring-offset-2 focus:ring-offset-smoke-900 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-ember-600 text-white hover:bg-ember-500 hover:shadow-ember active:bg-ember-700',
    secondary: 'border-2 border-ember-600 text-ember-400 hover:bg-ember-600 hover:text-white',
    ghost: 'text-coal-200 hover:text-ember-400 hover:bg-smoke-700',
    dark: 'bg-smoke-700 text-coal-100 hover:bg-smoke-600 border border-coal-700',
    danger: 'bg-red-800 text-white hover:bg-red-700',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
