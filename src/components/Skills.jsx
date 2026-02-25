import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Database, Globe, Layers, Terminal } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            title: "Programming Languages",
            icon: <Terminal className="text-emerald-400" size={20} />,
            color: "emerald",
            skills: [
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
            ]
        },
        {
            title: "Web Tech & Frameworks",
            icon: <Globe className="text-cyan-400" size={20} />,
            color: "cyan",
            skills: [
                { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
            ]
        },
        {
            title: "Data Science & ML",
            icon: <Cpu className="text-purple-400" size={20} />,
            color: "purple",
            skills: [
                { name: "Matplotlib", logo: "https://raw.githubusercontent.com/matplotlib/matplotlib/master/doc/_static/logo_dark.svg" },
                { name: "Spacy", logo: "https://raw.githubusercontent.com/explosion/spaCy/master/website/src/images/logo.svg" },
                { name: "YOLOv8", logo: "https://raw.githubusercontent.com/ultralytics/assets/main/logos/logo-pypi-yolov8.png" }
            ]
        },
        {
            title: "Tools & Databases",
            icon: <Database className="text-blue-400" size={20} />,
            color: "blue",
            skills: [
                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "Git/Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
                { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-dark-bg relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                    >
                        <Terminal size={12} />
                        <span>Technical Ecosystem</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight"
                    >
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tech Stack</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {skillGroups.map((group, gIdx) => (
                        <motion.div
                            key={gIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: gIdx * 0.1 }}
                            className="bg-dark-card/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 sm:p-10 hover:border-primary/20 transition-all group overflow-hidden relative"
                        >
                            {/* Animated hover glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-dark-bg rounded-2xl border border-white/10 group-hover:border-primary/40 transition-all">
                                            {group.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>
                                    </div>
                                    <div className="h-px flex-1 bg-white/5 mx-6 hidden md:block" />
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {group.skills.map((skill, sIdx) => (
                                        <motion.div
                                            key={sIdx}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex flex-col items-center justify-center p-6 bg-dark-bg/60 rounded-[2rem] border border-white/5 hover:bg-dark-bg/80 transition-all hover:shadow-2xl hover:shadow-primary/5 cursor-default relative group/skill"
                                        >
                                            <div className="w-12 h-12 mb-4 flex items-center justify-center relative">
                                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className="w-10 h-10 object-contain relative z-10 group-hover/skill:brightness-110"
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-dark-muted group-hover/skill:text-white text-center transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

const ServerIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
);

export default Skills;
