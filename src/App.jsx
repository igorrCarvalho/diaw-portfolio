import { useState, useEffect } from 'react'
import pt from './content/pt.json'
import en from './content/en.json'
import { Header } from './components/Header.jsx'
import { About } from './components/About.jsx'
import { Projects } from './components/Projects.jsx'
import { Experience } from './components/Experience.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

export function App() {
  const [language, setLanguage] = useState('pt')

  let content = pt
  if (language === 'en') {
    content = en
  }

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR'
  }, [language])

  function toggleLanguage() {
    if (language === 'pt') {
      setLanguage('en')
    } else {
      setLanguage('pt')
    }
  }

  return (
    <>
      <Header
        name={content.about.name}
        nav={content.nav}
        languageSwitch={content.languageSwitch}
        onToggleLanguage={toggleLanguage}
      />
      <main className="mx-auto w-full max-w-[880px] px-5 pt-32 sm:pt-28">
        <About about={content.about} />
        <Projects projects={content.projects} />
        <Experience experience={content.experience} />
        <Contact contact={content.contact} />
      </main>
      <Footer text={content.footer} />
    </>
  )
}
