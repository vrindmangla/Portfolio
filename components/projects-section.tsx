'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ExternalLink,
  Github,
  X,
  ChevronRight,
  BarChart3,
  Brain,
  PieChart,
  TestTube,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import type { Project, ProjectCategory } from '@/lib/types';
import { cn } from '@/lib/utils';

const CATEGORY_FILTERS: { id: ProjectCategory | 'all'; label: string; icon: typeof BarChart3 }[] = [
  { id: 'all', label: 'All Projects', icon: BarChart3 },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'ml', label: 'Machine Learning', icon: Brain },
  { id: 'visualization', label: 'Visualization', icon: PieChart },
  { id: 'testing', label: 'Testing', icon: TestTube },
];

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 dark:bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto metric-card rounded-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg border border-[#DCDCDC] dark:border-dark-600 hover:bg-[#F8F8F6] dark:hover:bg-dark-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Project Image */}
            <div className="relative h-40 md:h-52 rounded-xl overflow-hidden mb-6 bg-[#F5F5F3] dark:bg-dark-800 border border-[#DCDCDC] dark:border-dark-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-[#DCDCDC] dark:text-dark-600" />
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 text-xs font-medium uppercase tracking-wide rounded-md border border-[#DCDCDC] dark:border-dark-600 bg-white dark:bg-dark-800 text-[#6B7280] dark:text-muted-foreground">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Header */}
            <h2 className="text-2xl font-bold mb-2 text-foreground">
              {project.title}
            </h2>
            <p className="text-[#6B7280] dark:text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>

            {/* Long Description */}
            <div className="mb-6">
              <p className="text-sm text-[#6B7280] dark:text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-2 text-sm text-[#6B7280] dark:text-muted-foreground"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full border border-[#DCDCDC] dark:border-dark-600 text-[#6B7280] dark:text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="mb-6 p-4 rounded-xl bg-success/8 dark:bg-success/10 border border-success/20">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-success mb-1">Impact</h3>
                <p className="text-sm text-[#6B7280] dark:text-muted-foreground">{project.metrics}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[#DCDCDC] dark:border-dark-600 bg-white dark:bg-dark-800 rounded-lg text-sm font-medium hover:border-primary/50 hover:text-primary transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="metric-card rounded-xl overflow-hidden hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full flex flex-col">
        {/* Project Image Placeholder */}
        <div className="relative h-40 bg-[#F5F5F3] dark:bg-dark-800 border-b border-[#DCDCDC] dark:border-dark-600 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <BarChart3 className="w-12 h-12 text-[#DCDCDC] dark:text-dark-600 group-hover:text-primary/30 transition-colors duration-300" />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium text-sm flex items-center gap-2">
              View Details
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-medium uppercase tracking-wide rounded-md bg-white dark:bg-dark-800 border border-[#DCDCDC] dark:border-dark-600 text-[#6B7280] dark:text-muted-foreground">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[#6B7280] dark:text-muted-foreground mb-4 line-clamp-2 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-full border border-[#DCDCDC] dark:border-dark-600 text-[#6B7280] dark:text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-xs rounded-full border border-[#DCDCDC] dark:border-dark-600 text-[#6B7280] dark:text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-[#EBEBEB] dark:border-dark-600">
            <div className="flex gap-1">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg hover:bg-[#F8F8F6] dark:hover:bg-dark-700 text-[#6B7280] dark:text-muted-foreground hover:text-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg hover:bg-[#F8F8F6] dark:hover:bg-dark-700 text-[#6B7280] dark:text-muted-foreground hover:text-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>
            <ChevronRight className="w-4 h-4 text-[#DCDCDC] dark:text-dark-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-[#F5F5F3] dark:bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
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
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Portfolio</span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="section-subtitle mt-4">
            Data-driven solutions that showcase analytical thinking and technical expertise
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORY_FILTERS.map((filter) => {
            const Icon = filter.icon;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide transition-all duration-200',
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'border border-[#DCDCDC] dark:border-dark-600 bg-white dark:bg-dark-800 text-[#6B7280] dark:text-muted-foreground hover:border-primary/50 hover:text-primary dark:hover:text-primary'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-3.5 h-3.5" />
                {filter.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://github.com/vrindmangla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#DCDCDC] dark:border-dark-600 bg-white dark:bg-dark-800 rounded-xl text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
