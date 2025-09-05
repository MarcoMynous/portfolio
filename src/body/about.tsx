
const About = () => {
  return (
    <div id="about">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-800/50 rounded-3xl my-12 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:text-left text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Who am I?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm a passionate Full Stack Developer with 2+ years of experience
              creating web applications. I specialize in JavaScript technologies
              across the whole stack (React.js, Node.js, Express, MongoDB).
            </p>
            <p className="text-gray-400 mb-6">
              My journey in web development started when I was in high school
              and I've been in love with coding ever since. I enjoy turning
              complex problems into simple, beautiful and intuitive solutions.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you'll find me playing games, reading books,
              or playing soccer.
            </p>
          </div>
          <div className="gap-5 flex flex-col">
            <h4 className="text-2xl font-semibold mb-2 text-white">
              Education
            </h4>
            <div className=" bg-gray-900 p-4 rounded-lg border-l-4 border-indigo-500">
              <h5 className="font-medium text-white">
                Bachelor's in Computer Science
              </h5>
              <p className="text-gray-400 text-sm pt-2">
                Covenant University • 2023-2027
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-red-500">
              <h5 className="font-medium text-white">High School Diploma</h5>
              <p className="text-gray-400 text-sm pt-2">
                St. Augustine's College • 2017-2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
