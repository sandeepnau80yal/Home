import { useState } from 'react'
import { SocialLinks } from '../components/SocialLinks'
import CornerBrackets from '../components/CornerBrackets'
import QuoteFooter from '../components/QuoteFooter'
import Nav from '../components/Nav'



const InputField = ({ type = 'text', placeholder, value, onChange, required }) => (
  <div className="relative group">
    <div className="absolute top-0 left-0 w-[6px] h-[6px] border-t border-l border-teal-400/40 group-focus-within:border-teal-400 transition-colors"></div>
    <div className="absolute top-0 right-0 w-[6px] h-[6px] border-t border-r border-teal-400/40 group-focus-within:border-teal-400 transition-colors"></div>
    <div className="absolute bottom-0 left-0 w-[6px] h-[6px] border-b border-l border-teal-400/40 group-focus-within:border-teal-400 transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-[6px] h-[6px] border-b border-r border-teal-400/40 group-focus-within:border-teal-400 transition-colors"></div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-transparent border border-white/8 text-white text-[14px] px-4 py-3 outline-none focus:border-teal-400/40 transition-colors placeholder:text-white/20"
      style={{ fontFamily: 'Syne, sans-serif' }}
    />
  </div>
)

const TextArea = ({ placeholder, value, onChange, required }) => (
  <div className="relative group">
    <div className="absolute top-0 left-0 w-[6px] h-[6px] border-t border-l border-teal-400/40 group-focus-within:border-teal-400 transition-colors"></div>
    <div className="absolute top-0 right-0 w-[6px] h-[6px] border-t border-r border-teal-400/40 group-focus-within:border-teal-400 transition-colors"></div>
    <div className="absolute bottom-0 left-0 w-[6px] h-[6px] border-b border-l border-teal-400/40 group-focus-within:border-teal-400 transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-[6px] h-[6px] border-b border-r border-teal-400/40 group-focus-within:border-teal-400 transition-colors"></div>
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={5}
      className="w-full bg-transparent border border-white/8 text-white text-[14px] px-4 py-3 outline-none focus:border-teal-400/40 transition-colors placeholder:text-white/20 resize-none"
      style={{ fontFamily: 'Syne, sans-serif' }}
    />
  </div>
)

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_YOUR_FORM_ID}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      message: form.message,
      _subject: `Portfolio Contact from ${form.name}`,
    }),
  }
)

    if (response.ok) {
      setSubmitted(true)

      setForm({
        name: "",
        email: "",
        message: "",
      })
    } else {
      alert("Failed to send message.")
    }
  } catch (error) {
    console.error(error)
    alert("Something went wrong.")
  }
}

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  return (
    <div className="bg-black text-white min-h-screen relative grid-bg flex flex-col px-6 py-16">
      <CornerBrackets />
      <Nav active="Contact"/>
      <main className="max-w-xl mx-auto w-full flex-1">
        <p className="mono text-[10px] text-teal-400/60 tracking-[.3em] uppercase mb-4">// contact</p>
        <h1 className="font-bold text-4xl tracking-tight mb-3">
          Say <span className="text-teal-400">hello.</span>
        </h1>
        <div className="w-8 h-px bg-teal-400/40 mb-8"></div>
        <p className="text-white/40 text-[14px] leading-relaxed mb-10">
          Have something to say? Drop a message and I'll get back to you ASAP.
        </p>

        {submitted ? (
          <div className="relative border border-teal-400/20 px-6 py-8 text-center">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-teal-400"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-teal-400"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-teal-400"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-teal-400"></div>
            <p className="mono text-[11px] text-teal-400 tracking-wider">// message sent. talk soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputField placeholder="Name" value={form.name} onChange={handleChange('name')} required />
            <InputField type="email" placeholder="Email" value={form.email} onChange={handleChange('email')} required />
            <TextArea placeholder="Message" value={form.message} onChange={handleChange('message')} required />
            <button
              type="submit"
              className="mono text-[11px] tracking-widest uppercase text-teal-400 border border-teal-400/30 px-6 py-3 hover:bg-teal-400/10 hover:border-teal-400/60 transition-all self-start mt-1 relative group"
            >
              <span className="absolute top-0 left-0 w-[5px] h-[5px] border-t border-l border-teal-400/60 group-hover:border-teal-400 transition-colors"></span>
              <span className="absolute bottom-0 right-0 w-[5px] h-[5px] border-b border-r border-teal-400/60 group-hover:border-teal-400 transition-colors"></span>
              Send →
            </button>
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="mono text-[10px] text-white/20 tracking-widest uppercase mb-4">// or reach out directly</p>
          <SocialLinks />
        </div>
      </main>
      <div className="mt-auto">
      <QuoteFooter className="absolute bottom-6 left-1/2 -translate-x-1/2" />
      </div>
    </div>
  )
}

export default Contact