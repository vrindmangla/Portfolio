'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import { SKILL_SCORES } from '@/lib/constants';

const monthlyData = [
  { month: 'Jan', projects: 2, skills: 3 },
  { month: 'Feb', projects: 3, skills: 4 },
  { month: 'Mar', projects: 2, skills: 5 },
  { month: 'Apr', projects: 4, skills: 6 },
  { month: 'May', projects: 3, skills: 7 },
  { month: 'Jun', projects: 5, skills: 8 },
];

const growthData = [
  { name: 'Week 1', skill: 65 },
  { name: 'Week 2', skill: 72 },
  { name: 'Week 3', skill: 78 },
  { name: 'Week 4', skill: 85 },
  { name: 'Week 5', skill: 90 },
];

export default function AnalyticsDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="metric-card rounded-lg p-3 text-xs">
          <p className="font-medium mb-1 text-foreground">{label}</p>
          {payload.map((item, index) => (
            <p key={index} className="text-[#6B7280] dark:text-muted-foreground">
              {item.name}: <span className="text-primary font-semibold">{item.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="section-padding relative overflow-hidden bg-[#F5F5F3] dark:bg-muted/30">
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
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-6 h-px bg-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              Skill Analytics
            </span>
            <div className="w-6 h-px bg-primary" />
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text">Technical Proficiency</span>
          </h2>
          <p className="section-subtitle mt-4">
            Real-time analytics of my technical skills and growth trajectory
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {/* Skill Proficiency Radar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="metric-card rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-xs uppercase tracking-widest text-[#6B7280] dark:text-muted-foreground">Skill Distribution</p>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={SKILL_SCORES.map((s) => ({ skill: s.name, score: s.score, fullMark: 100 }))}>
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
                    fillOpacity={0.12}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Skill Growth Line Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="metric-card rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-xs uppercase tracking-widest text-[#6B7280] dark:text-muted-foreground">Growth Trajectory</p>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="skill"
                    stroke="#2563EB"
                    strokeWidth={2}
                    dot={{ fill: '#2563EB', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#2563EB' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Monthly Progress Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="metric-card rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <p className="text-xs uppercase tracking-widest text-[#6B7280] dark:text-muted-foreground">Monthly Progress</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                />
                <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="projects"
                  name="Projects"
                  fill="#2563EB"
                  radius={[3, 3, 0, 0]}
                />
                <Bar
                  dataKey="skills"
                  name="Skills Learned"
                  fill="#93C5FD"
                  radius={[3, 3, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'SQL Proficiency', value: '92%' },
            { label: 'Power BI Mastery', value: '90%' },
            { label: 'Python Expertise', value: '88%' },
            { label: 'ML Knowledge', value: '78%' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.08 }}
              className="metric-card rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#6B7280] dark:text-muted-foreground">{stat.label}</span>
                <span className="text-xs font-semibold text-primary">{stat.value}</span>
              </div>
              <div className="h-1.5 bg-[#F0F0F0] dark:bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: stat.value } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.08, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
