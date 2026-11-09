import React, { useEffect } from 'react';
import { X, ExternalLink, Printer, Download, Mail, Phone, Linkedin, Github, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_INFO, EXPERIENCES, PROJECTS, CERTIFICATIONS, RESUME_PDF_PATH } from '../data/portfolioData';

interface HtmlResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlResumeModal: React.FC<HtmlResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b1222] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10">
        
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#070d1a]/90 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Sanjana Gorli — Curriculum Vitae</span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-800 rounded">
                  HTML Web View
                </span>
              </div>
              <div className="text-xs text-slate-400">
                Source: Verified Uploaded Resume
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Open Standalone in New Tab */}
            <a
              href="/assets/aistudio/Resume__10__00522ca7.pdf" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Open the original resume PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </a>

            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Separate Download Original PDF Button */}
            <a
              href={RESUME_PDF_PATH}
              download="Sanjana_Gorli_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm"
              title="Download original uploaded PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 text-slate-300 text-sm leading-relaxed selection:bg-cyan-500/20 selection:text-cyan-200">
          
          {/* Document Header */}
          <div className="text-center pb-5 border-b border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>linkedin.com/in/sanjanagorli</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>github.com/Sanju0714</span>
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 pb-1.5 border-b border-slate-800 mb-2.5">
              PROFILE
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
              Final-year B.Tech Computer Science and Engineering student at RGUKT Ongole with a CGPA of 8.88 and hands-on experience in Python programming, application development, AI-powered automation, and API integration. Developed projects using Python, Streamlit, LangChain, and SQL, with experience in debugging, testing, and building practical software solutions. Strong problem-solving and analytical skills, with a willingness to learn new technologies and collaborate on technical projects.
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 pb-1.5 border-b border-slate-800 mb-3">
              EDUCATION
            </h2>
            
            <div className="space-y-3.5">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-bold text-white text-sm">
                    {EDUCATION_INFO.primary.degree}
                  </div>
                  <div className="text-xs font-mono text-cyan-400">
                    {EDUCATION_INFO.primary.period}
                  </div>
                </div>
                <div className="flex flex-wrap items-baseline justify-between text-xs text-slate-400 mt-0.5">
                  <div>{EDUCATION_INFO.primary.institution}</div>
                  <div>{EDUCATION_INFO.primary.location}</div>
                </div>
                <div className="text-xs font-medium text-cyan-300 mt-1">
                  CGPA: {EDUCATION_INFO.primary.cgpa}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-850">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-bold text-white text-sm">
                    {EDUCATION_INFO.secondary.degree}
                  </div>
                  <div className="text-xs font-mono text-cyan-400">
                    {EDUCATION_INFO.secondary.status}
                  </div>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {EDUCATION_INFO.secondary.institution}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 pb-1.5 border-b border-slate-800 mb-2.5">
              SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-white">Programming Languages:</span>{' '}
                <span className="text-slate-300">Python, SQL</span>
              </div>
              <div>
                <span className="font-bold text-white">Technical Tools:</span>{' '}
                <span className="text-slate-300">Git, GitHub, VS Code, Streamlit</span>
              </div>
              <div>
                <span className="font-bold text-white">Software Development:</span>{' '}
                <span className="text-slate-300">Basic Application Development, API Integration, Debugging and Troubleshooting</span>
              </div>
              <div>
                <span className="font-bold text-white">Computer Science Fundamentals:</span>{' '}
                <span className="text-slate-300">Object-Oriented Programming (OOP), DBMS, Problem-Solving</span>
              </div>
              <div>
                <span className="font-bold text-white">Analytical Skills:</span>{' '}
                <span className="text-slate-300">Analytical Thinking, Technical Issue Identification, Solution Development</span>
              </div>
              <div>
                <span className="font-bold text-white">Professional Skills:</span>{' '}
                <span className="text-slate-300">Communication, Team Collaboration, Time Management, Adaptability, Willingness to Learn New Technologies</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 pb-1.5 border-b border-slate-800 mb-3.5">
              INTERNSHIP EXPERIENCE
            </h2>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between text-xs text-slate-400">
                    <span className="text-slate-300 font-medium">{exp.organization}</span>
                    {exp.location && <span>{exp.location}</span>}
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300 marker:text-cyan-400 pt-1">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 pb-1.5 border-b border-slate-800 mb-3.5">
              PROJECTS
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                  </div>
                  <div className="text-xs font-mono text-cyan-400">
                    {proj.technologies.join(', ')}
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300 marker:text-cyan-400 pt-1">
                    {proj.fullOverview ? (
                      <li className="leading-relaxed">{proj.fullOverview}</li>
                    ) : (
                      proj.measurableResults.map((result, idx) => (
                        <li key={idx} className="leading-relaxed">{result}</li>
                      ))
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 pb-1.5 border-b border-slate-800 mb-3">
              CERTIFICATES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div className="text-xs font-bold text-white leading-snug">
                    {cert.name}
                  </div>
                  <div className="text-[11px] text-cyan-400 mt-1 flex items-center justify-between">
                    <span>{cert.issuer}</span>
                    {cert.issueDate && <span className="font-mono text-slate-500">{cert.issueDate}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#070d1a] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Original uploaded resume PDF</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/Resume__10__00522ca7.pdf" target="_blank" rel="noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>View Resume PDF</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
