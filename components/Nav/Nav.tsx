'use client'

import { useState, useEffect } from 'react'
import type { NavItem } from './interfaces'

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1f1f1f] py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent hover:from-indigo-400 hover:to-indigo-300 transition-all"
          >
            Dandi
          </div>
          <ul className="flex gap-6 sm:gap-8 items-center list-none m-0 p-0">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer text-sm text-gray-300 hover:text-indigo-400 transition-colors relative group list-none"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
