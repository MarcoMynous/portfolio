
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Ulonnam Ugochukwu Martins. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
