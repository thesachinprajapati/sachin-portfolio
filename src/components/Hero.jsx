import { ArrowDown, Download, Sparkles, Code2, Zap } from "lucide-react";
import Magnet from "./Magnet";
const Hero = () => {
  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 15,
    animationDuration: 15 + Math.random() * 10,
  }));

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center animated-bg relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Gradient Orbs Background */}
      <div className="gradient-orbs">
        <div className="gradient-orb"></div>
        <div className="gradient-orb"></div>
        <div className="gradient-orb"></div>
      </div>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Particles */}
      <div className="particles-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}></div>
        ))}
      </div>

      <div className="container-max section-padding text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
            <img
              src="src\assets\futuristic-robot-listening-music-headphones.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl animate-float relative z-10 border-4 border-blue-500/30"
            />
            <div className="absolute top-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-gray-900 animate-pulse"></div>
          </div>

          <div className="mb-6 flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
              <Sparkles className="text-yellow-400 w-4 h-4" />
              <span className="text-sm text-gray-300">Available for work</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
              <Code2 className="text-blue-400 w-4 h-4" />
              <span className="text-sm text-gray-300">
                Full Stack Developer
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text neon-text relative">
              Sachin Prajapati
              <Zap className="absolute -top-2 -right-8 text-yellow-400 w-6 h-6 animate-bounce" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer & UI/UX Designer passionate about creating
            <span className="text-blue-400 font-semibold"> beautiful</span> and
            <span className="text-purple-400 font-semibold">
              {" "}
              functional
            </span>{" "}
            digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            
            <a href="#projects" className="btn-primary group">
              <span>View My Work</span>
              <Sparkles className="ml-2 w-4 h-4 group-hover:animate-spin" />
            </a>
            <Magnet padding={30} disabled={false} magnetStrength={5}>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
            </Magnet>
             <Magnet padding={100} disabled={false} magnetStrength={5}>
            <a
              href="/sachin.pdf"
              download
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gray-800/50">
              <Download size={20} />
              Download CV
            </a>
           </Magnet>
            
              
            
          </div>

          <div className="animate-bounce">
            <a
              href="#about"
              className="inline-block text-gray-500 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800/50">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
