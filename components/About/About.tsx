import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#111111] relative overflow-hidden" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/backgrounds/bg-subtle-1-dark-1440w.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#111111]/90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent" style={{ marginBottom: '16px' }}>
          About Me
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
              <div className="relative w-full max-w-md">
                <div className="relative w-full aspect-square mx-auto rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-2xl">
                  <Image
                    src="/assets/portrait.jpeg"
                    alt="Dandi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent"></div>
                </div>
              </div>
              <div className="text-lg sm:text-xl text-gray-300 leading-relaxed space-y-6 w-full">
                <p>
                  Front-end Developer with 6+ years of experience building scalable, performant web applications with Vue.js, React, TypeScript, and Next.js. Specialized in atomic design, micro frontends, SEO optimization, and performance improvements (Lighthouse, Core Web Vitals). Passionate about creating intuitive, accessible interfaces that drive engagement and improve user experience. Also experienced in back-end integration (Node.js, Python) and agile workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
