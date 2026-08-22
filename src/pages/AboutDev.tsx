import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const AboutDev: React.FC = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Gen AI",
    "Agentic AI",
    "Autogen",
  ];

  const achievements = [
    "Developed a full-fledged web application used by thousands of users.",
    "Contributed to open-source projects in the developer community.",
    "Built and deployed scalable applications using modern technologies.",
    "Created and deployed intelligent Chatbots.",
    "Actively working with Autogen (Agentic AI framework).",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* ===== Hero Section (Clean & Professional) ===== */}
      <section className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="relative mb-6">
              <img
                src="/assets/devImage.jpeg"
                alt="Sushant Singh Negi"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-orange-500 shadow-xl"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Sushant Singh Negi
            </h1>

            <p className="text-xl text-orange-600 dark:text-orange-400 font-medium mb-6">
              Software Developer Engineer
            </p>

            <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate about building beautiful, responsive, and meaningful
              web applications. I love creating sleek user experiences and
              exploring the latest in AI and modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* About Me */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            About Me
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 md:p-10 border border-gray-100 dark:border-gray-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5 text-justify">
              I'm passionate about crafting exceptional digital experiences.
              Over the years, I’ve worked with multiple technologies to deliver
              intuitive and high-performance web applications. I love exploring
              new tools and staying up-to-date with the latest advancements in
              web development and artificial intelligence.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              In my free time, you’ll find me learning new technologies, working
              on side projects, or contributing to open-source. I thrive on
              challenges and am always eager to push my boundaries.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl py-5 px-4 text-center shadow-sm hover:shadow-md hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300"
              >
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-100 dark:border-gray-800">
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-orange-500 font-bold text-xl mt-0.5">
                    ▹
                  </span>
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Social Links */}
        <section className="text-center pb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Find Me On
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/NegiSushant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sushant-singh-negi-4382b4243/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://x.com/Negi25_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutDev;
