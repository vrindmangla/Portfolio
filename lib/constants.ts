import {
  NavItem,
  SkillCategoryInfo,
  Experience,
  Project,
  Certification,
  Education,
  SocialLink,
  StatCounter,
  SkillScore,
} from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const ROLE_TITLES = [
  'Data Analyst',
  'Business Analyst',
  'Power BI Developer',
  'SQL Developer',
  'Aspiring Data Scientist',
];

export const PERSONAL_INFO = {
  name: 'Vrind Mangla',
  firstName: 'Vrind',
  lastName: 'Mangla',
  email: 'vrindmangla05@gmail.com',
  phone: '+91-8076705266',
  location: 'Delhi, India',
  role: 'Data Analyst | Power BI Developer | SQL Enthusiast',
  bio: `Passionate Data Analyst skilled in Python, SQL, Power BI, Statistics, Machine Learning, and Data Visualization. I transform raw data into actionable business insights and build data-driven solutions that help organizations make better decisions.`,
  resumeLink: '/resume.pdf',
};

export const SKILL_CATEGORIES: SkillCategoryInfo[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: 'Code',
    skills: [
      { name: 'Python', level: 90, icon: 'python', category: 'programming' },
      { name: 'JavaScript', level: 75, icon: 'javascript', category: 'programming' },
      { name: 'C', level: 70, icon: 'c', category: 'programming' },
      { name: 'C++', level: 65, icon: 'c-plus', category: 'programming' },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: 'BarChart3',
    skills: [
      { name: 'Data Cleaning', level: 95, icon: 'database', category: 'data-analytics' },
      { name: 'EDA', level: 90, icon: 'search', category: 'data-analytics' },
      { name: 'Statistical Analysis', level: 85, icon: 'calculator', category: 'data-analytics' },
      { name: 'Feature Engineering', level: 80, icon: 'layers', category: 'data-analytics' },
      { name: 'Data Modeling', level: 75, icon: 'box', category: 'data-analytics' },
    ],
  },
  {
    id: 'sql',
    title: 'SQL',
    icon: 'Database',
    skills: [
      { name: 'Joins', level: 95, icon: 'link', category: 'sql' },
      { name: 'CTEs', level: 90, icon: 'tree', category: 'sql' },
      { name: 'Window Functions', level: 85, icon: 'window', category: 'sql' },
      { name: 'Aggregations', level: 90, icon: 'sum', category: 'sql' },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Classification', level: 85, icon: 'tags', category: 'machine-learning' },
      { name: 'Regression', level: 80, icon: 'trending-up', category: 'machine-learning' },
      { name: 'Clustering', level: 75, icon: 'circle-dot', category: 'machine-learning' },
      { name: 'Model Evaluation', level: 80, icon: 'check-circle', category: 'machine-learning' },
    ],
  },
  {
    id: 'visualization',
    title: 'Visualization Tools',
    icon: 'PieChart',
    skills: [
      { name: 'Power BI', level: 95, icon: 'bar-chart', category: 'visualization' },
      { name: 'Tableau', level: 75, icon: 'pie-chart', category: 'visualization' },
      { name: 'Excel', level: 90, icon: 'table', category: 'visualization' },
    ],
  },
  {
    id: 'libraries',
    title: 'Python Libraries',
    icon: 'Package',
    skills: [
      { name: 'Pandas', level: 95, icon: 'database', category: 'libraries' },
      { name: 'NumPy', level: 90, icon: 'grid', category: 'libraries' },
      { name: 'Scikit-learn', level: 80, icon: 'cpu', category: 'libraries' },
      { name: 'Matplotlib', level: 85, icon: 'line-chart', category: 'libraries' },
      { name: 'Seaborn', level: 85, icon: 'palette', category: 'libraries' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Server',
    skills: [
      { name: 'MySQL', level: 90, icon: 'database', category: 'databases' },
      { name: 'MongoDB', level: 70, icon: 'leaf', category: 'databases' },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'InnovationM',
    role: 'Frontend Intern',
    duration: 'June 2025 - August 2025',
    location: 'Remote',
    description: 'Web Development Internship focusing on React.js and modern frontend technologies.',
    responsibilities: [
      'Learned and mastered React.js fundamentals and best practices',
      'Developed a fully functional To-Do Application with CRUD operations',
      'Built a Weather Application integrating third-party APIs',
      'Contributed to internal company projects and enhanced UI components',
      'Maintained and optimized existing web applications',
      'Collaborated with senior developers on code reviews and improvements',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'Git'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'A/B Testing for Conversion Optimization',
    description: 'Designed and analyzed A/B testing experiments to evaluate UI changes and improve conversion rates.',
    longDescription: `This project involved designing and implementing comprehensive A/B testing experiments to evaluate the effectiveness of UI/UX changes on conversion rates. I developed statistical frameworks for hypothesis testing, calculated sample sizes, and analyzed results using Python's statistical libraries.`,
    technologies: ['Python', 'Statistics', 'Hypothesis Testing', 'Pandas', 'NumPy', 'SciPy'],
    features: [
      'Statistical hypothesis testing with significance level calculations',
      'Conversion rate analysis and lift calculations',
      'Sample size determination and power analysis',
      'Experiment evaluation with confidence intervals',
      'Data-driven recommendations for UI improvements',
    ],
    metrics: 'Improved decision accuracy through data-driven experimentation',
    image: '/projects/ab-testing.png',
    github: 'https://github.com/vrindmangla/ab-testing',
    category: 'testing',
  },
  {
    id: '2',
    title: 'Sales Analytics & Revenue Forecasting',
    description: 'Analyzed 50K+ transaction records and developed forecasting models for business planning.',
    longDescription: `A comprehensive sales analytics project where I processed and analyzed over 50,000 transaction records to identify trends, patterns, and opportunities. Built predictive models using time series analysis and machine learning techniques to forecast future revenue.`,
    technologies: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Time Series'],
    features: [
      'Data cleaning and preprocessing of 50K+ records',
      'Exploratory data analysis and trend identification',
      'Revenue forecasting using time series models',
      'SQL query optimization for faster data retrieval',
      'Interactive dashboards for stakeholder presentations',
    ],
    metrics: 'Analyzed 50K+ transactions with optimized SQL queries',
    image: '/projects/sales-analytics.png',
    github: 'https://github.com/vrindmangla/sales-analytics',
    category: 'analytics',
  },
  {
    id: '3',
    title: 'Customer Churn Analysis Dashboard',
    description: 'Built predictive churn models achieving 85% accuracy and developed Power BI dashboards.',
    longDescription: `Developed a complete churn analysis solution including predictive modeling and executive dashboards. Used machine learning algorithms to identify customers at risk of churning and provided actionable insights through Power BI visualizations.`,
    technologies: ['Python', 'Power BI', 'Machine Learning', 'Scikit-learn', 'SQL', 'DAX'],
    features: [
      'Predictive model with 85% accuracy using ensemble methods',
      'Customer segmentation using clustering algorithms',
      'KPI dashboard with real-time metrics in Power BI',
      'Churn risk scoring for targeted retention campaigns',
      'Feature importance analysis for business insights',
    ],
    metrics: '85% model accuracy with actionable retention insights',
    image: '/projects/churn-analysis.png',
    github: 'https://github.com/vrindmangla/Customer-Churn-Analysis-Project',
    category: 'ml',
  },
  {
    id: '4',
    title: 'IPL Analytics Dashboard & Data Pipeline',
    description: 'Built an end-to-end analytics pipeline analyzing IPL season data.',
    longDescription: `A comprehensive analytics project covering the complete data pipeline from data extraction to visualization. Analyzed IPL cricket data to derive insights about team performance, player statistics, and venue characteristics through interactive dashboards.`,
    technologies: ['Python', 'SQL', 'Power BI', 'Pandas', 'ETL', 'Data Modeling'],
    features: [
      'Team performance analysis across seasons',
      'Player performance metrics and comparisons',
      'Venue insights and ground statistics',
      'Interactive Power BI dashboards',
      'ETL pipeline for automated data refresh',
    ],
    metrics: '70+ matches analyzed with comprehensive visualizations',
    image: '/projects/ipl-analytics.png',
    github: 'https://github.com/vrindmangla/ipl-analytics',
    category: 'visualization',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: '2024',
    credential: 'Google Career Certificates',
    verifyLink: '#',
  },
  {
    id: '2',
    title: 'SQL Certification',
    issuer: 'HackerRank',
    date: '2024',
    credential: 'HackerRank',
    verifyLink: '#',
  },
  {
    id: '3',
    title: 'Advanced Excel for Data Analysis',
    issuer: 'Coursera',
    date: '2024',
    credential: 'Coursera',
    verifyLink: '#',
  },
];

export const EDUCATIONS: Education[] = [
  {
    id: '1',
    degree: 'B.Tech Information Technology (AI/ML)',
    institution: 'Maharaja Agrasen Institute of Technology',
    location: 'Delhi, India',
    duration: '2023 - 2027',
    grade: 'CGPA: 9.0/10',
    description: 'Specializing in Artificial Intelligence and Machine Learning with a strong foundation in data structures, algorithms, and software engineering.',
    achievements: [
      'Maintained CGPA of 9.0 throughout the program',
      'Active member of college tech community',
      'Participated in multiple hackathons and coding competitions',
    ],
  },
  {
    id: '2',
    degree: 'Class XII (Science Stream)',
    institution: 'Ahlcon International School',
    location: 'Delhi, India',
    duration: '2022 - 2023',
    grade: '84%',
    description: 'Completed higher secondary education with Physics, Chemistry, and Mathematics.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/vrindmangla',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vrindmangla',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    href: 'mailto:vrindmangla05@gmail.com',
    icon: 'mail',
  },
];

export const STAT_COUNTERS: StatCounter[] = [
  { label: 'Projects Completed', value: 15, suffix: '+', icon: 'Folder' },
  { label: 'CGPA', value: 9.0, suffix: '/10', icon: 'GraduationCap' },
  { label: 'Lines of Code', value: 50, suffix: 'K+', icon: 'Code' },
  { label: 'Certifications', value: 5, suffix: '+', icon: 'Award' },
];

export const SKILL_SCORES: SkillScore[] = [
  { name: 'SQL', score: 92, color: '#3B82F6', icon: 'Database' },
  { name: 'Power BI', score: 90, color: '#8B5CF6', icon: 'BarChart3' },
  { name: 'Python', score: 88, color: '#06B6D4', icon: 'Terminal' },
  { name: 'Machine Learning', score: 78, color: '#10B981', icon: 'Brain' },
];

export const NAV_SCROLL_THRESHOLD = 50;
export const TYPING_SPEED = 100;
export const TYPING_DELETE_SPEED = 50;
export const TYPING_PAUSE_DURATION = 2000;
