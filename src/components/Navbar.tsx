import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, FileText, Download } from 'lucide-react';
import { RESUME_PDF_PATH } from '../data/portfolioData';

interface NavbarProps {
  onOpenChat: () => void;
  onViewResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, onViewResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#060913]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
              Sanjana Gorli
            </span>
            <span className="text-xs text-slate-400 font-normal hidden md:inline">
              · B.Tech CSE (RGUKT Ongole)
            </span>
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions - View Resume, Download Resume, Ask AI */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* View Resume Option (Web format) */}
            <button
              onClick={onViewResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              title="Open resume as an HTML web page"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Resume</span>
            </button>

            {/* Separate Download Original Resume PDF button */}
            <a
              href={RESUME_PDF_PATH}
              download="Sanjana_Gorli_Resume.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              title="Download original uploaded resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>Download PDF</span>
            </a>

            {/* Chatbot trigger button */}
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg shadow-sm shadow-cyan-500/25 transition-all whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
            >
              <Bot className="w-4 h-4 text-slate-950" />
              <span>Ask AI Resume</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="xl:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onViewResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-slate-800 rounded-lg border border-cyan-500/30"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume PDF</span>
            </button>
            <a
              href={RESUME_PDF_PATH}
              download="Sanjana_Gorli_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 bg-slate-900 rounded-lg border border-slate-800"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
