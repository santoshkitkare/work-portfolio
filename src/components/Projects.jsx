import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="p-6 bg-white dark:bg-gray-700 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2">{proj.description}</p>
              <p className="mt-2 font-semibold">Tech Stack: {proj.tech.join(', ')}</p>
              <p className="mt-2 text-blue-500 font-medium">{proj.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
