import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import ThreeScene from '@/components/ThreeScene';
import ContactForm from '@/components/ContactForm';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter bg-slate-50 dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-gray-700/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-slate-800 dark:text-white">
              <span className="text-indigo-500">Alex</span> Morgan
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg`}></i>
              </button>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg`}></i>
              </button>
              <button 
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 text-left"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
        {/* Background 3D Canvas */}
        <ThreeScene />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Alex Morgan</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 font-light transition-colors duration-300">
              Full Stack Developer & Creative Technologist
            </p>
            <p className="text-lg text-slate-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              I craft digital experiences that blend cutting-edge technology with beautiful design. 
              Specializing in React, Node.js, and immersive 3D web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                <span className="flex items-center gap-2">
                  <i className="fas fa-rocket"></i>
                  View My Work
                </span>
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-slate-300 dark:border-gray-600 hover:border-indigo-500 text-slate-700 dark:text-gray-300 hover:text-indigo-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <i className="fas fa-envelope"></i>
                  Get In Touch
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-gray-500 rounded-full flex justify-center transition-colors duration-300">
            <div className="w-1 h-3 bg-slate-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce transition-colors duration-300"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300">
                  About <span className="text-indigo-500">Me</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <p className="text-lg">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  innovative web applications. My journey began with a curiosity for how things work, 
                  which led me to explore the intersection of design and technology.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks, cloud architecture, and creating 
                  immersive user experiences. When I'm not coding, you'll find me experimenting 
                  with 3D graphics, contributing to open-source projects, or exploring the latest 
                  in AI and machine learning.
                </p>
                <p>
                  My goal is to build digital solutions that not only function flawlessly but 
                  also inspire and delight users. I believe great code should be as elegant 
                  as the experiences it creates.
                </p>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: 'fab fa-react', name: 'React', color: 'text-indigo-500' },
                  { icon: 'fab fa-node-js', name: 'Node.js', color: 'text-green-500' },
                  { icon: 'fas fa-cube', name: 'Three.js', color: 'text-purple-500' },
                  { icon: 'fab fa-python', name: 'Python', color: 'text-blue-500' },
                  { icon: 'fab fa-aws', name: 'AWS', color: 'text-orange-500' },
                  { icon: 'fab fa-docker', name: 'Docker', color: 'text-blue-600' }
                ].map((skill) => (
                  <div key={skill.name} className="bg-slate-50 p-4 rounded-lg text-center hover:bg-indigo-50 transition-colors duration-300">
                    <i className={`${skill.icon} text-2xl ${skill.color} mb-2`}></i>
                    <p className="font-semibold text-slate-700">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600" 
                  alt="Alex Morgan - Professional headshot" 
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-15 animate-float" style={{animationDelay: '-3s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured <span className="text-indigo-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore some of my recent work showcasing modern web development 
              and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: E-commerce Platform */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="E-commerce platform project preview" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-slate-500 font-medium">Full Stack</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  ModernShop E-commerce
                </h3>
                
                <p className="text-slate-600 mb-4">
                  A full-featured e-commerce platform built with React, Node.js, and Stripe integration. 
                  Features include real-time inventory, advanced filtering, and seamless checkout experience.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Stripe</span>
                </div>
                
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium transition-colors">
                    <i className="fab fa-github"></i>
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-medium transition-colors">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: 3D Portfolio Website */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="3D interactive portfolio website" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-slate-500 font-medium">Frontend</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  Interactive 3D Portfolio
                </h3>
                
                <p className="text-slate-600 mb-4">
                  An immersive portfolio experience featuring Three.js animations, WebGL shaders, 
                  and interactive 3D models. Showcases advanced frontend capabilities and creative design.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Three.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">WebGL</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">GSAP</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Blender</span>
                </div>
                
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium transition-colors">
                    <i className="fab fa-github"></i>
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-medium transition-colors">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: AI-Powered Analytics Dashboard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="AI analytics dashboard with data visualization" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-slate-500 font-medium">AI/ML</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  AI Analytics Dashboard
                </h3>
                
                <p className="text-slate-600 mb-4">
                  A comprehensive analytics platform powered by machine learning algorithms. 
                  Features predictive analytics, real-time data processing, and intuitive visualizations.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Python</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">FastAPI</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Redis</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TensorFlow</span>
                </div>
                
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium transition-colors">
                    <i className="fab fa-github"></i>
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-medium transition-colors">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="fab fa-github"></i>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Get In <span className="text-indigo-500">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-indigo-500"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <p className="text-slate-600">alex.morgan@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-phone text-indigo-500"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Phone</p>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-indigo-500"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Location</p>
                      <p className="text-slate-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-indigo-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <i className="fab fa-linkedin text-slate-600 group-hover:text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <i className="fab fa-github text-slate-600 group-hover:text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <i className="fab fa-twitter text-slate-600 group-hover:text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <i className="fab fa-dribbble text-slate-600 group-hover:text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300">
                © 2024 Alex Morgan. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span>Built with</span>
              <i className="fas fa-heart text-red-400"></i>
              <span>and lots of</span>
              <i className="fas fa-coffee text-yellow-400"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
