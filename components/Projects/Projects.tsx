import Image from 'next/image'
import type { Project } from './interfaces'

const defaultProjects: Project[] = [
  {
    title: 'Pokemon Battle Game',
    description: 'Interactive platform to explore a Pokemon list or test the Pokémon in a card battle! Access detailed information about a Pokémon or test its abilities in super trump style battles, where the average skills score determines the winner. Features Pokémon exploration with details including image, name, abilities, and descriptions, plus a search bar to manually select Pokémon for battle.',
    tech: ['Next.js', 'Axios', 'Jest', 'TypeScript'],
    image: '/assets/pokemon-app.png',
    link: 'https://pokemons-rho-one.vercel.app/',
  },
  {
    title: 'List Popular Movies',
    description: 'Project created using Create React App with Redux and Redux Toolkit. Uses The Movie DB API to list popular movies with pagination and search functionality. This project demonstrates experience with state management, API integration, and complex UI interactions.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'Axios', 'SASS/SCSS', 'React Paginate', 'Redux Persist'],
    image: '/assets/list-movies.png',
    link: 'https://list-movie-pi.vercel.app/',
  },
  {
    title: 'Women Techmakers',
    description: 'Women Techmakers is a global initiative, previously from Google (now with new partnerships like Technovation), focused on empowering women in technology. The program promotes diversity, visibility, community, and resources, organizing technical events, mentorships, and initiatives (like She Builds AI) to support women\'s careers. I participate and organize technology events as part of this community.',
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    image: '/assets/wtm.jpeg',
    link: 'https://app.advocu.com/members/696117e29b75bd382db13b3e',
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
]

interface ProjectsProps {
  projects?: Project[]
}

export default function Projects({ projects = defaultProjects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent" style={{ marginBottom: '16px' }}>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ width: '100%', display: 'grid' }}>
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
              <div className="p-6" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
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
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-2 group/link text-sm transition-colors"
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
