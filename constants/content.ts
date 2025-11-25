/**
 * Centralized Content Constants
 * Single source of truth for all website content
 * Update content here and it reflects everywhere
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
    twitter: 'https://twitter.com/hudsonit',
    facebook: 'https://www.facebook.com/hudsonit',
  },
} as const

// ============================================================================
// NAVIGATION LINKS
// ============================================================================

export const NAV_LINKS = [
  { href: '/for-employers', label: 'For Employers' },
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
    description: 'Hire pre-screened, verified professionals for your Oil & Gas, IT, and Hospitality projects. Fast mobilization, VMS integration, and 24/7 support.',
    keywords: ['hire talent', 'staffing for employers', 'workforce solutions', 'talent acquisition', 'recruitment services', 'Hudson'],
  },
  hero: {
    heading: 'Hire Verified Talent for Your Projects',
    description: 'Connect with pre-screened professionals ready to deploy on your Oil & Gas, IT, and Hospitality projects. Fast mobilization, seamless VMS integration, and round-the-clock support.',
  },
  features: [
    {
      title: 'Fast Mobilization',
      description: 'Deploy qualified professionals quickly with our streamlined onboarding and compliance processes.',
    },
    {
      title: 'VMS Integration',
      description: 'Seamless workflow integration with leading vendor management systems for efficient operations.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance for clients and candidates to ensure project success.',
    },
    {
      title: 'Full Compliance',
      description: 'Complete documentation and regulatory expertise across all industries and jurisdictions.',
    },
  ],
  cta: {
    text: 'Get Started Today',
    href: '/contact',
  },
  card: {
    title: 'For Employers',
    description: 'Hire Verified Talent - Connect with pre-screened professionals ready to deploy on your projects.',
  },
  navButton: {
    text: 'Hire Talent',
    href: '/for-employers',
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
      title: 'Oil & Gas Staffing Solutions | Expert Field Technicians & Engineers',
      description: 'Expert field technicians, engineers, and project managers for upstream, midstream, and downstream operations. HSE compliant staffing solutions.',
      keywords: ['oil and gas staffing', 'energy staffing', 'field technicians', 'petroleum engineers', 'HSE compliance', 'upstream staffing', 'midstream staffing', 'downstream staffing'],
    },
    hero: {
      heading: 'Oil & Gas Staffing Solutions',
      description: 'Expert field technicians, engineers, and project managers for upstream, midstream, and downstream operations. Full HSE compliance and rapid deployment capabilities.',
    },
    card: {
      title: 'Oil & Gas Staffing Solutions',
      description: 'Expert field technicians, engineers, and project managers for upstream, midstream, and downstream operations.',
    },
    showcase: {
      title: 'Oil & Gas Staffing',
      bullets: [
        'Expert field technicians and engineers',
        'Compliance with HSE standards',
        'Rapid deployment for critical projects',
      ],
    },
    sections: [
      {
        title: 'Expert Field Technicians',
        description: 'Skilled professionals with hands-on experience in drilling, production, maintenance, and operations across all segments of the oil and gas industry.',
        items: [
          'Drilling and completion specialists',
          'Production operators and technicians',
          'Maintenance and repair professionals',
          'Safety and environmental compliance experts',
        ],
      },
      {
        title: 'Engineering Excellence',
        description: 'Qualified petroleum engineers, process engineers, and project managers for complex upstream, midstream, and downstream projects.',
        items: [
          'Petroleum and reservoir engineers',
          'Process and facilities engineers',
          'Project and construction managers',
          'Quality assurance and control specialists',
        ],
      },
      {
        title: 'HSE Compliance',
        description: 'All personnel are fully certified and compliant with Health, Safety, and Environmental standards. Complete documentation and regulatory expertise for global deployments.',
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
        text: 'For Employers',
        href: EMPLOYERS.href,
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
    'For Employers': [
      { href: EMPLOYERS.href, label: 'Hire Talent' },
      { href: INDUSTRIES.oilGas.href, label: 'Oil & Gas Staffing' },
      { href: INDUSTRIES.it.href, label: 'US IT Staffing' },
      { href: INDUSTRIES.hospitality.href, label: 'Hospitality Staffing' },
    ],
    'For Employees': [
      { href: EMPLOYEES.href, label: 'Find Jobs' },
      { href: EMPLOYEES.href, label: 'Career Resources' },
      { href: EMPLOYEES.href, label: 'Apply Now' },
    ],
    'Company': [
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact Us' },
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
  return getIndustryByHref(href)
}

