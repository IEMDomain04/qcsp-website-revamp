'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    // Show success message or redirect
  };

  return (
    <>
      <NavBar />
      <section id="contact">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Please send your message to Quantum Computing Society of the Philippines. We will reply as soon as possible!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-8 mx-50 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl font-extrabold text-accent mb-6 leading-tight sm:text-3xl">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/80 text-black font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>


          {/* Socials and Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black/50 p-8 mx-20"
          >
            <h3 className="text-xl font-extrabold text-accent mb-6 leading-tight sm:text-3xl">
              Connect With Us
            </h3>
            <div className="flex justify-around items-center space-y-6">


              <div className="flex space-x-4">
                <Mail className="text-accent w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-slate-300">info@yourcompany.com</p>
                </div>
              </div>


              <div className="flex space-x-4">
                <Phone className="text-accent w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>
              </div>


              <div className="flex space-x-4">
                <MapPin className="text-accent w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-slate-300">123 Quantum Avenue, Tech City, TC 98765</p>
                </div>
              </div>


              <div>
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-accent transition-colors duration-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-accent transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-accent transition-colors duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-accent transition-colors duration-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Contact