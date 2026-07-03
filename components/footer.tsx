'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

interface FooterProps {
  onBackToTop: () => void;
}

export default function Footer({ onBackToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-14 pb-8 overflow-hidden border-t border-[#DCDCDC] bg-white dark:bg-slate-950 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <motion.div
              className="text-2xl font-bold text-primary mb-3 tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              VM
            </motion.div>
            <p className="text-[#6B7280] dark:text-muted-foreground text-sm mb-4 leading-relaxed">
              Data Analyst passionate about transforming data into actionable insights.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon =
                  link.icon === 'github'
                    ? Github
                    : link.icon === 'linkedin'
                    ? Linkedin
                    : Mail;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="p-2 rounded-lg border border-[#DCDCDC] dark:border-dark-600 bg-white dark:bg-dark-800 hover:border-primary/40 hover:text-primary transition-all duration-200 text-[#6B7280] dark:text-muted-foreground"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Certifications', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-[#6B7280] dark:text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#DCDCDC] dark:bg-dark-500" />
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#6B7280] dark:text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-primary transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#6B7280] dark:text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#DCDCDC] dark:bg-dark-700/50 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280] dark:text-muted-foreground">
            &copy; {currentYear} Vrind Mangla.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={onBackToTop}
            className="flex items-center gap-2 px-4 py-2 text-xs border border-[#DCDCDC] dark:border-dark-600 bg-white dark:bg-dark-800 rounded-lg hover:border-primary/50 hover:text-primary text-[#6B7280] dark:text-muted-foreground transition-all duration-200 uppercase tracking-wide"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
