import React from 'react';
import { GraduationCap, BookOpen, Sparkles, CheckCircle2, Cpu, FileText, Download } from 'lucide-react';
import { EDUCATION_INFO, RESUME_PDF_PATH } from '../data/portfolioData';

interface AboutSectionProps {
  onViewResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onViewResume }) => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            01. Background & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Computer Science, Data Science & Generative AI Engineering
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (7 cols): Narrative & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              <p className="text-white font-medium text-lg leading-relaxed">
                I am a Computer Science and Engineering student with a strong interest in Data Science, Artificial Intelligence, Machine Learning, and Generative AI. I work on data analysis, predictive modeling, NLP, LLM-powered applications, RAG systems, and AI automation. My projects combine Python, SQL, machine-learning libraries, business intelligence tools, and modern AI frameworks to build practical solutions.
              </p>
              <p>
                I am a final-year B.Tech Computer Science and Engineering student at <span className="text-white font-medium">Rajiv Gandhi University of Knowledge Technologies (RGUKT), Ongole</span>, graduating in <span className="text-cyan-400 font-medium">May 2027</span> with a current CGPA of <span className="text-cyan-400 font-medium font-mono">8.88/10</span>. Concurrently, I am pursuing the <span className="text-white font-medium">BS in Data Science & Applications</span> from the <span className="text-cyan-400 font-medium">Indian Institute of Technology, Madras (IITM)</span> at the diploma level. I am also pursuing the <span className="text-white font-medium">Data Science with GenAI program</span> at <span className="text-cyan-400 font-medium">Innomatics Research Labs, Hyderabad</span>.
              </p>
              <p>
                My hands-on experience includes developing production-ready conversational AI with LangChain and LangGraph, multi-agent automated systems using the Groq API, machine learning classification with Scikit-Learn, data analytics with Power BI and Pandas, and speech recognition workflows with Whisper.
              </p>
            </div>

            {/* Core Competencies Grid - 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Generative AI & Automation</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Multi-agent workflows with LangGraph, NVIDIA NIM tool calling, Groq LLMs, prompt optimization, and automated operational pipelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Data Science & Analytics</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Exploratory data analysis, correlation testing, SQL data aggregation, and interactive business intelligence dashboards in Power BI.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4 shrink-0" />
                  <span>Machine Learning & Modeling</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Supervised learning, classification benchmarks (SVM, Random Forest, Logistic Regression), deep learning LSTMs, and artificial neural networks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>NLP & Speech Intelligence</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Text preprocessing, TF-IDF extraction, multilingual stopword removal for Dravidian languages, and Whisper speech transcription.
                </p>
              </div>
            </div>

            {/* Resume Actions - View HTML & Download PDF */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onViewResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                title="Open the original resume PDF"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume PDF</span>
              </button>

              <a
                href={RESUME_PDF_PATH}
                download="Sanjana_Gorli_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                title="Download original uploaded resume PDF"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Education Profile Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Degree: RGUKT Ongole */}
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {EDUCATION_INFO.primary.degree}
                  </h3>
                  <div className="text-xs font-medium text-cyan-400">
                    {EDUCATION_INFO.primary.institution}
                  </div>
                  <div className="text-xs text-slate-400">
                    {EDUCATION_INFO.primary.period} · {EDUCATION_INFO.primary.graduation}
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-slate-800/80 py-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Current CGPA</div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                    {EDUCATION_INFO.primary.cgpa}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Status</div>
                  <div className="text-xs font-medium text-cyan-400 mt-1">
                    Final-Year Undergraduate
                  </div>
                </div>
              </div>

              {/* Core CS Fundamentals */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-300">
                  Core Fundamentals
                </div>
                <div className="text-xs leading-relaxed text-slate-400 space-x-1.5">
                  {EDUCATION_INFO.coreFundamentals.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span className="text-slate-300">{item}</span>
                      {idx < EDUCATION_INFO.coreFundamentals.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Concurrent Degree: IIT Madras */}
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span>Concurrent Academic Program</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                {EDUCATION_INFO.secondary.degree}
              </h4>
              <p className="text-xs text-slate-400">
                {EDUCATION_INFO.secondary.institution} · <span className="text-cyan-300">{EDUCATION_INFO.secondary.status}</span>
              </p>
            </div>

            {/* Additional Program: Innomatics Research Labs */}
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <BookOpen className="w-4 h-4" />
                <span>Professional Training Program</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                {EDUCATION_INFO.tertiary.degree}
              </h4>
              <p className="text-xs text-slate-400">
                {EDUCATION_INFO.tertiary.institution} · {EDUCATION_INFO.tertiary.location} · <span className="text-cyan-300">{EDUCATION_INFO.tertiary.status}</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
