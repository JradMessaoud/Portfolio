import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
            Let's <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-8">Get in touch</h3>
              
              <div className="space-y-6">
                <a href="mailto:jradmassoud@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/10 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="text-lg font-semibold">jradmassoud@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+21626761788" className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/10 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p className="text-lg font-semibold">+216 26 761 788</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Location</p>
                    <p className="text-lg font-semibold">Tunis, Tunisia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Follow me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/messaoud-jrad-1a9250321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 rounded-xl hover:bg-orange-500 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 rounded-xl hover:bg-red-600 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3"
              >
                <CheckCircle size={20} className="text-green-400" />
                <p className="text-green-400">Message sent successfully!</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-6 py-4 bg-white/10 border ${
                    errors.name ? 'border-red-500' : 'border-white/20'
                  } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-6 py-4 bg-white/10 border ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Your Message"
                  className={`w-full px-6 py-4 bg-white/10 border ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all resize-none`}
                />
                {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
