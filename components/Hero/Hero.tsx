import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/bg-main-dark-1440w.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
      </div>

      <div 
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: 'url(/assets/backgrounds/noise.png)',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)] z-[1] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">
              Dandi
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6">
            Front-end Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Building scalable, performant web applications with modern technologies and a focus on accessibility and inclusive design.
          </p>
          <div className="flex gap-4 justify-center flex-wrap" style={{ marginTop: '16px' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
              style={{ padding: '12px 32px' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-0.5"
              style={{ padding: '12px 32px' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
