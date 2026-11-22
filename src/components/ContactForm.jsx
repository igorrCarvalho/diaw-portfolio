import { useState } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  'w-full rounded-[3px] border border-ink/25 bg-void px-3 py-2 text-ink focus:border-violet focus:outline-none focus-visible:border-violet focus-visible:ring-1 focus-visible:ring-violet'

export function ContactForm({ form }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  function showError(text) {
    setStatus('error')
    setFeedback(text)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      showError(form.required)
      return
    }
    if (!emailPattern.test(email.trim())) {
      showError(form.invalidEmail)
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
    if (!accessKey) {
      showError(form.error)
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        showError(form.error)
        return
      }

      setStatus('success')
      setFeedback(form.success)
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      showError(form.error)
    }
  }

  let buttonText = form.send
  if (status === 'sending') {
    buttonText = form.sending
  }

  let feedbackClass = 'text-sm text-[#ff9a9a]'
  if (status === 'success') {
    feedbackClass = 'text-sm text-[#7ee2a8]'
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm text-muted">
          {form.name}
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm text-muted">
          {form.email}
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm text-muted">
          {form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-[3px] border border-ink/25 px-5 py-2 text-ink transition-colors hover:border-violet hover:text-violet focus-visible:border-violet focus-visible:text-violet focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
        >
          {buttonText}
        </button>
      </div>
      <p role="status" className={feedbackClass}>
        {feedback}
      </p>
    </form>
  )
}
