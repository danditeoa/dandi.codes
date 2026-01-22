export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  link: string
}

export interface ProjectsProps {
  projects?: Project[]
}
