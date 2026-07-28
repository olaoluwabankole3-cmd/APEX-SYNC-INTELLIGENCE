/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EcosystemProduct, ServiceOffering, JournalArticle, OpenRole, Division, SpecializedSolution, FutureProductDef } from './types';

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'executive-intelligence',
    name: 'Executive Intelligence',
    tagline: 'The intellectual companion for decision makers.',
    status: 'Currently in Development',
    description: 'An intelligent companion designed to retain context, preserve institutional knowledge, and support strategic decision-making.',
    longDescription: 'Executive Intelligence acts as the central cognitive hub for corporate leadership. By operating continuously, syncing with multi-format archives, and analyzing context, it ensures that your best thinking remains accessible, organized, and compoundable. Rather than simple prompt-and-response interactions, it builds a deep relational graph of your organization\'s strategies, lessons, and metrics.',
    capabilities: [
      'Multi-Format Memory Ingestion (Meetings, Briefs, Financials)',
      'Autonomous Strategic Context Correlation & Narrative Synthesis',
      'Continuous Scenario Simulation & Decision-Risk Assessment',
      'Direct Native Integrations with Enterprise Systems',
      'Symmetric Human-AI Collaborative Canvas & Explanations'
    ],
    businessValue: 'Preserves critical corporate memory, eliminates alignment lag across executive teams, and speeds up time-to-decision by up to 40% with high-context advisory synthesis.'
  },
  {
    id: 'enterprise-productivity',
    name: 'Enterprise Productivity Platforms',
    tagline: 'Synchronized alignment for modern teams.',
    status: 'Coming Soon',
    description: 'An integrated workspace ecosystem where knowledge flows dynamically, aligning operational execution with executive vision.',
    longDescription: 'Designed to dismantle enterprise knowledge fragmentation, this platform serves as the neural network for global organizations. It connects team actions, meeting logs, and historical resolutions to automate alignment and prevent duplicated effort across distributed units.',
    capabilities: [
      'Automatic Cross-Team Knowledge Synchronization',
      'Context-Aware Smart Documentation & Resolution Matching',
      'Generative Alignment Scoring & Core KPI Tracking'
    ],
    businessValue: 'Drives systemic clarity, reduces alignment-seeking meeting volume, and preserves institutional IP even through high talent transition periods.'
  },
  {
    id: 'ai-infrastructure',
    name: 'AI Infrastructure Services',
    tagline: 'Durable, secure, and sovereign intelligence.',
    status: 'Coming Soon',
    description: 'A robust runtime environment engineered for hosting scalable, safe, and custom-tuned enterprise AI models.',
    longDescription: 'Engineered from the ground up for extreme durability and bank-grade security. It provides organizations with sovereign control over their proprietary weights, embeddings, and context databases while maintaining low latency and scaling dynamically.',
    capabilities: [
      'Sovereign Data Storage & Encrypted Embeddings Runtime',
      'Enterprise-Grade Model Fine-Tuning & Dynamic Routing',
      'Secure Compliance Guardrails & Auditable AI Decision Logs'
    ],
    businessValue: 'Establishes absolute security for business-critical intellectual property while satisfying global compliance and privacy regulations.'
  },
  {
    id: 'developer-apis',
    name: 'Developer APIs & SDKs',
    tagline: 'Build with the standards of Apex Sync.',
    status: 'Coming Soon',
    description: 'Robust endpoints and libraries that allow developer teams to integrate persistent memory and decision intelligence into their custom software.',
    longDescription: 'Extend the cognitive capabilities of Apex Sync into your custom internal software. Our SDKs provide first-class support for memory graphs, context-aware routing, and vector storage, written with beautiful developer ergonomics.',
    capabilities: [
      'Low-Latency Vector Memory Synchronization APIs',
      'Explainable Reasoning Path Tracing Endpoints',
      'Type-Safe TypeScript & Python SDKs'
    ],
    businessValue: 'Accelerates developer velocity in building secure, high-utility agentic workflows without needing to invent proprietary memory architectures.'
  }
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'intelligent-systems',
    title: 'Intelligent Systems Design',
    tagline: 'Engineering software that understands your operational reality.',
    problem: 'Standard business software acts as a static repository. It relies entirely on humans to manually input, seek, and relate information, which leads to massive friction and lost context.',
    solution: 'We architect and engineer intelligent systems that actively monitor context, preserve historical resolutions, and cooperate with teams to augment their performance.',
    approach: [
      'Deep operational workflow and knowledge mapping',
      'Custom cognitive architecture design & memory graph integration',
      'User experience crafting optimized for seamless human-AI collaboration',
      'End-to-end full-stack frontend and backend engineering'
    ],
    expectedOutcome: 'A custom-built digital asset owned completely by your company that acts as a proactive collaborator, retaining context and optimizing decision speed.'
  },
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI Solutions',
    tagline: 'Reliable, secure model integration tailored to corporate governance.',
    problem: 'Many organizations struggle to move AI out of playgrounds and into production due to security concerns, model hallucinations, and fragmented local data pipelines.',
    solution: 'We build enterprise-grade, secure, and reliable AI systems integrated directly with your internal systems, guarded by robust security filters and audit logs.',
    approach: [
      'Strict security posture analysis & private cloud orchestration',
      'Grounding systems engineered with Retrieval-Augmented Generation (RAG)',
      'Deterministic fallback mechanics to ensure zero-fail operational safety',
      'Custom telemetry, monitoring, and compliance logging dashboards'
    ],
    expectedOutcome: 'Absolute reliability in AI operations with zero data leakage, guaranteed compliance with strict corporate policies, and audible reasoning logs.'
  },
  {
    id: 'strategy-advisory',
    title: 'AI Strategy & Advisory',
    tagline: 'Clarity before code. Sustainable value over technical hype.',
    problem: 'The rapid evolution of AI creates extreme market noise, leading businesses to invest in superficial integrations that fail to deliver tangible ROI or long-term defensibility.',
    solution: 'We provide structured technical and strategic consulting to map exactly where intelligence engineering will generate permanent, compounding business value.',
    approach: [
      'Rigorous AI capability and ROI assessment matrix',
      'Strategic architectural advisory and model selection',
      'Detailed implementation roadmap, talent scoping, and risk mitigation',
      'Interactive executive briefings and workshop alignment'
    ],
    expectedOutcome: 'A clear, executable technology roadmap backed by serious business reasoning, eliminating wasted spending and establishing a compounding technology moat.'
  },
  {
    id: 'custom-product-dev',
    title: 'Custom Product Development',
    tagline: 'Selective partnerships to build the future great platforms.',
    problem: 'Creating highly unique, category-defining products requires specialized, senior talent in AI, product design, and systems engineering that is difficult and slow to recruit.',
    solution: 'We act as an elite product development partner, moving select client concepts from raw research, design wireframes, and prototypes into production systems.',
    approach: [
      'Accelerated functional prototyping and validation testing',
      'High-fidelity, luxury UI design and interactive motion system design',
      'Scalable cloud architecture setup and API construction',
      'Symmetric transition support to transfer ownership to internal teams'
    ],
    expectedOutcome: 'A fully shipped, pristine, market-ready digital product with extreme performance, exceptional design polish, and clean, modular code.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'synchronization-pulse',
    title: 'The Synchronization Pulse: Designing Institutional Memory in Agentic Systems',
    subtitle: 'Why conversational AI resets fail corporate users, and how dynamic synchronization models preserve business intelligence over decades.',
    date: 'June 24, 2026',
    author: 'Apex Sync Research Team',
    category: 'Research',
    featured: true,
    readTime: '8 min read',
    content: [
      'Every day, modern enterprises suffer from cognitive leaks. Decisions made in a Monday meeting are forgotten by Thursday; resolutions found after days of research are duplicated months later by a different team. Traditional software registers files, but it does not understand context. In contrast, current AI models are dominated by the "stateless conversational" paradigm: you ask, it answers, the conversation ends, and the system resets to zero.',
      'At Apex Sync, we are pioneering a different architecture—one built around "continuous synchronization." We treat intelligence as a perpetual state model. Instead of transient chats, our systems maintain a persistent, dynamic "Memory Graph" that automatically ingests corporate conversations, documents, and historical decisions.',
      'The core challenge is defining how new information merges into this graph without diluting past insights. We solve this through what we call "The Synchronization Pulse." When new data enters—be it a meeting transcript or a technical brief—the system does not simply append it. It runs a multi-dimensional correlation matrix to identify overlapping historical strategies, conflicting resolutions, and dependent metrics.',
      'By grounding agentic behaviors in this synchronized institutional memory, we protect organizations from context-rot. The systems do not operate in a vacuum; they grow smarter alongside the business, ensuring that your organization\'s best thinking is preserved as a permanent, compounding asset.'
    ]
  },
  {
    id: 'quiet-confidence',
    title: 'Engineering Quiet Confidence: Moving Beyond the Cyberpunk AI Aesthetic',
    subtitle: 'An editorial on visual discipline, luxury styling, and why the future of technology is premium minimalism rather than flashing HUD dashboards.',
    date: 'May 18, 2026',
    author: 'Creative Director',
    category: 'Design',
    featured: false,
    readTime: '6 min read',
    content: [
      'Look at the current landscape of AI interfaces. They are filled with flashing blue lines, rotating wireframe heads, cyberpunk grids, and simulated server terminals. This visual approach is what we call "tech-larping"—decorating interfaces with unrequested telemetry to make simple algorithms look advanced.',
      'We believe this is a profound design failure. It treats technology as a novelty rather than infrastructure. A tool designed for serious leaders and long-term enterprises should not scream for attention. It should speak with quiet confidence.',
      'Our visual identity is built around a black and gold color system, utilizing generous negative space, restrained color ratios, and editorial-grade typography. This choice is deliberate. Black represents focus, depth, and composure; gold introduces distinction and premium craftsmanship. It is the language of timeless luxury, applied to engineering.',
      'When an interface is quiet, the content is elevated. Users are not distracted by glowing animations; they are focused on clarity, decisions, and knowledge. Every pixel must justify its existence. Our micro-interactions do not bounce; they move with the precision and weight of a luxury car door closing. Precision over noise is the ultimate expression of quality.'
    ]
  },
  {
    id: 'decision-intelligence',
    title: 'Decision Intelligence: Why Modern Executives Require Context Over Computations',
    subtitle: 'The shift from computational density to cognitive alignment, and how tomorrow\'s great technology companies will serve corporate leadership.',
    date: 'April 05, 2026',
    author: 'Product Strategy Group',
    category: 'Leadership',
    featured: false,
    readTime: '5 min read',
    content: [
      'For decades, enterprise software promised better decisions through more data. We built dashboards with hundreds of real-time metrics, synchronized global SQL engines, and generated extensive PDF reports. Yet executives are more overwhelmed by information complexity than ever before.',
      'The bottle-neck is no longer data retrieval; it is data comprehension. Executives do not need more computations; they need contextual alignment. They need to understand not just "what is happening," but "why does it matter, what were our past assumptions, and what are the downstream risks?"',
      'This realization is what guides our development of Executive Intelligence. By shifting the paradigm from data display to semantic correlation, we help leaders immediately access the background context behind every metric. When a KPI fluctuates, the system automatically retrieves the corresponding board slide, the strategic decision record, and the relevant Slack conversation.',
      'We are moving into an era of collaborative computing, where software does not simply store your information—it helps you synthesize it. The future belongs to the organizations that can turn disconnected information into synchronized, actionable intelligence.'
    ]
  }
];

export const OPEN_ROLES: OpenRole[] = [
  {
    id: 'senior-intelligence-engineer',
    title: 'Senior Intelligence Engineer (AI Systems)',
    department: 'Engineering',
    location: 'Remote / London, UK',
    type: 'Full-time',
    description: 'We are seeking an experienced engineer to architect and build our core memory graph systems, RAG pipelines, and multi-agent orchestration frameworks for Executive Intelligence.',
    requirements: [
      '5+ years of experience with backend systems and data architecture in TypeScript, Go, or Python',
      'Deep understanding of vector databases, contextual embedding models, and custom RAG orchestrations',
      'Commitment to writing readable, robust, and highly maintainable systems code',
      'Strong communication skills and collaborative, craftsmanship-driven mindset'
    ],
    benefits: [
      'Highly competitive compensation with equity participation',
      'Comprehensive healthcare and wellness packages',
      'Flexible remote working setup with regular team build gatherings',
      'Generous learning and research conference budget'
    ]
  },
  {
    id: 'lead-ui-designer',
    title: 'Lead UI Designer (Design Systems)',
    department: 'Design',
    location: 'Hybrid / London, UK',
    type: 'Hybrid',
    description: 'We are looking for a visionary UI designer with an exceptional eye for typography, negative space, and premium styling to steward and expand the Apex Sync Design System.',
    requirements: [
      '6+ years of experience designing high-fidelity, premium web and software interfaces',
      'Exceptional mastery over typography, spacing systems, and color-usage constraint principles',
      'Strong experience with micro-interactions, motion design tokens, and frontend implementation systems',
      'Portfolio displaying world-class craft and editorial design sensibility'
    ],
    benefits: [
      'Top-tier salary with meaningful equity benefits',
      'Premium workspace, hardware, and design asset stipend',
      'Paid annual design exploration and research trips',
      'Full health, dental, and longevity benefits'
    ]
  },
  {
    id: 'staff-research-scientist',
    title: 'Staff Research Scientist (Human-AI Collaboration)',
    department: 'Research',
    location: 'Hybrid / London, UK',
    type: 'Full-time',
    description: 'Join our research lab to pioneer the next generation of cooperative intelligence, studying dynamic context synchronization and symmetric human-AI interfaces.',
    requirements: [
      'Ph.D. or equivalent deep research record in HCI, Artificial Intelligence, or Computer Science',
      'History of publications at major conferences (CHI, NeurIPS, ICLR, KDD)',
      'Passion for transforming abstract research frameworks into practical product foundations',
      'Uncompromising intellectual curiosity and transparency'
    ],
    benefits: [
      'Competitive compensation and equity allocation',
      'Unrestricted research and publication support',
      'Collaboration with elite academic and global industrial partners',
      'Full premium healthcare, mental wellness, and coaching programs'
    ]
  }
];

export const CORPORATE_DIVISIONS: Division[] = [
  {
    id: 'ai-enterprise-intelligence',
    num: '01',
    title: 'AI & Enterprise Intelligence',
    tagline: 'Helping organizations make better decisions through artificial intelligence.',
    subCategories: [
      {
        title: 'Executive Intelligence Systems',
        purpose: 'AI-powered executive dashboards that continuously analyse business performance and provide leadership with actionable insights.',
        capabilities: [
          'Executive AI Assistant',
          'KPI Monitoring',
          'Revenue Analytics',
          'Risk Detection',
          'Operational Intelligence',
          'Predictive Forecasting',
          'AI Briefings',
          'Decision Support',
          'Performance Tracking',
          'Executive Reports'
        ],
        perfectFor: ['CEOs', 'Managing Directors', 'Board Members']
      },
      {
        title: 'AI Business Assistants',
        purpose: 'Private AI assistants trained specifically on an organization\'s knowledge.',
        capabilities: [
          'Internal Knowledge Search',
          'Policy Assistant',
          'Employee Support',
          'Customer Support',
          'HR Assistant',
          'Finance Assistant',
          'Legal Assistant',
          'Operations Assistant'
        ]
      },
      {
        title: 'AI Document Intelligence',
        purpose: 'Transform documents into searchable intelligence.',
        capabilities: [
          'AI Document Search',
          'Contract Analysis',
          'Invoice Processing',
          'Policy Analysis',
          'Automatic Classification',
          'OCR',
          'Knowledge Extraction'
        ]
      },
      {
        title: 'Predictive Business Intelligence',
        purpose: 'Use AI to predict future business performance.',
        capabilities: [
          'Revenue Prediction',
          'Customer Behaviour Analysis',
          'Churn Prediction',
          'Sales Forecasting',
          'Operational Risk Analysis',
          'Financial Forecasting'
        ]
      }
    ]
  },
  {
    id: 'enterprise-operating-systems',
    num: '02',
    title: 'Enterprise Operating Systems',
    tagline: 'This becomes Apex Sync\'s flagship service.',
    subCategories: [
      {
        title: 'APEX ONE',
        purpose: 'AI Operating Systems designed specifically for organisations.',
        industries: [
          'Finance',
          'Banking',
          'Law Firms',
          'Hospitals',
          'Universities',
          'Manufacturing',
          'Logistics',
          'Government',
          'Construction',
          'Energy',
          'Real Estate'
        ],
        modules: [
          'Executive Dashboard',
          'Finance',
          'HR',
          'CRM',
          'Projects',
          'Documents',
          'Operations',
          'AI',
          'Analytics',
          'Approvals',
          'Workflow',
          'Notifications',
          'Knowledge Base'
        ]
      },
      {
        title: 'Department Operating Systems',
        purpose: 'Instead of transforming the whole company immediately, build individual operating systems for departments.',
        examples: [
          'HR OS',
          'Sales OS',
          'Legal OS',
          'Finance OS',
          'Operations OS',
          'Procurement OS',
          'Compliance OS'
        ]
      },
      {
        title: 'Executive Command Centres',
        purpose: 'Premium dashboards for leadership.',
        displays: [
          'Company Health',
          'Revenue',
          'Productivity',
          'Risks',
          'AI Recommendations'
        ]
      }
    ]
  },
  {
    id: 'digital-platforms',
    num: '03',
    title: 'Digital Platforms',
    tagline: 'Customer-facing systems and customized workspaces.',
    subCategories: [
      {
        title: 'Enterprise Websites',
        purpose: 'Not marketing websites. Digital business platforms.',
        features: [
          'Customer Portals',
          'AI',
          'Dashboards',
          'Payments',
          'Booking',
          'Analytics',
          'CRM Integration',
          'Automation'
        ]
      },
      {
        title: 'Client Portals',
        purpose: 'Secure portals allowing customers to interact with organisations.',
        examples: [
          'Banks',
          'Law Firms',
          'Hospitals',
          'Universities',
          'Manufacturers'
        ]
      },
      {
        title: 'Self-Service Platforms',
        purpose: 'Customers perform tasks independently.',
        examples: [
          'Applications',
          'Payments',
          'Document Uploads',
          'Tracking',
          'Approvals',
          'Bookings'
        ]
      },
      {
        title: 'Internal Employee Portals',
        purpose: 'Customized workspaces for employees, managers, and executives.'
      }
    ]
  },
  {
    id: 'automation-integration',
    num: '04',
    title: 'Automation & Integration',
    tagline: 'Remove repetitive workloads and integrate complex system architectures.',
    subCategories: [
      {
        title: 'Business Workflow Automation',
        purpose: 'Remove repetitive work across standard operations.',
        examples: [
          'Approvals',
          'Invoices',
          'Recruitment',
          'Leave Requests',
          'Purchase Requests',
          'Client Onboarding',
          'Employee Onboarding'
        ]
      },
      {
        title: 'Enterprise Integration',
        purpose: 'Connect existing disparate business systems.',
        examples: [
          'Microsoft 365',
          'Google Workspace',
          'QuickBooks',
          'SAP',
          'Salesforce',
          'Slack',
          'Teams',
          'Stripe',
          'Zoom',
          'HubSpot',
          'Custom APIs'
        ]
      },
      {
        title: 'AI Workflow Automation',
        purpose: 'AI makes decisions inside workflows.',
        examples: [
          'Email Classification',
          'Document Processing',
          'Lead Qualification',
          'Support Ticket Routing',
          'Invoice Approval',
          'Risk Alerts'
        ]
      },
      {
        title: 'Data Synchronisation',
        purpose: 'Keep every system updated automatically.'
      }
    ]
  },
  {
    id: 'customer-experience-solutions',
    num: '05',
    title: 'Customer Experience Solutions',
    tagline: 'Improve every client and consumer interaction point.',
    subCategories: [
      {
        title: 'APEX CONNECT',
        purpose: 'Customer Experience Platform.',
        capabilities: [
          'Customer Portal',
          'Messaging',
          'Payments',
          'Appointments',
          'Support',
          'AI Assistant',
          'Notifications',
          'Document Exchange',
          'Order Tracking',
          'Service Requests'
        ]
      },
      {
        title: 'AI Customer Support',
        purpose: 'Enterprise-grade customer assistants.',
        capabilities: [
          'Natural Language Support',
          'Voice AI',
          'Knowledge Search',
          'Ticket Creation',
          'Escalation',
          'Analytics'
        ]
      },
      {
        title: 'Digital Client Experience Design',
        purpose: 'Improve every interaction customers have with the business.'
      },
      {
        title: 'Mobile Customer Applications',
        purpose: 'Premium mobile experiences connected directly to APEX ONE.'
      }
    ]
  },
  {
    id: 'strategic-advisory',
    num: '06',
    title: 'Strategic Advisory',
    tagline: 'Helping organisations plan digital transformation.',
    subCategories: [
      {
        title: 'AI Transformation Strategy',
        purpose: 'Identify where AI creates the most value.',
        deliverables: [
          'Roadmaps',
          'Business Cases',
          'ROI Analysis',
          'Implementation Strategy'
        ]
      },
      {
        title: 'Digital Transformation Consulting',
        purpose: 'Analyse existing processes. Identify inefficiencies. Recommend technology improvements.'
      },
      {
        title: 'Technology Architecture',
        purpose: 'Design enterprise software architecture.',
        includes: [
          'Platform Design',
          'Cloud Strategy',
          'Security',
          'Integrations',
          'Scalability'
        ]
      },
      {
        title: 'Innovation Workshops',
        purpose: 'Collaborative sessions with leadership teams.',
        topics: [
          'AI',
          'Automation',
          'Future Technology',
          'Digital Transformation',
          'Product Strategy'
        ]
      }
    ]
  }
];

export const SPECIALIZED_SOLUTIONS: SpecializedSolution[] = [
  {
    id: 'legal',
    title: 'Legal Intelligence Platform',
    features: [
      'Matter Management',
      'Court Calendar',
      'Client Portal',
      'AI Legal Assistant',
      'Document Intelligence',
      'Compliance'
    ]
  },
  {
    id: 'finance',
    title: 'Financial Services Platform',
    features: [
      'Customer Management',
      'Loans',
      'Investment Tracking',
      'Compliance',
      'Executive Intelligence',
      'Risk Monitoring'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare Platform',
    features: [
      'Patient Portal',
      'Appointments',
      'Clinical Dashboard',
      'Medical AI',
      'Hospital Operations'
    ]
  },
  {
    id: 'university',
    title: 'University Platform',
    features: [
      'Admissions',
      'Students',
      'Faculty',
      'Research',
      'Finance',
      'Learning Analytics'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Platform',
    features: [
      'Inventory',
      'Production',
      'Quality Assurance',
      'Maintenance',
      'Supplier Portal',
      'AI Forecasting'
    ]
  },
  {
    id: 'semiconductor',
    title: 'Semiconductor Platform (ChipMango OS)',
    features: [
      'Engineering Management',
      'University Partnerships',
      'Industry Collaboration',
      'Research',
      'Talent Pipeline'
    ]
  }
];

export const FUTURE_PRODUCTS_LIST: FutureProductDef[] = [
  {
    id: 'apex-core',
    name: 'APEX CORE',
    tagline: 'The Reusable Platform Foundation',
    description: 'The secure, underlying reusable platform core that powers every other system and product across the entire Apex ecosystem.'
  },
  {
    id: 'apex-one',
    name: 'APEX ONE',
    tagline: 'Enterprise Operating System',
    description: 'The flagship organization-wide artificial intelligence operating system, uniting finance, HR, CRM, documents, and operations.'
  },
  {
    id: 'apex-connect',
    name: 'APEX CONNECT',
    tagline: 'Customer Experience Platform',
    description: 'A sovereign customer portal, providing integrated messaging, self-service transactions, appointments, payments, and private AI assistance.'
  },
  {
    id: 'apex-insights',
    name: 'APEX INSIGHTS',
    tagline: 'Executive Intelligence Platform',
    description: 'Continuous strategic scenario simulator, automated performance tracking, and direct key metric correlation dashboards.'
  },
  {
    id: 'apex-ai',
    name: 'APEX AI',
    tagline: 'Private Enterprise Assistant',
    description: 'Corporate-tuned private intelligence models trained purely on client organizational archives and subject to rigorous local safety.'
  },
  {
    id: 'apex-flow',
    name: 'APEX FLOW',
    tagline: 'Workflow Automation Engine',
    description: 'Dynamic event-driven state engine allowing intelligent AI agents to automate document categorization, lead scoring, and invoicing.'
  },
  {
    id: 'apex-network',
    name: 'APEX NETWORK',
    tagline: 'Industry Collaboration Platforms',
    description: 'Shared compliance and networking channels designed for peer organization partnership in select high-security sectors.',
    examples: [
      'Legal Network',
      'Healthcare Network',
      'Semiconductor Network',
      'Education Network',
      'Financial Network'
    ]
  }
];
