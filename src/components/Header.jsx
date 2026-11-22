import { useEffect, useState } from 'react'

const linkClass =
  'rounded-[3px] px-1 text-sm transition-colors hover:text-violet focus-visible:text-violet focus-visible:outline-none focus-visible:underline'

const buttonClass =
  'rounded-[3px] border border-ink/25 px-3 py-1 text-sm text-ink transition-colors hover:border-violet hover:text-violet focus-visible:border-violet focus-visible:text-violet focus-visible:outline-none'

export function Header({ name, nav, languageSwitch, onToggleLanguage }) {
  const [activeSection, setActiveSection] = useState('sobre')

  useEffect(() => {
    const sections = document.querySelectorAll('main section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const links = [
    { id: 'sobre', label: nav.about },
    { id: 'projetos', label: nav.projects },
    { id: 'experiencias', label: nav.experience },
    { id: 'contato', label: nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-void/55 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex w-full max-w-[880px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3">
        <a href="#sobre" className="font-semibold tracking-tight text-ink hover:text-violet focus-visible:text-violet focus-visible:outline-none">
          {name}
        </a>
        <button type="button" onClick={onToggleLanguage} className={buttonClass + ' sm:order-3'}>
          {languageSwitch}
        </button>
        <nav aria-label="Principal" className="flex w-full flex-wrap gap-x-4 gap-y-1 sm:order-2 sm:w-auto">
          {links.map((link) => {
            let colorClass = ' text-[#c9c6da]'
            let current
            if (link.id === activeSection) {
              colorClass = ' text-violet'
              current = 'true'
            }
            return (
              <a key={link.id} href={'#' + link.id} aria-current={current} className={linkClass + colorClass}>
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
