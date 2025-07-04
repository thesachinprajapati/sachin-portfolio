import { ExternalLink, Github, Star } from "lucide-react";
import { useEffect } from "react";

const Projects = () => {
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

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      title: "Smart Attendance System",
      description:
        "A major project using facial recognition to mark student attendance automatically. Built with Python, OpenCV, and Tkinter GUI.",
      image:
        "https://images.pexels.com/photos/1806911/pexels-photo-1806911.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "OpenCV", "Tkinter"],
      liveUrl: "#",
      githubUrl: "https://github.com/thesachinprajapati/smart-attendance",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using React and Tailwind CSS to showcase projects, skills, and contact information with smooth scroll animations.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "https://thesachinprajapati.github.io/sachin-portfolio/",
      githubUrl: "https://github.com/thesachinprajapati/sachin-portfolio",
      featured: true,
    },
    {
      title: "Coaching Institute Website",
      description:
        "A static website for a coaching institute built using HTML, CSS, and Bootstrap. Includes course offerings, schedule, contact form, and gallery.",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/thesachinprajapati/coaching-website",
      featured: false,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      comingSoon: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current weather conditions, forecasts, and interactive maps using multiple weather APIs.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      comingSoon: true,
    },
    {
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for social media management with data visualization, scheduling features, and performance tracking.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      comingSoon: true,
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-gray-900 animated-bg relative">
      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glass overflow-hidden group backdrop-blur-sm relative scroll-animate">
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <Star size={12} />
                  <span>Featured</span>
                </div>
              )}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 
      ${project.comingSoon ? "blur-sm brightness-50" : ""}
    `}
                />

                {project.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold bg-black/70 px-4 py-2 rounded">
                      Coming Soon
                    </span>
                  </div>
                )}

                {!project.comingSoon && (
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                )}

                {!project.comingSoon && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm">
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-gray-700/80 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm">
                      <Github size={20} />
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium border border-blue-500/30 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-animate">
          <a href="#" className="btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
