import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Globe, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactForm } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMess, setErrorMess] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMess('');

    // Validasi client-side
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMess('Please fill out all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMess('Please specify a valid email format.');
      return;
    }

    setIsSubmitting(true);

    // Ambil access key dari environment variable atau file data
    const accessKey = 
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 
      (PERSONAL_INFO as any).web3forms_key || 
      "";

    if (!accessKey) {
      setErrorMess('Configuration error: Web3Forms Access Key is missing.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New message from ${formData.name}`,
          message: formData.message,
          from_name: "Portfolio Contact Form"
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMess(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setErrorMess('An error occurred. Please check your network connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-900/60 relative">
      <div className="absolute top-1/2 right-1/10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            <Mail size={14} className="text-brand-cyan" />
            <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Start a Conversation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, need a contract developer, or want to discuss a permanent team role? Drop me a message, and I will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Quick connection coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-8">
              <h3 className="text-lg font-bold text-white tracking-tight uppercase">
                Contact Info
              </h3>

              <div className="space-y-6">
                {/* Email detail */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-slate-950 text-brand-cyan border border-slate-800/80 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase">
                      Email address
                    </span>
                    <a
                      id="contact-email-link"
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-brand-cyan transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location detail */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-slate-950 text-brand-blue border border-slate-800/80 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase">
                      Based In
                    </span>
                    <span className="text-sm font-semibold text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Timezone detail */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-slate-950 text-brand-purple border border-slate-800/80 shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase">
                      Time Zone / Active Hours
                    </span>
                    <span className="text-sm font-semibold text-slate-200 block">
                      Jakarta (WIB) &bull; GMT+7
                    </span>
                    <span className="text-xs text-slate-500 font-mono mt-0.5 block">
                      9:00 AM - 6:00 PM WIB (Working hours)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social networking anchors */}
              <div className="pt-6 border-t border-slate-800/50">
                <span className="block text-xs font-mono text-slate-500 uppercase mb-4">
                  Professional Channels
                </span>
                <div className="flex gap-3">
                  <a
                    id="contact-linkedin"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                  >
                    <Linkedin size={14} className="text-brand-cyan" />
                    LinkedIn Profile
                  </a>
                  <a
                    id="contact-github"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                  >
                    <Globe size={14} className="text-brand-blue" />
                    GitHub Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive contact input workspace */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 relative overflow-hidden min-h-[440px] flex flex-col justify-center">
              
              {!isSubmitted ? (
                <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-white tracking-tight uppercase mb-2">
                    Send a Message
                  </h3>

                  {errorMess && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                      {errorMess}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase font-bold">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-brand-cyan outline-none text-sm transition-colors"
                      />
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase font-bold">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-brand-cyan outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-400 uppercase font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Collaboration opportunity / Job opening"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-brand-cyan outline-none text-sm transition-colors"
                    />
                  </div>

                  {/* Message body field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase font-bold">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Hilmi, I love your portfolio projects! Let's talk about building..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-brand-cyan outline-none text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue/90 disabled:bg-slate-850 disabled:text-slate-500 text-white font-bold text-sm uppercase tracking-wider transition-all scale-100 hover:scale-[1.01] active:scale-95 shadow-md shadow-brand-blue/10 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-slate-500 border-t-white animate-spin mr-1" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Dispatch message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                // Success Dispatch state screen
                <div id="contact-success-screen" className="text-center py-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <Check size={28} strokeWidth={2.5} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-white">
                      Message Successfully Transmitted!
                    </h3>
                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                      Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>! Your packet has been queued in my client-side logging session. I will respond to <span className="text-white font-semibold">{formData.email}</span> within 24 hours.
                    </p>
                  </div>

                  {/* Summary receipt of sent context */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-left font-mono text-xs text-slate-400 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-slate-800/80 pb-2 mb-2 font-bold text-slate-300">
                      <span>DISPATCH SUMMARY</span>
                      <span className="text-emerald-400">STATUS: OK</span>
                    </div>
                    <p className="mb-1"><span className="text-slate-500">Sender:</span> {formData.name}</p>
                    <p className="mb-1"><span className="text-slate-500">Email:</span> {formData.email}</p>
                    {formData.subject && <p className="mb-1"><span className="text-slate-500">Subject:</span> {formData.subject}</p>}
                    <p className="line-clamp-2 mt-2 pt-2 border-t border-slate-800/50"><span className="text-slate-500">Excerpt:</span> "{formData.message}"</p>
                  </div>

                  <button
                    onClick={resetForm}
                    id="contact-success-reset-btn"
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-xs font-semibold tracking-wide text-slate-300 hover:text-white transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}