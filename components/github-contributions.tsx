'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, GitCommit, GitPullRequest, GitBranch, Star, ExternalLink } from 'lucide-react';

const CONTRIBUTIONS = [
  { day: 'Mon', intensity: 3 },
  { day: 'Tue', intensity: 1 },
  { day: 'Wed', intensity: 4 },
  { day: 'Thu', intensity: 2 },
  { day: 'Fri', intensity: 5 },
  { day: 'Sat', intensity: 1 },
  { day: 'Sun', intensity: 2 },
  { day: 'Mon', intensity: 0 },
  { day: 'Tue', intensity: 3 },
  { day: 'Wed', intensity: 4 },
  { day: 'Thu', intensity: 2 },
  { day: 'Fri', intensity: 1 },
  { day: 'Sat', intensity: 3 },
  { day: 'Sun', intensity: 2 },
  { day: 'Mon', intensity: 4 },
  { day: 'Tue', intensity: 3 },
  { day: 'Wed', intensity: 5 },
  { day: 'Thu', intensity: 2 },
  { day: 'Fri', intensity: 4 },
  { day: 'Sat', intensity: 1 },
  { day: 'Sun', intensity: 0 },
  { day: 'Mon', intensity: 2 },
  { day: 'Tue', intensity: 4 },
  { day: 'Wed', intensity: 3 },
  { day: 'Thu', intensity: 5 },
  { day: 'Fri', intensity: 2 },
  { day: 'Sat', intensity: 3 },
  { day: 'Sun', intensity: 1 },
];

const getIntensityColor = (intensity: number): string => {
  const colors = [
    'bg-[#EBEBEB] dark:bg-muted',
    'bg-primary/20',
    'bg-primary/40',
    'bg-primary/60',
    'bg-primary/80',
    'bg-primary',
  ];
  return colors[intensity] || colors[0];
};

const REPOS = [
  {
    name: 'data-analytics-portfolio',
    href: 'https://github.com/vrindmangla/Portfolio.git',
    description: 'Data analytics projects showcasing SQL, Python, and Power BI skills',
    stars: 12,
    language: 'Python',
    languageColor: '#3572A5',
  },
  {
    name: 'power-bi-dashboards',
    href: 'https://github.com/vrindmangla/ipl-analytics',
    description: 'Collection of interactive Power BI dashboards for business analytics',
    stars: 8,
    language: 'Power BI',
    languageColor: '#F2C94C',
  },
  {
    name: 'ml-projects',
    href: 'https://github.com/vrindmangla/Simulation_AI_Traffic_Management.git',
    description: 'Machine learning implementations for predictive analytics',
    stars: 15,
    language: 'Jupyter Notebook',
    languageColor: '#DA5B0B',
  },
];

export default function GitHubContributions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
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
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-6 h-px bg-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" />
              Open Source
            </span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">GitHub Activity</span>
          </h2>
          <p className="section-subtitle mt-4">
            Contributing to open source and building in public
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 metric-card rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-xs uppercase tracking-widest text-[#6B7280] dark:text-muted-foreground">Contribution Activity</p>
              </div>
              <motion.a
                href="https://github.com/vrindmangla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#6B7280] dark:text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wide"
                whileHover={{ x: 4 }}
              >
                View Profile
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </div>

            {/* Contribution Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {CONTRIBUTIONS.map((contribution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.02 }}
                  className={`w-full aspect-square rounded-sm ${getIntensityColor(contribution.intensity)} hover:ring-1 hover:ring-primary/50 transition-all cursor-default`}
                  title={`${contribution.intensity * 2} contributions`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-1.5 mt-4 text-xs text-[#6B7280] dark:text-muted-foreground">
              <span>Less</span>
              {[0, 1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getIntensityColor(level)}`}
                />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            {[
              { icon: GitCommit, label: 'Commits', value: '200+' },
              { icon: GitPullRequest, label: 'Pull Requests', value: '35+' },
              { icon: GitBranch, label: 'Repositories', value: '20+' },
              { icon: Star, label: 'Stars Earned', value: '50+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.08 }}
                whileHover={{ x: 4 }}
                className="metric-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200"
              >
                <div className="p-2 rounded-lg bg-primary/8 dark:bg-primary/10 border border-primary/10">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-[#6B7280] dark:text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <p className="text-xs uppercase tracking-widest text-[#6B7280] dark:text-muted-foreground">Featured Repositories</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {REPOS.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.08 }}
                whileHover={{ y: -4 }}
                className="metric-card rounded-xl p-5 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-medium group-hover:text-primary transition-colors flex items-center gap-1.5 text-foreground">
                    <Github className="w-3.5 h-3.5" />
                    {repo.name}
                  </h4>
                  <div className="flex items-center gap-1 text-warning">
                    <Star className="w-3 h-3" />
                    <span className="text-xs">{repo.stars}</span>
                  </div>
                </div>
                <p className="text-xs text-[#6B7280] dark:text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#6B7280] dark:text-muted-foreground">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  {repo.language}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
