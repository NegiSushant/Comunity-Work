import React, { useState } from "react";

const SupportDeveloper: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !email.match(/^\S+@\S+\.\S+$/)) {
      setError("Please enter a valid name and email address.");
      return;
    }

    setError("");
    window.location.href = `mailto:abc@gmail.com?subject=How to Support&body=Hello, my name is ${name}. I am interested in supporting the developer.`;
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Detailed Description Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Supporting Our Developer
        </h2>
        <p className="text-gray-600 leading-relaxed text-justify">
          Building a website involves several stages: planning, designing,
          coding, testing, and launching. During planning, we gather
          requirements and define the project scope. The design phase focuses on
          creating a visually appealing and user-friendly layout. Coding
          implements the functionalities, while testing ensures that the website
          works across different devices and browsers. Hosting on cloud
          platforms and performing SEO optimization help the website reach more
          users. Maintaining the site involves regular updates, bug fixes, and
          improvements.
        </p>
      </section>

      {/* Cost Table */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Approximate Costs for Development and Maintenance
        </h3>
        <table className="min-w-full text-left text-gray-600">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="py-2 px-4">Service</th>
              <th className="py-2 px-4">Estimated Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Continuous Development</td>
              <td className="py-2 px-4">$500 - $1000 / month</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Cloud Hosting</td>
              <td className="py-2 px-4">$100 - $300 / month</td>
            </tr>
            <tr>
              <td className="py-2 px-4">SEO Optimization</td>
              <td className="py-2 px-4">$200 - $500 / one-time</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Maintenance</td>
              <td className="py-2 px-4">$150 - $400 / month</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Challenges Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Challenges in Developing a Full-Fledged Web Application
        </h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>
            Budget constraints for continuous development and maintenance.
          </li>
          <li>
            Technical challenges in ensuring scalability and responsiveness.
          </li>
          <li>Managing website security and data protection effectively.</li>
          <li>Keeping up with latest SEO trends to improve visibility.</li>
          <li>Need for ongoing testing and user feedback integration.</li>
        </ul>
      </section>

      {/* Email Form */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Contact Us for Support
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full p-2 border rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 border rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default SupportDeveloper;
