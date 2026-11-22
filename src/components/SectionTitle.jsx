export function SectionTitle({ id, children }) {
  return (
    <h2 id={id} className="mb-8 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
      {children}
    </h2>
  )
}
