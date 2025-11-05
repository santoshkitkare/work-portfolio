import React, { useState, useEffect } from 'react';
import { API_URL } from './config';

// Single-file React component portfolio
// - Tailwind CSS utility classes are used for styling
// - Replace placeholders (EMAIL_ADDRESS, ACTUAL_TESTIMONIALS) with your real content
// - Contact form posts to /api/contact (implement serverless handler to send email via SMTP or an API)

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
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
  const title = 'Senior Python Developer • MLOps & LLMOps Engineer';
  const tagline = 'Building production-grade ML systems, automations, and LLM-driven developer tools.';
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
      tech: ['Python', 'Streamlit', 'Gen AI', 'AWS(API Gateway, Lambda, DynamoDB, Bedrock, OpenAI)'],
      url: 'https://github.com/santoshkitkare/ai-support-ticket-classifier'
    }
  ];

  // Experience timeline (summarized). Replace company names and dates with exact values if needed.
  const timeline = [
    {
      role: 'Senior Python Developer (AI/ML)',
      company: 'NextBurb',
      period: 'Jun 2025 - August 2025',
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
      period: 'Oct 2022 - April 2025',
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
      period: 'Mar 2020 — September 2022',
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
      who: 'Regis BONDIDIER / Software Engineering Manager'
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
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase text-primary font-medium">Hi, I'm</p>
          <h2 className="text-4xl font-bold leading-tight">{name}</h2>
          <p className="mt-4 text-lg text-muted">{tagline}</p>
          <p className="mt-2 text-primary font-medium">{availability}</p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-block px-5 py-3 bg-primary text-primary-foreground rounded-lg shadow hover:opacity-95">View Work</a>
            <a href="#contact" className="inline-block px-5 py-3 border border-border rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">Get In Touch</a>
          </div>

          <div className="mt-8 text-sm text-muted">
            <p><strong>Positioning:</strong> Python Developer, Data Analyst, MLOps & LLMOps Engineer — experienced in production ML, model ops, and generative AI tooling.</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow p-6">
          <h3 className="font-semibold text-foreground">Quick Stats</h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <li className="border border-border p-3 rounded text-muted">20+ years software dev</li>
            <li className="border border-border p-3 rounded text-muted">5+ years Python / AI</li>
            <li className="border border-border p-3 rounded text-muted">Gen AI & MLOps</li>
            <li className="border border-border p-3 rounded text-muted">AWS, Docker, GitHub Action, CI/CD</li>
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10">

        <div className="bg-card rounded-2xl shadow p-8">
          <h3 className="text-2xl font-semibold text-foreground">About Me</h3>
          <p className="mt-4 text-muted">I am a seasoned software engineer with deep expertise in Python and a strong background in embedded systems. Over two decades of engineering experience, I have transitioned into building production-ready machine learning systems and MLOps pipelines. I architect scalable solutions, deploy models using robust CI/CD practices, and design automation that reduces time-to-production. I have hands-on experience with PyTorch, TensorFlow, LangChain, LangGraph, and modern LLM tooling. I pair technical leadership with mentorship—guiding teams to deliver reliable, maintainable ML-driven products.</p>

          <div className="mt-6">
            <h4 className="font-medium">Core focus</h4>
            <p className="text-muted text-sm mt-2">Generative AI, Agentic AI, LLM orchestration (LangChain/LangGraph), backend services in Python, production deployment, and cloud-native infrastructure.</p>
          </div>
        </div>
      </section>

      {/* EDUCATION & SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        {/* Education Section */}
        <div className="bg-card rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 p-3 rounded-xl">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Education</h3>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border"></div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-background bg-primary"></div>
                  <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                    <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                    <p className="text-primary/90 mt-1 font-medium">{edu.institution}</p>
                    <div className="mt-3 flex items-center gap-4 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{edu.year}</span>
                      <span className="text-foreground/80 font-medium">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-card rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-secondary/50 p-3 rounded-lg flex items-center gap-2">
                <img 
                  src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${skill.name.toLowerCase()}/${skill.name.toLowerCase()}-original.svg`}
                  alt={skill.name}
                  className="w-5 h-5"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://api.iconify.design/${
                      skill.name.toLowerCase().includes('aws') ? 'logos:aws' :
                      skill.name.toLowerCase().includes('docker') ? 'logos:docker-icon' :
                      skill.name.toLowerCase().includes('fastapi') ? 'simple-icons:fastapi' :
                      skill.name.toLowerCase().includes('terraform') ? 'logos:terraform-icon' :
                      skill.name.toLowerCase().includes('jenkins') ? 'devicon:jenkins' :
                      'carbon:skill-level'
                    }.svg`;
                  }}
                />
                <div>
                  <div className="font-medium text-foreground text-sm">{skill.name}</div>
                  <div className="text-xs text-primary font-medium">{skill.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Selected Projects & Case Studies</h3>
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
              
              <p className="mt-3 text-muted">{p.shortDesc}</p>
              
              <div className="mt-3">
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
        <div className="mt-12 bg-card rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Ready to Build Something Amazing?</h3>
          <p className="text-muted mb-6">Let's discuss how these skills can drive your next AI/ML project to success</p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors border border-primary shadow-sm"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Experience</h3>
        <div className="space-y-4">
          {timeline.slice(0, visibleExperiences).map((t) => (
            <div key={t.role} className="bg-card rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">{t.role}</h4>
                  <p className="text-sm text-muted">{t.company}</p>
                  <p className="text-sm text-muted mt-1">{t.period}</p>
                </div>
              </div>
              
              <p className="mt-3 text-muted">{t.shortDesc}</p>
              
              <div className="mt-3">
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
            <div className="text-center pt-6">
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
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6 text-foreground">Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-card p-6 rounded-lg shadow">
              <p className="text-muted italic">"{t.quote}"</p>
              <p className="mt-4 text-sm text-muted">— {t.who}</p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-card rounded-lg shadow p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground">Get in touch</h4>
            <p className="mt-2 text-sm text-muted">Open to full-time and contract roles: Python Developer, Data Analyst, MLOps, LLMOps.</p>

            <div className="mt-4 space-y-3 text-sm">
              <a 
                href="https://github.com/santoshkitkare" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 px-4 py-2 bg-card hover:bg-secondary/50 border border-border rounded-lg transition-colors group"
              >
                <img 
                  src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg"
                  alt="GitHub"
                  className="w-5 h-5 opacity-80 group-hover:opacity-100"
                />
                <span className="text-primary group-hover:text-primary-foreground">github.com/santoshkitkare</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/santosh-itkare-56993a38/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 px-4 py-2 bg-card hover:bg-secondary/50 border border-border rounded-lg transition-colors group"
              >
                <img 
                  src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5 opacity-80 group-hover:opacity-100"
                />
                <span className="text-primary group-hover:text-primary-foreground">linkedin.com/in/santosh-itkare-56993a38</span>
              </a>
              <a 
                href="mailto:santoshkitkare@gmail.com" 
                className="flex items-center gap-3 px-4 py-2 bg-card hover:bg-secondary/50 border border-border rounded-lg transition-colors group"
              >
                <img 
                  src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gmail.svg"
                  alt="Email"
                  className="w-5 h-5 opacity-80 group-hover:opacity-100"
                />
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
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">Send Message</button>
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
