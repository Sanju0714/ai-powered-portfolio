/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { ChatbotDrawer } from './components/ChatbotDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Primary Top Bar Navigation */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
        onViewResume={() => window.open('/resume.html', '_blank', 'noopener,noreferrer')}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenChat={() => setIsChatOpen(true)}
          onViewResume={() => window.open('/resume.html', '_blank', 'noopener,noreferrer')}
        />

        {/* 2. About Me and Education */}
        <AboutSection onViewResume={() => window.open('/resume.html', '_blank', 'noopener,noreferrer')} />

        {/* 3. Technical Skills */}
        <SkillsSection />

        {/* 4. Internship Experience and Achievements */}
        <ExperienceSection />

        {/* 5. Projects with Measurable Results */}
        <ProjectsSection />

        {/* 6. Certifications & Education */}
        <CertificationsSection onViewResume={() => window.open('/resume.html', '_blank', 'noopener,noreferrer')} />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive RAG Chatbot Drawer (Bottom-Right Floating) */}
      <ChatbotDrawer
        isOpen={isChatOpen}
        onOpen={() => setIsChatOpen(true)}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}
