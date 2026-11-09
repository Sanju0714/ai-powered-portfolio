import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Focus */}
          <div className="space-y-1">
            <div className="text-base font-bold text-white tracking-tight">
              Sanjana Gorli
            </div>
            <p className="text-slate-400 text-xs">
              B.Tech Computer Science Engineering (RGUKT Ongole '27) · BS Data Science (IIT Madras)
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="/resume.html" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" title="View Resume as HTML">Resume</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
              title="Email Sanjana"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
              title={`Call ${PERSONAL_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors ml-2"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Sanjana Gorli. AI Resume Assistant powered by NVIDIA Nemotron RAG.
          </div>
          <div className="flex items-center gap-2">
            <span>Rajiv Gandhi University of Knowledge Technologies, Ongole</span>
            <span aria-hidden="true">·</span>
            <span>IIT Madras</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
