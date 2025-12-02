/**
 * Centralized Content Constants
 * Single source of truth for all website content
 */

// ============================================================================
// CORE BRANDING & DESCRIPTIONS
// ============================================================================

export const BRAND = {
  name: 'Hudson Information Technology & Manpower Services',
  shortName: 'Hudson',
  tagline: 'Global Workforce Solutions',
  description: 'Reliable, compliant, and scalable staffing solutions for Oil & Gas, IT, and Hospitality industries worldwide.',
  industries: 'Oil & Gas, IT, and Hospitality',
  founded: 'Early 2019',
  url: 'https://hudsonit.com',
  email: 'info@hudsonmanpower.com',
  emailIT: 'support@hudsonmanpower.com',
  phone: {
    usa: '+1 (551) 277-2955',
    usaOther: '+1 (551) 800-3255',
    india: '+91 80874 51874',
  },
  offices: {
    usa: {
      street: '221 River St, Suite 09',
      city: 'Hoboken',
      state: 'NJ',
      zip: '07030',
      country: 'US',
    },
    india: {
      street: 'Jay Vijay Nagar, B wing, Ground Floor',
      area: 'Naigaon (East)',
      city: 'Mumbai',
      zip: '401208',
      country: 'IN',
    },
  },
  founders: {
    ceo: {
      name: 'Mayank Doultani',
      title: 'CEO & Co-Founder',
    },
    coo: {
      name: 'Vikas Singh',
      title: 'COO & Co-Founder',
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/hudsonit',
  },
} as const

// ============================================================================
// NAVIGATION LINKS
// ============================================================================

export const NAV_LINKS = [
  { href: '/for-employees', label: 'For Employees' },
  { href: '/oil-and-gas-staffing', label: 'Oil & Gas' },
  { href: '/us-it-staffing', label: 'IT Staffing' },
  { href: '/hospitality-staffing', label: 'Hospitality' },
] as const

// ============================================================================
// FOR EMPLOYEES CONTENT
// ============================================================================

export const EMPLOYEES = {
  href: '/for-employees',
  icon: '👥',
  title: 'For Employees',
  shortTitle: 'Find Jobs Fast',
  meta: {
    title: 'For Employees - Find Jobs Fast | Hudson IT & Manpower Services',
    description: 'Access thousands of verified job opportunities across Oil & Gas, IT, and Hospitality sectors. Fast application process and career support.',
    keywords: ['find jobs', 'job opportunities', 'career resources', 'employment', 'job search', 'Hudson'],
  },
  hero: {
    heading: 'Find Jobs Fast Across Industries',
    description: 'Access thousands of verified job opportunities in Oil & Gas, IT, and Hospitality sectors. Fast application process, career resources, and ongoing support.',
  },
  features: [
    {
      title: 'Verified Opportunities',
      description: 'Access pre-screened job listings from trusted employers across multiple industries.',
    },
    {
      title: 'Fast Application',
      description: 'Streamlined application process with quick response times and clear communication.',
    },
    {
      title: 'Career Resources',
      description: 'Access to resume tips, interview preparation, and professional development resources.',
    },
    {
      title: 'Ongoing Support',
      description: 'Dedicated support throughout your employment journey, from application to placement.',
    },
  ],
  cta: {
    text: 'Browse Jobs Now',
    href: '/contact',
  },
  card: {
    title: 'For Employees',
    description: 'Find Jobs Fast - Access thousands of verified job opportunities across Oil & Gas, IT, and Hospitality sectors.',
  },
} as const

// ============================================================================
// FOR EMPLOYERS CONTENT
// ============================================================================

export const EMPLOYERS = {
  href: '/for-employers',
  icon: '🏢',
  title: 'For Employers',
  shortTitle: 'Hire Verified Talent',
  meta: {
    title: 'For Employers - Hire Verified Talent | Hudson IT & Manpower Services',
    description: 'Connect with pre-screened professionals ready to deploy on your projects. Fast, compliant, and scalable staffing solutions.',
    keywords: ['hire talent', 'employer services', 'staffing solutions', 'talent acquisition', 'workforce solutions', 'Hudson'],
  },
  hero: {
    heading: 'Hire Verified Talent Fast',
    description: 'Connect with pre-screened professionals ready to deploy on your projects. Fast, compliant, and scalable staffing solutions across industries.',
  },
  features: [
    {
      title: 'Pre-Screened Talent',
      description: 'Access verified professionals with skills, certifications, and experience matched to your requirements.',
    },
    {
      title: 'Rapid Deployment',
      description: 'Quick onboarding and deployment processes to get your team operational fast.',
    },
    {
      title: 'Compliance Ready',
      description: 'All candidates are fully compliant with industry standards, certifications, and regulatory requirements.',
    },
    {
      title: 'Dedicated Support',
      description: '24/7 support and account management to ensure smooth operations and ongoing success.',
    },
  ],
  cta: {
    text: 'Hire Talent Now',
    href: '/contact',
  },
  card: {
    title: 'For Employers',
    description: 'Hire Verified Talent - Connect with pre-screened professionals ready to deploy on your projects.',
  },
} as const

// ============================================================================
// SOFTWARE SOLUTIONS CONTENT
// ============================================================================

export const SOFTWARE_SOLUTIONS = {
  href: '/software-solutions',
  icon: '💼',
  title: 'Software Solutions',
  shortTitle: 'Enterprise Software Development',
  meta: {
    title: 'Software Solutions - Enterprise Development | Hudson IT & Manpower Services',
    description: 'Custom software development, enterprise applications, cloud solutions, and digital transformation services for businesses worldwide.',
    keywords: ['software solutions', 'enterprise software', 'custom development', 'cloud solutions', 'digital transformation', 'software development', 'Hudson'],
  },
  hero: {
    heading: 'Enterprise Software Solutions',
    description: 'Transform your business with custom software development, enterprise applications, cloud solutions, and digital transformation services tailored to your needs.',
  },
  features: [
    {
      title: 'Custom Development',
      description: 'Bespoke software solutions designed and developed to meet your unique business requirements and workflows.',
    },
    {
      title: 'Enterprise Applications',
      description: 'Scalable enterprise-grade applications with robust architecture, security, and performance optimization.',
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud-native applications, migration services, and infrastructure management for modern businesses.',
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
    },
  ],
  cta: {
    text: 'Get Started Today',
    href: '/contact',
  },
  card: {
    title: 'Software Solutions',
    description: 'Enterprise Software Development - Custom solutions, cloud applications, and digital transformation services.',
  },
  navButton: {
    text: 'Software Solutions',
    href: '/software-solutions',
  },
} as const

// ============================================================================
// INDUSTRY CONTENT
// ============================================================================

export const INDUSTRIES = {
  oilGas: {
    href: '/oil-and-gas-staffing',
    icon: '⚡',
    title: 'Oil & Gas Staffing',
    shortTitle: 'Oil & Gas Staffing Solutions',
    meta: {
      title: 'Oil & Gas Staffing Solutions | Expert Engineers, Technicians & Skilled Trades',
      description: 'Comprehensive Oil & Gas staffing solutions from executive engineers to skilled trades. Engineering, project management, specialized functions, and blue-collar professionals with HSE compliance.',
      keywords: ['oil and gas staffing', 'energy staffing', 'petroleum engineers', 'field technicians', 'HSE compliance', 'project managers', 'welders', 'pipe fitters', 'riggers', 'upstream staffing', 'midstream staffing', 'downstream staffing'],
    },
    hero: {
      heading: 'Oil & Gas Staffing Solutions',
      description: 'Comprehensive talent solutions for the energy sector—from executive engineers and project managers to skilled trades professionals. Dual-track recruitment methodology ensuring quality leadership and rapid skilled labor deployment.',
    },
    card: {
      title: 'Oil & Gas Staffing Solutions',
      description: 'Expert engineers, project managers, specialized professionals, and skilled trades for upstream, midstream, and downstream operations.',
    },
    showcase: {
      title: 'Oil & Gas Staffing',
      bullets: [
        'Engineering & Technical professionals',
        'Project Management & Leadership roles',
        'Specialized Functions & Operational staff',
        'Blue-Collar & Skilled Trades',
        'HSE compliant and certified personnel',
      ],
    },
    sections: [
      {
        title: 'Engineering & Technical Roles',
        description: 'Expert engineering professionals for complex Oil & Gas projects across all segments—upstream, midstream, and downstream operations.',
        items: [
          'Petroleum & Drilling Engineers',
          'Geologists',
          'Civil/Construction Engineers',
          'Mechanical Engineers',
          'MEP Engineers',
          'Pipeline Engineers',
          'Process Engineers',
          'FEED Engineers',
          'Asset Integrity Specialists',
        ],
      },
      {
        title: 'Project Management & Leadership',
        description: 'Certified project management professionals and leadership roles to ensure successful project execution and delivery.',
        items: [
          'PMP-Certified Project Managers',
          'Project Engineers',
          'Contracts & Procurement Managers',
          'Estimation Engineers',
        ],
      },
      {
        title: 'Specialized Functions',
        description: 'Specialized professionals supporting critical operations, safety, and compliance requirements.',
        items: [
          'HSE Officers',
          'Legal Advisors',
          'Facility Management Specialists',
          'EMI Technicians',
          'Commissioning & Shutdown Experts',
          'Maintenance & Design Engineers',
          'Architectural Engineers',
        ],
      },
      {
        title: 'Operational & Supervisory Roles',
        description: 'Experienced supervisors and operational staff ensuring quality and compliance on-site.',
        items: [
          'Shift Supervisors',
          'Site Supervisors',
          'QA/QC Engineers',
          'Procurement/Contract Coordinators',
        ],
      },
      {
        title: 'Blue-Collar & Skilled Trades',
        description: 'Certified skilled trades professionals ready for rapid deployment to meet project deadlines.',
        items: [
          'Welders',
          'Steel Fabricators (Marine & Construction)',
          'Pipe Fitters',
          'Riggers',
          'Scaffolders',
          'Electricians',
          'Plumbers',
          'Carpenters',
          'Crane Operators',
          'Machine Operators',
        ],
      },
      {
        title: 'Recruitment Methodology for White-Collar Roles',
        description: 'Our 3-step executive screening model ensures we deliver only the best-fit candidates for engineering, leadership, and technical specialist positions.',
        items: [
          'Resume and Credentials Review: Validating qualifications & achievements',
          'Recruiter Interview: Assessing leadership style, motivation, and industry fit',
          'Video Interview with Account Manager: Re-evaluating technical knowledge, cultural adaptability, and readiness to lead',
        ],
        note: 'Focused on delivering only a shortlist of the best-fit candidates, saving client time and ensuring project readiness.',
      },
      {
        title: 'Recruitment Methodology for Blue-Collar & Skilled Trades',
        description: 'Designed for fast mobilization to meet project deadlines without compromise.',
        items: [
          'Targeted recruitment campaigns in talent-rich geographies across India, Southeast Asia, and Africa (partners)',
          'Pre-screening of candidates for skills, certifications, and safety knowledge',
          'Client-involved hiring drives where management can conduct mass interviews and trade tests',
          'Fast mobilization designed to meet project deadlines without compromise',
        ],
      },
      {
        title: 'Our Approach',
        description: 'This dual-track approach balances quality assurance required for leadership and technical roles with the speed and scale needed for skilled labor deployment. All personnel are fully certified and compliant with Health, Safety, and Environmental standards.',
      },
    ],
    cta: {
      text: 'Request Talent',
      href: '/contact',
    },
  },
  it: {
    href: '/us-it-staffing',
    icon: '💻',
    title: 'US IT Staffing',
    shortTitle: 'US IT Staffing & Technology Talent',
    meta: {
      title: 'US IT Staffing & Technology Talent | Software Developers & Engineers',
      description: 'Elite software developers, cloud architects, and DevOps engineers for enterprise technology projects. Agile teams ready to deploy.',
      keywords: ['IT staffing', 'software developers', 'cloud architects', 'DevOps engineers', 'technology talent', 'US IT staffing', 'enterprise IT', 'tech recruitment'],
    },
    hero: {
      heading: 'US IT Staffing & Technology Talent',
      description: 'Elite software developers, cloud architects, and DevOps engineers for enterprise technology projects. Agile teams ready to deploy on your timeline.',
    },
    card: {
      title: 'US IT Staffing & Technology Talent',
      description: 'Elite software developers, cloud architects, and DevOps engineers for enterprise technology projects.',
    },
    showcase: {
      title: 'US IT Staffing & Technology',
      bullets: [
        'Top-tier software developers and engineers',
        'Cloud architecture and DevOps specialists',
        'Agile teams for enterprise projects',
      ],
    },
    sections: [
      {
        title: 'Software Development',
        description: 'Top-tier developers proficient in modern frameworks, languages, and development methodologies for scalable enterprise applications.',
        items: [
          'Full-stack developers (React, Node.js, Python, Java)',
          'Mobile app developers (iOS, Android, React Native)',
          'Backend engineers and API specialists',
          'Frontend developers and UI/UX specialists',
        ],
      },
      {
        title: 'Cloud & DevOps',
        description: 'Expert cloud architects and DevOps engineers for infrastructure automation, CI/CD pipelines, and cloud migration projects.',
        items: [
          'AWS, Azure, and GCP certified architects',
          'DevOps engineers (Kubernetes, Docker, Terraform)',
          'Infrastructure automation specialists',
          'Site reliability engineers (SRE)',
        ],
      },
      {
        title: 'Agile Teams',
        description: 'Pre-formed agile teams ready to integrate into your development workflow. Scrum masters, product owners, and cross-functional teams available.',
      },
    ],
    cta: {
      text: 'Hire IT Talent',
      href: '/contact',
    },
  },
  hospitality: {
    href: '/hospitality-staffing',
    icon: '🏨',
    title: 'Hospitality Staffing',
    shortTitle: 'Hospitality & F&B Staffing Solutions',
    meta: {
      title: 'Hospitality & F&B Staffing Solutions | Skilled Hospitality Professionals',
      description: 'Skilled hospitality professionals, chefs, and service staff for hotels, restaurants, and events. Seasonal and permanent placements with multi-language support.',
      keywords: ['hospitality staffing', 'F&B staffing', 'hotel staffing', 'restaurant staffing', 'chef recruitment', 'hospitality jobs', 'food and beverage staffing'],
    },
    hero: {
      heading: 'Hospitality & F&B Staffing Solutions',
      description: 'Skilled hospitality professionals, chefs, and service staff for hotels, restaurants, and events. Seasonal and permanent placements with multi-language support capabilities.',
    },
    card: {
      title: 'Hospitality & F&B Workforce',
      description: 'Skilled hospitality professionals, chefs, and service staff for hotels, restaurants, and events.',
    },
    showcase: {
      title: 'Hospitality & F&B Workforce',
      bullets: [
        'Skilled hospitality professionals',
        'Seasonal and permanent placements',
        'Multi-language support capabilities',
      ],
    },
    sections: [
      {
        title: 'Hotel & Resort Staffing',
        description: 'Experienced professionals for front desk, housekeeping, concierge, and management positions in hotels and resorts worldwide.',
        items: [
          'Front desk and guest services',
          'Housekeeping and maintenance',
          'Concierge and bell services',
          'Hotel management and supervisors',
        ],
      },
      {
        title: 'Food & Beverage Professionals',
        description: 'Skilled chefs, cooks, servers, and bartenders for restaurants, catering, and event services.',
        items: [
          'Executive chefs and sous chefs',
          'Line cooks and prep cooks',
          'Servers and bartenders',
          'Banquet and catering staff',
        ],
      },
      {
        title: 'Multi-Language Support',
        description: 'Professionals fluent in multiple languages to serve diverse international clientele. Flexible seasonal and permanent placement options available.',
      },
    ],
    cta: {
      text: 'Find Hospitality Talent',
      href: '/contact',
    },
  },
} as const

// ============================================================================
// HOME PAGE CONTENT
// ============================================================================

export const HOME = {
  meta: {
    title: `Global Workforce Solutions for ${BRAND.industries}`,
    description: `Hudson delivers reliable, compliant and scalable staffing solutions for ${BRAND.industries} industries worldwide. Connect with 10,000+ verified professionals.`,
    keywords: ['staffing solutions', 'oil and gas staffing', 'IT staffing', 'hospitality staffing', 'workforce solutions', 'talent acquisition', 'Hudson', 'global staffing', 'manpower services'],
  },
  hero: {
    badge: 'Global Workforce Solutions',
    heading: {
      line1: 'Global',
      line2: 'Workforce',
      line3: 'Solutions',
    },
    description: `Hudson delivers reliable, compliant and scalable staffing across industries worldwide.`,
    cta: {
      primary: {
        text: 'Software Solutions',
        href: SOFTWARE_SOLUTIONS.href,
      },
      secondary: {
        text: 'For Employees',
        href: EMPLOYEES.href,
      },
    },
  },
  segmentCards: [
    EMPLOYEES,
    EMPLOYERS,
    SOFTWARE_SOLUTIONS,
    INDUSTRIES.oilGas,
    INDUSTRIES.it,
    INDUSTRIES.hospitality,
  ],
  stats: [
    { value: '10K+', label: 'Workers', sublabel: 'Deployed Globally', delay: 0 },
    { value: '12+', label: 'Industries', sublabel: 'Served Worldwide', delay: 0.1 },
    { value: '24/7', label: 'Support', sublabel: 'Always Available', delay: 0.2 },
    { value: '100%', label: 'Compliant', sublabel: 'Fully Certified', delay: 0.3 },
  ],
  trustSignals: [
    {
      value: '10,000+',
      label: 'Workers Deployed',
      description: 'Successfully placed professionals across global markets',
      icon: '👥',
    },
    {
      value: '12+',
      label: 'Global Industries',
      description: 'Serving diverse sectors from energy to technology',
      icon: '🌍',
    },
    {
      value: 'Fast',
      label: 'Mobilization',
      description: 'Rapid deployment with streamlined onboarding processes',
      icon: '⚡',
    },
    {
      value: 'VMS',
      label: 'Friendly Workflow',
      description: 'Seamless integration with vendor management systems',
      icon: '🔄',
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance for clients and candidates',
      icon: '🛟',
    },
    {
      value: '100%',
      label: 'Compliance',
      description: 'Full documentation and regulatory expertise',
      icon: '✅',
    },
  ],
  industryShowcase: [
    INDUSTRIES.oilGas,
    INDUSTRIES.it,
    INDUSTRIES.hospitality,
  ],
} as const

// ============================================================================
// FOOTER CONTENT
// ============================================================================

export const FOOTER = {
  description: `Global workforce solutions for ${BRAND.industries} industries.`,
  links: {
    'Hudson Manpower': [
      { href: SOFTWARE_SOLUTIONS.href, label: 'Enterprise Development' },
      { href: INDUSTRIES.it.href, label: 'IT Staffing' },
      { href: INDUSTRIES.oilGas.href, label: 'Oil & Gas Staffing' },
      { href: INDUSTRIES.hospitality.href, label: 'Hospitality Staffing' },
    ],
    'Company': [
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/careers', label: 'Careers' },
    ],
  },
} as const

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getIndustryByHref = (href: string) => {
  return Object.values(INDUSTRIES).find(industry => industry.href === href)
}

export const getSegmentCard = (href: string) => {
  if (href === EMPLOYEES.href) return EMPLOYEES
  if (href === EMPLOYERS.href) return EMPLOYERS
  if (href === SOFTWARE_SOLUTIONS.href) return SOFTWARE_SOLUTIONS
  return getIndustryByHref(href)
}
