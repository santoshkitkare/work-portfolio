import React, { useState, useEffect } from 'react';
import { API_URL } from './config';

// Single-file React component portfolio
// - Tailwind CSS utility classes are used for styling
// - Replace placeholders (EMAIL_ADDRESS, ACTUAL_TESTIMONIALS) with your real content
// - Contact form posts to /api/contact (implement serverless handler to send email via SMTP or an API)

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  
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

  const skills = [
    { name: 'Python', level: 'Senior' },
    { name: 'Generative AI', level: 'Senior' },
    { name: 'Agentic AI', level: 'Intermediate' },
    { name: 'LangChain', level: 'Learning' },
    { name: 'LangGraph', level: 'Learning' },
    { name: 'MLOps / LLMOps', level: 'Senior' },
    { name: 'AWS (ECS, Lambda, S3)', level: 'Senior' },
    { name: 'Docker & CI/CD (Jenkins)', level: 'Senior' },
    { name: 'Terraform & CloudFormation', level: 'Senior' },
    { name: 'FastAPI', level: 'Senior' },
    { name: 'DynamoDB / PostgreSQL', level: 'Intermediate' },
    { name: 'Vibe Coding', level: 'Intermediate' },
    { name: 'OpenAI Assistant API', level: 'Intermediate' },
    { name: 'Vector Databases', level: 'Intermediate' },
    { name: 'Kubernetes', level: 'Learning' }
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
      role: 'Senior Python Developer (AI/ML)',
      company: 'NextBurb',
      period: 'Jun 2025 - August 2025',
      bullets: [
        'Developed AI/ML solutions to rate and recommend properties based on image quality, market comparison, school ratings, crime rates, and price appreciation trends.',
        'Automated property data extraction from MLS portals to identify high-value listings and top-performing agents, enabling faster sales and better buyer recommendations.'
      ]
    },
    {
      role: 'Senior Data Scientist',
      company: 'Bruviti (K2 Technosoft India Pvt. Ltd)',
      period: 'Oct 2022 - April 2025',
      bullets: [
        'Worked on multiple AI/ML-driven solutions aimed at optimizing appliance service operations for a major home appliance manufacturer.',
        'Delivered advanced LLM-based recommendation systems, time-series demand forecasting, and semantic search solutions.',
        'Automated model pipelines and deployed services using AWS and containerized infrastructure.',
        '- Led development of an LLM-based Parts Recommendation System using GPT-4 and Claude to analyze problem descriptions and suggest likely repair parts.',
        '- Designed pipelines for warranty data ingestion, model inference, and part-BOM mapping for enhanced precision.',
        '- Built forecasting models (ARIMA, SARIMAX, Prophet) to predict demand for spare parts, aiding supply chain planning.',
        '- Developed internal FastAPI services with HTML UI for diagnostics and technician support.',
        '- Used Docker, AWS Lambda, and RabbitMQ for scalable, event-driven processing.',
        '- Improved diagnostic accuracy by processing structured/unstructured claim data and applying explainable ML models.',
        '- Effectively used Cursor AI and ChatGPT as development copilots for rapid code generation, testing snippets, and optimizing workflows—significantly accelerating delivery timelines and reducing debugging effort.'
      ]
    },
    {
      role: 'Python Developer - AI/ML',
      company: 'Bruviti (K2 Technosoft India Pvt. Ltd)',
      period: 'Mar 2020 — September 2022',
      bullets: [
        'Developed and deployed a Parts Prediction System using deep learning models trained on historical warranty claim data. Aimed to enhance first-time fix rates by predicting required parts in advance and improving technician readiness.',
        '- Developed deep learning models trained on warranty claims for part prediction and repair planning.',
        '- Built automated training pipelines for neural network-based models, handling diverse appliance types.',
        '- Integrated model predictions with service portal APIs for technician tools.',
        '- Implemented asynchronous workflows using AWS Lambda and RabbitMQ.'
      ]
    },
    {
      role: 'Technical Lead',
      company: 'Bruviti (K2 Technosoft India Pvt. Ltd)',
      period: 'Oct 2013 — Feb 2020',
      bullets: [
        'As an Embedded System Programmer, worked on Cross compilation, Design and Development of different Framework for Renesas Synergy Platform.'
      ]
    },
    {
      role: 'Technical Lead',
      company: 'Taraspan Solution Pvt. Ltd. Pune',
      period: 'Nov 2022 - Oct 2013',
      bullets: [
        'Working as Technical Lead, participation in design solution for new features, customer requirement analysis, development and bug fixing in WiFi Access Point Controller.'
      ]
    },
    {
      role: 'Technical Lead',
      company: '2Wire IDC Pvt. Ltd. Pune',
      period: 'Apr 2015 - Oct 2012',
      bullets: [
        'Worked extensively on embedded C-based system development for networking and IoT devices. Designed and ported protocol stacks (TCP/IP, TR-069, 6LoWPAN), integrated RTOS (FreeRTOS, ThreadX), and built cellular and wireless frameworks for Renesas Synergy MCUs. Also contributed to system architecture, debugging, product releases, and mentoring junior engineers.',
        '- Worked on C-based embedded systems for telecom and IoT products.',
        '- Ported networking and device provisioning stacks (TCP/IP, TR-069) to multiple platforms.',
        '- Built cellular and wireless frameworks (e.g., using NimbeLink, Quectel) for Renesas MCUs.',
        '- Delivered TR-069 compliant solutions to global ISPs (AT&T, SingTel).',
        '- Mentored junior engineers and contributed to cross-team architecture decisions.'

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased transition-colors">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>

      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold dark:text-white">{name}</h1>
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h3 className="font-semibold dark:text-white">Quick Stats</h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <li className="border dark:border-gray-700 p-3 rounded dark:text-gray-300">20+ years software dev</li>
            <li className="border dark:border-gray-700 p-3 rounded dark:text-gray-300">5+ years Python / AI</li>
            <li className="border dark:border-gray-700 p-3 rounded dark:text-gray-300">Gen AI & MLOps</li>
            <li className="border dark:border-gray-700 p-3 rounded dark:text-gray-300">AWS, Docker, GitHub Action, CI/CD</li>
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8">
          <h3 className="text-2xl font-semibold dark:text-white">About Me</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">I am a seasoned software engineer with deep expertise in Python and a strong background in embedded systems. Over two decades of engineering experience, I have transitioned into building production-ready machine learning systems and MLOps pipelines. I architect scalable solutions, deploy models using robust CI/CD practices, and design automation that reduces time-to-production. I have hands-on experience with PyTorch, TensorFlow, LangChain, LangGraph, and modern LLM tooling. I pair technical leadership with mentorship—guiding teams to deliver reliable, maintainable ML-driven products.</p>

          <div className="mt-6">
            <h4 className="font-medium">Core focus</h4>
            <p className="text-gray-600 text-sm mt-2">Generative AI, Agentic AI, LLM orchestration (LangChain/LangGraph), backend services in Python, production deployment, and cloud-native infrastructure.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Skills & Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center justify-between">
              <span className="text-sm font-medium dark:text-white">{s.name}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                s.level === 'Senior' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                s.level === 'Intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                s.level === 'Learning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
              }`}>{s.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6 dark:text-white">Selected Projects & Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition">
              <h4 className="text-lg font-semibold"><a href={p.url} target="_blank" rel="noreferrer" className="hover:underline dark:text-white">{p.title}</a></h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>
              <div className="mt-4 flex-wrap flex gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs border dark:border-gray-700 dark:text-gray-300 rounded px-2 py-1">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6 dark:text-white">Experience</h3>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div key={t.role} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold dark:text-white">{t.role}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.company}</p>
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-500">{t.period}</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                {t.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6 dark:text-white">Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="text-gray-700 dark:text-gray-300 italic">"{t.quote}"</p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">— {t.who}</p>
            </blockquote>
          ))}
        </div>
        {/* <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">Note: LinkedIn often blocks automated scraping. Paste your exact recommendation quotes into the testimonials array in this file for best results.</p> */}
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold dark:text-white">Get in touch</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Open to full-time and contract roles: Python Developer, Data Analyst, MLOps, LLMOps.</p>

            <div className="mt-4 space-y-2 text-sm dark:text-gray-300">
              <div>GitHub: <a href="https://github.com/santoshkitkare" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">github.com/santoshkitkare</a></div>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/santosh-itkare-56993a38/" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">linkedin.com/in/santosh-itkare-56993a38</a></div>
              <div>Email: <a href="mailto:santoshkitkare@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">santoshkitkare@gmail.com</a></div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-sm dark:text-gray-300">Name</label>
                <input name="name" required className="w-full mt-1 p-2 border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded" />
              </div>
              <div>
                <label className="text-sm dark:text-gray-300">Email</label>
                <input name="email" type="email" required className="w-full mt-1 p-2 border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded" />
              </div>
              <div>
                <label className="text-sm dark:text-gray-300">Message</label>
                <textarea name="message" rows={4} required className="w-full mt-1 p-2 border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded" />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded hover:bg-indigo-700 dark:hover:bg-indigo-600">Send</button>
                <small className="text-xs text-gray-500 dark:text-gray-400">{status || `Or email me directly at santoshkitkare@gmail.com`}</small>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} Santosh Itkare — Portfolio. Built with React + Tailwind.</p>
      </footer>
    </div>
  );
}
