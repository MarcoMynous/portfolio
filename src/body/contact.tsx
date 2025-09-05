
const Contact = () => {
  return (
    <div id="contact">
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-indigo-400 mr-4 mt-1">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a
                    href="mailto:john.doe@example.com"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    ogochukwuulonnam986@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-purple-400 mr-4 mt-1">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    +234 907 800 0991
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Send Me a Message
            </h3>
            <form>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="text-white w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" text-white w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="text-white w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="text-white w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md font-medium hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
