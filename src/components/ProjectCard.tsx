import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  index: number;
}

export function ProjectCard({ title, description, techStack, githubLink, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      {/* Abstract gradient background for card header */}
      <div className="h-48 bg-linear-to-br from-secondary via-secondary to-primary/5 relative overflow-hidden group-hover:from-secondary group-hover:via-primary/10 group-hover:to-accent/10 transition-colors duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
        <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-card to-transparent">
          <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-6 pt-2 flex flex-col grow">
        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source</span>
              </a>
            )}
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}
