'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import CertificationsSection from '@/components/certifications-section';
import EducationSection from '@/components/education-section';
import ResumeSection from '@/components/resume-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import LoadingScreen from '@/components/loading-screen';
import ScrollProgress from '@/components/scroll-progress';
import BackToTop from '@/components/back-to-top';
import GitHubContributions from '@/components/github-contributions';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isClient) {
    return <LoadingScreen />;
  }

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />

      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-background text-foreground">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <main>
            <HeroSection onContactClick={handleContactClick} />
            <AboutSection />
            <SkillsSection />
            <GitHubContributions />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <CertificationsSection />
            <ResumeSection />
            <ContactSection />
          </main>

          <Footer onBackToTop={handleBackToTop} />
          <BackToTop onClick={handleBackToTop} />
        </div>
      </div>
    </>
  );
}
