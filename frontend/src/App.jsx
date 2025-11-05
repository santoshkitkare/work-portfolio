import React, { useState, useEffect } from 'react';
import { API_URL } from './config';

// Single-file React component portfolio
// - Tailwind CSS utility classes are used for styling
// - Replace placeholders (EMAIL_ADDRESS, ACTUAL_TESTIMONIALS) with your real content
// - Contact form posts to /api/contact (implement serverless handler to send email via SMTP or an API)

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [visibleExperiences, setVisibleExperiences] = useState(3);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const name = 'Santosh Itkare';
  const title = 'Senior Python Developer • Data Engineer • MLOps & LLMOps Engineer • Team Leader';
  const tagline = 'Accelerating Delivery and Innovation through AI, Automation and Python + AWS';
  const availability = 'Available for new opportunities'; // Can be changed to "Working as {role} at {company}"

  const education = [
    {
      degree: 'B.E. in Computer Engineering',
      institution: 'North Maharashtra University',
      year: '2004',
      score: '63%'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Dr. Babasaheb Ambedkar Technological University',
      year: '2001',
      score: '72.92%'
    }
  ];

  const skills = [
    { name: 'Python', level: 'Senior', icon: '🐍' },
    { name: 'C', level: 'Senior', icon: '⚙️' },
    { name: 'MLOps / LLMOps', level: 'Senior', icon: '🤖' },
    { name: 'AWS (ECS, Lambda, S3)', level: 'Senior', icon: '☁️' },
    { name: 'Docker & CI/CD (Jenkins)', level: 'Senior', icon: '🐳' },
    { name: 'Terraform & CloudFormation', level: 'Senior', icon: '🏗️' },
    { name: 'FastAPI', level: 'Senior', icon: '⚡' },
    { name: 'Generative AI', level: 'Senior', icon: '🧠' },
    { name: 'DynamoDB / PostgreSQL', level: 'Intermediate', icon: '🗄️' },
    { name: 'Vibe Coding', level: 'Intermediate', icon: '💻' },
    { name: 'OpenAI Assistant API', level: 'Intermediate', icon: '🤖' },
    { name: 'Vector Databases', level: 'Intermediate', icon: '📊' }
  ];

  // Icon mapping: prefer Iconify slugs for known names, fallback to devicon slug
  const iconMap = {
    'python': 'logos:python',
    'c': 'simple-icons:c',
    'mlops / llmops': 'mdi:robot',
    'aws (ecs, lambda, s3)': 'logos:aws',
    'docker & ci/cd (jenkins)': 'logos:docker',
    'terraform & cloudformation': 'logos:terraform',
    'fastapi': 'simple-icons:fastapi',
    'generative ai': 'mdi:brain',
    'dynamodb / postgresql': 'logos:postgresql',
    'openai assistant api': 'simple-icons:openai',
    'vector databases': 'mdi:database'
  };

  const getIconUrl = (skillName) => {
    const key = skillName.toLowerCase().trim();
    if (iconMap[key]) return `https://api.iconify.design/${iconMap[key]}.svg`;
    // fallback: make a simple slug for devicon
    const slug = skillName.toLowerCase().replace(/[^a-z0-9]/g, '');
    return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${slug}/${slug}-original.svg`;
  };

  // Projects pulled from GitHub (public repos) — update descriptions and links as needed
  const projects = [
    {
      title: 'Parts Prediction Service',
      company: 'Bruviti',
      shortDesc: 'End-to-end parts prediction pipeline for appliance repairs using ML and LLMs.',
      desc: 'Built an advanced prediction system that combines machine learning and LLMs to analyze repair problems and recommend parts.',
      details: [
        'Developed deep learning models for parts prediction using historical warranty data',
        'Integrated GPT-4 and Claude for natural language problem analysis',
        'Built automated training pipelines for diverse appliance types',
        'Implemented async workflows using AWS Lambda and RabbitMQ',
        'Deployed with Docker and AWS, with automated CI/CD pipeline'
      ],
      tech: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'AWS', 'LLMs'],
      url: '#'
    },
    {
      title: 'Document Portal',
      company: 'Personal Project',
      shortDesc: 'Document Analysis, Chat & Comparison Portal with Advanced RAG',
      desc: 'Developed as part of Krish Naik Academy’s GenAI & LLMOps program, this project demonstrates a complete end-to-end AI-powered document intelligence portal. It enables users to upload, analyze, chat with, and compare documents using Advanced RAG (Retrieval-Augmented Generation) pipelines. The project combines backend AI orchestration with an interactive frontend and scalable cloud deployment.',
      details: [
        'Built semantic search and chat interfaces for single and multiple document interactions.',
        'Designed document comparison logic with similarity and diff detection features.',
        'Optimized performance using local/quantized LLMs, vLLM, and cache-augmented generation (CAG).',
        'Developed FastAPI backend and Streamlit-based frontend for end-to-end user experience.',
        'Deployed using AWS Fargate with CI/CD automation (GitHub Actions) and containerized architecture.'
      ],
      tech: ['Python', 'Jupyter', 'GenAI', 'AWS Fargate', 'FastAPI', 'Streamlit'],
      url: 'https://github.com/santoshkitkare/llmops/tree/main/document_portal'
    },
    {
      title: 'AI Support Ticket Classifier',
      company: 'Personal Project',
      shortDesc: 'ML-powered system for automatic support ticket classification and routing.',
      desc: 'Streamlit application that uses generative AI to analyze and auto-tag support tickets for improved triage efficiency.',
      details: [
        'Built ML models for ticket classification and priority prediction',
        'Implemented automated tagging system using NLP',
        'Created intuitive Streamlit interface for ticket analysis',
        'Integrated with existing ticketing systems via APIs'
      ],
      tech: ['Python', 'Streamlit', 'Gen AI', 'AWS', 'API Gateway', 'Lambda', 'DynamoDB', 'Bedrock', 'OpenAI'],
      url: 'https://github.com/santoshkitkare/ai-support-ticket-classifier'
    }
  ];

  // Experience timeline (summarized). Replace company names and dates with exact values if needed.
  const timeline = [
    {
      role: 'Senior Python Developer (AI/ML)',
      company: 'NextBurb',
      period: 'Jun 2025 - Aug 2025',
      shortDesc: 'Led AI/ML initiatives for real estate property analysis and recommendations platform.',
      desc: 'Developed comprehensive AI solutions for property evaluation and automated data extraction systems to streamline real estate operations.',
      bullets: [
        'Developed AI/ML solutions to rate and recommend properties based on image quality, market comparison, school ratings, crime rates, and price appreciation trends.',
        'Automated property data extraction from MLS portals to identify high-value listings and top-performing agents, enabling faster sales and better buyer recommendations.'
      ]
    },
    {
      role: 'Senior Data Scientist',
      company: 'Bruviti (K2 Technosoft India Pvt. Ltd)',
      period: 'Oct 2022 - Apr 2025',
      shortDesc: 'Led AI/ML solutions development for appliance service optimization using LLMs and advanced analytics.',
      desc: 'Spearheaded the development of LLM-powered systems and ML pipelines for appliance service operations, focusing on parts prediction and diagnostic automation.',
      bullets: [
        'Worked on multiple AI/ML-driven solutions aimed at optimizing appliance service operations for a major home appliance manufacturer.',
        'Delivered advanced LLM-based recommendation systems, time-series demand forecasting, and semantic search solutions.',
        'Automated model pipelines and deployed services using AWS and containerized infrastructure.',
        'Led development of an LLM-based Parts Recommendation System using GPT-4 and Claude to analyze problem descriptions and suggest likely repair parts.',
        'Designed pipelines for warranty data ingestion, model inference, and part-BOM mapping for enhanced precision.',
        'Built forecasting models (ARIMA, SARIMAX, Prophet) to predict demand for spare parts, aiding supply chain planning.',
        'Developed internal FastAPI services with HTML UI for diagnostics and technician support.',
        'Used Docker, AWS Lambda, and RabbitMQ for scalable, event-driven processing.',
        'Improved diagnostic accuracy by processing structured/unstructured claim data and applying explainable ML models.',
        'Effectively used Cursor AI and ChatGPT as development copilots for rapid code generation, testing snippets, and optimizing workflows—significantly accelerating delivery timelines and reducing debugging effort.'
      ]
    },
    {
      role: 'Python Developer - AI/ML',
      company: 'Bruviti (K2 Technosoft India Pvt. Ltd)',
      period: 'Mar 2020 — Sept 2022',
      shortDesc: 'Built and deployed ML-powered parts prediction system for appliance repairs.',
      desc: 'Led the development of an advanced parts prediction system using deep learning, improving first-time fix rates and technician efficiency.',
      bullets: [
        'Developed and deployed a Parts Prediction System using deep learning models trained on historical warranty claim data.',
        'Developed deep learning models trained on warranty claims for part prediction and repair planning.',
        'Built automated training pipelines for neural network-based models, handling diverse appliance types.',
        'Integrated model predictions with service portal APIs for technician tools.',
        'Implemented asynchronous workflows using AWS Lambda and RabbitMQ.'
      ]
    },
    {
      role: 'Technical Lead',
      company: 'Bruviti (K2 Technosoft India Pvt. Ltd)',
      period: 'Oct 2013 — Feb 2020',
      shortDesc: 'Led embedded systems development for Renesas Synergy Platform.',
      desc: 'Specialized in cross-compilation and framework development for embedded systems, focusing on the Renesas Synergy Platform.',
      bullets: [
        'Led cross-compilation and framework development initiatives',
        'Designed and implemented embedded system architectures',
        'Optimized performance for resource-constrained environments',
        'Mentored team members in embedded systems development'
      ]
    },
    {
      role: 'Technical Lead',
      company: 'Taraspan Solution Pvt. Ltd. Pune',
      period: 'Nov 2022 - Oct 2013',
      shortDesc: 'Led development of WiFi Access Point Controller features.',
      desc: 'Managed technical aspects of WiFi Access Point Controller development, including feature design, analysis, and implementation.',
      bullets: [
        'Led design and implementation of new features for WiFi Access Point Controller',
        'Conducted customer requirement analysis and technical feasibility studies',
        'Managed bug fixing and system optimization',
        'Coordinated with cross-functional teams for feature delivery'
      ]
    },
    {
      role: 'Technical Lead',
      company: '2Wire IDC Pvt. Ltd. Pune',
      period: 'Apr 2015 - Oct 2012',
      shortDesc: 'Led embedded systems development for networking and IoT devices.',
      desc: 'Spearheaded development of embedded C-based systems, focusing on networking protocols and IoT device frameworks.',
      bullets: [
        'Worked on C-based embedded systems for telecom and IoT products',
        'Ported networking and device provisioning stacks (TCP/IP, TR-069) to multiple platforms',
        'Built cellular and wireless frameworks (e.g., using NimbeLink, Quectel) for Renesas MCUs',
        'Delivered TR-069 compliant solutions to global ISPs (AT&T, SingTel)',
        'Mentored junior engineers and contributed to cross-team architecture decisions',
        'Integrated RTOS (FreeRTOS, ThreadX) for embedded applications',
        'Designed and implemented protocol stacks (TCP/IP, TR-069, 6LoWPAN)'
      ]
    }
  ];

  // NOTE: LinkedIn scraping is often blocked; please paste any exact testimonial quotes into the TESTIMONIALS array below.
  const testimonials = [
    {
      quote: 'I have worked with Santosh for many years and I definitely recommend him as a team member not only for his strong technical skills but also as a responsible, reliable, and hardworking intellect. Santosh has consistently demonstrated deep expertise in Python, machine learning libraries, and predictive algorithms. Beyond his technical proficiency, Santosh is a dependable colleague who takes ownership of his work and contributes positively to team collaboration. His professionalism, dedication, and problem-solving capabilities surely make him a valuable contributor in the organization.',
      who: 'Gopi Kori / Senior Technical Architect at Bruviti'
    },
    {
      quote: 'I’ve had the pleasure of working alongside Santosh for over a decade, and during this time, I’ve consistently been impressed by his dedication, work ethic, and proactive approach to every challenge.\nHe is someone who takes ownership of tasks and sees them through with a level of commitment that truly sets him apart. Whether it’s navigating complex problems, supporting team objectives, or anticipating potential issues before they arise, Santosh is always a step ahead. His attention to detail and willingness to go the extra mile make him an invaluable asset to any team.\nIt’s rare to come across someone as reliable, collaborative, and forward-thinking. I would highly recommend Santosh to any organization looking for a strong performer and a trusted team player.',
      who: 'Pratik Pujar / Data Science Architect at Bruviti (K2 Technosoft India Pvt. Ltd)'
    },
    {
      quote: 'Santosh\'s ability to take "complete responsibility" of all the tasks assigned to him makes him a very reliable resource and we can 100% count on him. His attitude toward work is excellent, always on his toes and ready go extra miles to make his task shine.',
      who: 'Vikram Barate / VP Engineering at Neurealm (Formerly GSLab|GAVS)'
    },
    {
      quote: 'Santosh is a great SW engineer. He is a specialist in the network domain. I trusted Santosh to realize complex tasks and the results were up to my expectations. I highly recommend Santosh.',
      who: 'Regis Bondidier / Software Engineering Manager'
    }


  ];

  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setStatus(result.message);
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased transition-colors">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-popover text-foreground hover:opacity-90 transition-colors"
          aria-label="Toggle theme"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>

      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{name}</h1>
          <p className="text-sm text-muted">{title}</p>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Professional Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

  {/* HERO */}
  <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-m uppercase text-primary font-medium">Hi, I'm</p>
          <h2 className="text-4xl font-bold leading-tight">{name}</h2>
          <p className="mt-3 text-lg text-muted">{tagline}</p>
          <p className="mt-3 flex items-center text-primary font-medium">
            <span className="relative inline-flex items-center justify-center w-5 h-5">
              <span
                className="absolute inline-flex w-5 h-5 rounded-full bg-emerald-500 opacity-60 animate-ping"
                style={{ animationDuration: '900ms' }}
                aria-hidden="true"
              />
              <span className="relative inline-flex w-3 h-3 rounded-full bg-emerald-500" aria-hidden="true" />
            </span>
            <span className="ml-2">{availability}</span>
          </p>

          <div className="mt-2 flex gap-2">
            <a href="#projects" className="inline-block px-5 py-3 border border-border rounded-lg bg-primary text-primary-foreground shadow hover:opacity-95">View Work</a>
            <a href="#contact" className="inline-block px-5 py-3 border border-border rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">Get In Touch</a>
          </div>

          <div className="mt-8 text-m text-muted">
            <p><strong>Positioning:</strong> Python Developer, Data Analyst, MLOps & LLMOps Engineer — experienced in production ML, model ops, and generative AI tooling.</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-card rounded-xl shadow p-4">
            <h3 className="font-semibold text-foreground text-sm">Quick Stats</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-xm">
              <li className="border border-border p-2 rounded text-muted">20+ years software Experience</li>
              <li className="border border-border p-2 rounded text-muted">5+ years Python / AI</li>
              <li className="border border-border p-2 rounded text-muted">AWS, Docker, GitHub Action, CI/CD</li>
              <li className="border border-border p-2 rounded text-muted">Gen AI & MLOps</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="bg-card rounded-xl shadow p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary">🎓</span>
              <h3 className="text-sm font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-1">
              {education.map((edu, i) => (
                <div key={i} className="border border-border rounded p-2 text-muted space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-s text-foreground">{edu.degree}</h4>
                      <p className="text-[15px] text-muted mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-primary text-s font-medium">{edu.year}</div>
                      <div className="text-[15px] text-muted mt-0.5">{edu.score}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-0">
        <h3 className="text-xl font-semibold  mb-2 text-foreground">About Me</h3>
        <div className="bg-card rounded-2xl shadow p-4">  
          <p className="mt-1 text-muted">I am a seasoned software engineer with deep expertise in Python and a strong background in embedded systems. Over two decades of engineering experience, I have transitioned into building production-ready machine learning systems and MLOps pipelines. I architect scalable solutions, deploy models using robust CI/CD practices, and design automation that reduces time-to-production. I have hands-on experience with PyTorch, TensorFlow, LangChain, LangGraph, and modern LLM tooling. I pair technical leadership with mentorship—guiding teams to deliver reliable, maintainable ML-driven products.</p>

          <div className="mt-6">
            <h4 className="font-medium">Core focus</h4>
            <p className="text-muted text-sm mt-2">Generative AI, Agentic AI, LLM orchestration (LangChain/LangGraph), backend services in Python, production deployment, and cloud-native infrastructure.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-1 space-y-1">
        <h3 className="text-xl font-semibold mb-2 text-foreground">Skills & Expertise</h3>
        {/* Skills Section */}
        <div className="bg-card rounded-2xl shadow-sm p-6">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {skills.map((skill) => {
              const candidates = (() => {
                const key = skill.name.toLowerCase().trim();
                const list = [];
                // prefer mapped Iconify slug
                if (iconMap[key]) list.push(`https://api.iconify.design/${iconMap[key]}.svg`);
                // try devicon slug (sanitized)
                const slug = skill.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                list.push(`https://raw.githubusercontent.com/devicons/devicon/master/icons/${slug}/${slug}-original.svg`);
                // generic fallbacks (some common icons)
                if (skill.name.toLowerCase().includes('aws')) list.push('https://api.iconify.design/logos:aws.svg');
                if (skill.name.toLowerCase().includes('docker')) list.push('https://api.iconify.design/logos:docker-icon.svg');
                if (skill.name.toLowerCase().includes('python')) list.push('https://api.iconify.design/logos:python.svg');
                return list;
              })();

              return (
                <div key={skill.name} className="bg-secondary/50 p-3 rounded-lg flex items-center gap-3">
                  <img
                    src={candidates[0]}
                    alt={skill.name}
                    className="w-8 h-8 rounded-full object-contain"
                    data-candidates={JSON.stringify(candidates)}
                    data-attempt="0"
                    onError={(e) => {
                      try {
                        const el = e.currentTarget;
                        const list = JSON.parse(el.dataset.candidates || '[]');
                        let attempt = Number(el.dataset.attempt || 0) + 1;
                        if (attempt < list.length) {
                          el.dataset.attempt = String(attempt);
                          el.src = list[attempt];
                          return;
                        }
                      } catch (err) {
                        // ignore json parse errors
                      }
                      // all attempts failed -> hide image and show emoji fallback
                      e.currentTarget.style.display = 'none';
                      const fb = e.currentTarget.nextElementSibling;
                      if (fb) fb.style.display = 'inline-flex';
                    }}
                  />

                  <div style={{ display: 'none' }} className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-pink-100 to-yellow-100 text-lg">
                    <span className="select-none">{skill.icon}</span>
                  </div>

                  <div>
                    <div className="font-medium text-foreground text-sm">{skill.name}</div>
                    <div className="text-xs text-primary font-medium">{skill.level}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-1">
        <h3 className="text-xl font-semibold mb-2 text-foreground">Projects & Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold">
                    <a href={p.url} target="_blank" rel="noreferrer" className="hover:underline text-foreground">{p.title}</a>
                  </h4>
                  <p className="text-sm text-muted">{p.company}</p>
                </div>
              </div>
              
              <p className="mt-1 text-muted">{p.shortDesc}</p>
              
              <div className="mt-1">
                <p className="text-muted">
                  {expandedProjects[p.title] ? p.desc : p.desc.slice(0, 150) + (p.desc.length > 150 ? '...' : '')}
                </p>
                {p.desc.length > 150 && (
                  <button
                    onClick={() => setExpandedProjects(prev => ({...prev, [p.title]: !prev[p.title]}))}
                    className="text-indigo-600 dark:text-indigo-400 text-sm mt-1 hover:underline focus:outline-none"
                  >
                    {expandedProjects[p.title] ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>

              {expandedProjects[p.title] && (
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-muted">
                  {p.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              
              <div className="mt-4 flex-wrap flex gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs border border-border text-muted rounded px-2 py-1">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 mx-auto bg-card rounded-xl shadow-sm px-6 py-4 text-center w-max">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Ready to Build Something Amazing?</h3>
          <p className="text-muted mb-3">Let's discuss how these skills can drive your next AI/ML project to success</p>
          <a 
            href="#contact" 
            className="inline-block px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors border border-primary shadow-sm"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-1">
        <h3 className="text-xl font-semibold mb-2 text-foreground">Professional Experience</h3>
        <div className="space-y-4">
          {timeline.slice(0, visibleExperiences).map((t) => (
            <div key={t.role} className="bg-card rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">{t.role} | {t.company} | {t.period}</h4>
                </div>
              </div>
              
              <p className="mt-1 text-muted">{t.shortDesc}</p>
              
              <div className="mt-1">
                <p className="text-muted">
                  {expandedProjects[t.role] ? t.desc : t.desc.slice(0, 150) + '...'}
                </p>
                <button
                  onClick={() => setExpandedProjects(prev => ({...prev, [t.role]: !prev[t.role]}))}
                  className="text-primary text-sm mt-2 hover:underline focus:outline-none inline-flex items-center gap-1"
                >
                  {expandedProjects[t.role] ? 'Show less' : 'Read more'}
                  <span className="text-xs">{expandedProjects[t.role] ? '↑' : '↓'}</span>
                </button>
              </div>

              {expandedProjects[t.role] && (
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-muted">
                  {t.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {timeline.length > visibleExperiences && (
            <div className="text-center pt-1">
              <button
                onClick={() => setVisibleExperiences(prev => Math.min(prev + 3, timeline.length))}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Show More Experiences
                <span className="text-sm">({timeline.length - visibleExperiences} remaining)</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-1">
        <h3 className="text-xl font-semibold mb-2 text-foreground">Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-card p-6 rounded-lg shadow">
              <p className="text-muted italic">"{t.quote}"</p>
              <p className="mt-4 text-sm">
                <span className="font-semibold text-foreground">— {t.who}</span>
                <span className="inline-flex items-center ml-3 text-primary" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.286c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.286h-3v-4.5c0-1.071-.929-2-2-2s-2 .929-2 2v4.5h-3v-9h3v1.286c.801-1.086 2.5-1.286 3.5-1.286 2.206 0 4 1.794 4 4v5z" />
                  </svg>
                </span>
              </p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-2">
        <h3 className="text-xl font-semibold mb-2 text-foreground">Get in touch</h3>
        <div className="bg-card rounded-lg shadow p-6 grid md:grid-cols-2 gap-6">
          <div>
            
            <p className="mt-2 text-sm text-muted">Open to full-time and contract roles: Python Developer, Data Analyst, MLOps, LLMOps.</p>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="https://github.com/santoshkitkare"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-card hover:bg-secondary/50 border border-border rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5 text-muted group-hover:text-primary-foreground" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 016.003 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.903-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12 24 5.37 18.627 0 12 0z" />
                </svg>
                <span className="text-primary group-hover:text-primary-foreground">github.com/santoshkitkare</span>
              </a>
              <a
                href="https://www.linkedin.com/in/santosh-itkare-56993a38/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-card hover:bg-secondary/50 border border-border rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5 text-muted group-hover:text-primary-foreground" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.286c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.286h-3v-4.5c0-1.071-.929-2-2-2s-2 .929-2 2v4.5h-3v-9h3v1.286c.801-1.086 2.5-1.286 3.5-1.286 2.206 0 4 1.794 4 4v5z" />
                </svg>
                <span className="text-primary group-hover:text-primary-foreground">linkedin.com/in/santosh-itkare-56993a38</span>
              </a>
              <a
                href="mailto:santoshkitkare@gmail.com"
                className="flex items-center gap-3 px-4 py-2 bg-card hover:bg-secondary/50 border border-border rounded-lg transition-colors group"
              >
                <svg className="w-5 h-5 text-muted group-hover:text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8.5v7.75C3 18.216 4.284 19.5 5.75 19.5h12.5c1.466 0 2.75-1.284 2.75-2.75V8.5" />
                  <path d="M21 6.5l-9 6-9-6" />
                </svg>
                <span className="text-primary group-hover:text-primary-foreground">santoshkitkare@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-sm text-muted">Name</label>
                <input name="name" required className="w-full mt-1 p-2 border border-border dark:bg-card dark:text-foreground rounded" />
              </div>
              <div>
                <label className="text-sm text-muted">Email</label>
                <input name="email" type="email" required className="w-full mt-1 p-2 border border-border dark:bg-card dark:text-foreground rounded" />
              </div>
              <div>
                <label className="text-sm text-muted">Message</label>
                <textarea name="message" rows={4} required className="w-full mt-1 p-2 border border-border dark:bg-card dark:text-foreground rounded" />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 border border-border rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">Send Message</button>
                <small className="text-xs text-muted">{status || `Or email me directly at santoshkitkare@gmail.com`}</small>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted">© {new Date().getFullYear()} Santosh Itkare — Portfolio. Built with React + Tailwind.</p>
      </footer>
    </div>
  );
}
