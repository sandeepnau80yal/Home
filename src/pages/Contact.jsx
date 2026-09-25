import { useState } from 'react'
import { SocialLinks } from '../components/SocialLinks'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_YOUR_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Portfolio Contact from ${form.name}`,
        }),
      })

      if (!response.ok) throw new Error('Message could not be sent')
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again later.')
    }
  }

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  return (
    <div className="page-shell content-shell contact-shell">
      <header className="section-heading">
        <p className="section-kicker">03 / Get in touch</p>
        <h2>Have an idea?<br /><span>Let’s talk.</span></h2>
        <p className="section-intro">Have something to say, or something interesting to build? I’d be glad to hear from you.</p>
      </header>

      <div className="contact-layout">
        <aside className="contact-details">
          <p className="eyebrow">Direct line</p>
          <a className="contact-email" href="mailto:sandeep@nau80yal.in">sandeep@nau80yal.in <span aria-hidden="true">↗</span></a>
          <div className="contact-rule" />
          <p className="eyebrow">Elsewhere</p>
          <SocialLinks />
          <p className="contact-note"><span className="status-dot" /> A useful first note: what you’re building, what you’ve tried, and where you’re stuck.</p>
        </aside>

        <div className="surface-card contact-form-card">
          {submitted ? (
            <div className="form-success" role="status"><span className="success-mark">✓</span><h3>Message sent.</h3><p>Thanks for reaching out. I’ll get back to you soon.</p></div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Name<input type="text" placeholder="Your name" value={form.name} onChange={handleChange('name')} required /></label>
              <label>Email<input type="email" placeholder="you@example.com" value={form.email} onChange={handleChange('email')} required /></label>
              <label>Message<textarea placeholder="What would you like to talk about?" value={form.message} onChange={handleChange('message')} rows={5} required /></label>
              <button type="submit" className="button button-primary">Send message <span aria-hidden="true">↗</span></button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
