import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';
import { useEffect } from 'react';

const About = () => {
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

    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams"
    }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, label: "Hack Horizon (Google DevOps Ranchi)", value: "6th Rank" },
    { icon: <Code className="w-6 h-6" />, label: "Projects Completed", value: "5+" },
    { icon: <Coffee className="w-6 h-6" />, label: "Cups of Coffee", value: "100+" },
    { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "0" }
  ];

  return (
    <section id="about" className="section-padding wave-bg relative">
      <div className="container-max relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer with 1+ years of experience creating digital solutions
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="scroll-animate-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Working"
                className="rounded-2xl shadow-2xl relative z-10 border border-gray-700/50"
              />
            </div>
          </div>

          <div className="space-y-6 scroll-animate-right">
            <h3 className="text-2xl font-bold text-gray-100">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-400 leading-relaxed">
              With a background in both design and development, I bring a unique perspective 
              to every project. I specialize in React, Node.js, and modern web technologies, 
              always staying up-to-date with the latest trends and best practices.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 card-glass scroll-animate">
                  <div className="text-blue-400 mb-2 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-100 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-glass p-6 text-center scroll-animate-scale">
              <div className="text-blue-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-100 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;