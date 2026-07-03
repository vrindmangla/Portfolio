'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, FolderOpen, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO, ROLE_TITLES, TYPING_SPEED, TYPING_DELETE_SPEED, TYPING_PAUSE_DURATION } from '@/lib/constants';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = ROLE_TITLES[currentTitleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, TYPING_PAUSE_DURATION);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % ROLE_TITLES.length);
        }
      }
    }, isDeleting ? TYPING_DELETE_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [currentText, currentTitleIndex, isDeleting]);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      {/* Floating Particles - subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/15 dark:bg-primary/20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Very subtle background orbs - toned down for light mode */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/3 dark:bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Metadata Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <div className="w-6 h-px bg-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Data Analytics &middot; {PERSONAL_INFO.location}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight tracking-tight"
            >
              {PERSONAL_INFO.firstName}
              <br />
              {PERSONAL_INFO.lastName}
            </motion.h1>

            {/* Typing Animation - blue accent tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="h-10 mb-6"
            >
              <span className="text-2xl md:text-3xl text-primary font-bold">
                {currentText}
                <span className="animate-blink">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-[#6B7280] dark:text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors duration-200 shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FolderOpen className="w-4 h-4" />
                View Projects
              </motion.button>

              <motion.a
                href={PERSONAL_INFO.resumeLink}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#DCDCDC] dark:border-dark-700/50 bg-white dark:bg-dark-800 text-foreground rounded-xl font-medium text-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#DCDCDC] dark:border-dark-700/50 bg-white dark:bg-dark-800 text-foreground rounded-xl font-medium text-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Stats - Dashboard Metric Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {[
                { label: 'Projects', value: '15+' },
                { label: 'CGPA', value: '9.0' },
                { label: 'Skills', value: '20+' },
                { label: 'Certs', value: '5+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="metric-card p-4 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.08 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-[#6B7280] dark:text-muted-foreground mt-0.5 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={handleScrollToAbout}
            className="flex flex-col items-center gap-2 text-[#6B7280] dark:text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
