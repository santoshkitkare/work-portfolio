import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-gray-900 dark:text-white">Santosh Itkare</div>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#experience" className="hover:text-blue-500">Experience</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
}
