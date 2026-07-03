'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code,
  Code2,
  FileCode,
  Terminal,
  Database,
  BarChart3,
  Brain,
  PieChart,
  Package,
  Server,
  Search,
  Calculator,
  Layers,
  Box,
  Link2,
  TreeDeciduous,
  Monitor,
  TrendingUp,
  Tag,
  CircleDot,
  CheckCircle,
  Table,
  Grid,
  Cpu,
  Palette,
  Leaf,
} from 'lucide-react';
import { SKILL_CATEGORIES, SKILL_SCORES } from '@/lib/constants';
import type { SkillCategory } from '@/lib/types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { cn } from '@/lib/utils';

const CATEGORY_ICONS: Record<SkillCategory, typeof Code> = {
  programming: Code,
  'data-analytics': BarChart3,
  sql: Database,
  'machine-learning': Brain,
  visualization: PieChart,
  libraries: Package,
  databases: Server,
};

const SKILL_ICON_MAP: Record<string, typeof Code> = {
  python: Terminal,
  javascript: FileCode,
  c: Code,
  'c-plus': Code2,
  database: Database,
  search: Search,
  calculator: Calculator,
  layers: Layers,
  box: Box,
  link: Link2,
  tree: TreeDeciduous,
  window: Monitor,
  sum: TrendingUp,
  tags: Tag,
  'circle-dot': CircleDot,
  'check-circle': CheckCircle,
  'bar-chart': BarChart3,
  'pie-chart': PieChart,
  table: Table,
  grid: Grid,
  cpu: Cpu,
  palette: Palette,
  leaf: Leaf,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('programming');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const radarData = SKILL_SCORES.map((skill) => ({
    skill: skill.name,
    score: skill.score,
    fullMark: 100,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#F5F5F3] dark:bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-50" />

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
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Skills &amp; Expertise
            </span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mt-4">
            A comprehensive toolkit for data analytics and problem-solving
          </p>
        </motion.div>

        {/* Skills Dashboard */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="metric-card rounded-2xl p-6 h-full">
              <p className="text-xs uppercase tracking-widest text-[#6B7280] dark:text-muted-foreground mb-1">Analytics</p>
              <h3 className="text-base font-semibold mb-4 text-foreground">Skill Profile</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="score"
                      stroke="#2563EB"
                      fill="#2563EB"
                      fillOpacity={0.15}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #DCDCDC',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="metric-card rounded-2xl p-6 h-full">
              <p className="text-xs uppercase tracking-widest text-[#6B7280] dark:text-muted-foreground mb-1">Breakdown</p>
              <h3 className="text-base font-semibold mb-6 text-foreground">Core Competencies</h3>
              <div className="space-y-5">
                {SKILL_SCORES.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="space-y-1.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-[#6B7280] dark:text-muted-foreground tabular-nums">{skill.score}%</span>
                    </div>
                    <div className="h-2 bg-[#F0F0F0] dark:bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: '#2563EB' }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.score}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id];
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wide transition-all duration-200',
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'border border-[#DCDCDC] dark:border-dark-600 bg-white dark:bg-dark-800 text-[#6B7280] dark:text-muted-foreground hover:border-primary/50 hover:text-primary dark:hover:text-primary'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-3.5 h-3.5" />
                {category.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid - Dashboard Outlined Pills */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {SKILL_CATEGORIES.find((c) => c.id === activeCategory)?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="metric-card rounded-xl p-4 text-center hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200 cursor-default"
              >
                {(() => {
                  const Icon = SKILL_ICON_MAP[skill.icon] ?? Code;
                  return <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />;
                })()}
                <h4 className="font-medium text-sm text-foreground mb-2">{skill.name}</h4>
                <div className="flex items-center gap-1.5">
                  <div className="h-1 flex-1 bg-[#F0F0F0] dark:bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-xs text-[#6B7280] dark:text-muted-foreground tabular-nums">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Technologies', value: '20+', icon: Package },
            { label: 'Projects Built', value: '15+', icon: BarChart3 },
            { label: 'Certifications', value: '5+', icon: Code },
            { label: 'Years Learning', value: '4+', icon: Brain },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="metric-card rounded-xl p-5 text-center hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-[#6B7280] dark:text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
