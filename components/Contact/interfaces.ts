export interface ContactLink {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export interface ContactProps {
  links?: ContactLink[]
}
