'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '@/lib/constants';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
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
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Professional Experience
            </span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="section-subtitle mt-4">
            Building skills through hands-on industry experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#DCDCDC] dark:bg-dark-700 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
              >
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm" />
              </motion.div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 pl-8 md:pl-0' : 'md:pl-10 pl-8'}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="metric-card rounded-xl p-6 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/8 dark:bg-primary/10 shrink-0 border border-primary/10">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {experience.role}
                      </h3>
                      <p className="text-primary font-medium text-sm">{experience.company}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-[#6B7280] dark:text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#6B7280] dark:text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                  {/* Responsibilities */}
                  <div className="space-y-1.5 mb-4">
                    {experience.responsibilities.map((responsibility, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.08 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-success mt-0.5 shrink-0" />
                        <span className="text-xs text-[#6B7280] dark:text-muted-foreground leading-relaxed">{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs rounded-full border border-[#DCDCDC] dark:border-dark-600 text-[#6B7280] dark:text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="metric-card rounded-xl p-6 inline-block">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1</div>
                <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-1">Internship</div>
              </div>
              <div className="w-px h-10 bg-[#DCDCDC] dark:bg-dark-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-1">Months</div>
              </div>
              <div className="w-px h-10 bg-[#DCDCDC] dark:bg-dark-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-1">Technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
