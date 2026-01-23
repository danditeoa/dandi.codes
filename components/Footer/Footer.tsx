import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-[#1f1f1f] bg-[#111111] overflow-hidden" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/backgrounds/bg-footer-dark-1440w.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#111111]/90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="text-center text-gray-400" style={{ textAlign: 'center', width: '100%' }}>
          <p className="mb-2">© {new Date().getFullYear()} Dandi. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
