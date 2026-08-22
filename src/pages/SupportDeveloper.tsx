import React, { useState } from "react";
import { Code, Server, Search, Wrench, Mail, Heart } from "lucide-react";

const SupportDeveloper: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !email.match(/^\S+@\S+\.\S+$/)) {
      setError("Please enter a valid name and email address.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    // Opens the user's email client
    window.location.href = `mailto:negisingh2021@gmail.com?subject=Support for Temple Website Developer&body=Hello Sushant,%0D%0A%0D%0AMy name is ${name}.%0D%0A%0D%0A${message || "I would like to support the development of the temple website."}%0D%0A%0D%0ARegards,%0D%0A${name}`;
  };

  const costItems = [
    {
      icon: <Code className="w-6 h-6 text-orange-500" />,
      title: "Continuous Development",
      cost: "₹15,000 – ₹30,000 / month",
      description: "New features, improvements & bug fixes",
    },
    {
      icon: <Server className="w-6 h-6 text-orange-500" />,
      title: "Cloud Hosting",
      cost: "₹2,000 – ₹6,000 / month",
      description: "Reliable & fast hosting on cloud platforms",
    },
    {
      icon: <Search className="w-6 h-6 text-orange-500" />,
      title: "SEO Optimization",
      cost: "₹5,000 – ₹12,000 (one-time)",
      description: "Better visibility on Google & search engines",
    },
    {
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      title: "Maintenance",
      cost: "₹4,000 – ₹10,000 / month",
      description: "Security updates, backups & performance",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-6">
            <Heart className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Support the Developer
          </h1>
          <p className="text-xl text-orange-600 dark:text-orange-400 font-medium max-w-2xl mx-auto">
            Help keep this temple website running, improving, and reaching more
            devotees.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
        {/* Why Support */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Your Support Matters
          </h2>
          <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            <p>
              This website was built with love for Maa Kalinka and the people of
              Ranjeet Moxan. Creating and maintaining a modern, fast, and
              beautiful website involves continuous effort — from coding and
              design to hosting, security, and updates.
            </p>
            <p>
              Your support helps cover the real costs of development and keeps
              this digital space alive so that devotees near and far can stay
              connected with the temple and our village community.
            </p>
          </div>
        </section>

        {/* Approximate Costs */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Approximate Costs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 font-medium mt-1">
                      {item.cost}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Challenges in Building & Maintaining This Website
          </h2>
          <ul className="space-y-4">
            {[
              "Budget constraints for continuous development and long-term maintenance",
              "Ensuring the website remains fast, secure, and mobile-friendly",
              "Regular updates to keep the content and features fresh",
              "Hosting and domain costs that recur every year",
              "Time required for testing, bug fixing, and improvements",
            ].map((challenge, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="text-orange-500 font-bold mt-1">▹</span>
                <span className="text-lg">{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Form */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            If you would like to support the development of this website or have
            any questions, please fill out the form below. I will get back to
            you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Write a short message..."
              />
            </div>

            {error && (
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            )}
            {success && (
              <p className="text-green-600 dark:text-green-400 text-sm">
                Opening your email client... Thank you!
              </p>
            )}

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl transition-colors shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SupportDeveloper;
