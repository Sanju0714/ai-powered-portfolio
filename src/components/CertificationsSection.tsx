import React from 'react';
import { Award, ShieldCheck, GraduationCap, FileText, Download } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION_INFO, RESUME_PDF_PATH } from '../data/portfolioData';

interface CertificationsSectionProps {
  onViewResume: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onViewResume }) => {
  return (
    <section id="certifications" className="py-20 sm:py-28 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              05. Certifications & Academic Training
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Verified Training & Course Credentials
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Accredited certifications across machine learning, neural networks, exploratory data analysis, SQL, Power BI, and Python.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto shrink-0">
            <button
              onClick={onViewResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              title="View clean HTML resume web page"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>

            <a
              href={RESUME_PDF_PATH}
              download="Sanjana_Gorli_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-750 hover:border-slate-700 rounded-lg transition-colors"
              title="Download original uploaded PDF resume"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#0b1222] border border-slate-800 rounded-xl p-5 shadow-sm hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {cert.name}
                  </h3>
                  <div className="text-xs text-cyan-400 font-medium mt-1">
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
                {cert.issueDate && (
                  <span className="font-mono text-slate-500">{cert.issueDate}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education Recap Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0b1426] to-[#0a0f1d] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              Undergraduate Degree
            </div>
            <div className="text-base sm:text-lg font-bold text-white">
              {EDUCATION_INFO.primary.degree}
            </div>
            <div className="text-xs text-slate-400">
              {EDUCATION_INFO.primary.institution} · CGPA: <span className="font-mono text-cyan-300 font-semibold">{EDUCATION_INFO.primary.cgpa}</span> ({EDUCATION_INFO.primary.period})
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onViewResume}
              className="px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              View Resume PDF
            </button>

            <a
              href={RESUME_PDF_PATH}
              download="Sanjana_Gorli_Resume.pdf"
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap text-center"
            >
              Download PDF
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
