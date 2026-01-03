import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2, Phone, Zap, Star } from 'lucide-react';

// Particle Effect Component
const ParticleEffect: React.FC = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle particle-cyan';
      const randomX = Math.random() * window.innerWidth;
      const randomDuration = 3 + Math.random() * 2;
      const randomSize = 2 + Math.random() * 4;
      
      particle.style.left = randomX + 'px';
      particle.style.top = window.innerHeight + 'px';
      particle.style.setProperty('--duration', randomDuration + 's');
      particle.style.setProperty('--size', randomSize + 'px');
      particle.style.animation = `floatParticles ${randomDuration}s linear forwards`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => particle.remove(), randomDuration * 1000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return null;
};

function App() {
  const [activeTab, setActiveTab] = useState('web');

  const webProjects = [
    {
      title: "Csgo-game- Stats Backend",
      description: "A RESTful API built with Node.js and Express for fetching CS:GO game statistics.",
      link: "https://github.com/TheOratorEse/csgo-game-stats",
      tech: ["Python", "Flask", "Backend Api", "JWT"]
    },
    {
      title: "Fit2Feet Backend",
      description: "A backend service for the Fit2Feet mobile application, handling user data and shoe size recommendations.",
      link: "https://github.com/TheOratorEse/fit2feetserver",
      tech: ["Python", "Flask", "Machine Learning", "OpenCv Python"]
    },
    {
      title: "Inventory Management System",
      description: "A web-based inventory management system with real-time stock tracking and automated reordering capabilities.",
      link: "https://github.com/TheOratorEse/inventory-management-system",
      tech: ["Vue", "Laravel", "Express", "MongoDB"]
    },
    {
      title: "Real Estate Website",
      description: "A modern real estate platform featuring property listings, search functionality, and user authentication.",
      link: "https://github.com/TheOratorEse/real-estate-website",
      tech: ["React", "Node.js", "Express", "MongoDB"]
    }
  ];

  const mobileProjects = [
    {
      title: "Citi Pass App",
      description: "City Pass App is a comprehensive digital solution designed to streamline the management of visitor access in gated communities and residential estates. The application provides a secure and efficient way to generate, manage, and verify gate passes for visitors, while keeping residents and administrators connected through a robust notification system.",
      link: "https://github.com/TheOratorEse/city-pass-app",
      tech: ["Flutter", "Firebase", "Supabase"]
    },
    {
      title: "WebView App",
      description: "A mobile application that utilizes WebView to convert existing webApp to a Mobile app, display web content, providing a seamless browsing experience.",
      link: "https://github.com/TheOratorEse/webview_app",
      tech: ["Flutter", "Javascript", "WebView", "Firebase"]
    },
    {
      title: "Fit2Feet",
      description: "A mobile application for fitness enthusiasts, feet measurement, and shoe size recommendations.",
      link: "https://github.com/TheOratorEse/delivery-app",
      tech: ["Flutter", "Provider", "Python", "Flask", "Machine Learning"]
    },
    {
      title: "Food Recipe App",
      description: "A cross-platform mobile application for discovering and sharing food recipes with social features.",
      link: "https://github.com/TheOratorEse/food-recipe-app",
      tech: ["Flutter", "Firebase", "Node.js"]
    },

    {
      title: "Taski Manager App",
      description: "A task management application that helps users organize and prioritize their tasks efficiently.",
      link: "https://github.com/TheOratorEse/taski-manager-app",
      tech: ["Flutter", "Supabase", "Sqflite", "Provider"]
    },
    {
      title: "Weather Mobile App",
      description: "A weather forecasting application with location-based services and detailed weather information.",
      link: "https://github.com/TheOratorEse/weather-mobile-app",
      tech: ["Flutter", "Provider", "Weather API", "Geolocation", "Firebase"]
    },
    {
      title: "NaijaConnect Mobile App",
      description: "A social networking application for connecting with people in Nigeria, featuring chat and profile functionalities.",
      link: "https://play.google.com/store/apps/details?id=com.naija.connect",
      tech: ["React Native", "Laravel", "Redux", "Paystack"]

    },
    {
      title: "CycleKit Mobile App",
      description: "A mobile application for Tracking female cycle, ovulation, fertility and getting sanitary products.",
      link: "https://github.com/TheOratorEse/cyclekit",
      tech: ["React Native", "Redux", "Node.js"]
    }
  ];

  const techStacks = [
    "Flutter", "Laravel", "Python", "Flask",
    "JavaScript", "TypeScript", "React", "React Native",
    "Node.js", "Express.js", "MongoDB", "PostgreSQL",
    "Firebase", "Supabase", "Redux", "REST API", "Git", "CI/CD",
    "HTML5", "CSS3", "Tailwind CSS", "JWT", "Docker", "Kubernetes",
    "AWS", "Heroku", "Vercel", "Netlify", "Figma", "Postman"
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white font-poppins overflow-hidden">
      {/* Particle Effect */}
      <ParticleEffect />

      {/* Animated background grid */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 scan-line" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-20 flex flex-col items-center text-center relative z-10">
        {/* Decorative top accent */}
        <div className="mb-12 flex items-center gap-3 justify-center animate-slide-in-up">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-neon-cyan animate-pulse"></div>
          <Zap size={20} className="text-neon-cyan animate-pulse-ring" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-neon-cyan animate-pulse"></div>
        </div>

        {/* Profile Photo - Squircle */}
        <div className="mb-12 relative group animate-bounce-in">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan rounded-squircle blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan rounded-squircle opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
          <img 
            src="https://i.postimg.cc/SRKzBXHr/eseiwi.jpg"
            alt="Eseiwi Omorogbe"
            className="relative w-56 h-56 rounded-squircle border-2 border-neon-cyan shadow-2xl animate-float object-cover hover-glow"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in tracking-tight">
          <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan bg-clip-text text-transparent glow-text">
            Eseiwi Omorogbe
          </span>
        </h1>
        <div className="flex items-center justify-center gap-2 mb-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-8 h-1 bg-gradient-to-r from-neon-cyan to-transparent"></div>
          <p className="text-xl md:text-2xl text-neon-cyan tracking-widest font-space">FULL STACK DEVELOPER</p>
          <div className="w-8 h-1 bg-gradient-to-l from-neon-cyan to-transparent"></div>
        </div>
        
        {/* About Section */}
        <div className="max-w-3xl mx-auto mb-12 glass-effect p-8 rounded-lg border-2 border-neon-cyan border-opacity-30 hover:border-opacity-60 transition-all animate-slide-in-up hover-lift" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold mb-4 text-neon-cyan flex items-center justify-center gap-2">
            <Star size={24} className="animate-pulse" /> ABOUT_ME
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Passionate Full Stack Developer crafting high-performance applications with cutting-edge technologies. 
            Specializing in Flutter, React, Python, and modern backend architectures. Transforming ideas into scalable, 
            robust solutions that push boundaries and deliver excellence.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 mb-12 stagger-animation">
          <a href="https://github.com/TheOratorEse" target="_blank" rel="noopener noreferrer" 
             className="group relative hover-glow">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative px-4 py-2 bg-navy-bg border border-neon-cyan rounded-lg hover:bg-navy-light transition-colors hover-lift">
              <Github size={24} className="text-neon-cyan" />
            </div>
          </a>
          <a href="https://linkedin.com/in/eseiwi-omorogbe" target="_blank" rel="noopener noreferrer"
             className="group relative hover-glow">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative px-4 py-2 bg-navy-bg border border-neon-blue rounded-lg hover:bg-navy-light transition-colors hover-lift">
              <Linkedin size={24} className="text-neon-blue" />
            </div>
          </a>
          <a href="mailto:esewi.omorogbe@gmail.com" 
             className="group relative hover-glow">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative px-4 py-2 bg-navy-bg border border-neon-cyan rounded-lg hover:bg-navy-light transition-colors hover-lift">
              <Mail size={24} className="text-neon-cyan" />
            </div>
          </a>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-20 relative z-10 section-enter">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">[ TECH STACKS_ ]</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4 animate-slide-in-up">
            <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
            <Zap size={20} className="text-neon-cyan animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-l from-neon-cyan to-neon-blue"></div>
          </div>
        </div>
        <div className="glass-effect border-2 border-neon-cyan border-opacity-20 rounded-lg p-8 hover-lift">
          <div className="flex flex-wrap justify-center gap-4 stagger-animation">
            {techStacks.map((tech, index) => (
              <span key={index} 
                    className="tech-tag px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:text-neon-cyan"
                    style={{ animationDelay: `${index * 0.05}s` }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20 relative z-10 section-enter">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">[ PROJECTS_DONE ]</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4 animate-slide-in-up">
            <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
            <Zap size={20} className="text-neon-cyan animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-l from-neon-cyan to-neon-purple"></div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-4 animate-slide-in-up">
          <button 
            onClick={() => setActiveTab('web')}
            className={`px-8 py-3 font-medium rounded-lg border-2 transition-all duration-300 hover-lift ${
              activeTab === 'web' 
                ? 'bg-gradient-to-r from-neon-cyan to-neon-blue border-neon-cyan text-navy-bg' 
                : 'border-neon-cyan border-opacity-40 text-neon-cyan hover:border-opacity-100'
            }`}
          >
            <Code2 className="inline mr-2" size={18} />
            Web Apps
          </button>
          <button 
            onClick={() => setActiveTab('mobile')}
            className={`px-8 py-3 font-medium rounded-lg border-2 transition-all duration-300 hover-lift ${
              activeTab === 'mobile' 
                ? 'bg-gradient-to-r from-neon-cyan to-neon-blue border-neon-cyan text-navy-bg' 
                : 'border-neon-cyan border-opacity-40 text-neon-cyan hover:border-opacity-100'
            }`}
          >
            <Phone className="inline mr-2" size={18} />
            Mobile Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {(activeTab === 'web' ? webProjects : mobileProjects).map((project, index) => (
            <div key={index} 
                 className="group relative glass-effect p-6 rounded-lg border-2 border-neon-cyan border-opacity-20 hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden hover-lift stagger-animation"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan via-transparent to-neon-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-neon-cyan">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors font-medium btn-neon">
                  VIEW_PROJECT <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="container mx-auto px-4 py-20 relative z-10 section-enter">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">[ CREDENTIALS ]</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4 animate-slide-in-up">
            <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
            <Zap size={20} className="text-neon-cyan animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-l from-neon-cyan to-neon-blue"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 stagger-animation">
          <a href="https://drive.google.com/file/d/1Z_dhu1wjbp-HVp2RIVK4xL248QlJo838/view?usp=drive_link" 
             target="_blank"
             className="group relative hover-glow">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative inline-flex items-center gap-2 bg-navy-bg px-8 py-4 rounded-lg border-2 border-neon-cyan text-neon-cyan hover:text-white hover:bg-navy-light transition-all btn-neon hover-lift">
              <FileText size={20} />
              VIEW_RESUME
            </div>
          </a>
          <a href="https://linkedin.com/in/eseiwi-omorogbe" 
             target="_blank"
             rel="noopener noreferrer"
             className="group relative hover-glow">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative inline-flex items-center gap-2 bg-navy-bg px-8 py-4 rounded-lg border-2 border-neon-cyan text-neon-cyan hover:text-white hover:bg-navy-light transition-all btn-neon hover-lift">
              <Linkedin size={20} />
              LINKEDIN_PROFILE
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-neon-cyan border-opacity-20 relative z-10">
        <p className="text-gray-400 text-sm">
          © 2026 Eseiwi Omorogbe| All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;