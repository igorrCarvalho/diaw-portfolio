import { SectionTitle } from './SectionTitle.jsx'

function ProjectLinks({ item, repoLabel, siteLabel }) {
  const linkClass =
    'rounded-[3px] border border-ink/25 px-3 py-1 text-sm text-ink transition-colors hover:border-violet hover:text-violet focus-visible:border-violet focus-visible:text-violet focus-visible:outline-none'

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {item.repo && (
        <a href={item.repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {repoLabel}
        </a>
      )}
      {item.site && (
        <a href={item.site} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {siteLabel}
        </a>
      )}
    </div>
  )
}

function ProjectItem({ item, repoLabel, siteLabel }) {
  return (
    <li className="relative">
      <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-violet" aria-hidden="true" />
      <p className="text-sm text-muted">{item.period}</p>
      <h3 className="text-lg font-semibold tracking-tight text-ink">{item.name}</h3>
      <p className="mt-2 text-[#c9c6da]">{item.description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <li key={tech} className="rounded-[3px] border border-ink/25 px-2 py-0.5 text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>
      <img
        src={item.image}
        alt={item.imageAlt}
        loading="lazy"
        className="mt-4 aspect-video w-full rounded-[3px] border border-ink/15 object-cover"
      />
      <ProjectLinks item={item} repoLabel={repoLabel} siteLabel={siteLabel} />
    </li>
  )
}

export function Projects({ projects }) {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="py-16">
      <SectionTitle id="projetos-titulo">{projects.title}</SectionTitle>
      <p className="mb-8 text-[#c9c6da]">{projects.intro}</p>
      <ol className="flex flex-col gap-12 border-l border-ink/15 pl-6">
        {projects.items.map((item) => (
          <ProjectItem
            key={item.name}
            item={item}
            repoLabel={projects.repoLabel}
            siteLabel={projects.siteLabel}
          />
        ))}
      </ol>
    </section>
  )
}
