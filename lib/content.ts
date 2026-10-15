export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  href: string;
  bullets: string[];
  metrics: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface ServiceRow {
  number: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  capabilities: string[];
}

export interface IndustryItem {
  title: string;
  description: string;
  iconName: string;
  stat: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  metric: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
}

export const SITE_CONFIG = {
  name: "Analytix BSS",
  legalName: "Analytix BSS Technology LLC",
  tagline: "AI ERP & Intelligent Business Solutions",
  heroTag: "AI-Powered Business Technology · Dubai · Riyadh",
  description:
    "Analytix BSS delivers AI-integrated ERP, AI-powered Odoo, process automation, cybersecurity, ERP implementation and digital branding solutions for modern businesses.",
  phone: "+971 50 481 3114",
  phoneRaw: "+971504813114",
  whatsAppUrl: "https://wa.me/971504813114",
  email: "info@analytixtech.io",
  offices: [
    {
      city: "Dubai",
      country: "UAE",
      address: "#507, Clover Bay Tower, Business Bay, Dubai, UAE",
      phone: "+971 50 481 3114",
      email: "dubai@analytixtech.io",
    },
    {
      city: "Riyadh",
      country: "KSA",
      address: "703, 7th floor, Futuro Tower, King Saud Rd, Riyadh, KSA",
      phone: "+966 50 123 4567",
      email: "riyadh@analytixtech.io",
    },
  ],
};

export const MARQUEE_ITEMS = [
  "Odoo ERP",
  "AI Automation",
  "Cybersecurity",
  "Design",
  "Development",
  "Marketing",
  "Cloud Architecture",
  "Aramco SCCC Compliance",
];

export const ABOUT_VALUES: ValueCard[] = [
  {
    title: "Innovation",
    description:
      "We design custom technological architectures that push traditional operational boundaries, from intelligent AI process engines to next-gen cloud applications.",
    iconName: "Sparkles",
  },
  {
    title: "Accountability",
    description:
      "Every milestone is documented, measurable, and tracked. We act as your long-term technological co-pilots, sharing direct accountability for system uptime and performance.",
    iconName: "ShieldCheck",
  },
  {
    title: "Results",
    description:
      "We don't build technology for vanity. Every ERP deployment, digital pipeline, and interface is engineered to eliminate revenue leaks and accelerate bottom-line EBITDA.",
    iconName: "TrendingUp",
  },
];

export const SOLUTIONS: SolutionCard[] = [
  {
    id: "odoo-erp",
    title: "Odoo ERP Implementation",
    subtitle: "Enterprise Operational Backbone",
    tag: "Odoo Silver Partner",
    href: "/odoo-erp",
    bullets: [
      "ERP Setup & Configuration",
      "Custom Module Development",
      "Third-Party Integration",
      "Data Migration & Deployment",
      "Training & Ongoing Support",
    ],
    metrics: "40%+ operational efficiency gain",
  },
  {
    id: "ai-automation",
    title: "AI Process Automation",
    subtitle: "Autonomous Intelligence Workflows",
    tag: "Next-Gen AI Engineering",
    href: "/ai-automation",
    bullets: [
      "AI Strategy & Use Cases",
      "Workflow Automation Design",
      "Custom AI Model Development",
      "API & System Integration",
      "Monitoring & Optimization",
    ],
    metrics: "10x faster execution cycles",
  },
  {
    id: "aramco-compliance",
    title: "Aramco Cybersecurity Compliance",
    subtitle: "Sovereign Audit Defense",
    tag: "CCC / SCCC Certified Auditing",
    href: "/aramco-compliance",
    bullets: [
      "Readiness Assessment",
      "Security Policies Made Simple",
      "System & Network Protection",
      "Secure Access & User Control",
      "Ongoing Monitoring",
    ],
    metrics: "100% audit pass rate track record",
  },
];

export const STATS: StatItem[] = [
  {
    value: 17,
    suffix: "+",
    label: "Years",
    sublabel: "Engineering Enterprise Systems",
  },
  {
    value: 40,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Across Middle East & Global",
  },
  {
    value: 15,
    suffix: "+",
    label: "Countries Served",
    sublabel: "From GCC to Global Enterprises",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Real-Time Support",
    sublabel: "Always-On Dedicated Engineers",
  },
];

export const SERVICES: ServiceRow[] = [
  {
    number: "01",
    title: "Design",
    tagline: "Brand Identity & Visuals",
    description:
      "Human-centered UI/UX design systems, modern brand aesthetics, interactive prototypes, and conversion-focused web layouts that position you as an undisputed market leader.",
    href: "/design",
    capabilities: [
      "Brand Identity & Styleguides",
      "UI/UX Design Systems",
      "Web & Mobile App Design",
      "Marketing Creative Assets",
    ],
  },
  {
    number: "02",
    title: "Development",
    tagline: "Websites & CRM Systems",
    description:
      "Enterprise full-stack engineering, high-performance web applications, custom CRM ecosystems, API orchestrations, and cloud architecture built to scale without friction.",
    href: "/development",
    capabilities: [
      "Custom Enterprise Websites",
      "Scalable CRM Platforms",
      "Custom Cloud Modules",
      "API & Legacy Integrations",
    ],
  },
  {
    number: "03",
    title: "Marketing",
    tagline: "SEO, Content, Ads, Social",
    description:
      "Performance-first digital marketing frameworks that combine technical search engine dominance, high-intent paid media acquisition, and measurable conversion rate optimization.",
    href: "/marketing",
    capabilities: [
      "Technical & Regional SEO",
      "High-Conversion Paid Ads",
      "B2B Thought Leadership Content",
      "Revenue Leakage Optimization",
    ],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    title: "Food & Beverage",
    description:
      "Multi-branch POS syncing, recipe batch costing, supplier supply chains, and cold-chain compliance automated inside unified ERP systems.",
    iconName: "Utensils",
    stat: "99.8% stock accuracy",
  },
  {
    title: "Logistics",
    description:
      "Real-time fleet telematics, customs clearing workflows, container tracking, and dynamic automated freight rate calculations.",
    iconName: "Truck",
    stat: "35% lower route delay",
  },
  {
    title: "Manufacturing",
    description:
      "BOM (Bill of Materials) multi-level tracking, shop floor IoT inputs, preventive machinery downtime scheduling, and scrap reduction.",
    iconName: "Factory",
    stat: "28% capacity expansion",
  },
  {
    title: "Construction",
    description:
      "Subcontractor retention management, project BOQ job-costing, milestone progress billing, and Aramco safety site compliance records.",
    iconName: "Building2",
    stat: "Zero project cost overruns",
  },
];

export const WHY_CHOOSE_US_CARDS = [
  {
    title: "17+ Years",
    description:
      "Deep institutional knowledge in GCC corporate systems, regional compliance mandates, and enterprise scaling strategies.",
    iconName: "Clock",
  },
  {
    title: "40+ Projects",
    description:
      "Battle-tested implementations across complex manufacturing, energy suppliers, hospitality groups, and logistics hubs.",
    iconName: "CheckCircle2",
  },
  {
    title: "15+ Countries",
    description:
      "International engineering quality delivered with direct local presence and bilingual Arabic-English support in Dubai and Riyadh.",
    iconName: "Globe2",
  },
  {
    title: "Real Support",
    description:
      "Direct WhatsApp and hotline access to senior solutions architects who know your codebase and database schema inside out.",
    iconName: "Headphones",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Odoo across our supply chain in 6 weeks, 3 legacy systems eliminated, and weekly reporting time cut by 70%. Analytix delivered flawless execution.",
    name: "Faisal Al-Rashidi",
    role: "Operations Director",
    company: "Al-Rashidi Group",
    location: "Dubai, UAE",
    metric: "70% faster reporting",
  },
  {
    quote:
      "Cost-per-lead decreased by 45%, and inbound enterprise conversions tripled in 60 days following their design overhaul and marketing pipeline integration.",
    name: "Sara Nasser",
    role: "Founder",
    company: "Nasser Digital Agency",
    location: "Abu Dhabi, UAE",
    metric: "3x conversions in 60 days",
  },
  {
    quote:
      "Our Aramco cybersecurity audit was completely ready in 8 weeks, passing on the first attempt with zero non-conformity flags. Highly professional engineers.",
    name: "Ahmed Al-Mannai",
    role: "IT Director",
    company: "Gulf Energy Solutions",
    location: "Qatar & KSA",
    metric: "100% first-attempt audit pass",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your operational bottlenecks, legacy databases, software dependencies, and compliance gaps to establish the business case.",
    deliverables: ["Architecture Roadmap", "ROI Projection", "Gap Matrix"],
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design interactive prototypes, custom database schemas, API connectors, and security access policies tailored to your organizational hierarchy.",
    deliverables: ["Figma UI System", "Data Flow Blueprint", "Security Policies"],
  },
  {
    step: "03",
    title: "Build",
    description:
      "We engineer the modules, migrate historical data cleanly, configure autonomous AI agents, and run rigorous staging simulations.",
    deliverables: ["Tested Production Build", "Data Migration", "UAT Sign-off"],
  },
  {
    step: "04",
    title: "Support",
    description:
      "We provide bilingual staff training, launch change management, and offer 24/7 proactive monitoring with guaranteed SLAs.",
    deliverables: ["24/7 SLA Hotline", "Staff Training Videos", "Quarterly Reviews"],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is the typical timeline for an Odoo ERP implementation?",
    answer:
      "Our standard phased implementation ranges from 4 to 10 weeks depending on custom module requirements, third-party integrations, and historical data volume. We deploy core operations first so your team begins capturing value within the first month.",
  },
  {
    question: "Can you integrate our existing third-party software and payment gateways?",
    answer:
      "Yes. We specialize in custom REST APIs, webhooks, and middleware connecting Odoo and custom applications with regional payment gateways (Telr, PayTabs, HyperPay, Tamara), logistics APIs (Aramex, DHL, SMSA), and legacy ERP databases.",
  },
  {
    question: "How do you prepare companies for Aramco CCC / SCCC cybersecurity audits?",
    answer:
      "We conduct an initial third-party risk assessment against the Aramco Third Party Cybersecurity Standard (SCCC / CCC). We remediate vulnerabilities, implement endpoint and perimeter security, draft tailored operational security policies, and conduct mock audits until your organization is 100% audit-ready.",
  },
  {
    question: "Which countries and regional jurisdictions do you support?",
    answer:
      "Our dual operational headquarters in Dubai (UAE) and Riyadh (Saudi Arabia) service clients across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and global international subsidiaries with both on-site workshops and cloud deployments.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "aramco-standards-safeguarding-local-economy",
    title: "Aramco Standards Safeguarding the Local Economy",
    excerpt:
      "Why SCCC compliance is now the foundational passport for enterprise suppliers and contractors across the Kingdom of Saudi Arabia.",
    date: "21 Apr 2026",
    category: "Cybersecurity",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "odoo-why-modern-businesses-choose-integration",
    title: "Odoo: Why Modern Businesses Choose Integration",
    excerpt:
      "Breaking data silos: How integrating sales, supply chain, and financials into a single pane of glass eliminates 30% of operational waste.",
    date: "21 Apr 2026",
    category: "ERP Strategy",
    readTime: "6 min read",
  },
  {
    id: "3",
    slug: "why-future-of-tech-powered-by-humans",
    title: "Why the Future of Tech is Powered by Humans",
    excerpt:
      "AI automation delivers speed, but human strategic insight and empathy ensure software products solve genuine enterprise challenges.",
    date: "21 Apr 2026",
    category: "AI & Future",
    readTime: "4 min read",
  },
  {
    id: "4",
    slug: "why-your-marketing-might-be-leaking-revenue",
    title: "Why Your Marketing Might Be Leaking Revenue",
    excerpt:
      "Auditing attribution models, lead response latencies, and CRM drop-offs to plug costly customer acquisition leaks.",
    date: "21 Apr 2026",
    category: "Growth & CRO",
    readTime: "5 min read",
  },
];

export const INNER_PAGES_DATA = {
  about: {
    tag: "Who We Are · Analytix",
    title: "Engineering the Digital Backbone of Modern Business",
    description:
      "Analytix is a premier technology and digital transformation studio operating from Dubai and Riyadh. We merge enterprise engineering discipline with high-velocity product thinking.",
    cards: [
      {
        title: "Regional Heritage, Global Standards",
        description:
          "Operating across the UAE and KSA, our engineering teams are attuned to local regulatory compliance, ZATCA e-invoicing, Aramco SCCC, and GCC business culture.",
        icon: "Globe",
      },
      {
        title: "Unified Multi-Disciplinary Squads",
        description:
          "No disjointed vendors. Our certified Odoo architects, cybersecurity compliance officers, UI/UX designers, and growth marketers collaborate under one coherent technical vision.",
        icon: "Users",
      },
      {
        title: "Obsession with System Velocity",
        description:
          "From milliseconds saved on database queries to eliminating days of manual data entry, we treat speed and operational simplicity as competitive moats.",
        icon: "Zap",
      },
      {
        title: "Guaranteed Security & Sovereignty",
        description:
          "All data architecture, backups, and user privacy pipelines are engineered in compliance with regional data residency guidelines and Aramco cybersecurity frameworks.",
        icon: "ShieldAlert",
      },
    ],
  },
  design: {
    tag: "Service · Creative & Product",
    title: "Brand Identity, Human-Centered UI/UX & Web Experiences",
    description:
      "We design captivating brand worlds and intuitive digital interfaces that turn enterprise complexity into elegant, friction-free customer journeys.",
    cards: [
      {
        title: "Brand Identity & Visual Systems",
        description:
          "Comprehensive design languages, logos, typography hierarchies, and premium asset guidelines that make your technology brand unmistakable.",
        icon: "Palette",
      },
      {
        title: "UI/UX & Interactive Design",
        description:
          "User research, journey mapping, wireframing, and interactive prototypes built to solve real workflow friction and delight every user touchpoint.",
        icon: "Layout",
      },
      {
        title: "Web & Mobile App Experiences",
        description:
          "High-performance responsive web interfaces and mobile applications engineered for fluid micro-interactions and maximum conversion velocity.",
        icon: "Smartphone",
      },
      {
        title: "Enterprise Design Systems",
        description:
          "Scalable Figma and code component libraries (buttons, modals, tables, tokens) that ensure visual consistency across all company software products.",
        icon: "Component",
      },
    ],
  },
  development: {
    tag: "Service · Engineering",
    title: "Enterprise Web Applications, CRM Platforms & Cloud Systems",
    description:
      "High-scale software engineering, robust API architectures, custom cloud platforms, and enterprise CRM solutions built for resilience and zero downtime.",
    cards: [
      {
        title: "Custom Web Application Engineering",
        description:
          "React, Next.js, TypeScript, and modern headless architectures designed for sub-second page loads and seamless multi-tenant deployments.",
        icon: "Code",
      },
      {
        title: "Scalable CRM Systems",
        description:
          "Centralized customer relationship management platforms tailored to your pipeline stages, automated commission tracking, and lead routing.",
        icon: "Database",
      },
      {
        title: "Custom Modules & Microservices",
        description:
          "Targeted backend services, scheduled jobs, document parsers, and custom calculation engines built to handle peak transaction spikes.",
        icon: "Cpu",
      },
      {
        title: "API & Legacy Data Integration",
        description:
          "Secure bridges connecting modern cloud infrastructure with legacy on-premise ERPs, SQL warehouses, and government e-invoicing portals.",
        icon: "GitBranch",
      },
    ],
  },
  marketing: {
    tag: "Service · Growth",
    title: "Data-Driven SEO, B2B Content, Paid Acquisition & CRO",
    description:
      "Turn your technological superiority into market dominance with performance-driven acquisition campaigns, technical search engine dominance, and revenue leakage fixes.",
    cards: [
      {
        title: "Technical & Regional SEO",
        description:
          "Dominate search results in Dubai, Riyadh, and GCC markets with structured data, bilingual indexing, core web vitals speed, and high-intent keyword clustering.",
        icon: "Search",
      },
      {
        title: "High-Intent Paid Acquisition",
        description:
          "Hyper-targeted LinkedIn, Google Search, and programmatic campaigns engineered to capture qualified C-suite enterprise decision-makers.",
        icon: "Target",
      },
      {
        title: "B2B Thought Leadership Content",
        description:
          "Whitepapers, technical teardowns, case study video scripts, and industry playbooks that establish unquestioned authority in your sector.",
        icon: "FileText",
      },
      {
        title: "Revenue Leakage & CRO Audits",
        description:
          "Complete analysis of your sales funnel, form abandonment, CTA microcopy, and lead response times to dramatically lower customer acquisition costs.",
        icon: "Percent",
      },
    ],
  },
  odooErp: {
    tag: "Solution · Operations",
    title: "Odoo ERP Implementation & Operational Mastery",
    description:
      "Unify sales, accounting, inventory, HR, manufacturing, and supply chain into one intelligent, automated ecosystem. Official Odoo Silver Partner expertise in Dubai & Riyadh.",
    cards: [
      {
        title: "ERP Setup & Configuration",
        description:
          "Full deployment of Odoo Community or Enterprise tailored to GCC accounting standards, multi-currency wallets, and regional VAT/ZATCA compliance.",
        icon: "Settings",
      },
      {
        title: "Custom Module Development",
        description:
          "Python module customization that mirrors your exact unique workflows rather than forcing you to change your business to fit standard software.",
        icon: "Boxes",
      },
      {
        title: "Third-Party & Gateway Integration",
        description:
          "Direct bidirectional syncing with e-commerce portals, bank feeds, payment gateways, barcode scanners, and warehouse management systems.",
        icon: "Layers",
      },
      {
        title: "Data Migration from Legacy Systems",
        description:
          "Zero-data-loss extraction, deduplication, and sanitization from SAP, Oracle, QuickBooks, Excel sheets, and bespoke legacy databases.",
        icon: "ArrowDownUp",
      },
      {
        title: "Team Training & Change Management",
        description:
          "Role-specific bilingual training sessions, recorded screen walkthroughs, and user manuals to guarantee high daily staff adoption.",
        icon: "GraduationCap",
      },
      {
        title: "Continuous SLA Maintenance",
        description:
          "Automated cloud backups, version upgrades, security patches, and dedicated monthly support hours with rapid response times.",
        icon: "LifeBuoy",
      },
    ],
  },
  aiAutomation: {
    tag: "Solution · Intelligence",
    title: "Autonomous AI Process Automation & LLM Workflows",
    description:
      "Transform repetitive human workflows into autonomous, 24/7 intelligent processing pipelines using custom LLM agents, automated document parsers, and smart API automations.",
    cards: [
      {
        title: "AI Strategy & Feasibility Audit",
        description:
          "Identify high-ROI automation opportunities across your operations, quantifying labor hours saved and risk reductions.",
        icon: "Compass",
      },
      {
        title: "Autonomous Workflow Design",
        description:
          "End-to-end event-driven triggers: invoices automatically read, customer queries resolved, ERP orders created, and notifications dispatched.",
        icon: "Workflow",
      },
      {
        title: "Custom AI Model & Agent Development",
        description:
          "Fine-tuned LLMs trained on your private internal knowledge base, operating strictly within sovereign privacy boundaries.",
        icon: "Bot",
      },
      {
        title: "Document & Ingestion OCR Engines",
        description:
          "Computer vision and NLP engines that ingest messy PDF contracts, bills of lading, and receipts directly into your database schema.",
        icon: "FileSearch",
      },
      {
        title: "API & System Orchestration",
        description:
          "Seamless wiring between AI inference endpoints, messaging channels (WhatsApp, Slack, Email), and core ERP database transactions.",
        icon: "Network",
      },
      {
        title: "Monitoring, Guardrails & Continuous Optimization",
        description:
          "Human-in-the-loop review queues, hallucination safeguards, latency dashboards, and continuous accuracy benchmarking.",
        icon: "Sliders",
      },
    ],
  },
  aramcoCompliance: {
    tag: "Solution · Cybersecurity",
    title: "Aramco Cybersecurity Compliance (CCC / SCCC)",
    description:
      "End-to-end preparation, gap remediation, security policy authoring, and network hardening to achieve unconditional Aramco Third Party Cybersecurity certification.",
    cards: [
      {
        title: "Comprehensive SCCC Readiness Assessment",
        description:
          "Exhaustive audit against every clause of the Aramco Third Party Cybersecurity Standard to uncover vulnerabilities before official auditors arrive.",
        icon: "CheckSquare",
      },
      {
        title: "Tailored Security Policy Documentation",
        description:
          "We draft all required corporate security governance documents, incident response protocols, disaster recovery procedures, and employee handbooks.",
        icon: "FileCheck",
      },
      {
        title: "System & Network Perimeter Hardening",
        description:
          "Firewall configuration, network segmentation, multi-factor authentication (MFA) enforcement, and encryption of data at rest and in transit.",
        icon: "Lock",
      },
      {
        title: "Vulnerability Scanning & Penetration Testing",
        description:
          "Simulated cyberattacks and vulnerability scans across external IP addresses and internal networks with documented proof of remediation.",
        icon: "ShieldX",
      },
      {
        title: "Access Control & Identity Governance",
        description:
          "Principle of least privilege (PoLP) implementation, centralized identity management, privileged access logging, and regular credential reviews.",
        icon: "Key",
      },
      {
        title: "Audit Defense & Ongoing Surveillance",
        description:
          "Our senior compliance specialists accompany your team through official audit interviews and provide continuous post-certification monitoring.",
        icon: "Eye",
      },
    ],
  },
};

// ============================================================================
// ANALYTIX 2.0: PRODUCT-LED AI BUSINESS SYSTEMS DATA STRUCTURES
// ============================================================================

export interface AIHeroTab {
  id: string;
  badge: string;
  label: string;
  tag: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  accentColor: string;
  coreHighlight: string[];
}

export const AI_HERO_TABS: AIHeroTab[] = [
  {
    id: "ai-erp",
    badge: "01",
    label: "AI ERP",
    tag: "PRODUCT 01 // ENTERPRISE CORE",
    headline: "AI-Integrated ERP for Intelligent Operations",
    subheadline:
      "Connect finance, sales, inventory, HR and operational data into one intelligent business environment with predictive insights and autonomous workflows.",
    ctaText: "Explore AI ERP",
    ctaHref: "/products/ai-integrated-erp",
    accentColor: "#7c5cff",
    coreHighlight: ["ERP", "AI", "FINANCE", "INVENTORY"],
  },
  {
    id: "ai-odoo",
    badge: "02",
    label: "AI ODOO",
    tag: "PRODUCT 02 // 360° PLATFORM",
    headline: "AI Integrated 360, Odoo",
    subheadline:
      "Turn Odoo into an intelligent operating layer with automation, analytics and AI-powered workflows customized for high-scale enterprise operations.",
    ctaText: "Explore 360 Odoo",
    ctaHref: "/products/ai-integrated-360-odoo",
    accentColor: "#06b6d4",
    coreHighlight: ["ERP", "CRM", "HR", "ANALYTICS"],
  },
  {
    id: "automation",
    badge: "03",
    label: "AUTOMATION",
    tag: "CAPABILITY 01 // AUTONOMOUS WORKFLOWS",
    headline: "Automate the Work. Amplify the People.",
    subheadline:
      "Connect repetitive business processes with intelligent automation, smart document parsing, and autonomous AI-driven decision pipelines.",
    ctaText: "Explore AI Automation",
    ctaHref: "/services/ai-process-automation",
    accentColor: "#a78bfa",
    coreHighlight: ["AUTOMATION", "AI", "ERP"],
  },
  {
    id: "security",
    badge: "04",
    label: "SECURITY",
    tag: "CAPABILITY 02 // SOVEREIGN DEFENSE",
    headline: "Security Built Into Your Digital Backbone",
    subheadline:
      "Protect systems, data and business operations with proactive cybersecurity, threat monitoring, and audit-ready compliance protection.",
    ctaText: "Explore Cyber Security",
    ctaHref: "/services/cyber-security",
    accentColor: "#22d3ee",
    coreHighlight: ["SECURITY", "AI", "ERP"],
  },
  {
    id: "erp-implementation",
    badge: "05",
    label: "ERP",
    tag: "CAPABILITY 03 // OPERATIONAL BACKBONE",
    headline: "End-to-End ERP Implementation",
    subheadline:
      "Deploy, configure, and scale Odoo ERP with custom modules, data migration, and seamless third-party integrations tailored for GCC enterprises.",
    ctaText: "Explore ERP Services",
    ctaHref: "/services/erp-implementation",
    accentColor: "#a78bfa",
    coreHighlight: ["ERP", "ODOO", "MODULES", "MIGRATION"],
  },
  {
    id: "digital-branding",
    badge: "06",
    label: "BRANDING",
    tag: "CAPABILITY 04 // BRAND IDENTITY",
    headline: "Digital Branding That Commands Attention",
    subheadline:
      "Build a distinctive brand identity with premium UI/UX design systems, visual storytelling, and conversion-focused digital experiences.",
    ctaText: "Explore Digital Branding",
    ctaHref: "/services/digital-branding",
    accentColor: "#f59e0b",
    coreHighlight: ["DESIGN", "BRAND", "UI/UX", "CRO"],
  },
];

export interface ProductItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  ctaText: string;
  accent: "purple" | "cyan";
  modules: string[];
}

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "ai-integrated-erp",
    badge: "PRODUCT 01",
    title: "AI Integrated ERP Solution",
    tagline: "Autonomous Enterprise Resource Planning",
    description:
      "An intelligent ERP environment designed to connect core business operations, automate repetitive workflows and turn business data into actionable insights.",
    tags: ["Finance", "Operations", "HR", "Sales", "Inventory", "Analytics", "AI Automation"],
    href: "/products/ai-integrated-erp",
    ctaText: "Explore AI ERP",
    accent: "purple",
    modules: ["Finance Engine", "Supply Chain AI", "Smart Inventory", "HR Analytics", "Auto Invoicing", "Real-Time Ledger"],
  },
  {
    id: "ai-integrated-360-odoo",
    badge: "PRODUCT 02",
    title: "AI Integrated 360, Odoo",
    tagline: "Connected 360° Operational Intelligence",
    description:
      "An AI-enhanced Odoo ecosystem that connects business functions, automates workflows and gives leadership teams a complete 360° operational view.",
    tags: ["CRM", "Sales", "Finance", "Inventory", "HR", "Projects", "AI", "Analytics"],
    href: "/products/ai-integrated-360-odoo",
    ctaText: "Explore 360 Odoo",
    accent: "cyan",
    modules: ["CRM Hub", "Sales AI", "Warehouse Sync", "Project Automation", "Accounting Bot", "Custom Workflows"],
  },
];

export interface SupportingService {
  id: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  iconName: string;
  capabilities: string[];
}

export const SUPPORTING_SERVICES: SupportingService[] = [
  {
    id: "ai-process-automation",
    badge: "SERVICE 01",
    title: "AI Process Automation",
    description:
      "Connect repetitive processes with intelligent document parsers, LLM event triggers, and automated system synchronization.",
    href: "/services/ai-process-automation",
    iconName: "Bot",
    capabilities: ["Autonomous LLM Triggers", "OCR Document Parsing", "Cross-Platform API Sync", "Self-Healing Pipelines"],
  },
  {
    id: "cyber-security",
    badge: "SERVICE 02",
    title: "Cyber Security & Sovereign Defense",
    description:
      "Protect your ERP, cloud data, and employee access with enterprise perimeter defense, continuous monitoring, and compliance readiness.",
    href: "/services/cyber-security",
    iconName: "Shield",
    capabilities: ["Continuous Threat Monitoring", "SCCC / CCC Preparedness", "Zero-Trust Architecture", "Vulnerability Assessments"],
  },
  {
    id: "erp-implementation",
    badge: "SERVICE 03",
    title: "ERP Implementation",
    description:
      "End-to-end Odoo ERP deployment, custom module engineering, data migration, and third-party integrations for enterprise operations.",
    href: "/services/erp-implementation",
    iconName: "Boxes",
    capabilities: ["Odoo Setup & Configuration", "Custom Module Development", "Legacy Data Migration", "Third-Party Integrations"],
  },
  {
    id: "digital-branding",
    badge: "SERVICE 04",
    title: "Digital Branding",
    description:
      "Strategic brand identity, premium UI/UX design systems, and conversion-focused digital experiences that command market attention.",
    href: "/services/digital-branding",
    iconName: "Palette",
    capabilities: ["Brand Identity Systems", "UI/UX Design", "Web & Mobile Experiences", "Marketing Creative Assets"],
  },
];

export const ARCHITECTURE_NODES = [
  { id: "data", title: "Enterprise Data", subtitle: "Multi-Source Ingestion", icon: "Database" },
  { id: "ai", title: "AI Intelligence Engine", subtitle: "Predictive Models & LLMs", icon: "Cpu", isCore: true },
  { id: "erp", title: "ERP & 360 Odoo", subtitle: "Core Operational Layer", icon: "Layers" },
  { id: "automation", title: "Autonomous Workflows", subtitle: "System-Wide Execution", icon: "Workflow" },
  { id: "security", title: "Cyber Shield", subtitle: "Perimeter & Compliance", icon: "ShieldCheck" },
  { id: "marketing", title: "AI Growth Engine", subtitle: "Demand Generation", icon: "BarChart" },
  { id: "bi", title: "Business Intelligence", subtitle: "Executive Decision Radar", icon: "Sparkles" },
];

export const WORKFLOW_NODES = [
  {
    id: "lead",
    label: "Lead Ingestion",
    role: "Trigger",
    desc: "Inbound inquiry arrives via Web, WhatsApp, or API integration.",
    detail: "Data is normalized, enriched with regional business registries, and ingested instantly into the pipeline.",
  },
  {
    id: "ai-analysis",
    label: "AI Analysis",
    role: "Intelligence",
    desc: "AI evaluates incoming data and identifies the next best action.",
    detail: "Natural language processing extracts requirements, budget tiers, and urgency scores without human delay.",
  },
  {
    id: "decision",
    label: "Automated Decision",
    role: "Logic Engine",
    desc: "Rules + predictive scoring route the transaction to optimal channel.",
    detail: "High-value deals are fast-tracked, compliance checks verified, and resource allocation scheduled.",
  },
  {
    id: "automation",
    label: "Execution Engine",
    role: "Automation",
    desc: "Autonomous tasks trigger across background microservices.",
    detail: "Contracts are generated, price quotations assembled, and calendar appointments reserved.",
  },
  {
    id: "crm",
    label: "CRM Sync",
    role: "System Update",
    desc: "Customer profile and lifecycle status update in real time.",
    detail: "Complete interaction history and predictive probability scores logged to Odoo / custom CRM.",
  },
  {
    id: "erp",
    label: "ERP Ledger & Stock",
    role: "Backbone",
    desc: "Inventory reserved, accounting journals posted, project created.",
    detail: "Zero manual data re-entry. Financial controls and supply chain reservations execute synchronously.",
  },
  {
    id: "notification",
    label: "Executive Alert",
    role: "Notification",
    desc: "Instant stakeholder alerts sent to WhatsApp and enterprise dashboards.",
    detail: "Leadership receives actionable KPI pings with 1-click approvals for high-threshold operations.",
  },
];

export const PRODUCT_COMPARISON_ROWS = [
  {
    feature: "Core ERP Management",
    erp: "Comprehensive Custom Enterprise Architecture",
    odoo: "Full-Spectrum Modular 360° Odoo Suite",
    desc: "Unifies General Ledger, Accounts Payable, Procurement, and Supply Chain in one system.",
  },
  {
    feature: "AI Process Automation",
    erp: "Native Predictive Core & Custom LLM Pipelines",
    odoo: "Automated Workflows & Smart Module Triggers",
    desc: "Replaces repetitive clerical steps with automated intelligence engines.",
  },
  {
    feature: "CRM & Pipeline Management",
    erp: "Enterprise Multi-Tier Account Governance",
    odoo: "Omnichannel 360° Customer Interaction Hub",
    desc: "Complete visibility over sales pipelines, quotation velocity, and customer lifecycles.",
  },
  {
    feature: "Financial & Tax Compliance",
    erp: "ZATCA E-Invoicing Phase 2 & UAE FTA Certified",
    odoo: "Integrated GCC VAT & Multi-Currency Accounting",
    desc: "Guarantees regulatory alignment with regional e-invoicing and tax mandates.",
  },
  {
    feature: "Supply Chain & Inventory",
    erp: "Multi-Warehouse Predictive Stock Allocation",
    odoo: "Barcode, Batch Tracking & Automated Reordering",
    desc: "Eliminates stock-outs and optimizes logistics turnover across regional facilities.",
  },
  {
    feature: "HR & Payroll Processing",
    erp: "Regional WPS Compliance & Enterprise Gratuity",
    odoo: "Self-Service Portal, Leaves & Timesheet Tracking",
    desc: "Automates Wage Protection System (WPS) files and employee lifecycle management.",
  },
  {
    feature: "Predictive Analytics & BI",
    erp: "Executive Forecasting Radar & Anomaly Detection",
    odoo: "Real-Time KPI Dashboards & Operational Reports",
    desc: "Surfaces actionable profit margins, cash flow projections, and unit economics.",
  },
  {
    feature: "Marketing & Lead Integration",
    erp: "Direct Revenue Attribution & B2B Telemetry",
    odoo: "Integrated Email, Marketing Automation & Forms",
    desc: "Connects digital acquisition campaigns directly to invoice settlement metrics.",
  },
  {
    feature: "Sovereign Cybersecurity Layer",
    erp: "Zero-Trust Encryption & Aramco CCC Aligned",
    odoo: "Role-Based Access Control & Encrypted Cloud",
    desc: "Ensures critical business data remains isolated and protected against unauthorized access.",
  },
  {
    feature: "Custom API & Legacy Integrations",
    erp: "Unlimited Custom Microservice Architecture",
    odoo: "REST API & Webhooks Ecosystem",
    desc: "Connects with POS systems, banks, payment gateways, and custom internal software.",
  },
];

export const TRANSFORMATION_SYSTEMS = [
  { id: "crm", name: "Siloed CRM", icon: "Users", color: "#f87171" },
  { id: "excel", name: "Manual Excel", icon: "FileSpreadsheet", color: "#fbbf24" },
  { id: "accounting", name: "Fragmented Accounting", icon: "Calculator", color: "#60a5fa" },
  { id: "inventory", name: "Unlinked Inventory", icon: "Box", color: "#a78bfa" },
  { id: "email", name: "Lost Email Threads", icon: "Mail", color: "#f472b6" },
  { id: "marketing", name: "Disconnected Ads", icon: "Megaphone", color: "#34d399" },
];

export const WHY_TECH_CARDS = [
  {
    title: "AI-FIRST ARCHITECTURE",
    desc: "Intelligence isn't an afterthought. Every product is engineered from the database layer to automate decisions and surface predictive insight.",
    icon: "Cpu",
  },
  {
    title: "ERP CONNECTED",
    desc: "We eliminate isolated software islands. Your finance, sales, inventory, and operations run on a single synchronized source of truth.",
    icon: "Layers",
  },
  {
    title: "AUTOMATION READY",
    desc: "Designed to eliminate friction. Repetitive approvals, invoice reconciliations, and customer follow-ups happen without manual intervention.",
    icon: "Workflow",
  },
  {
    title: "SECURITY FOCUSED",
    desc: "Hardened against modern threats. Built with zero-trust principles, role-based governance, and regional regulatory compliance.",
    icon: "ShieldCheck",
  },
  {
    title: "DATA DRIVEN",
    desc: "Transform operational exhaust into strategic advantage. Real-time dashboards provide executive visibility across all branches and entities.",
    icon: "BarChart3",
  },
  {
    title: "ENTERPRISE SCALABLE",
    desc: "Architected for exponential growth. Whether managing 100 or 100,000 monthly transactions, our systems expand seamlessly without latency.",
    icon: "TrendingUp",
  },
];

export const PRODUCT_FAQS: FAQItem[] = [
  {
    question: "What is an AI-Integrated ERP?",
    answer:
      "An AI-Integrated ERP combines traditional enterprise resource planning (finance, inventory, HR, sales) with embedded machine learning and predictive intelligence. Rather than just recording historical transactions, it actively predicts inventory demand, detects cash flow anomalies, and automates repetitive administrative workflows across your organization.",
  },
  {
    question: "How is AI-Integrated 360 Odoo different from standard Odoo?",
    answer:
      "Standard Odoo offers robust operational modules. Our AI-Integrated 360 Odoo enhances the platform with autonomous document ingestion (OCR for invoices and bills), intelligent customer query routing, predictive stock forecasting, and unified cross-module intelligence tailored specifically for high-growth enterprises in the UAE and Saudi Arabia.",
  },
  {
    question: "Can AI be integrated into our existing ERP?",
    answer:
      "Yes. If your organization operates legacy systems (such as SAP, Oracle, Microsoft Dynamics, or custom databases), we build intelligent middleware and API bridges that extract data, run AI analysis, and push automated results back into your existing workflows without requiring a disruptive complete system overhaul.",
  },
  {
    question: "Can you automate our existing business workflows?",
    answer:
      "Absolutely. We begin with a technical process audit to identify friction points—such as manual data entry between spreadsheets and software, invoice approvals, or customer onboarding. We then engineer automated pipelines that connect your communication channels, databases, and core software systems.",
  },
  {
    question: "Can AI automation integrate with Odoo?",
    answer:
      "Yes. Odoo features a versatile API structure. We connect custom AI agents that ingest data from external sources (such as emails, supplier portals, and WhatsApp), evaluate the content, and execute actions directly in Odoo—such as creating sales orders, matching vendor bills, or updating task statuses.",
  },
  {
    question: "How does your cybersecurity service protect business systems?",
    answer:
      "We implement an enterprise defense perimeter around your digital backbone. This includes continuous threat monitoring, zero-trust access controls, multi-factor authentication, encryption at rest and in transit, and rigorous audit alignment with regional standards including the Aramco Third Party Cybersecurity framework (CCC / SCCC).",
  },
  {
    question: "Can AI be used for marketing automation?",
    answer:
      "Yes. Our AI marketing intelligence solution connects campaign performance data directly to your CRM and ERP. It automates predictive lead scoring, personalizes customer communications at scale, and identifies high-converting audience segments based on actual transaction patterns rather than surface metrics.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation timelines depend on organizational scope. Standard AI-Integrated 360 Odoo rollouts typically take between 6 to 12 weeks, while custom enterprise AI ERP deployments and multi-entity architectures range from 3 to 6 months with phased go-lives to prevent operational downtime.",
  },
  {
    question: "Can the solutions be customized for our industry?",
    answer:
      "Yes. Every deployment is tailored to the operational realities of your sector. We have specialized architectures for Food & Beverage, Logistics & Supply Chain, Manufacturing, Construction, and Professional Services across the GCC, ensuring compliance with local tax and labor frameworks.",
  },
];

