import "@fortawesome/fontawesome-free/css/all.min.css";

const Skill = () => {
  const skills = [
    {
      icon: "fab fa-js",
      name: "JavaScript",
      color: "text-indigo-500",
      note: "Advanced knowledge of ES6+ features and modern JS frameworks.",
    },
    {
      icon: "fab fa-react",
      name: "React.js",
      color: "text-blue-400",
      note: "Building interactive UIs with React hooks and context API.",
    },
    {
      icon: "fab fa-node-js",
      name: "Node.js",
      color: "text-green-400",
      note: "Creating scalable backend services with Express and NestJS.",
    },
    {
      icon: "fas fa-database",
      name: "MongoDB",
      color: "text-blue-500",
      note: "NoSQL database design and implementation with Mongoose.",
    },
    {
      icon: "fab fa-sass",
      name: "Sass/Tailwind",
      color: "text-pink-400",
      note: "Creating beautiful, responsive designs with CSS frameworks.",
    },
    {
      icon: "fab fa-git-alt",
      name: "Git",
      color: "text-yellow-400",
      note: "Version control and collaboration workflows with GitHub/GitLab.",
    },
    {
      icon: "fab fa-figma",
      name: "UI/UX Design",
      color: "text-red-400",
      note: "Creating wireframes and prototypes for better user experience.",
    },
    {
      icon: "fas fa-server",
      name: "DevOps",
      color: "text-purple-400",
      note: "Docker, AWS, CI/CD pipelines for deployment automation.",
    },
  ];
  return (
    <div id="skill">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <div className={`${skill.color} text-4xl mb-4`}>
                <i className={`${skill.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {skill.name}
              </h3>
              <p className="text-gray-400">{skill.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;
