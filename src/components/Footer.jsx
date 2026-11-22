export function Footer({ text }) {
  return (
    <footer className="mx-auto w-full max-w-[880px] border-t border-ink/10 px-5 py-10">
      <p className="text-sm text-muted">{text}</p>
    </footer>
  )
}
