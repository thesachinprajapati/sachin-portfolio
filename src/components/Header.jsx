import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Sparkles, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'nav-glass shadow-2xl backdrop-blur-2xl' : 'bg-transparent'
    }`}>
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo with Animation */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Code className="text-blue-400 w-8 h-8 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <Sparkles className="absolute -top-1 -right-1 text-purple-400 w-4 h-4 animate-pulse group-hover:animate-spin" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-2xl font-bold">
              <span className="gradient-text neon-text group-hover:text-shadow-lg transition-all duration-300">Sachin</span>
              <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">.dev</span>
            </div>
            <Zap className="text-yellow-400 w-4 h-4 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
          </div>

          {/* Enhanced Desktop Navigation with Reduced Spacing */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`nav-item-enhanced flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 relative group ${
                  activeSection === item.href.slice(1) 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'hover:bg-white/5 hover:border-white/10 border border-transparent'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg group-hover:animate-bounce transition-all duration-300">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                
                {/* Active indicator */}
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? 'w-full' : 'group-hover:w-full'
                }`}></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* Enhanced Social Links with Animations */}
          <div className="hidden md:flex items-center space-x-3">
            {[
              { icon: Github, href: "#", color: "hover:text-gray-300" },
              { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
              { icon: Mail, href: "#", color: "hover:text-green-400" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-full hover:bg-white/5 hover:scale-110 transform hover:rotate-12 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon size={20} className="group-hover:animate-pulse" />
              </a>
            ))}
            
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-600 to-transparent mx-2"></div>
            
            <button className="btn-primary text-sm px-6 py-2 relative overflow-hidden group">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white opacity-0 group-hover:opacity-100 animate-spin" />
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5 relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
              )}
              <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-2xl border-t border-white/10 rounded-b-2xl mx-4 mb-4">
            <div className="px-6 pt-6 pb-8 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-white/5 border border-transparent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  {activeSection === item.href.slice(1) && (
                    <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
              
              <div className="border-t border-white/10 pt-6 mt-6">
                <div className="flex justify-center space-x-6 mb-4">
                  {[
                    { icon: Github, href: "#", color: "hover:text-gray-300" },
                    { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                    { icon: Mail, href: "#", color: "hover:text-green-400" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-full hover:bg-white/5 transform hover:scale-110`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <button className="btn-primary w-full relative overflow-hidden group">
                  <span className="relative z-10">Hire Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;