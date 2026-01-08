import { Navigation } from "../components/Navigation";
import { Section } from "../components/Section";
import { SkillCard } from "../components/SkillCard";
import { ProjectCard } from "../components/ProjectCard";
import { portfolioData } from "../data/portfolioData";
import toast from "react-hot-toast";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Terminal, 
  Server, 
  Database, 
  Brain, 
  Wrench, 
  Bug,
  Code,
  MapPin,
  Calendar,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const { personalInfo, skills, experience, projects, education, certifications } = portfolioData;

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    //{ icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-125 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-125 h-125 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-6"
            >
              Hi, I'm <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed"
            >
              {personalInfo.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <ScrollLink to="projects" smooth={true} offset={-100}>
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 active:translate-y-0 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </button>
              </ScrollLink>

              <div className="flex items-center gap-2 px-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border hover:border-primary/20"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <Section
        id="skills"
        title="Technical Expertise"
        subtitle="A comprehensive toolset for building scalable solutions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Programming Languages"
            skills={skills.languages}
            icon={Code}
            delay={0}
          />
          <SkillCard
            title="Backend Development"
            skills={skills.backend}
            icon={Server}
            delay={0.1}
          />
          <SkillCard
            title="Frontend Development"
            skills={skills.frontend}
            icon={Terminal}
            delay={0.2}
          />
          <SkillCard
            title="Databases"
            skills={skills.databases}
            icon={Database}
            delay={0.3}
          />
          <SkillCard
            title="AI & Machine Learning"
            skills={skills.ai}
            icon={Brain}
            delay={0.4}
          />
          <SkillCard
            title="DevOps & Tools"
            skills={skills.tools}
            icon={Wrench}
            delay={0.5}
          />
        </div>
      </Section>

      {/* EXPERIENCE SECTION */}
      <Section
        id="experience"
        title="Professional Experience"
        subtitle="My journey in the software industry so far."
        className="bg-secondary/30"
      >
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Connector */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              </div>

              <div
                className={`md:flex items-start justify-between gap-12 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0" /> {/* Spacer */}
                <div className="md:w-1/2 relative">
                  <div className="md:hidden absolute -left-9.25 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                  <div className="md:hidden absolute -left-8.25 top-4 bottom-0 w-px bg-border" />

                  <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors shadow-lg shadow-black/5">
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xl font-bold font-display text-primary">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground/90"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Showcasing my technical capabilities through practical applications."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </Section>

      {/* EDUCATION & CERTIFICATIONS */}
      <Section
        id="education"
        title="Education & Certifications"
        subtitle="Continuous learning and academic foundation."
        className="bg-secondary/30"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              Education
            </h3>

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 p-6 rounded-2xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold">{edu.institution}</h4>
                    <p className="text-primary font-medium mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {edu.duration}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Brain className="w-6 h-6" />
              </div>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-card border border-border/50 p-4 rounded-xl hover:border-accent/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-medium text-foreground/90">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact" className="py-20">
        <div className="rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Connect with me through
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* EMAIL BUTTON */}
              <button
                onClick={() => {
                  window.location.href = `mailto:${personalInfo.email}`;
                  navigator.clipboard.writeText(personalInfo.email);
                  toast.success("Email copied to clipboard!", {
                    icon: "📧",
                    style: { background: "#1a1a1a", color: "#fff" },
                  });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Email me at {personalInfo.email}
              </button>

              

              {/* LINKEDIN BUTTON */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-card border border-border text-foreground font-bold hover:bg-secondary transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>
      {/* FOOTER */}
      <footer className="py-8 border-t border-border/50 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}.
          </p>
        </div>
      </footer>
    </div>
  );
}
