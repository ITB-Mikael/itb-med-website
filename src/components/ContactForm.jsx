import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', subject: '', message: '', privacy: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email format'
    if (!form.subject) errs.subject = 'Please select a subject'
    if (!form.message.trim()) errs.message = 'Message is required'
    if (!form.privacy) errs.privacy = 'You must accept the privacy policy'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
    }
  }

  const update = (field, value) => {
    setForm({ ...form, [field]: value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="w-16 h-16 text-accent-500 mx-auto mb-6" />
        <h3 className="font-serif text-2xl text-white mb-3">Thank you for your message</h3>
        <p className="text-navy-300 leading-relaxed">We'll get back to you as soon as possible.</p>
      </div>
    )
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border transition-all duration-200 bg-white/[0.04] text-white placeholder:text-navy-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-400 focus:bg-white/[0.07] ${
      errors[field] ? 'border-red-500/60' : 'border-white/[0.08]'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-navy-300 mb-1.5">First Name</label>
          <input id="firstName" type="text" className={inputClass('firstName')} value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
          {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-navy-300 mb-1.5">Last Name</label>
          <input id="lastName" type="text" className={inputClass('lastName')} value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
          {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-300 mb-1.5">Email</label>
        <input id="email" type="email" className={inputClass('email')} value={form.email} onChange={(e) => update('email', e.target.value)} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy-300 mb-1.5">Subject</label>
        <select id="subject" className={inputClass('subject')} value={form.subject} onChange={(e) => update('subject', e.target.value)}>
          <option value="" className="bg-navy-900">Select a subject...</option>
          <option value="general" className="bg-navy-900">General Inquiry</option>
          <option value="clinical" className="bg-navy-900">Clinical Trial Information</option>
          <option value="media" className="bg-navy-900">Media / Press</option>
          <option value="partnership" className="bg-navy-900">Partnership / Business Development</option>
        </select>
        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-300 mb-1.5">Message</label>
        <textarea id="message" rows={5} className={inputClass('message')} value={form.message} onChange={(e) => update('message', e.target.value)} />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          type="checkbox"
          checked={form.privacy}
          onChange={(e) => update('privacy', e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-navy-600 bg-white/[0.04] text-accent-500 focus:ring-accent-500"
        />
        <label htmlFor="privacy" className="text-sm text-navy-300 leading-relaxed">
          I agree to the processing of my personal data in accordance with the{' '}
          <a href="/legal" className="text-accent-400 hover:text-accent-300 underline">Privacy Policy</a>.
        </label>
      </div>
      {errors.privacy && <p className="text-red-400 text-xs">{errors.privacy}</p>}

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 cursor-pointer"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  )
}
