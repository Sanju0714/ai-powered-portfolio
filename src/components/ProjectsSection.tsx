import React, { useState } from 'react';
import { ArrowUpRight, Github, Zap, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS, ProjectItem, ProjectCategory } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterCategories: { label: string; value: string; count: number }[] = [
    { label: 'All Projects', value: 'All', count: PROJECTS.length },
    {
      label: 'Generative AI & Automation',
      value: 'Generative AI & Automation',
      count: PROJECTS.filter((p) => p.category === 'Generative AI & Automation').length,
    },
    {
      label: 'Data Science & Analytics',
      value: 'Data Science & Analytics',
      count: PROJECTS.filter((p) => p.category === 'Data Science & Analytics').length,
    },
    {
      label: 'Machine Learning & NLP',
      value: 'Machine Learning & NLP',
      count: PROJECTS.filter((p) => p.category === 'Machine Learning & NLP').length,
    },
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              04. Technical Projects ({PROJECTS.length} Completed)
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              AI Automation, Data Science & Machine Learning
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore all 12 real implementations across Generative AI multi-agent workflows, data analytics dashboards, and NLP machine-learning systems. Every metric reflects actual verified benchmarks and project outputs.
            </p>
          </div>

          {/* Interactive Filter Navigation */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0b1222] border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {filterCategories.map((filter) => {
              const isActive = selectedFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <span>{filter.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid - Responsive Grid displaying all 12 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0b1222] border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Media Slot */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Gradient Overlay Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-[#0b1222]/30 to-transparent" />

                  {/* Top Category Kicker */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-medium text-cyan-300 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Key highlight badge */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="text-[11px] text-slate-200 font-mono bg-[#060913]/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/80 inline-block truncate max-w-full">
                      {project.keyHighlight}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  {/* Title & Description */}
                  <div>
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between gap-2 leading-snug"
                    >
                      <span className="line-clamp-1">{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Measurable Results - Explicitly from verified resume */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
                      <Zap className="w-3 h-3" />
                      <span>Verified Project Highlights</span>
                    </div>
                    <ul className="space-y-1">
                      {project.measurableResults.slice(0, 2).map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300 font-mono leading-tight">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                          <span className="truncate">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Stack */}
                  <div className="pt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    <span className="text-slate-500 font-medium text-[11px]">Stack:</span>
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300 font-mono text-[11px]">{tech}</span>
                        {idx < Math.min(project.technologies.length, 4) - 1 && (
                          <span aria-hidden="true" className="text-slate-700">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions - Real links only, no fabricated URLs */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-850 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Details →
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : null}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
                      title="API / Interactive Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal deep dive */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
