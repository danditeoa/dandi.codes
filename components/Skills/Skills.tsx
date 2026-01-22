interface SkillsProps {
  skills?: string[]
}

const defaultSkills = [
  'Vue.js',
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Python',
  'Tailwind CSS',
  'CSS3',
  'HTML5',
  'Git',
  'Atomic Design',
  'Micro Frontends',
  'SEO Optimization',
  'Performance',
  'Accessibility',
  'Agile',
]

export default function Skills({ skills = defaultSkills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-default hover:scale-105"
            >
              <span className="text-white font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
