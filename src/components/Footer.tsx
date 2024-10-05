import React, { useState } from "react";

const Footer: React.FC = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // You can add form submission logic here, such as sending the data to an API
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <footer className="bg-gray-800 text-white p-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 h-32 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Kalinka Mandir</h3>
          <p className="mb-0">Village: Ranjeet Moxan, P.O.: Uniyal Moxan</p>
          <p className="mb-0">Nainidanda, Dhoomakot</p>
          <p className="mb-0">Pauri Garhwal, Uttarakhand, 246161</p>
          <p>Email: negisingh2021@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 JaiKalinkaMaa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
