const SectionTitle = ({ eyebrow, title, subtitle, center = false, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="font-accent text-ember-500 text-sm tracking-[0.3em] uppercase mb-3 font-semibold">
          — {eyebrow} —
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-coal-50'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-coal-300' : 'text-coal-400'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-0.5 w-16 bg-ember-600 ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}

export default SectionTitle
