import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { send } from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Read EmailJS config from Vite environment variables.
  // Create a `.env` file at the project root with these keys (and restart the dev server):
  // VITE_EMAILJS_SERVICE_ID=your_service_id
  // VITE_EMAILJS_TEMPLATE_ID=your_template_id
  // VITE_EMAILJS_PUBLIC_KEY=your_public_key
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that env vars are present (helps debugging in dev)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const msg = 'Email not available right now.';
      console.warn(msg);
      setError(msg);
      return;
    }

    setError(null);
    setSending(true);

    send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      PUBLIC_KEY
    )
      .then((response) => {
        setError(null);
        alert('Message sent — thank you!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('Email send error:', err);
        let msg = 'Failed to send message.';
        if (err && typeof err === 'object') {
          if (err.status) msg += ` (status: ${err.status})`;
          if (err.text) msg += `: ${err.text}`;
          else if (err.message) msg += `: ${err.message}`;
        } else if (typeof err === 'string') {
          msg += `: ${err}`;
        }
        setError(msg);
      })
      .finally(() => setSending(false));
  };

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sachink09053@gmail.com",
      link: "mailto:sachink09053@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7091048449",
      link: "tel:+917091048449"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bokaro Steel City",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding animated-bg relative bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Gradient Orbs Background */}
      <div className="gradient-orbs">
        <div className="gradient-orb"></div>
        <div className="gradient-orb"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 scroll-animate-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <MessageCircle className="mr-3 text-blue-400" />
                Let's Talk
              </h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 card-glass hover:shadow-xl transition-all duration-300 hover:border-blue-500/30 group scroll-animate"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="card-glass p-6 scroll-animate">
              <h4 className="font-semibold text-gray-100 mb-4">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Fast and reliable delivery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Clean, maintainable code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Excellent communication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Post-launch support
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-8 backdrop-blur-sm scroll-animate-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-100 placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-100 placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-100 placeholder-gray-400"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-100 placeholder-gray-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                aria-busy={sending}
                className="w-full btn-primary flex items-center justify-center space-x-2 group disabled:opacity-60"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
              </button>
              {error && (
                <p className="text-sm text-red-400 mt-3">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;