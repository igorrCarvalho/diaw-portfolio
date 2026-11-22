import { SectionTitle } from './SectionTitle.jsx'

export function About({ about }) {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-16">
      <SectionTitle id="sobre-titulo">{about.title}</SectionTitle>
      <p className="text-xl font-semibold tracking-tight text-ink">{about.name}</p>
      <p className="text-violet">{about.role}</p>
      <p className="mb-6 text-sm text-muted">{about.location}</p>
      <div className="flex flex-col gap-4 text-[#c9c6da]">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
