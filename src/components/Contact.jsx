import { SectionTitle } from './SectionTitle.jsx'
import { Icon } from './Icon.jsx'

function IconLink({ href, label, icon, external }) {
  let target
  let rel
  if (external) {
    target = '_blank'
    rel = 'noopener noreferrer'
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-ink/25 text-ink transition-colors hover:border-violet hover:text-violet focus-visible:border-violet focus-visible:text-violet focus-visible:outline-none"
    >
      <Icon name={icon} />
    </a>
  )
}

export function Contact({ contact }) {
  const mailto = 'mailto:' + contact.email.user + '@' + contact.email.domain

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="py-16">
      <SectionTitle id="contato-titulo">{contact.title}</SectionTitle>
      <p className="mb-6 text-[#c9c6da]">{contact.text}</p>
      <div className="mb-10 flex gap-3">
        <IconLink href={mailto} label={contact.email.label} icon="email" external={false} />
        {contact.links.map((link) => (
          <IconLink key={link.label} href={link.href} label={link.label} icon={link.icon} external={true} />
        ))}
      </div>
    </section>
  )
}
