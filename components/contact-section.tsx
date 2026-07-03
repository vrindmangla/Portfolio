'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import type { ContactFormData } from '@/lib/types';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

const FORM_INITIAL_STATE: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState<ContactFormData>(FORM_INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS env', {
      serviceID,
      templateID,
      publicKey: publicKey ? 'loaded' : 'missing',
    });

    if (!serviceID || !templateID || !publicKey) {
      setSubmitStatus('error');
      setSubmitError('Email service not configured. Please check .env.local and restart the server.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        email_subject: formData.subject,
        message: formData.message,
        to_email: PERSONAL_INFO.email,
      };

      await emailjs.send(serviceID, templateID, templateParams);
      setSubmitStatus('success');
      setSubmitError('');
      setFormData(FORM_INITIAL_STATE);
    } catch (err: unknown) {
      console.error('EmailJS send error', err);
      const formattedError =
        err instanceof Error
          ? err.message
          : typeof err === 'object' && err !== null
          ? JSON.stringify(err)
          : String(err);
      setSubmitStatus('error');
      setSubmitError(formattedError || 'Unknown email service error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#F5F5F3] dark:bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-50" />

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
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Get In Touch</span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <p className="section-subtitle mt-4">
            Have a project in mind? Let&apos;s discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact Cards */}
            <motion.a
              href="mailto:vrindmangla05@gmail.com"
              className="metric-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-200 group block"
              whileHover={{ x: 3 }}
            >
              <div className="p-2.5 rounded-lg bg-primary/8 dark:bg-primary/10 border border-primary/10 group-hover:bg-primary/12 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  vrindmangla05@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="metric-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-200 group block"
              whileHover={{ x: 3 }}
            >
              <div className="p-2.5 rounded-lg bg-primary/8 dark:bg-primary/10 border border-primary/10 group-hover:bg-primary/12 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mb-0.5">Phone</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {PERSONAL_INFO.phone}
                </p>
              </div>
            </motion.a>

            <motion.div
              className="metric-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200 group"
              whileHover={{ x: 3 }}
            >
              <div className="p-2.5 rounded-lg bg-primary/8 dark:bg-primary/10 border border-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mb-0.5">Location</p>
                <p className="text-sm font-medium text-foreground">{PERSONAL_INFO.location}</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mb-3">Connect with me</p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((link, index) => {
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
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.08 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="p-3 metric-card rounded-lg hover:border-primary/40 hover:text-primary transition-all duration-200"
                    >
                      <Icon className="w-4 h-4 text-[#6B7280] dark:text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="metric-card rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wide text-[#6B7280] dark:text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      'w-full px-4 py-2.5 rounded-lg bg-[#F8F8F6] dark:bg-dark-800 border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground placeholder:text-[#AAAAAA]',
                      errors.name ? 'border-error' : 'border-[#DCDCDC] dark:border-dark-600'
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-error mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wide text-[#6B7280] dark:text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      'w-full px-4 py-2.5 rounded-lg bg-[#F8F8F6] dark:bg-dark-800 border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground placeholder:text-[#AAAAAA]',
                      errors.email ? 'border-error' : 'border-[#DCDCDC] dark:border-dark-600'
                    )}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-error mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-wide text-[#6B7280] dark:text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={cn(
                    'w-full px-4 py-2.5 rounded-lg bg-[#F8F8F6] dark:bg-dark-800 border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground placeholder:text-[#AAAAAA]',
                    errors.subject ? 'border-error' : 'border-[#DCDCDC] dark:border-dark-600'
                  )}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-xs text-error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wide text-[#6B7280] dark:text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={cn(
                    'w-full px-4 py-2.5 rounded-lg bg-[#F8F8F6] dark:bg-dark-800 border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none text-foreground placeholder:text-[#AAAAAA]',
                    errors.message ? 'border-error' : 'border-[#DCDCDC] dark:border-dark-600'
                  )}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-xs text-error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                  isSubmitting
                    ? 'bg-[#F0F0F0] dark:bg-muted text-[#6B7280] dark:text-muted-foreground cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary/90 shadow-sm'
                )}
                whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 rounded-lg bg-success/8 dark:bg-success/10 border border-success/20 text-success flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 rounded-lg bg-error/8 dark:bg-error/10 border border-error/20 text-error flex flex-col gap-2 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>Something went wrong. Please try again later.</span>
                    </div>
                    {submitError && (
                      <div className="text-xs text-[#9B1C1C]">{submitError}</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
