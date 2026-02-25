import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Terminal, Database, Github, Mail, Linkedin, FileText } from 'lucide-react';
import profilePhoto from '../assets/photo/Generated Image September 14, 2025 - 1_41AM.png';
import resumePDF from '../assets/resume/jagan_resume.pdf';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
                        >
                            <Cpu size={14} className="animate-pulse" />
                            <span>AI & Full-Stack Developer</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Jagan S</span>
                        </h1>

                        <p className="text-lg md:text-xl text-dark-muted mb-8 max-w-xl leading-relaxed">
                            A deep learning and computer vision enthusiast building <span className="text-white font-medium">intelligent systems</span> and <span className="text-white font-medium">end-to-end applications</span> across healthcare and analytics.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href="#projects"
                                className="group flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20"
                            >
                                <span>Recent Projects</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                            <a
                                href={resumePDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-2 bg-dark-card hover:bg-dark-card/80 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 border border-white/5"
                            >
                                <FileText size={20} className="text-primary" />
                                <span>Download CV</span>
                            </a>
                            <div className="flex items-center space-x-3 bg-dark-card border border-white/5 px-6 py-4 rounded-xl">
                                <a href="https://github.com/jagandevloper" target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="mailto:jagan.techdev@gmail.com" className="text-dark-muted hover:text-white transition-colors">
                                    <Mail size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/jagandevloper/" target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:flex justify-center relative scale-110"
                    >
                        <div className="relative w-[400px] h-[400px]">
                            {/* Rotating Creative Borders */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[3px] border-dashed border-primary/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-[1px] border-dashed border-secondary/20 rounded-full"
                            />

                            {/* Main Image Container with Polygon Masking/Creative Shape */}
                            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl group shadow-primary/20 bg-dark-card/50 backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10 opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
                                <img
                                    src={profilePhoto}
                                    alt="Jagan S"
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                {/* Scanning Effect Overlay */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 opacity-20"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent z-10" />
                            </div>

                            {/* Floating Tech Badges */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-dark-card/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <Terminal className="text-primary w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Role</p>
                                    <p className="text-xs font-bold">Fullstack Developer</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-dark-card/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                                    <Cpu className="text-secondary w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Passion</p>
                                    <p className="text-xs font-bold">AI Enthusiast</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
