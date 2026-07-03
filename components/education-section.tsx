'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { EDUCATIONS } from '@/lib/constants';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-[#F5F5F3] dark:bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-50" />

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
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Academic Background
            </span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mt-4">
            Building a strong foundation in technology and analytics
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {EDUCATIONS.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <div className="metric-card rounded-xl p-6 md:p-7 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                {/* Subtle hover accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/8 dark:bg-primary/10 shrink-0 border border-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium text-sm">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-[#6B7280] dark:text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Grade / Score */}
                  {edu.grade && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success/8 dark:bg-success/10 border border-success/20 mb-4">
                      <Award className="w-4 h-4 text-success" />
                      <span className="text-sm font-semibold text-success">{edu.grade}</span>
                    </div>
                  )}

                  {/* Description */}
                  {edu.description && (
                    <p className="text-sm text-[#6B7280] dark:text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wide flex items-center gap-2 text-foreground">
                        <BookOpen className="w-3.5 h-3.5 text-primary" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + i * 0.08 }}
                            className="flex items-start gap-2 text-xs text-[#6B7280] dark:text-muted-foreground"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 grid grid-cols-3 gap-4"
        >
          {[
            { label: 'CGPA', value: '9.0', subtitle: '/10' },
            { label: 'Course', value: 'B.Tech', subtitle: 'IT (AI/ML)' },
            { label: 'Year', value: '3rd', subtitle: 'Year' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.08 }}
              className="metric-card rounded-xl p-4 text-center hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
                <span className="text-sm text-[#6B7280] dark:text-muted-foreground font-normal">{stat.subtitle}</span>
              </div>
              <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
