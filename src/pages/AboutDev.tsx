import React from "react";

const AboutDev: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Hello, I'm [Sushant Singh Negi]
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
            I'm a [Software Developer] specializing in building beautiful,
            responsive web applications. I have a passion for creating sleek and
            user-friendly experiences.
          </p>
        </div>

        {/* Image and Bio Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGlG_ZczLD-8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726897221169?e=1733356800&v=beta&t=A5y0Xgnl2tNrNRRmYUi3iuW-jsJudu1IEry8FsWJHzM"
              alt="Profile"
              className="rounded-full mx-auto md:mx-0 h-80 w-80 object-cover border-4 border-gray-300 shadow-lg"
            />
          </div>

          {/* Bio Description */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-justify text-gray-700 leading-relaxed mb-4">
              I'm passionate about crafting exceptional digital experiences.
              Over the years, I’ve worked with multiple technologies to deliver
              intuitive web applications. I love to explore new technologies and
              stay up-to-date with the latest advancements in web development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In my free time, you’ll find me [your hobbies or activities] or
              working on side projects. I thrive on challenges and am always
              eager to learn new skills and push my boundaries.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-lg p-6 text-center rounded-lg">
              <p className="text-xl font-semibold">JavaScript</p>
            </div>
            <div className="bg-white shadow-lg p-6 text-center rounded-lg">
              <p className="text-xl font-semibold">React.js</p>
            </div>
            <div className="bg-white shadow-lg p-6 text-center rounded-lg">
              <p className="text-xl font-semibold">TypeScript</p>
            </div>
            <div className="bg-white shadow-lg p-6 text-center rounded-lg">
              <p className="text-xl font-semibold">Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">Achievements</h2>
          <ul className="space-y-4">
            <li className="text-lg text-gray-700">
              🎉 Developed a full-fledged web app used by thousands of users.
            </li>
            <li className="text-lg text-gray-700">
              🎉 Contributed to open-source projects in the developer community.
            </li>
            <li className="text-lg text-gray-700">
              🎉 Built and deployed scalable applications using modern
              technologies.
            </li>
          </ul>
        </div>

        {/* Links to Profiles */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Find me on</h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/NegiSushant"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer" // Improves security
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sushant-singh-negi-4382b4243/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer" // Improves security
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Negi25_"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer" // Improves security
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDev;
