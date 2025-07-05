import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Eye,
  Globe,
  Code,
  Sparkles,
} from "lucide-react";
import useVisitorInfo from "../hooks/useVisitorInfo";
import { useEffect } from "react";


const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const currentYear = new Date().getFullYear();
  const { ip, visitorCount, loading } = useVisitorInfo();

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "#", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        {/* Visitor Info Banner */}
        <div className="card-glass p-4 mb-8 scroll-animate">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Eye className="text-blue-400" size={20} />
                <span className="text-gray-300">Visitors:</span>
                <span className="text-white font-semibold bg-blue-500/20 px-2 py-1 rounded backdrop-blur-sm">
                  {loading ? "..." : visitorCount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="text-green-400" size={20} />
                <span className="text-gray-300">Your IP:</span>
                <span className="text-white font-mono text-sm bg-gray-700/30 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
                  {loading ? "Loading..." : ip}
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-400 flex items-center space-x-2">
              <Sparkles size={12} />
              <span>Last updated: {new Date().toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 scroll-animate-left">
            <div className="flex items-center space-x-2">
              <Code className="text-blue-400 w-8 h-8" />
              <h3 className="text-2xl font-bold gradient-text">
                Sachin Prajapati
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital
              solutions that make a positive impact on people's lives.
            </p>
            <div className="flex ">
              <div className="flex gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/15 rounded-full">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="group relative flex items-center justify-center p-2 text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    {link.icon}
                    <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black/80 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4 scroll-animate">
            <h4 className="text-lg font-semibold text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 scroll-animate-right">
            <h4 className="text-lg font-semibold text-gray-100">
              Get In Touch
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>Bokaro Steel City</p>
              <p className="text-blue-400">sachink09053@gmail.com</p>
              <p>+91 7091048449</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                Available for freelance opportunities
              </p>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-green-400">
                  Currently available
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 scroll-animate">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sachin Prajapati. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Made with{" "}
              <Heart size={16} className="text-red-500 mx-1 animate-pulse" />{" "}
              using React & CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
