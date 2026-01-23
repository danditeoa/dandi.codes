import type { ContactLink } from './interfaces'

const defaultLinks: ContactLink[] = [
  {
    label: 'Send Email',
    href: 'mailto:damaristassila@gmail.com',
    variant: 'primary',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/danditeoa',
    variant: 'secondary',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/damaristassila/',
    variant: 'secondary',
  },
]

interface ContactProps {
  links?: ContactLink[]
}

const getButtonClasses = (variant: 'primary' | 'secondary') => {
  const baseClasses = 'px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap block text-center'
  
  if (variant === 'primary') {
    return `${baseClasses} bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30`
  }
  
  return `${baseClasses} border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white`
}

export default function Contact({ links = defaultLinks }: ContactProps) {
  return (
    <section id="contact" className="py-40 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-16 leading-relaxed">
              I'm always open to new opportunities and interesting projects.
              Let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={getButtonClasses(link.variant || 'primary')}
                  style={{ padding: '12px 32px' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
