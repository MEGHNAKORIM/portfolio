import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import ThreeScene from '@/components/ThreeScene';
import ContactForm from '@/components/ContactForm';
import finchampImg from '../assets/finchamp.png';
import food from '../assets/food.png';
import portal from '../assets/portal.png';
import jobbyapp from '../assets/jobbyapp.png';
import nxtwatch from '../assets/nxtwatch.png';
import nxttrends from '../assets/nxttrends.png';
import lostandfound from '../assets/lostandfound.png';
import movie from '../assets/movie.png';
import app from '../assets/app.png';
import photo from '../assets/photo.jpg';

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
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    document.querySelectorAll("section").forEach((section) => {
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
              <span className="text-indigo-500">Meghana</span> Korimi
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <i
                  className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"} text-lg`}
                ></i>
              </button>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300"
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <i
                  className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"} text-lg`}
                ></i>
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
                  onClick={() => scrollToSection("hero")}
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
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
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300"
      >
        {/* Background 3D Canvas */}
        <ThreeScene />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
              <span className="block animate-slide-in-left">Hi, I'm</span>
              <span className="animate-text-gradient animate-slide-in-right">
                Meghana Korimi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 font-light transition-colors duration-300 animate-text-reveal">
              Full Stack Developer & Creative Technologist
            </p>
            <p className="text-lg text-slate-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 animate-slide-up">
              I craft digital experiences that blend cutting-edge technology
              with beautiful design. Specializing in React, Node.js, and
              immersive 3D web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold animate-button-hover animate-pulse-glow"
              >
                <span className="flex items-center gap-2">
                  <i className="fas fa-rocket"></i>
                  View My Work
                </span>
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-slate-300 dark:border-gray-600 hover:border-indigo-500 text-slate-700 dark:text-gray-300 hover:text-indigo-500 px-8 py-4 rounded-lg font-semibold animate-button-hover"
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
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-gray-500 rounded-full transition-transform duration-300 hover:scale-110 flex justify-center transition-colors duration-300">
            <div className="w-1 h-3 bg-slate-400 dark:bg-gray-500 rounded-full transition-transform duration-300 hover:scale-110 mt-2 animate-bounce transition-colors duration-300"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300 animate-text-reveal">
                  About{" "}
                  <span className="text-indigo-500 animate-text-gradient">
                    Me
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-transform duration-300 hover:scale-110 animate-scale-in"></div>
              </div>

              <div className="space-y-6 text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <p
                  className="text-lg animate-slide-in-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  I'm a passionate full-stack developer with over 5 years of
                  experience creating innovative web applications. My journey
                  began with a curiosity for how things work, which led me to
                  explore the intersection of design and technology.
                </p>
                <p
                  className="animate-slide-in-left"
                  style={{ animationDelay: "0.4s" }}
                >
                  I specialize in modern JavaScript frameworks, cloud
                  architecture, and creating immersive user experiences. When
                  I'm not coding, you'll find me experimenting with 3D graphics,
                  contributing to open-source projects, or exploring the latest
                  in AI and machine learning.
                </p>
                <p
                  className="animate-slide-in-left"
                  style={{ animationDelay: "0.6s" }}
                >
                  My goal is to build digital solutions that not only function
                  flawlessly but also inspire and delight users. I believe great
                  code should be as elegant as the experiences it creates.
                </p>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: "fab fa-react",
                    name: "React",
                    color: "text-indigo-500",
                  },
                  {
                    icon: "fab fa-node-js",
                    name: "Node.js",
                    color: "text-green-500",
                  },
                 {
  icon: "fas fa-eye", // or fa-brain
  name: "Computer Vision",
  color: "text-pink-500", // You can change to violet-500 or red-400 if preferred
},
{ icon: "fab fa-aws", name: "AWS", color: "text-orange-500" },
{
  icon: "fas fa-database",
  name: "MongoDB",
  color: "text-emerald-500",
},
{
  icon: "fas fa-server",
  name: "SQL",
  color: "text-blue-700",
}
,
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-slate-50 dark:bg-gray-700 p-4 rounded-lg text-center animate-card-hover animate-bounce-in transition-colors duration-300"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <i
                      className={`${skill.icon} text-2xl ${skill.color} mb-2 transition-transform duration-300 hover:scale-125`}
                    ></i>
                    <p className="font-semibold text-slate-700 dark:text-gray-200">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div
                className="relative animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                <img
                  src={photo}
                  alt="Meghana Korimi - Professional headshot"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                />

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full transition-transform duration-300 hover:scale-110 opacity-20 animate-float animate-pulse-glow"></div>
                <div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-transform duration-300 hover:scale-110 opacity-15 animate-float animate-pulse-glow"
                  style={{ animationDelay: "-3s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300 animate-text-reveal">
              Featured{" "}
              <span className="text-indigo-500 animate-text-gradient">
                Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-transform duration-300 hover:scale-110 mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300 animate-slide-up">
              Explore some of my recent work showcasing modern web development
              and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: E-commerce Platform */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-card-hover animate-scale-in group transition-colors duration-300"
              style={{ animationDelay: "0.1s" }}
            >
  <img 
    src={food} 
    alt="Food Waste Estimation preview" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-red-400 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">AI / Computer Vision</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      Food Waste Estimation
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      CV model using Mask R-CNN and YOLO to detect food waste in mess images. Achieved 92% accuracy with a real-time dashboard.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full transition-transform duration-300 hover:scale-110 transition-transform duration-300 hover:scale-110">Detectron2</span>
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full transition-transform duration-300 hover:scale-110 transition-transform duration-300 hover:scale-110">YOLO</span>
      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full transition-transform duration-300 hover:scale-110 transition-transform duration-300 hover:scale-110">Mask R-CNN</span>
    </div>
    <div className="flex gap-3">
    </div>
  </div>
</div>

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
  <img 
    src={portal}
    alt="MERN Request Portal" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-green-400 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">Full Stack</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      MERN Request Portal
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      Full-stack portal with role-based access, JWT auth, Recharts, HTTPS deployment and modular backend.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full transition-transform duration-300 hover:scale-110 transition-transform duration-300 hover:scale-110">React</span>
      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full transition-transform duration-300 hover:scale-110 transition-transform duration-300 hover:scale-110">Node.js</span>
      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full transition-transform duration-300 hover:scale-110 transition-transform duration-300 hover:scale-110">MongoDB</span>
      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full transition-transform duration-300 hover:scale-110 transition-transform duration-300 hover:scale-110">Recharts</span>
    </div>
    <div className="flex gap-3">
      <a href="https://github.com/MEGHNAKORIM/VP-portal" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium animate-button-hover" target="_blank">
        <i className="fab fa-github transition-transform duration-300 hover:rotate-12"></i>
        Code
      </a>
    </div>
  </div>
</div>


  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
  <img 
    src={finchampImg} 
    alt="FinChamp preview" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-blue-400 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">EdTech / FinTech</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      FinChamp – Learn Budgeting Smart
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      Personalized financial literacy app using quizzes, score tracking, and adaptive modules with Clerk auth.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">React</span>
      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">Firebase</span>
      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">Clerk</span>
    </div>
    <div className="flex gap-3">
      <a href="https://github.com/MEGHNAKORIM/finchamp1" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium animate-button-hover" target="_blank">
        <i className="fab fa-github transition-transform duration-300 hover:rotate-12"></i>
        Code
      </a>
    </div>
  </div>
</div>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
  <img 
    src={nxtwatch}
    alt="NxtWatch project preview" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-red-400 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">Frontend</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      NxtWatch
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      A YouTube-like video streaming platform with category filters, dark mode, and JWT authentication.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">React</span>
      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">JWT</span>
    </div>
    <div className="flex gap-3">
      <a href="https://github.com/MEGHNAKORIM/NXTWatch" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium animate-button-hover" target="_blank">
        <i className="fab fa-github transition-transform duration-300 hover:rotate-12"></i>
        Code
      </a>
      <a href="https://meghananxtwatch.ccbp.tech/" className="flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-200 font-medium animate-button-hover" target="_blank">
        <i className="fas fa-external-link-alt transition-transform duration-300 hover:scale-125"></i>
        Live Demo
      </a>
    </div>
  </div>
</div>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
  <img 
    src={nxttrends}
    alt="NxtTrendz project preview" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-green-400 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">Frontend</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      NxtTrendz
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      A fully responsive e-commerce site clone with authentication, protected routes, and cart functionality.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">React</span>
      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">JWT</span>
    </div>
    <div className="flex gap-3">
      <a href="https://github.com/MEGHNAKORIM/ecart" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium animate-button-hover" target="_blank">
        <i className="fab fa-github transition-transform duration-300 hover:rotate-12"></i>
        Code
      </a>
      <a href="https://meghananxttrend.ccbp.tech/" className="flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-200 font-medium animate-button-hover" target="_blank">
        <i className="fas fa-external-link-alt transition-transform duration-300 hover:scale-125"></i>
        Live Demo
      </a>
    </div>
  </div>
</div>

<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
  <img 
    src={jobbyapp}
    alt="Jobby App preview" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-yellow-400 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">Frontend</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      Jobby App
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      A job search platform with filter options, login authentication, job details route, and a polished UI.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">React</span>
      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">JWT</span>
    </div>
    <div className="flex gap-3">
      <a href="https://github.com/MEGHNAKORIM/jobbyapp" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium animate-button-hover" target="_blank">
        <i className="fab fa-github transition-transform duration-300 hover:rotate-12"></i>
        Code
      </a>
      <a href="https://meghnajobbyapp.ccbp.tech/" className="flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-200 font-medium animate-button-hover" target="_blank">
        <i className="fas fa-external-link-alt transition-transform duration-300 hover:scale-125"></i>
        Live Demo
      </a>
    </div>
  </div>
</div>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
  <img 
    src={lostandfound}
    alt="Lost and Found preview" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-orange-400 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">Full Stack</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      Lost and Found System
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      A web app to report and find lost items. Includes keyword-based search, real-time email alerts, and MySQL trigger automation.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">PHP</span>
      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">HTML</span>
      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">CSS</span>
    </div>
    <div className="flex gap-3">
      <a href="https://github.com/MEGHNAKORIM/LostAndFound" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium animate-button-hover" target="_blank">
        <i className="fab fa-github transition-transform duration-300 hover:rotate-12"></i>
        Code
      </a>
    </div>
  </div>
</div>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
  <img 
    src={app}
    alt="Appointments App preview" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-cyan-400 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">Frontend</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      Appointments App
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      A simple and intuitive appointments manager that allows users to create, edit, and mark appointments as important.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">React</span>
      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">CSS</span>
    </div>
    <div className="flex gap-3">
      <a href="https://github.com/MEGHNAKORIM/AppointmentsApp" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium animate-button-hover" target="_blank">
        <i className="fab fa-github transition-transform duration-300 hover:rotate-12"></i>
        Code
      </a>
    </div>
  </div>
</div>
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
  <img 
    src={movie} 
    alt="Netflix Movie Recommendation preview" 
className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"  />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-red-500 rounded-full transition-transform duration-300 hover:scale-110"></div>
      <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">Data Mining / ML</span>
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors animate-slide-in-left">
      Netflix Movies Recommendation
    </h3>
    <p className="text-slate-600 dark:text-gray-300 mb-4 transition-colors duration-300 animate-fade-in">
      A recommendation engine that uses the Apriori algorithm to suggest Netflix movies based on user viewing patterns and frequent itemsets.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">Python</span>
      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">Apriori</span>
      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full transition-transform duration-300 hover:scale-110">ML</span>
    </div>
    <div className="flex gap-3">
      <a href="https://github.com/MEGHNAKORIM/Netflix-Movies-Recommendation-using-Apriori-Algorithm" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium animate-button-hover" target="_blank">
        <i className="fab fa-github transition-transform duration-300 hover:rotate-12"></i>
        Code
      </a>
    </div>
  </div>
</div>


          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300 animate-text-reveal">
              Get In{" "}
              <span className="text-indigo-500 animate-text-gradient">
                Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 animate-scale-in"></div>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300 animate-slide-up">
              Have a project in mind or just want to chat? I'd love to hear from
              you. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3
                  className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300 animate-text-reveal"
                  style={{ animationDelay: "0.2s" }}
                >
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  <div
                    className="flex items-center gap-4 animate-slide-in-left"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow">
                      <i className="fas fa-envelope text-indigo-500 transition-transform duration-300 hover:scale-125"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white">
                        Email
                      </p>
                      <p className="text-slate-600 dark:text-gray-300">
                        meghana.korimi_2026@woxsen.edu.in
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 animate-slide-in-left"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow">
                      <i className="fas fa-phone text-indigo-500 transition-transform duration-300 hover:scale-125"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white">
                        Phone
                      </p>
                      <p className="text-slate-600 dark:text-gray-300">
                        8317678058
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 animate-slide-in-left"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow">
                      <i className="fas fa-map-marker-alt text-indigo-500 transition-transform duration-300 hover:scale-125"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-white">
                        Location
                      </p>
                      <p className="text-slate-600 dark:text-gray-300">
                        Hyderabad,Telangana,India 
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="animate-bounce-in"
                style={{ animationDelay: "0.6s" }}
              >
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 transition-colors duration-300">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/meghana-korimi-0a1b5a258/"
                    className="w-12 h-12 bg-slate-100 dark:bg-gray-700 hover:bg-indigo-500 rounded-lg flex items-center justify-center animate-card-hover group"
                  >
                    <i className="fab fa-linkedin text-slate-600 dark:text-gray-300 group-hover:text-white transition-all duration-300 hover:scale-125"></i>
                  </a>
                  <a
                    href="https://github.com/MEGHNAKORIM"
                    className="w-12 h-12 bg-slate-100 dark:bg-gray-700 hover:bg-gray-800 rounded-lg flex items-center justify-center animate-card-hover group"
                  >
                    <i className="fab fa-github text-slate-600 dark:text-gray-300 group-hover:text-white transition-all duration-300 hover:scale-125"></i>
                  </a>
                  <a
                    href="https://x.com/KorimiMegh6678"
                    className="w-12 h-12 bg-slate-100 dark:bg-gray-700 hover:bg-blue-500 rounded-lg flex items-center justify-center animate-card-hover group"
                  >
                    <i className="fab fa-twitter text-slate-600 dark:text-gray-300 group-hover:text-white transition-all duration-300 hover:scale-125"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300 dark:text-gray-400 transition-colors duration-300">
                © 2024 Meghana Korimi. All rights reserved.
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
