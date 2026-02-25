import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cloud, Layout, Calendar } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Explainable Kidney Stone Detection",
            problem: "Medical imaging diagnostics often lack transparency, making it difficult for clinicians to fully trust automated AI alerts.",
            solution: "Developed a YOLOv8-nano–based system with a 3-level explainable AI framework (Grad-CAM, region-level attention) for real-time inference (8-10ms).",
            stack: ["Python", "YOLOv8", "XAI"],
            deployment: "Clinical Edge System",
            duration: "Nov 2025 – Dec 2025",
            github: "#",
            demo: "#"
        },
        {
            title: "Full-Stack Progress-Tracker",
            problem: "Many productivity tools are either too complex or lack visual analytics for tracking long-term data trends.",
            solution: "Built a goal-tracking app with interactive dashboards, secure CRUD operations, and analytics features using Next.js and MySQL.",
            stack: ["Next.js", "Node.js", "MySQL", "Chart.js"],
            deployment: "Vercel + Managed DB",
            duration: "Aug 2025 – Sep 2025",
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-bold tracking-widest uppercase text-xs mb-2"
                        >
                            Recent Works
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Featured Projects
                        </motion.h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col bg-dark-card border border-white/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all group"
                        >
                            <div className="aspect-video bg-slate-900 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Layout className="text-primary/20 group-hover:scale-110 transition-transform" size={64} />
                            </div>

                            <div className="p-6 sm:p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                                <div className="space-y-4 mb-6 flex-1">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Problem</span>
                                        <p className="text-sm text-dark-muted leading-relaxed mt-1">{project.problem}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/80">Solution</span>
                                        <p className="text-sm text-white leading-relaxed mt-1">{project.solution}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[10px] font-medium bg-dark-bg px-2 py-1 rounded-md border border-white/5 uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/5 flex flex-col space-y-4">
                                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-dark-muted">
                                        <div className="flex items-center gap-1.5">
                                            <Cloud size={12} className="text-primary" />
                                            <span>{project.deployment}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={12} className="text-secondary" />
                                            <span>{project.duration}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex space-x-4">
                                            <a href={project.github} className="text-dark-muted hover:text-white transition-colors" title="GitHub Source">
                                                <Github size={18} />
                                            </a>
                                            <a href={project.demo} className="text-dark-muted hover:text-white transition-colors" title="Live Demo">
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
