"use client"; // Add this line to mark the component as a client component

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu open/close state
  };

  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can call your backend API to send the message
    console.log(formData); // For now, log the form data to console
    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main
      className="parallax bg-fixed bg-center bg-cover min-h-screen"
      style={{ backgroundImage: "url('./ani.gif')" }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-4 md:px-10 bg-gradient-to-r from-gray-900 to-navy-900  shadow-lg">
        <div className="text-3xl font-bold text-blue-100 font-serif">RamshN.</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <span>&times;</span> // Close icon
            ) : (
              <span>&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute top-16 left-0 w-full text-xl font-serif bg-slate-800 md:bg-transparent md:static md:flex justify-end gap-6 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-10`}
        >
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block md:inline-block py-4 md:py-0 text-center hover:text-gray-400 transition-colors duration-300 text-white font-bold"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="about" className="flex flex-col md:flex-row gap-6 items-center mt-10 px-4 md:px-10">
        {/* Left side */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-300 font-serif">
            Hi, I’m Ramsha Noshad
          </h1>
          <p className="text-base md:text-lg text-gray-300 mt-4">
            A full-stack web developer with 3 years of experience. I specialize in HTML, CSS, JavaScript, Next.js, React.js, TypeScript, and Tailwind CSS.
          </p>
          <br />
          <br />
          <a 
            href="/Ramsha Noshad Resume.pdf" 
            download 
            className="bg-white text-black font-bold py-3 px-4 md:px-6 mt-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Download Resume 
          </a>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <Image
            width={600}
            height={400}
            className="max-w-full h-auto"
            src="/BGDP.png"
            alt="Abstract background"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 md:px-10 bg-transparent">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white font-serif">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
          {[
            { src: "/hmtll.png", alt: "HTML" },
            { src: "/css4.webp", alt: "CSS" },
            { src: "/js.png", alt: "JavaScript" },
            { src: "/tsss.webp", alt: "TypeScript" },
            { src: "/react.png", alt: "React" },
            { src: "/next1.png", alt: "Next.js" },
          ].map((skill) => (
            <div className="flex flex-col items-center" key={skill.alt}>
              <Image src={skill.src} alt={skill.alt} width={60} height={60} />
              <p className="text-white mt-4 font-bold">{skill.alt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-10 bg-transparent">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white font-serif">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { src: "/p1.png", title: "Project 1", desc: "CSS Tailwind card slider" },
            { src: "/p2.png", title: "Project 2", desc: "Sleek portfolio website" },
            { src: "/p3.png", title: "Project 3", desc: "Next.js Stopwatch app" },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-gray-700 to-navy-900 text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <Image src={project.src} width={400} height={300} className="rounded-lg mb-4" alt={project.title} />
              <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <button className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      <br />
      <br />
        {/* Contact Form */}
      <section id= "contact" className="py-16 px-4 md:px-10 bg-transparent">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white font-serif">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-navy-900 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-white font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full"
          >
            Send Message
          </button>
        </form>
      </section>
  

          {/* Footer Section */}
          <footer className="bg-gradient-to-r from-gray-800 to-navy-900 text-white mt-10 py-8 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif">
            Why You Should Hire Me:

            </h3>
            <p className="text-gray-300">
            I’m dedicated to delivering tailored, high-quality solutions with a focus on clear communication and collaboration.


            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif">
              Email Adress
            </h3>
            <p className="text-gray-300 mb-4">Email: rimi@example.com</p>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif">
              Phone Number
            </h3>
            <p className="text-gray-300 mb-4"> +9203102001220</p>
            
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white font-serif">
             Socials links
            </h3>
            
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-white font-bold"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-white font-bold"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-gray-400 transition-colors text-white font-bold"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
    

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Ramsha. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}

