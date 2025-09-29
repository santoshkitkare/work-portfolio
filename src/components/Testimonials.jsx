import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 bg-gray-50 dark:bg-gray-700 rounded shadow hover:shadow-lg transition">
              <p className="italic">"{t.quote}"</p>
              <p className="mt-2 font-semibold">{t.name}</p>
              <p className="text-sm">{t.title} | {t.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
