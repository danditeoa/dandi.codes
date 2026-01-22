import Image from 'next/image'
import type { Project } from './interfaces'

const defaultProjects: Project[] = [
  {
    title: 'Marvel Project',
    description: 'Project related to the Marvel universe with modern and interactive interface.',
    tech: ['React', 'Next.js', 'TypeScript'],
    image: '/assets/marvel-project.png',
    link: '#',
  },
  {
    title: 'WTM Project',
    description: 'Project developed with focus on performance and user experience.',
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    image: '/assets/wtm.jpeg',
    link: '#',
  },
  {
    title: 'Stock Project 1',
    description: 'Modern web application with responsive design and advanced features.',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    image: '/assets/stock-1.jpg',
    link: '#',
  },
  {
    title: 'Stock Project 2',
    description: 'Elegant and intuitive interface focused on usability.',
    tech: ['React', 'Next.js'],
    image: '/assets/stock-2.jpg',
    link: '#',
  },
  {
    title: 'Stock Project 3',
    description: 'Complete solution with integrated backend and frontend.',
    tech: ['Next.js', 'TypeScript'],
    image: '/assets/stock-3.jpg',
    link: '#',
  },
  {
    title: 'Stock Project 4',
    description: 'Modern platform with its own design system.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/assets/stock-4.jpg',
    link: '#',
  },
]

interface ProjectsProps {
  projects?: Project[]
}

export default function Projects({ projects = defaultProjects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/assets/backgrounds/bg-subtle-2-dark-1440w.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#0a0a0a]/95"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#1f1f1f] rounded-lg overflow-hidden hover:border-indigo-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 group"
            >
              <div className="relative h-48 overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-2 group/link text-sm"
                >
                  View project{' '}
                  <span className="group-hover/link:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
