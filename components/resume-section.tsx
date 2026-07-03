'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, ExternalLink, FileText, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';

export default function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="section-padding relative overflow-hidden bg-[#F5F5F3] dark:bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-6 h-px bg-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Resume</span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Download My Resume</span>
          </h2>
          <p className="section-subtitle mt-4">
            Get a detailed overview of my skills and experience
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="metric-card rounded-xl p-8 md:p-12 text-center"
        >
          {/* Resume Icon */}
          <motion.div
            className="mx-auto w-20 h-20 rounded-xl border border-[#DCDCDC] dark:border-dark-600 bg-[#F8F8F6] dark:bg-dark-800 flex items-center justify-center mb-8"
            whileHover={{ scale: 1.06, rotate: 2 }}
          >
            <FileText className="w-10 h-10 text-primary" />
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-bold mb-2 text-foreground">Vrind Mangla</h3>
          <p className="text-[#6B7280] dark:text-muted-foreground text-sm mb-2">{PERSONAL_INFO.role}</p>
          <p className="text-xs text-[#6B7280] dark:text-muted-foreground mb-8">
            {PERSONAL_INFO.location} &middot; {PERSONAL_INFO.email}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Education', value: 'B.Tech IT' },
              { label: 'CGPA', value: '9.0/10' },
              { label: 'Experience', value: 'Intern' },
              { label: 'Projects', value: '15+' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.08 }}
                className="p-3 rounded-lg border border-[#DCDCDC] dark:border-dark-600 bg-[#F8F8F6] dark:bg-dark-800"
              >
                <div className="text-sm font-bold text-primary">{item.value}</div>
                <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-0.5">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={PERSONAL_INFO.resumeLink}
              download
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              Download PDF
            </motion.a>

            <motion.a
              href={PERSONAL_INFO.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[#DCDCDC] dark:border-dark-600 bg-white dark:bg-dark-800 rounded-lg text-sm font-medium hover:border-primary/50 hover:text-primary transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-4 h-4" />
              View Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 grid grid-cols-3 gap-4"
        >
          {[
            { icon: FileText, label: 'Pages', value: '1' },
            { icon: Download, label: 'Format', value: 'PDF' },
            { icon: ExternalLink, label: 'Updated', value: '2026' },
          ].map((stat) => (
            <div key={stat.label} className="metric-card rounded-xl p-4 text-center hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200">
              <stat.icon className="w-4 h-4 mx-auto mb-2 text-primary" />
              <div className="text-sm font-semibold text-foreground">{stat.value}</div>
              <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
