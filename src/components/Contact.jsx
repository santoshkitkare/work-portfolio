export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-4">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" name="name" placeholder="Full Name *" required className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
          <input type="email" name="email" placeholder="Email Address *" required className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
          <input type="text" name="company" placeholder="Company" className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
          <input type="text" name="role" placeholder="Your Role" className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
          <textarea name="message" placeholder="Your Message *" required rows="5" className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Send Message</button>
          <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">To receive messages, connect this form with a service like StaticForms or Formspree for static sites.</p>
        </form>
      </div>
    </section>
  );
}
