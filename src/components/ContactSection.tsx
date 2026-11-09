import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} - ${formData.role || 'Opportunity'}`);
      const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\nRole/Subject: ${formData.role}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#060913] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            07. Connect & Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Get in Touch for Opportunities & Collaborations
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Open to AI, Machine Learning, Data Science, and Generative AI opportunities. Expected Graduation: May 2027.
          </p>
        </div>

        {/* 2-Column Split: Contact Details vs Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 cols): Direct Channels & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Personal Details & Direct Contact Card */}
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 shadow-md space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Personal Contact Details
              </div>

              {/* Email row */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2.5 min-w-0 hover:text-cyan-400 transition-colors"
                  title="Send email"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-sm font-mono text-white truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone row */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-2.5 min-w-0 hover:text-cyan-400 transition-colors"
                  title="Call phone number"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-sm font-mono text-white truncate">
                    {PERSONAL_INFO.phone}
                  </span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 shrink-0"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Reach out for internship, full-time engineering opportunities, or technical inquiries. I check communications frequently and respond promptly.
              </p>
            </div>

            {/* Professional Profiles */}
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 shadow-md space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Professional Profiles
              </div>

              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all text-xs font-medium text-slate-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                    linkedin.com/in/sanjanagorli →
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all text-xs font-medium text-slate-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                    github.com/Sanju0714 →
                  </span>
                </a>
              </div>
            </div>

            {/* Academic Status */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Academic Standing</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                B.Tech CSE at RGUKT Ongole (CGPA: 8.88) & BS Data Science at IIT Madras. Expected Graduation: May 2027.
              </p>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the message form below or reach me directly at {PERSONAL_INFO.email}.
              </p>

              {status === 'sent' ? (
                <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-700/50 space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you! Your default email client has opened with your message addressed to <strong>{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', role: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-700/60 rounded-lg hover:bg-cyan-900/60 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-slate-300">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="role" className="text-xs font-medium text-slate-300">
                      Subject / Company / Role (Optional)
                    </label>
                    <input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. AI / Data Science Internship or Full-time Role"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sanjana, we reviewed your work on LangGraph AI agents and NLP classifiers..."
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md shadow-cyan-500/20 transition-all disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
