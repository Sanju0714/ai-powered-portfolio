import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            03. Internship Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Practical AI Engineering & Data Annotation Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hands-on internships focusing on real-time speech transcription, CRM automation, sentiment analysis, and computer vision data validation.
          </p>
        </div>

        {/* Professional Internships List */}
        <div className="grid grid-cols-1 gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md hover:border-slate-700/80 transition-all space-y-6"
            >
              {/* Header Row: Role & Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-base font-medium text-cyan-400 mt-1">
                    {exp.organization}
                  </div>
                </div>

                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities & Achievements */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Deliverables
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="leading-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Technologies */}
              <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                <span className="text-slate-500 font-medium">Technologies & Tools:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <React.Fragment key={tech}>
                    <span className="text-slate-300 font-mono">{tech}</span>
                    {tIdx < exp.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-slate-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
