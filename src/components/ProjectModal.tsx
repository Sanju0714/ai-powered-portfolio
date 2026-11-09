import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Zap, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0b1222] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e1c]">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Technical Deep Dive</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Project Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-300 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Hero Media Preview */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-mono text-white/90 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                {project.keyHighlight}
              </span>
            </div>
          </div>

          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Architecture & Implementation
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Measurable Results */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Quantifiable Performance Metrics</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.measurableResults.map((result, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="font-mono text-[12px]">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Engineered With
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
              {project.technologies.map((tech, idx) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-850 border border-slate-750 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Repos */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Repository</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors font-semibold"
                >
                  <span>Backend Swagger API</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
