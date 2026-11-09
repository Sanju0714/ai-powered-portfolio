import React, { useState } from 'react';
import { Bot, Github, Linkedin, Mail, Phone, ArrowRight, FileText, Download, Brain, Check, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, RESUME_PDF_PATH } from '../data/portfolioData';

interface HeroProps {
  onOpenChat: () => void;
  onViewResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat, onViewResume }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-800/80">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left Content, Right Visual Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Typography & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial kicker - clean unboxed text with separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-cyan-400">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span>RGUKT Ongole (Graduating May 2027)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">IIT Madras BS · Diploma Level</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Innomatics · Hyderabad</span>
            </div>

            {/* Primary Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              {PERSONAL_INFO.name}
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-300 mt-2">
                Data Science, AI & Machine Learning
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                I am a Computer Science and Engineering student with a strong interest in Data Science, Artificial Intelligence, Machine Learning, and Generative AI. I work on data analysis, predictive modeling, NLP, LLM-powered applications, RAG systems, and AI automation. My projects combine Python, SQL, machine-learning libraries, business intelligence tools, and modern AI frameworks to build practical solutions.
              </p>
              <p className="text-xs sm:text-sm text-cyan-400/90 font-medium">
                Final-year B.Tech CSE student at RGUKT Ongole graduating in May 2027 (CGPA: 8.88/10), pursuing the IIT Madras BS in Data Science & Applications at diploma level and the Data Science with GenAI program at Innomatics Research Labs, Hyderabad.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:translate-y-[-1px] active:translate-y-[0px]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/60 rounded-lg transition-all shadow-sm group"
              >
                <Bot className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Ask AI Resume</span>
              </button>

              {/* View Resume Option (Clean HTML Web Page) */}
              <button
                onClick={onViewResume}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors shadow-sm"
                title="Open resume as an HTML web page"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              {/* Download Resume Option (Original Uploaded PDF) */}
              <a
                href={RESUME_PDF_PATH}
                download="Sanjana_Gorli_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
                title="Download original uploaded PDF resume"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Social & Professional Links with Copy Email utility - strictly resume links */}
            <div className="pt-4 border-t border-slate-850 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (Sanju0714)</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors text-slate-400"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors text-slate-400"
                title="Direct Phone from Resume"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Portrait Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              
              {/* Subtle back decorative glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent rounded-2xl blur-lg opacity-70" />

              {/* Main Card Container */}
              <div className="relative bg-[#0b1222] border border-slate-800 rounded-2xl p-3 shadow-2xl overflow-hidden">
                
                {/* Image slot with resilient zero-broken-image fallback */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.avatarImage}
                      alt="Sanjana Gorli - Computer Science & Engineering Student"
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1933] via-[#091122] to-[#060913] text-center">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                        <Brain className="w-8 h-8" />
                      </div>
                      <span className="text-lg font-bold text-white">Sanjana Gorli</span>
                      <span className="text-xs text-cyan-400 mt-1">B.Tech CSE · RGUKT Ongole</span>
                      <span className="text-xs text-slate-500 mt-2">IIT Madras BS Data Science</span>
                    </div>
                  )}

                  {/* Corner Accent Overlay Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0a1020]/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">B.Tech Computer Science</div>
                      <div className="text-[11px] text-slate-400">RGUKT Ongole · Graduating May 2027</div>
                    </div>

                  </div>
                </div>

                {/* Sub-card footer stats */}
                <div className="mt-3 px-1.5 py-1 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-slate-300">RGUKT · IIT Madras · Innomatics</span>
                  <span className="text-cyan-400 font-mono text-[11px]">May 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Verified Metrics Strip Below Hero Split */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
