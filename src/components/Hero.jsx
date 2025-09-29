export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Santosh Itkare</h1>
      <h2 className="text-xl md:text-2xl mb-6">MLOps Engineer & Senior Python Developer</h2>
      <p className="max-w-xl mb-6">Transforming AI/ML concepts into production-ready solutions that drive business value.</p>
      <div className="space-x-4">
        <a href="#contact" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Get In Touch</a>
        <a href="#projects" className="px-6 py-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">View My Work</a>
      </div>
    </section>
  );
}
