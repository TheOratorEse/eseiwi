import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ExternalLink, Smartphone, ArrowDown, Globe, Menu, X, Code, Server, Database, Smartphone as MobileIcon, Cloud, Lock, Zap, ChevronDown, Briefcase, User, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const skills = [
  { category: "Frontend", icon: Code, items: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Figma"] },
  { category: "Backend", icon: Server, items: ["Node.js", "Express.js", "Python", "Flask", "Laravel", "REST API", "GraphQL"] },
  { category: "Database", icon: Database, items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "SQL"] },
  { category: "Mobile", icon: MobileIcon, items: ["Flutter", "React Native", "Android", "iOS"] },
  { category: "Cloud", icon: Cloud, items: ["AWS", "Heroku", "Vercel", "Netlify", "Docker"] },
  { category: "Tools", icon: Zap, items: ["Git", "CI/CD", "Postman", "Jira", "Figma"] },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Building scalable web and mobile applications using modern technologies.",
  },
  {
    role: "Mobile Developer",
    company: "AppWorks Studio",
    period: "2021 - 2023",
    description: "Developed cross-platform mobile applications for various clients.",
  },
  {
    role: "Junior Developer",
    company: "StartUp Hub",
    period: "2019 - 2021",
    description: "Started career building MVPs and learning modern development practices.",
  },
];

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
    description: "A web-based inventory management system with real-time stock tracking.",
    link: "https://github.com/TheOratorEse/inventory-management-system",
    tech: ["Vue", "Laravel", "Express", "MongoDB"]
  },
  {
    title: "Real Estate Website",
    description: "A modern real estate platform featuring property listings.",
    link: "https://github.com/TheOratorEse/real-estate-website",
    tech: ["React", "Node.js", "Express", "MongoDB"]
  }
];

const mobileProjects = [
  {
    title: "Citi Pass App",
    description: "City Pass App - visitor access in gated communities.",
    link: "https://github.com/TheOratorEse/city-pass-app",
    tech: ["Flutter", "Firebase", "Supabase"]
  },
  {
    title: "WebView App",
    description: "Convert existing webApp to a Mobile app.",
    link: "https://github.com/TheOratorEse/webview_app",
    tech: ["Flutter", "Javascript", "WebView", "Firebase"]
  },
  {
    title: "Fit2Feet",
    description: "Feet measurement and shoe size recommendations.",
    link: "https://github.com/TheOratorEse/delivery-app",
    tech: ["Flutter", "Provider", "Python", "Flask"]
  },
  {
    title: "Food Recipe App",
    description: "Discovering and sharing food recipes.",
    link: "https://github.com/TheOratorEse/food-recipe-app",
    tech: ["Flutter", "Firebase", "Node.js"]
  },
  {
    title: "Taski Manager App",
    description: "Task management application.",
    link: "https://github.com/TheOratorEse/taski-manager-app",
    tech: ["Flutter", "Supabase", "Sqflite", "Provider"]
  },
  {
    title: "Weather Mobile App",
    description: "Weather forecasting with location services.",
    link: "https://github.com/TheOratorEse/weather-mobile-app",
    tech: ["Flutter", "Provider", "Weather API"]
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-white bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                EO
              </div>
              <span className="font-bold text-white hidden sm:block">Eseiwi Omorogbe</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="https://github.com/TheOratorEse" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="https://linkedin.com/in/eseiwi-omorogbe" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="mailto:esewi.omorogbe@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 rounded-lg text-left transition-all ${
                      activeSection === item.id
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
                  <Button variant="outline" size="icon" className="flex-1" asChild>
                    <a href="https://github.com/TheOratorEse" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="flex-1" asChild>
                    <a href="https://linkedin.com/in/eseiwi-omorogbe" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="flex-1" asChild>
                    <a href="mailto:esewi.omorogbe@gmail.com">
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 rounded-full blur-3xl -z-10 scale-110" />
            <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500">
              <img
                src="https://i.postimg.cc/SRKzBXHr/eseiwi.jpg"
                alt="Eseiwi Omorogbe"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-black"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight text-white px-4"
          >
            Eseiwi Omorogbe
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 px-4"
          >
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-blue-500/60 to-transparent" />
            <span className="text-blue-400 tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm font-medium">
              Full Stack Developer
            </span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-blue-500/60 to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-gray-400 leading-relaxed mb-6 sm:mb-10 text-sm sm:text-lg px-4"
          >
            Passionate Full Stack Developer crafting high-performance applications with cutting-edge technologies.
            Specializing in Flutter, React, Python, and modern backend architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white" asChild>
              <a href="https://drive.google.com/file/d/1trMWEOVZGyMaUGfIVB8bq1s907xdyjA-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-500/50 animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-effect h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User className="w-5 h-5 text-blue-400" />
                    Who I Am
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    I'm a passionate Full Stack Developer with expertise in building modern, scalable applications. 
                    I love turning ideas into reality through code and continuously learning new technologies 
                    to stay at the forefront of web and mobile development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-effect h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Zap className="w-5 h-5 text-blue-400" />
                    What I Do
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    I build responsive web applications, cross-platform mobile apps, and robust backend systems.
                    My focus is on creating performant, user-friendly solutions that solve real-world problems.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect h-full group hover:border-blue-500/30 transition-all">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                      <skill.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <CardTitle className="text-white text-lg">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-white/20 text-gray-400">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>

          <Tabs defaultValue="web" className="w-full">
            <div className="flex justify-center mb-8 sm:mb-12">
              <TabsList className="bg-white/5 border border-white/10 p-1 flex gap-2 w-full max-w-md mx-auto">
                <TabsTrigger value="web" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm data-[state=active]:bg-blue-500/20 data-[state=active]:border-blue-500/30 data-[state=active]:text-white text-gray-400 border border-transparent hover:text-white transition-all">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs">Web</span>
                </TabsTrigger>
                <TabsTrigger value="mobile" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm data-[state=active]:bg-blue-500/20 data-[state=active]:border-blue-500/30 data-[state=active]:text-white text-gray-400 border border-transparent hover:text-white transition-all">
                  <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs">Mobile</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="web" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {webProjects.map((project, index) => (
                  <Card key={index} className="glass-effect h-full group relative overflow-hidden flex flex-col">
                    <CardHeader className="flex-shrink-0 pb-2">
                      <CardTitle className="text-base sm:text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 line-clamp-2 text-xs sm:text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-shrink-0 pt-0 mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-white/20 text-gray-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="link" className="p-0 h-auto text-blue-400 hover:text-white transition-colors" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          View Project <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {mobileProjects.map((project, index) => (
                  <Card key={index} className="glass-effect h-full group relative overflow-hidden flex flex-col">
                    <CardHeader className="flex-shrink-0 pb-2">
                      <CardTitle className="text-base sm:text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 line-clamp-2 text-xs sm:text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-shrink-0 pt-0 mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-white/20 text-gray-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="link" className="p-0 h-auto text-blue-400 hover:text-white transition-colors" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          View Project <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect">
                  <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-white text-lg">{exp.role}</CardTitle>
                      <CardDescription className="text-blue-400">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 whitespace-nowrap">
                      {exp.period}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-center"
          >
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out if you'd like to collaborate or just have a chat.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-6" asChild>
                <a href="mailto:esewi.omorogbe@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 px-8 py-6" asChild>
                <a href="https://linkedin.com/in/eseiwi-omorogbe" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-white/10">
        <p className="text-sm text-gray-500">
          © 2026 Eseiwi Omorogbe. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;