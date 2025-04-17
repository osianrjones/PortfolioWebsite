import React, { useState, useRef } from 'react';
import {useInView} from "react-intersection-observer";
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to a server
    emailjs.sendForm('service_ux816co' , 'template_xtb09ox', form.current, 'v5xNEJjiK8q5CHYjz')
    .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
            console.log(error);
          alert("Failed to send message. Try again later.");
        }
      );
    console.log('Form submitted:', { name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  const {ref, inView} = useInView({
    threshold: 1,
    }); 

  return (
    <div className={`transition-opacity duration-1000 ease-in-out ${ inView ? "opacity-100" : "opacity-0"
            } container mx-auto p-4 mt-5 mb-32 relative w-1/2`} ref={ref} >
                 <div className="absolute inset-0 bg-opacity-40 bg-sky-950 rounded-md shadow-lg"></div>
    <div className="relative text-white">
      <h2 className="inset-0 text-4xl font-bold text-center mb-4 text-white">Contact Me</h2>
      <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto bg-sky-950 shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded text-sky-950 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full text-sky-950 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full text-sky-950 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;

