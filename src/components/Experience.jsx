import { SectionTitle } from './SectionTitle.jsx'

export function Experience({ experience }) {
  return (
    <section id="experiencias" aria-labelledby="experiencias-titulo" className="py-16">
      <SectionTitle id="experiencias-titulo">{experience.title}</SectionTitle>
      <ol className="flex flex-col gap-8 border-l border-ink/15 pl-6">
        {experience.items.map((item) => (
          <li key={item.when + item.org} className="reveal relative">
            <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-violet" aria-hidden="true" />
            <p className="text-sm text-muted">{item.when}</p>
            <h3 className="text-lg font-semibold tracking-tight text-ink">{item.role}</h3>
            <p className="text-violet">{item.org}</p>
            <p className="mt-2 text-[#c9c6da]">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
