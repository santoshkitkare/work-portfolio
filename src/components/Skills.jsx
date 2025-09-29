import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={i} className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded shadow">
                <Icon className="text-4xl mb-2" />
                <p className="font-medium">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
