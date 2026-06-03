// src/App.jsx
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  ChevronUp,
  ExternalLink,
  Cloud,
  Code2,
  Database,
  Server,
  Cpu,
  Terminal,
  Award,
  GraduationCap,
  Briefcase,
  User,
  Sparkles,
  Layers,
  Rocket,
  Shield,
  Menu,
  X
} from 'lucide-react';
import picture from "../src/assets/picture.jpeg";
const EMAILJS_SERVICE_ID  = 'service_jxtwlwz';   // ← replace
const EMAILJS_TEMPLATE_ID = 'template_go2hk3l';  // ← replace
const EMAILJS_PUBLIC_KEY  = 'Y5DK58yxLFx-hMoqO';   // ← replace

const skills = [
  { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Django",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "FastAPI",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "AWS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Linux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Bash",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Terraform",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Ansible",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  { name: "Jenkins",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
];

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(''); // 'sending' | 'sent' | 'error'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleSections(prev => ({ ...prev, [section.id]: true }));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // ── Contact form handler ──────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setFormStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setFormStatus('error');
    }
  };

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // ─────────────────────────────────────────────────────────────────────────

  const navItems = [
    { id: 'about',        label: 'About' },
    { id: 'skills',       label: 'Skills' },
    { id: 'projects',     label: 'Projects' },
    { id: 'experience',   label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education',    label: 'Education' },
  ];

  const projects = [
    {
      title: 'Three Tier Architecture', tech: 'AWS · Networking', category: 'Cloud Infra',
      desc: 'Scalable Cloud architecture with isolated web, app, and database layers on AWS.',
      tags: ['AWS', 'Terraform', 'Networking'], icon: <Cloud className="w-5 h-5" />,
      repo: 'Three_Tier_Architecture', gradient: 'from-yellow-700 to-amber-500'
    },
    {
      title: 'CI/CD Pipeline', tech: 'AWS · Docker', category: 'DevOps',
      desc: 'Automated builds and deployments via AWS CodePipeline, AWS CodeBuild, and Docker.',
      tags: ['AWS', 'Docker', 'CI/CD'], icon: <Rocket className="w-5 h-5" />,
      repo: 'Continuous-Intigration-Deployment-Project', gradient: 'from-yellow-700 to-amber-500'
    },
    {
      title: 'RuralFund', tech: 'Cloud · FinTech', category: 'FinTech',
      desc: 'Cloud based Serverless microlending platform improving financial access in rural communities.',
      tags: ['Cloud','Serverless', 'PWA'], icon: <Shield className="w-5 h-5" />,
      repo: 'RuralFund-Cloud-Based-Microlending-Platform', gradient: 'from-yellow-700 to-amber-500'
    },
    {
      title: 'Satellite Image Forgery Detection', tech: 'Python · AI/ML', category: 'Computer Vision',
      desc: 'ML pipeline detecting tampered satellite imagery using computer vision, with an accuracy of 93% .',
      tags: ['Python', 'Tensorflow', 'FastApi'], icon: <Cpu className="w-5 h-5" />,
      repo: 'satellite_forgery', gradient: 'from-yellow-700 to-amber-500'
    },
    {
      title: 'AgriShield AI', tech: 'JavaScript · AI', category: 'AgriTech',
      desc: 'AI-powered agricultural advisory app for delivering smart farming insights and recommendations.',
      tags: ['Ollama3', 'ChromaDB', 'React'], icon: <Sparkles className="w-5 h-5" />,
      repo: 'Agrishield_AI', gradient: 'from-yellow-700 to-amber-500'
    },
    {
      title: 'eLibrary', tech: 'Django · MongoDB', category: 'Full Stack',
      desc: 'Digital library platform with REST APIs and MongoDB-backed management.',
      tags: ['Django', 'MongoDB', 'DRF'], icon: <Layers className="w-5 h-5" />,
      repo: 'elibrary', gradient: 'from-yellow-700 to-amber-500'
    },
  ];

  const experiences = [
    {
      date: 'DEC 2025 — JAN 2026', title: 'AI for Sustainability Intern', company: '1M1B · Internship',
      desc: 'Developed an AI-based agricultural advisory project "AgriShield AI". Selected to present at the Generation AI @ 2047 – Leadership Discussion during the India AI Impact Summit.',
      tags: ['Llama3', 'FastApi', 'ChromaDB', 'React']
    },
    {
      date: 'OCT 2025 — DEC 2025', title: 'Cloud Intern', company: 'Eduskills Foundation · Internship',
      desc: 'Gained foundational experience in cloud deployment workflows and resource provisioning on AWS.',
      tags: ['Node.js', 'React', 'Docker']
    },
    {
      date: 'JUN 2025 — AUG 2025', title: "Founder's Office Intern", company: 'Erynt Technologies Pvt. Ltd. · Internship',
      desc: 'Worked directly under the Founder & CEO, supporting day-to-day business operations across technology, marketing, and operational functions.',
      tags: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />,  title: 'AWS Certified Cloud Practitioner', meta: 'Amazon Web Services · 2026', desc: 'Demonstrating proficiency in cloud applications.' },
    { icon: <Trophy className="w-6 h-6" />, title: 'Top Hackathon Team',               meta: 'GEEKVERSE, USAR 2025',         desc: 'Top 50 team among 900+ participants for building an AI-powered tool.' },
    { icon: <Github className="w-6 h-6" />, title: 'Open Source Contributor',          meta: 'GitHub · Hacktoberfest 2025',  desc: 'Supercontributor with 6 PRs merged.' },
    { icon: <Mic className="w-6 h-6" />,    title: 'Speaker',                          meta: 'Generation AI @ 2047 2026',   desc: 'Presented "AgriShield AI" to 300+ developers.' }
  ];

  return (
    <div className="bg-bg text-text font-body">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="font-display text-2xl font-bold text-accent tracking-wide">ARNI JOHRY</a>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-muted hover:text-text transition-colors duration-300 font-medium">
                  {item.label}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')}
                className="ml-4 px-6 py-2 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-bg transition-all duration-300 font-semibold">
                Contact
              </button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-text">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-muted/20">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-muted hover:text-text transition-colors duration-300">
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-accent tracking-widest text-sm mb-4 animate-fade-in">HELLO, I'M</p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-slide-up">ARNI JOHRY</h1>
          <div className="flex justify-center gap-2 text-xl md:text-2xl text-accent font-display mb-6 min-h-[3rem]">
            <TypewriterText />
          </div>
          <p className="text-muted max-w-md mx-auto mb-10 animate-slide-up animation-delay-200">
            I build things that work well, scale well, and solve real needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
            <button onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-accent text-bg rounded-full hover:bg-accent2 transition-all duration-300 font-semibold">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-bg transition-all duration-300 font-semibold">
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 bg-surface transition-all duration-700 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-surface2 rounded-2xl overflow-hidden border border-accent/20">
                <img
                  src={picture}
                  alt="Arni Johry"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-accent text-bg px-4 py-2 rounded-lg font-semibold">
                  Undergraduate
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Crafting Ideas into <span className="text-accent italic">Digital Reality</span>
              </h2>
              <p className="text-muted mb-4">
                I'm a <strong className="text-text">Computer Science Student</strong> who enjoys working on backend development and exploring cloud technologies. I like turning ideas into systems that actually work — reliable, scalable, and built with purpose.
              </p>
              <p className="text-muted mb-4">
                Lately, I've been diving into DevOps, playing around with Docker, Linux, and AWS to understand how things move from code to real-world deployment.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-muted"><MapPin className="w-4 h-4 text-accent" /> Ghaziabad, India</div>
                <div className="flex items-center gap-3 text-muted"><GraduationCap className="w-4 h-4 text-accent" /> B.Tech in Computer Science</div>
                <div className="flex items-center gap-3 text-muted"><Briefcase className="w-4 h-4 text-accent" /> Open to opportunities</div>
                <div className="flex items-center gap-3 text-muted"><Mail className="w-4 h-4 text-accent" /> arnijohry@gmail.com</div>
              </div>

              {/* ── CV Download Button ──────────────────────────────────────────
                   Place your resume PDF in /public/Arni_Johry_Resume.pdf
                   OR swap the href to a Google Drive / GitHub raw URL.
              ─────────────────────────────────────────────────────────────── */}
              <a
                href="https://drive.google.com/file/d/1Z7nl097MJIIVUYBPCDYAdPC0-8gMqIVd/view?usp=sharing"
                download="Arni_Johry_Resume.pdf"
                className="px-6 py-3 bg-accent text-bg rounded-full hover:bg-accent2 transition-all duration-300 font-semibold inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 transition-all duration-700 ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
            <p className="text-muted max-w-2xl mx-auto mb-12">
              Technologies and tools I work with across cloud, DevOps, backend, and automation
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}
                className="bg-surface2 rounded-xl p-5 border border-accent/20 hover:border-accent hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-14 h-14 mb-3 object-contain" />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 bg-surface transition-all duration-700 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <p className="text-muted max-w-2xl mx-auto mb-12">Cloud, DevOps, backend, AI, and full-stack projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur" />
                <div className="relative bg-surface2 rounded-xl overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg">{project.icon}</div>
                      <span className="text-xs text-accent">{project.category}</span>
                    </div>
                    <h3 className="font-display text-xl mb-1">{project.title}</h3>
                    <p className="text-sm text-muted mb-3">{project.tech}</p>
                    <p className="text-muted text-sm mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <span key={tag} className="px-2 py-0.5 bg-accent/5 rounded-full text-xs text-accent">{tag}</span>)}
                    </div>
                    <a href={`https://github.com/Arni005/${project.repo}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent2 transition-colors duration-300">
                      <Github className="w-4 h-4" /> View on GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-24 transition-all duration-700 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-12">Work History</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-accent/30 ml-4">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full" />
                <div className="text-accent text-sm mb-2">{exp.date}</div>
                <div className="bg-surface2 rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <h3 className="font-display text-xl mb-1">{exp.title}</h3>
                  <p className="text-accent text-sm mb-3">{exp.company}</p>
                  <p className="text-muted text-sm mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => <span key={tag} className="px-2 py-0.5 bg-accent/5 rounded-full text-xs text-accent">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-24 bg-surface transition-all duration-700 ${visibleSections.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-12">Milestones & Recognition</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach, idx) => (
              <div key={idx} className="bg-surface2 rounded-xl p-6 border border-accent/20 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-accent mb-4">{ach.icon}</div>
                <h3 className="font-display text-lg mb-1">{ach.title}</h3>
                <p className="text-accent text-xs mb-3">{ach.meta}</p>
                <p className="text-muted text-sm">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-24 transition-all duration-700 ${visibleSections.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-12">Academic Background</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-surface2 rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="text-accent text-sm mb-2">2023 — 2027</div>
              <h3 className="font-display text-xl mb-1">B.Tech — Computer Science</h3>
              <p className="text-accent text-sm mb-2">IMS Engineering College, Ghaziabad</p>
              <p className="text-muted text-sm">CGPA: 7.4 / 10</p>
              <p className="text-muted text-sm">Data Structures, Algorithms, DBMS, Operating Systems</p>
            </div>
            <div className="bg-surface2 rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="text-accent text-sm mb-2">2021 — 2023</div>
              <h3 className="font-display text-xl mb-1">Higher Secondary (Science)</h3>
              <p className="text-accent text-sm mb-2">Vivekananda School</p>
              <p className="text-muted text-sm">Percentage: 76%</p>
              <p className="text-muted text-sm">Physics, Chemistry, Mathematics, Computer Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 bg-surface transition-all duration-700 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Let's Work Together</h2>
            <p className="text-muted max-w-2xl mx-auto mb-12">Have a project in mind or just want to say hi? My inbox is always open.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center"><Mail className="w-5 h-5 text-accent" /></div>
                <div><p className="text-xs text-muted">Email</p><a href="mailto:arnijohry@gmail.com" className="text-text hover:text-accent transition-colors">arnijohry@gmail.com</a></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center"><Phone className="w-5 h-5 text-accent" /></div>
                <div><p className="text-xs text-muted">Phone</p><a href="tel:+919625187232" className="text-text hover:text-accent transition-colors">+91 9625187232</a></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center"><MapPin className="w-5 h-5 text-accent" /></div>
                <div><p className="text-xs text-muted">Location</p><p className="text-text">Ghaziabad, India</p></div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Arni005" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/arni-johry" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://medium.com/@arnijohry" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300">
                  <Medium className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* ── Contact Form (EmailJS) ──────────────────────────────────────── */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text" name="name" placeholder="Name" required
                  value={formData.name} onChange={handleFormChange}
                  className="px-4 py-3 bg-bg border border-accent/20 rounded-lg focus:border-accent outline-none transition-colors"
                />
                <input
                  type="email" name="email" placeholder="Email" required
                  value={formData.email} onChange={handleFormChange}
                  className="px-4 py-3 bg-bg border border-accent/20 rounded-lg focus:border-accent outline-none transition-colors"
                />
              </div>
              <input
                type="text" name="subject" placeholder="Subject" required
                value={formData.subject} onChange={handleFormChange}
                className="w-full px-4 py-3 bg-bg border border-accent/20 rounded-lg focus:border-accent outline-none transition-colors"
              />
              <textarea
                rows="5" name="message" placeholder="Tell me about your project..." required
                value={formData.message} onChange={handleFormChange}
                className="w-full px-4 py-3 bg-bg border border-accent/20 rounded-lg focus:border-accent outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full px-6 py-3 bg-accent text-bg rounded-full hover:bg-accent2 transition-all duration-300 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {/* Feedback messages */}
              {formStatus === 'sent' && (
                <p className="text-green-400 text-sm text-center">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Try emailing me directly at arnijohry@gmail.com
                </p>
              )}
            </form>
            {/* ─────────────────────────────────────────────────────────────── */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-accent/20">
        <div className="container mx-auto px-6 text-center text-muted text-sm">
          <p>Designed & Built by <strong className="text-accent">Arni Johry</strong></p>
          <p className="mt-2">© {new Date().getFullYear()} · All rights reserved</p>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-accent text-bg rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-accent2 hover:-translate-y-1 ${scrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
};

// Typewriter component
const TypewriterText = () => {
  const roles = ['Aspiring Cloud Engineer', 'DevOps Learner', 'Open Source Contributor', 'Problem Solver'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) { setReverse(true); return; }
    if (subIndex === 0 && reverse) { setReverse(false); setIndex(prev => (prev + 1) % roles.length); return; }
    const timeout = setTimeout(() => setSubIndex(prev => prev + (reverse ? -1 : 1)), reverse ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return <span>{roles[index].substring(0, subIndex)}<span className="animate-pulse">|</span></span>;
};

// Inline SVG icon components
const Trophy = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const Mic = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" x2="12" y1="19" y2="22"/>
  </svg>
);

const Medium = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 6.5c0-.3.1-.5.3-.7l2.3-2.8v-.4H0v.4l1.4 1.7c.1.1.2.3.2.5v13.6c0 .2-.1.4-.2.5L0 21v.4h4.9V21l-1.4-1.7c-.1-.1-.2-.3-.2-.5V7.3l5.7 14.5h.7L15 7.3v11.5c0 .1 0 .2-.1.3l-1.1 1.1v.2h5.5v-.2l-1.1-1.1c-.1-.1-.1-.2-.1-.3V5.2c0-.1 0-.2.1-.3L19.3 3v-.4h-4.7L10.4 13 6.7 2.6H2v.4l1.3 1.6c.2.2.3.5.3.8v1.1z"/>
  </svg>
);

export default App;