
const Project = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description:
                "A full-featured online store with payment integration and admin dashboard.",
            stack: ["React", "Node.js", "MongoDB", "Stripe"],
            codeLink: "#",
            liveLink: "#",
            icon: "fas fa-shopping-cart",
            bg: "from-green-500 to-emerald-600",
        },
        {
            title: "MovieMate",
            description:
                "A responsive movie browsing website built with Vite, React, JavaScript, and TailwindCSS, integrating a third-party API for real-time data.",
            stack: ["Vite", "React", "JavaScript", "TailwindCSS"],
            codeLink: "https://github.com/MarcoMynous/Movie_Mate",
            liveLink: "https://movie-mate-jx3e.onrender.com/",
            icon: "fas fa-film",
            bg: "from-indigo-500 to-purple-600",
        },
        {
            title: "MERN Authentication System",
            description:
                "A secure authentication system with user registration, login, protected routes, and BetterAuth integration.",
            stack: ["MongoDB", "Express.js", "React", "Node.js"],
            codeLink: "#",
            liveLink: "#",
            icon: "fas fa-lock",
            bg: "from-orange-500 to-red-600",
        },
    ];

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
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition duration-500 ease-in-out"
                        >
                            {/* Dynamic Background + Icon */}
                            <div
                                className={`h-48 bg-gradient-to-r ${project.bg} flex items-center justify-center`}
                            >
                                <i className={`${project.icon} text-6xl text-white`}></i>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-gray-800 text-xs rounded-full text-white"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex space-x-3">
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-400 hover:text-indigo-300"
                                    >
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/MarcoMynous/"
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
