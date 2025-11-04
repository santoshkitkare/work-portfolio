import React from 'react';

// Single-file React component portfolio
// - Tailwind CSS utility classes are used for styling
// - Replace placeholders (EMAIL_ADDRESS, ACTUAL_TESTIMONIALS) with your real content
// - Contact form posts to /api/contact (implement serverless handler to send email via SMTP or an API)

export default function Portfolio() {
  const name = 'Santosh Itkare';
  const title = 'Senior Python Developer • MLOps & LLMOps Engineer';
  const tagline = 'Building production-grade ML systems, automations, and LLM-driven developer tools.';

  const skills = [
    'Python',
    'Generative AI',
    'Agentic AI',
    'LangChain',
    'LangGraph',
    'Vibe Coding',
    'MLOps / LLMOps',
    'AWS (ECS, Lambda, S3)',
    'Docker & CI/CD (Jenkins)',
    'Terraform & CloudFormation',
    'PyTorch / TensorFlow',
    'FastAPI / Flask',
    'DynamoDB / PostgreSQL'
  ];

  // Projects pulled from GitHub (public repos) — update descriptions and links as needed
  const projects = [
    {
      title: 'Parts Prediction (Parts Prediction Service)',
      desc: 'End-to-end parts prediction pipeline: problem classification, cause analysis, and parts recommendation. Deployed with Docker, AWS, and automated CI/CD.',
      tech: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'AWS'],
      url: '#'
    },
    {
      title: 'LLMOps (llmops)',
      desc: 'Research & proof-of-concept notebooks around evaluation and orchestration for LLM-powered systems.',
      tech: ['Python', 'Jupyter', 'LLM Tooling'],
      url: 'https://github.com/santoshkitkare/llmops'
    },
    {
      title: 'AI Support Ticket Classifier',
      desc: 'Streamlit app to auto-tag support tickets using a generative model to improve triage and routing.',
      tech: ['Python', 'Streamlit', 'NLP'],
      url: 'https://github.com/santoshkitkare/ai-support-ticket-classifier'
    },
    {
      title: 'Car Service Booking API',
      desc: 'REST API for bookings with slot management — FastAPI/Flask + DynamoDB/Postgres (POC).',
      tech: ['FastAPI', 'DynamoDB', 'Postgres'],
      url: 'https://github.com/santoshkitkare/car-service-booking-app'
    }
  ];

  // Experience timeline (summarized). Replace company names and dates with exact values if needed.
  const timeline = [
    {
      role: 'Senior Python Developer & MLOps Engineer',
      company: 'Confidential / Contractor Roles',
      period: '2019 — Present',
      bullets: [
        'Led deployment of ML models in production using Jenkins, Docker, Terraform, and CloudFormation on AWS.',
        'Built parts prediction solution integrating LLMs and classical models to suggest BOM parts and root causes.',
        'Mentored engineers and led technical design reviews for ML/infra projects.'
      ]
    },
    {
      role: 'Embedded Systems Engineer (C)',
      company: 'Various',
      period: '2005 — 2019',
      bullets: [
        '20 years of software development experience across embedded C and Python.',
        'Led firmware and device-level integrations in manufacturing environments.'
      ]
    }
  ];

  // NOTE: LinkedIn scraping is often blocked; please paste any exact testimonial quotes into the TESTIMONIALS array below.
  const testimonials = [
    {
      quote: 'Replace this placeholder with a direct recommendation from LinkedIn or a manager. Example: "Santosh consistently delivered high-quality ML solutions and improved our deploy cycles."',
      who: 'Colleague / Manager'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase text-indigo-600 font-medium">Hi, I'm</p>
          <h2 className="text-4xl font-bold leading-tight">{name}</h2>
          <p className="mt-4 text-lg text-gray-700">{tagline}</p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:opacity-95">View Work</a>
            <a href="#contact" className="inline-block px-5 py-3 border border-gray-300 rounded-lg">Contact Me</a>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p><strong>Positioning:</strong> Python Developer, Data Analyst, MLOps & LLMOps Engineer — experienced in production ML, model ops, and generative AI tooling.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold">Quick Stats</h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <li className="border p-3 rounded">20+ years software dev</li>
            <li className="border p-3 rounded">5+ years Python / AI</li>
            <li className="border p-3 rounded">ML production & MLOps</li>
            <li className="border p-3 rounded">AWS, Docker, CI/CD</li>
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-4 text-gray-700">I am a seasoned software engineer with deep expertise in Python and a strong background in embedded systems. Over two decades of engineering experience, I have transitioned into building production-ready machine learning systems and MLOps pipelines. I architect scalable solutions, deploy models using robust CI/CD practices, and design automation that reduces time-to-production. I have hands-on experience with PyTorch, TensorFlow, LangChain, LangGraph, and modern LLM tooling. I pair technical leadership with mentorship—guiding teams to deliver reliable, maintainable ML-driven products.</p>

          <div className="mt-6">
            <h4 className="font-medium">Core focus</h4>
            <p className="text-gray-600 text-sm mt-2">Generative AI, Agentic AI, LLM orchestration (LangChain/LangGraph), backend services in Python, production deployment, and cloud-native infrastructure.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
              <span className="text-sm font-medium">{s}</span>
              <span className="text-xs text-gray-500">Senior</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6">Selected Projects & Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h4 className="text-lg font-semibold"><a href={p.url} target="_blank" rel="noreferrer" className="hover:underline">{p.title}</a></h4>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <div className="mt-4 flex-wrap flex gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs border rounded px-2 py-1">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6">Experience</h3>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div key={t.role} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{t.role}</h4>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
                <div className="text-sm text-gray-400">{t.period}</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
                {t.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6">Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-4 text-sm text-gray-600">— {t.who}</p>
            </blockquote>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">Note: LinkedIn often blocks automated scraping. Paste your exact recommendation quotes into the testimonials array in this file for best results.</p>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold">Get in touch</h4>
            <p className="mt-2 text-sm text-gray-600">Open to full-time and contract roles: Python Developer, Data Analyst, MLOps, LLMOps.</p>

            <div className="mt-4 space-y-2 text-sm">
              <div>GitHub: <a href="https://github.com/santoshkitkare" target="_blank" rel="noreferrer" className="text-indigo-600">github.com/santoshkitkare</a></div>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/santosh-itkare-56993a38/" target="_blank" rel="noreferrer" className="text-indigo-600">linkedin.com/in/santosh-itkare-56993a38</a></div>
              <div>Email: <a href="mailto:EMAIL_ADDRESS" className="text-indigo-600">EMAIL_ADDRESS</a></div>
            </div>
          </div>

          <div>
            <form action="/api/contact" method="POST" className="space-y-3">
              <input type="hidden" name="subject" value={`Contact from portfolio - ${name}`} />
              <div>
                <label className="text-sm">Name</label>
                <input name="name" required className="w-full mt-1 p-2 border rounded" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input name="email" type="email" required className="w-full mt-1 p-2 border rounded" />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea name="message" rows={4} required className="w-full mt-1 p-2 border rounded" />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
                <small className="text-xs text-gray-500">Or email me directly at EMAIL_ADDRESS</small>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">© {new Date().getFullYear()} {name} — Portfolio. Built with React + Tailwind.</p>
      </footer>
    </div>
  );
}
