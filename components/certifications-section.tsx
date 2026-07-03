'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/constants';

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
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
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Credentials</span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mt-4">
            Professional certifications validating my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="metric-card rounded-xl p-6 h-full hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300">
                {/* Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/8 dark:bg-primary/10 border border-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>

                {/* Content */}
                <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#6B7280] dark:text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-[#6B7280] dark:text-muted-foreground mb-4">
                  Issued: {cert.date}
                </p>

                {/* Credential ID */}
                {cert.credential && (
                  <p className="text-xs text-[#6B7280] dark:text-muted-foreground mb-4">
                    Credential: {cert.credential}
                  </p>
                )}

                {/* Verify Button */}
                {cert.verifyLink && (
                  <motion.a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium uppercase tracking-wide"
                    whileHover={{ x: 4 }}
                  >
                    <span>Verify Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <div className="metric-card rounded-xl p-6 inline-block">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-1">Certifications</div>
              </div>
              <div className="w-px h-10 bg-[#DCDCDC] dark:bg-dark-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-1">Platforms</div>
              </div>
              <div className="w-px h-10 bg-[#DCDCDC] dark:bg-dark-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-1">Hours</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
