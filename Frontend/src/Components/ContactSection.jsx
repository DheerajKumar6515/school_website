import { useState } from "react";
import 'remixicon/fonts/remixicon.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };


  return (
   
    <section className="py-12 bg-gray-100 bg-[url('./src/images/png4.png')] bg-no-repeat" id="contact-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 font-Enriqueta">Contact Us</h2>
          <p className="mt-4 font-Roboto text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions? We’d love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Information */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-2xl font-Enriqueta font-semibold text-gray-800">Get In Touch</h3>
            <p className="mt-4 text-slate-800">You can reach us through the following:</p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-center text-slate-800 font-medium">
                <span className="material-icons text-black text-xl mr-2"><i className="ri-map-pin-fill"></i></span>
                123 School Road, Your City, Your State
              </li>
              <li className="flex items-center text-slate-800 font-medium">
                <span className="material-icons text-black text-xl mr-2"><i className="ri-phone-fill"></i></span>
                (123) 456-7890
              </li>
              <li className="flex items-center text-slate-800 font-medium">
                <span className="material-icons text-black text-xl mr-2"><i className="ri-mail-fill"></i></span>
                info@schoolname.com
              </li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-Enriqueta font-semibold text-gray-800">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>


  );
}