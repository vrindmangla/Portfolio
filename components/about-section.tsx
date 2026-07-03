'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap, Briefcase, Code, LineChart, Lightbulb } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';

const ACHIEVEMENTS = [
  { icon: GraduationCap, title: 'CGPA 9.0', description: 'Academic Excellence' },
  { icon: Briefcase, title: 'Frontend Intern', description: 'InnovationM Experience' },
  { icon: Code, title: '15+ Projects', description: 'Analytics & ML Projects' },
  { icon: LineChart, title: 'Power BI', description: 'Dashboard Development' },
  { icon: Award, title: '5+ Certifications', description: 'Professional Credentials' },
  { icon: Lightbulb, title: 'Problem Solver', description: 'Data-Driven Solutions' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-6 h-px bg-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary">About Me</span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Who I Am</span>
          </h2>
          <p className="section-subtitle mt-4">
            Passionate about transforming data into actionable insights
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="metric-card rounded-xl p-7">
              <div className="space-y-4">
                <p className="text-sm text-[#6B7280] dark:text-muted-foreground leading-relaxed">
                  I am a{' '}
                  <span className="text-primary font-semibold">B.Tech Information Technology (AI/ML)</span>{' '}
                  student at{' '}
                  <span className="text-primary font-semibold">Maharaja Agrasen Institute of Technology</span>{' '}
                  with a CGPA of{' '}
                  <span className="text-primary font-semibold">9.0</span>.
                </p>
                <p className="text-sm text-[#6B7280] dark:text-muted-foreground leading-relaxed">
                  My expertise lies in{' '}
                  <span className="text-foreground font-medium">Data Analytics, SQL, Python, Power BI, Statistical Analysis, Machine Learning,</span>{' '}
                  and{' '}
                  <span className="text-foreground font-medium">Business Intelligence</span>.
                </p>
                <p className="text-sm text-[#6B7280] dark:text-muted-foreground leading-relaxed">
                  I enjoy solving business problems using data and building analytical solutions that drive measurable impact. My approach combines technical expertise with business acumen to deliver data-driven solutions.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Data Analytics', 'SQL', 'Python', 'Power BI', 'Machine Learning', 'Statistics'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-[#DCDCDC] dark:border-dark-600 rounded-full text-[#6B7280] dark:text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Achievement Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-3"
          >
            {ACHIEVEMENTS.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="metric-card rounded-xl p-5 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-200 group cursor-default"
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/8 dark:bg-primary/10 border border-primary/10">
                    <achievement.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] dark:text-muted-foreground mt-0.5">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="metric-card rounded-xl p-8 max-w-3xl mx-auto relative border-l-4 border-primary dark:border-primary">
            <blockquote className="text-lg md:text-xl text-[#6B7280] dark:text-muted-foreground italic">
              Turning raw data into meaningful insights and actionable decisions.
            </blockquote>
            <div className="mt-4 text-primary font-medium text-sm">— {PERSONAL_INFO.name}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
