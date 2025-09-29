import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="p-6 bg-gray-50 dark:bg-gray-700 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm">{exp.company} | {exp.location} | {exp.date}</p>
              <p className="mt-2">{exp.description}</p>
              <p className="mt-2 font-semibold">Technologies: {exp.tech.join(', ')}</p>
              <ul className="mt-2 list-disc ml-5">
                {exp.achievements.map((a, j) => <li key={j}>{a}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
