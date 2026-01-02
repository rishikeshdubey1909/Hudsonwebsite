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
  tagline: 'Intelligent Workforce Solutions',
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
      image: 'https://hudsonmanpower.com/wp-content/uploads/2024/03/Mayank.png',
    },
    coo: {
      name: 'Vikas Singh',
      title: 'COO & Co-Founder',
      image: 'https://hudsonmanpower.com/wp-content/uploads/2024/03/Vikas.png',
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/hudsonit',
    youtube: 'https://www.youtube.com/@hudsonit',
    twitter: 'https://twitter.com/hudsonit',
    instagram: 'https://www.instagram.com/hudsonit',
    facebook: 'https://www.facebook.com/hudsonit',
  },
} as const

// ============================================================================
// NAVIGATION LINKS
// ============================================================================

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/industries', label: 'Industries' },
  { href: '/software-solutions', label: 'Software Solutions' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
] as const


// ============================================================================
// SOFTWARE SOLUTIONS CONTENT
// ============================================================================

export const SOFTWARE_SOLUTIONS = {
  href: '/software-solutions',
  icon: 'code',
  logo: '/images/logos/software-solutions.svg', // Add logo image here when available
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
    icon: 'fire',
    logo: '/images/logos/oil-gas.svg', // Add logo image here when available
    title: 'Oil & Gas Staffing',
    shortTitle: 'Oil & Gas Staffing Solutions',
    meta: {
      title: 'Oil & Gas Staffing Solutions | Expert Engineers, Technicians & Skilled Trades',
      description: 'Comprehensive Oil & Gas staffing solutions from executive engineers to skilled trades. Engineering, project management, specialized functions, and blue-collar professionals with HSE compliance.',
      keywords: ['oil and gas staffing', 'energy staffing', 'petroleum engineers', 'field technicians', 'HSE compliance', 'project managers', 'welders', 'pipe fitters', 'riggers', 'upstream staffing', 'midstream staffing', 'downstream staffing'],
    },
    hero: {
      heading: 'Oil & Gas Staffing Solutions',
      description: 'Specializing in recruitment for the oil and gas industry, we cover roles from exploration and production to energy management, fueling the sector with expert recruits. Our comprehensive talent solutions span from executive engineers and project managers to skilled trades professionals, with a dual-track recruitment methodology ensuring quality leadership and rapid skilled labor deployment.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
    },
    card: {
      title: 'Oil & Gas Staffing Solutions',
      description: 'Specializing in recruitment for the oil and gas industry, covering roles from exploration and production to energy management. Expert engineers, project managers, specialized professionals, and skilled trades for upstream, midstream, and downstream operations.',
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
        title: 'Exploration, Production & Energy Management',
        description: 'We specialize in recruiting professionals across the entire oil and gas value chain, from exploration and production to energy management. Our expertise covers all phases of the energy lifecycle, ensuring your operations are powered by specialists who understand the unique demands of each stage.',
        items: [
          'Exploration specialists and geoscientists',
          'Production engineers and operations managers',
          'Energy management and optimization professionals',
          'Reservoir engineers and production analysts',
          'Field development and planning experts',
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
    icon: 'cpu',
    logo: '/images/logos/it-staffing.svg', // Add logo image here when available
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
    icon: 'star',
    logo: '/images/logos/hospitality.svg', // Add logo image here when available
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
  healthcare: {
    href: '/healthcare-staffing',
    icon: 'beaker',
    logo: '/images/logos/healthcare.svg',
    title: 'Healthcare Staffing',
    shortTitle: 'Healthcare & Medical Staffing',
    meta: {
      title: 'Healthcare & Medical Staffing Solutions | Medical Professionals',
      description: 'Catering to staffing for medical services, healthcare administration, and biotechnology, prioritizing expertise and compassionate care.',
      keywords: ['healthcare staffing', 'medical staffing', 'nurses', 'doctors', 'healthcare professionals', 'medical recruitment', 'healthcare jobs'],
    },
    hero: {
      heading: 'Healthcare & Medical Staffing Solutions',
      description: 'Catering to staffing for medical services, healthcare administration, and biotechnology, prioritizing expertise and compassionate care.',
    },
    card: {
      title: 'Healthcare & Medical Staffing',
      description: 'Catering to staffing for medical services, healthcare administration, and biotechnology, prioritizing expertise and compassionate care.',
    },
    showcase: {
      title: 'Healthcare & Medical Staffing',
      bullets: [
        'Licensed medical professionals',
        'HIPAA compliant staffing',
        '24/7 healthcare support',
      ],
    },
    sections: [
      {
        title: 'Clinical Staffing',
        description: 'Licensed healthcare professionals for hospitals, clinics, and medical facilities.',
        items: [
          'Registered Nurses',
          'Doctors and Physicians',
          'Medical Technicians',
          'Pharmacists',
        ],
      },
      {
        title: 'Healthcare Administration',
        description: 'Administrative and support staff for healthcare facilities.',
        items: [
          'Medical Administrators',
          'Healthcare IT Specialists',
          'Medical Coders',
          'Healthcare Assistants',
        ],
      },
    ],
    cta: {
      text: 'Find Healthcare Talent',
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
    description: `Where elite talent meets visionary companies. Next-generation workforce solutions powered by intelligent matching and global expertise.`,
    cta: {
      primary: {
        text: 'Software Solutions',
        href: SOFTWARE_SOLUTIONS.href,
      },
      secondary: {
        text: 'Contact Us',
        href: '/contact',
      },
    },
  },
  segmentCards: [
    SOFTWARE_SOLUTIONS,
    INDUSTRIES.oilGas,
    INDUSTRIES.it,
    INDUSTRIES.hospitality,
    INDUSTRIES.healthcare,
  ],
  stats: [
    { value: '10K+', label: 'Workers', sublabel: 'Deployed Globally', delay: 0 },
    { value: '12+', label: 'Industries', sublabel: 'Served Worldwide', delay: 0.1 },
    { value: '24/7', label: 'Support', sublabel: 'Always Available', delay: 0.2 },
    { value: '100%', label: 'Compliant', sublabel: 'Fully Certified', delay: 0.3 },
  ],
  trustSignals: [
    {
      value: '1000+',
      label: 'Licensed for Scale',
      description: 'Government of India–issued recruitment license enabling overseas deployment of 1000+ candidates annually, built for high-volume, high-stakes hiring.',
      icon: 'check-circle',
      logo: '/images/logos/licensed.svg',
    },
    {
      value: 'Dual',
      label: 'Recruitment Model',
      description: 'Executive search for professional and leadership roles, combined with campaign-based hiring for skilled and trade workforce requirements.',
      icon: 'users',
      logo: '/images/logos/recruitment.svg',
    },
    {
      value: 'Global',
      label: 'Talent, Local Alignment',
      description: 'Proven ability to source talent internationally while aligning with local market regulations, workforce expectations, and project realities.',
      icon: 'globe',
      logo: '/images/logos/global-talent.svg',
    },
    {
      value: 'Fully',
      label: 'Managed Compliance',
      description: 'End-to-end handling of visa processing, medicals, documentation, relocation, onboarding, and deployment so clients can focus on execution.',
      icon: 'arrows-sync',
      logo: '/images/logos/compliance.svg',
    },
    {
      value: 'Quality',
      label: 'First Hiring',
      description: 'Rigorous multi-stage screening for white-collar roles and client-integrated trade testing for blue-collar staff to ensure job-ready deployments.',
      icon: 'star',
      logo: '/images/logos/quality.svg',
    },
    {
      value: 'Tech',
      label: 'Backed Delivery',
      description: 'Demonstrated experience in building and delivering scalable web and mobile solutions, strengthening recruitment operations through systems, automation, and AI-led workflows.',
      icon: 'code',
      logo: '/images/logos/technology.svg',
    },
    {
      value: 'Transparent',
      label: 'Communication',
      description: 'Clear timelines, regular updates, and accountable delivery, reducing friction and ensuring predictable outcomes.',
      icon: 'lifebuoy',
      logo: '/images/logos/communication.svg',
    },
    {
      value: 'ROI',
      label: 'Focused Engagements',
      description: 'Projects delivered on time and within budget, with a relentless focus on tangible business impact, not vanity features or unnecessary complexity.',
      icon: 'briefcase',
      logo: '/images/logos/roi.svg',
    },
    {
      value: 'Partnership',
      label: 'Mindset',
      description: "We don't operate as a transactional vendor. Our goal is to become a long-term partner in your growth, evolution, and operational success.",
      icon: 'hand-raised',
      logo: '/images/logos/partnership.svg',
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
  if (href === SOFTWARE_SOLUTIONS.href) return SOFTWARE_SOLUTIONS
  return getIndustryByHref(href)
}

// ============================================================================
// INDUSTRIES PAGE CONTENT
// ============================================================================

export const INDUSTRIES_PAGE = {
  meta: {
    title: 'Industries - Spanning Sectors | Hudson IT & Manpower Services',
    description: 'Our expertise extends across a wide array of industries, each with its unique requirements and challenges. From information technology to healthcare, finance, manufacturing, retail, hospitality, education, engineering, telecommunications, transportation, and logistics.',
    keywords: ['industries', 'sectors', 'industry expertise', 'staffing solutions', 'recruitment', 'Hudson'],
  },
  hero: {
    heading: 'Spanning Sectors: The Hudson Group\'s Diverse Industry Expertise',
    description: 'Our expertise extends across a wide array of industries, each with its unique requirements and challenges. From information technology to healthcare, finance, manufacturing, retail, hospitality, education, engineering, telecommunications, transportation, and logistics, we offer industry-specific staffing solutions that are suited to your needs. Our industry-focused strategy guarantees that we not only meet your technical requirements, but also discover experts who fit effortlessly into your organization\'s culture.',
    subDescription: 'Our team is adept at understanding and navigating the specific nuances and operational styles of these diverse sectors. With a rich portfolio of clients from various industries, we are well-positioned to meet your recruitment needs in any of the following sectors:',
  },
  industries: [
    {
      title: 'Oil & Gas',
      description: 'Specializing in recruitment for the oil and gas industry, we cover roles from exploration and production to energy management, fueling the sector with expert recruits.',
      href: '/oil-and-gas-staffing',
      profiles: [
        'Petroleum Engineers',
        'Drilling Engineers',
        'Geologists',
        'Project Managers (PMP Certified)',
        'HSE Officers',
        'Process Engineers',
        'Pipeline Engineers',
        'Mechanical Engineers',
        'Civil Engineers',
        'Welders',
        'Pipe Fitters',
        'Riggers',
        'Scaffolders',
        'Electricians',
        'Crane Operators',
        'Shift Supervisors',
        'QA/QC Engineers',
        'Facility Management Specialists',
      ],
    },
    {
      title: 'Engineering',
      description: 'With a focus on civil, mechanical, electrical, & chemical engineering, our recruitment strategies bring in expert professionals to push the boundaries of engineering innovation.',
      profiles: [
        'Civil Engineers',
        'Mechanical Engineers',
        'Electrical Engineers',
        'Chemical Engineers',
        'Structural Engineers',
        'MEP Engineers',
        'Design Engineers',
        'Project Engineers',
        'Site Engineers',
        'Quality Engineers',
        'Maintenance Engineers',
        'Process Engineers',
        'CAD Designers',
        'Drafting Engineers',
        'Estimation Engineers',
        'Planning Engineers',
      ],
    },
    {
      title: 'Industrial & Infrastructure',
      description: 'Our focus is on sourcing professionals for construction, manufacturing, and infrastructure projects, driving progress with skilled manpower.',
      profiles: [
        'Construction Managers',
        'Site Supervisors',
        'Project Managers',
        'Quantity Surveyors',
        'Safety Officers',
        'Foremen',
        'Crane Operators',
        'Heavy Equipment Operators',
        'Steel Fabricators',
        'Welders',
        'Carpenters',
        'Masons',
        'Plumbers',
        'Electricians',
        'HVAC Technicians',
        'Quality Inspectors',
        'Material Engineers',
        'Traffic Engineers',
      ],
    },
    {
      title: 'Information Technology',
      description: 'Specializing in software development, IT support, and tech innovation, our IT professionals are poised to advance your technological capabilities.',
      href: '/us-it-staffing',
      profiles: [
        'Software Developers (Full-stack)',
        'Frontend Developers',
        'Backend Engineers',
        'Mobile App Developers',
        'Cloud Architects (AWS, Azure, GCP)',
        'DevOps Engineers',
        'Site Reliability Engineers (SRE)',
        'Data Engineers',
        'Data Scientists',
        'Machine Learning Engineers',
        'UI/UX Designers',
        'QA/Test Engineers',
        'Scrum Masters',
        'Product Managers',
        'Technical Leads',
        'System Administrators',
        'Network Engineers',
        'Cybersecurity Specialists',
      ],
    },
    {
      title: 'Logistics',
      description: 'We excel in recruiting specialists in supply chain management, transportation, and warehousing, optimizing logistics operations with precision.',
      profiles: [
        'Supply Chain Managers',
        'Logistics Coordinators',
        'Warehouse Managers',
        'Forklift Operators',
        'Truck Drivers',
        'Fleet Managers',
        'Inventory Controllers',
        'Shipping Clerks',
        'Customs Clearance Agents',
        'Procurement Specialists',
        'Distribution Managers',
        'Operations Managers',
        'Freight Forwarders',
        'Logistics Analysts',
        'Dispatch Coordinators',
      ],
    },
    {
      title: 'Power',
      description: 'Our recruitment expertise in the power sector fills roles that drive energy efficiency and innovation within the industry.',
      profiles: [
        'Power Plant Engineers',
        'Electrical Engineers',
        'Transmission Engineers',
        'Distribution Engineers',
        'Renewable Energy Engineers',
        'Solar Panel Installers',
        'Wind Turbine Technicians',
        'Power System Operators',
        'Maintenance Technicians',
        'Safety Engineers',
        'Project Managers',
        'Field Engineers',
        'Commissioning Engineers',
        'Control Room Operators',
      ],
    },
    {
      title: 'Automobile',
      description: 'Specializing in automotive recruitment, Hudson Manpower sources top talent for design, manufacturing, and sales within the auto industry, ensuring innovation and expertise drive your workforce.',
      profiles: [
        'Automotive Design Engineers',
        'Manufacturing Engineers',
        'Quality Control Engineers',
        'Production Managers',
        'Assembly Line Workers',
        'Auto Mechanics',
        'Paint Technicians',
        'Welding Specialists',
        'CNC Operators',
        'Sales Executives',
        'Service Advisors',
        'Parts Managers',
        'Automotive Technicians',
        'R&D Engineers',
        'Testing Engineers',
      ],
    },
    {
      title: 'Telecom',
      description: 'We recruit top talents in telecommunications, ensuring robust network engineering and responsive customer support.',
      profiles: [
        'Network Engineers',
        'RF Engineers',
        'Telecom Installation Technicians',
        'Fiber Optic Technicians',
        'Tower Technicians',
        'Network Administrators',
        'Telecom Project Managers',
        'Customer Support Representatives',
        'Field Service Engineers',
        'System Integrators',
        '5G Specialists',
        'VoIP Engineers',
        'Telecom Sales Executives',
        'Technical Support Engineers',
      ],
    },
    {
      title: 'Financial Services',
      description: 'We deliver highly skilled professionals across banking, insurance, investment, and fintech sectors, enhancing financial strategies and operations with top-tier talent.',
      profiles: [
        'Financial Analysts',
        'Investment Bankers',
        'Risk Analysts',
        'Compliance Officers',
        'Accountants',
        'Auditors',
        'Loan Officers',
        'Insurance Agents',
        'Wealth Managers',
        'Treasury Analysts',
        'Fintech Developers',
        'Blockchain Developers',
        'Financial Advisors',
        'Credit Analysts',
        'Operations Managers',
      ],
    },
    {
      title: 'Healthcare',
      description: 'Catering to staffing for medical services, healthcare administration, and biotechnology, prioritizing expertise and compassionate care.',
      profiles: [
        'Registered Nurses',
        'Doctors',
        'Medical Technicians',
        'Pharmacists',
        'Lab Technicians',
        'Radiology Technicians',
        'Physical Therapists',
        'Medical Administrators',
        'Healthcare IT Specialists',
        'Clinical Research Associates',
        'Biomedical Engineers',
        'Medical Coders',
        'Healthcare Assistants',
        'Pharmacy Technicians',
      ],
    },
    {
      title: 'Outsourcing & Offshoring',
      description: 'We staff BPOs, KPOs, and other outsourcing services with professionals who enhance operational efficiencies and service delivery.',
      profiles: [
        'Call Center Agents',
        'Customer Service Representatives',
        'Technical Support Specialists',
        'Data Entry Operators',
        'Virtual Assistants',
        'Back Office Executives',
        'Quality Analysts',
        'Team Leaders',
        'Operations Managers',
        'Process Trainers',
        'Account Managers',
        'Collections Agents',
        'Chat Support Agents',
        'Email Support Specialists',
      ],
    },
    {
      title: 'Facility Management',
      description: 'Our staffing solutions for facility management encompass maintenance, operations, and administration, ensuring seamless functionality of your facilities.',
      profiles: [
        'Facility Managers',
        'Maintenance Technicians',
        'HVAC Technicians',
        'Plumbers',
        'Electricians',
        'Security Guards',
        'Housekeeping Staff',
        'Janitors',
        'Groundskeepers',
        'Facility Coordinators',
        'Building Engineers',
        'Property Managers',
        'Maintenance Supervisors',
        'Facility Administrators',
      ],
    },
    {
      title: 'FMCG (Fast-Moving Consumer Goods)',
      description: 'Our recruitment expertise spans the entire FMCG supply chain, from strategic marketing to sales, ensuring dynamic market responsiveness and operational excellence.',
      profiles: [
        'Sales Executives',
        'Marketing Managers',
        'Brand Managers',
        'Product Managers',
        'Supply Chain Managers',
        'Production Managers',
        'Quality Assurance Managers',
        'Warehouse Supervisors',
        'Distribution Executives',
        'Retail Merchandisers',
        'Category Managers',
        'Trade Marketing Executives',
        'Packaging Engineers',
        'Food Technologists',
      ],
    },
    {
      title: 'Media & Entertainment',
      description: 'From media production to digital content, our staffing solutions connect you with creative talents that captivate and engage audiences.',
      profiles: [
        'Video Editors',
        'Graphic Designers',
        'Content Writers',
        'Social Media Managers',
        'Photographers',
        'Videographers',
        'Animators',
        'Motion Graphics Designers',
        'Production Managers',
        'Event Managers',
        'Sound Engineers',
        'Lighting Technicians',
        'Camera Operators',
        'Creative Directors',
      ],
    },
    {
      title: 'Metals, Minerals And Mining',
      description: 'Providing recruitment solutions for the mining sector, we ensure your operations are powered by specialists in mining, metallurgy, and resource management.',
      profiles: [
        'Mining Engineers',
        'Geologists',
        'Metallurgists',
        'Mine Supervisors',
        'Heavy Equipment Operators',
        'Blasters',
        'Safety Officers',
        'Surveyors',
        'Maintenance Technicians',
        'Process Operators',
        'Quality Control Inspectors',
        'Environmental Engineers',
        'Mine Planners',
        'Drill Operators',
      ],
    },
    {
      title: 'Services',
      description: 'Catering to a broad array of service industries, we provide staffing solutions that enhance customer satisfaction and business operations.',
      profiles: [
        'Customer Service Representatives',
        'Sales Associates',
        'Receptionists',
        'Administrative Assistants',
        'Office Managers',
        'Account Managers',
        'Business Development Executives',
        'Relationship Managers',
        'Service Coordinators',
        'Field Service Technicians',
        'Consultants',
        'Training Specialists',
        'Event Coordinators',
      ],
    },
    {
      title: 'Hospitality',
      description: 'Skilled hospitality professionals, chefs, and service staff for hotels, restaurants, and events. Seasonal and permanent placements with multi-language support.',
      href: '/hospitality-staffing',
      profiles: [
        'Chefs (Executive, Sous, Line)',
        'Cooks',
        'Servers',
        'Bartenders',
        'Front Desk Receptionists',
        'Concierge',
        'Housekeeping Staff',
        'Hotel Managers',
        'Restaurant Managers',
        'Banquet Staff',
        'Catering Staff',
        'Bell Staff',
        'Valet Attendants',
        'Event Coordinators',
      ],
    },
  ],
  commitment: {
    heading: 'Our Commitment To You Embodies Two Key Values:',
    values: [
      'Seamless delivery of comprehensive recruitment services, handling everything from sourcing resumes to facilitating candidates\' integration into their new roles.',
      'Tailored solutions designed to meet your unique requirements, ensuring that every staffing solution we provide is as unique as your business.',
    ],
    quote: 'We pride ourselves on our ability to provide tailored recruitment solutions across these diverse industries, ensuring that our clients receive the best talent that aligns with their specific industry needs.',
  },
}
