import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-800/50 rounded-3xl my-12 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:scale-110 transition duration-500 ease-in-out">
            <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <i className="fas fa-project-diagram text-6xl text-white"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                E-commerce Platform
              </h3>
              <p className="text-gray-400 mb-4">
                A full-featured online store with payment integration and admin
                dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-white">
                  React
                </span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-white">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-white">
                  MongoDB
                </span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-white">
                  Stripe
                </span>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  <i className="fas fa-external-link-alt"></i> Live
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="text-white px-6 py-3 border border-gray-700 rounded-md font-medium hover:bg-gray-800 transition-all inline-flex items-center"
          >
            <i className="fab fa-github mr-2"></i> View All Projects on GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Project;
