import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { gsap } from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [massage, setMassage] = useState("");

  useEffect(() => {
    // GSAP animations for the contact page elements with ScrollTrigger
    gsap.from(".contact-heading", {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-heading",
        start: "top 85%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from(".contact-details p, .contact-details .flex", {
      opacity: 0,
      y: 40,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".contact-details",
        start: "top 85%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from(".contact-form input, .contact-form textarea", {
      opacity: 0,
      x: -50,
      duration: 1.5,
      delay: 0.3,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 85%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from(".contact-form button", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-form button",
        start: "top 85%",
        end: "top 60%",
        scrub: true,
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-[#FFD4D0] relative" id="contact">
      <div className="bg-red-500 sm:w-60 sm:h-60 rounded-full absolute mt-30 -ml-40 "></div>
      <div className="mx-auto p-6 rounded-xl flex flex-col md:flex-row gap-6 container py-10">
        {/* Contact Details */}
        <div className="flex items-center md:w-1/2 contact-details">
          <div className="space-y-4 pl-8">
            <h2 className="text-2xl font-bold contact-heading">Get in Touch</h2>
            <p className="text-gray-600">
              Have a question or a project in mind? I'd love to hear from you.
              Let's chat and make something amazing together.
            </p>
            <p className="text-gray-700 flex gap-2 items-center">
              <PiPhoneCallFill />
              <a href="tel:+8801738612417">+8801738612417</a>
            </p>
            <p className="text-gray-700 flex gap-2 items-center ">
              <MdOutlineEmail />
              <a href="mailto:krishnorooy@gmail.com">krishnorooy@gmail.com</a>
            </p>
            <p className="text-gray-700 flex gap-2 items-center">
              <FaMapMarkerAlt />
              Nilphamari, Textile Mills, Darowani
            </p>
            <div className="flex gap-4 items-center">
              <div className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition duration-150">
                <FaFacebook />
              </div>
              <div className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition duration-150">
                <FaInstagramSquare />
              </div>
              <div className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition duration-150">
                <FaTwitter />
              </div>
              <div className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition duration-150">
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="md:w-1/2 contact-form">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={massage}
              onChange={(e) => setMassage(e.target.value)}
              required
              className="w-full p-3 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white p-3 hover:bg-red-500 transition contact-formbutton"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
