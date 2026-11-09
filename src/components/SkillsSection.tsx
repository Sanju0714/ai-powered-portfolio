import React, { useState } from 'react';
import { Code2, Database, Brain, Sparkles, BarChart3, Binary } from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'Technical Tools':
        return <Binary className="w-4 h-4 text-cyan-400" />;
      case 'Software Development':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Computer Science Fundamentals':
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
      case 'Analytical Skills':
        return <Brain className="w-4 h-4 text-cyan-400" />;
      case 'Professional Skills':
        return <BarChart3 className="w-4 h-4 text-cyan-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories: SkillCategory[] =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              02. Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Core Toolset & Applied Frameworks
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Systematically grouped across programming, statistical data exploration, deep learning architectures, Generative AI, and business intelligence.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0b1222] border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="bg-[#0b1222] border border-slate-800/90 rounded-2xl p-6 shadow-md hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {getCategoryIcon(group.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {group.category}
                      </h3>
                      <span className="text-[11px] text-slate-500">
                        {group.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 my-4 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills List - Clean unboxed text layout with typographic separators */}
                <div className="space-y-3 pt-1">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-0.5">
                      <div className="text-xs font-semibold text-slate-200">
                        {skill.name}
                      </div>
                      {skill.highlight && (
                        <div className="text-[11px] text-slate-400">
                          {skill.highlight}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Subdued Bottom Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified in Resume</span>
                <span className="font-mono text-cyan-400/80">Applied Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Context Strip */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-300 font-medium">Applied Proficiency:</span>
            <span>All competencies verified through university coursework, competitive challenges, and real-world internships.</span>
          </div>
          <a
            href="#projects"
            className="text-cyan-400 hover:text-cyan-300 font-medium whitespace-nowrap shrink-0 hover:underline"
          >
            See skills in projects →
          </a>
        </div>

      </div>
    </section>
  );
};
