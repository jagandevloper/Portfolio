import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Terminal, Database, Github, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <Cpu size={14} className="animate-pulse" />
                            <span>AI & Full-Stack Developer</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
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
                            <div className="flex items-center space-x-3 bg-dark-card border border-white/5 px-6 py-4 rounded-xl">
                                <a href="https://github.com/sjagan12" target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="mailto:s.jagan200512@gmail.com" className="text-dark-muted hover:text-white transition-colors">
                                    <Mail size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:flex justify-center relative"
                    >
                        <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-dark-card border border-white/5 flex items-center justify-center p-8">
                            {/* Abstract Tech Visual */}
                            <div className="grid grid-cols-2 gap-4 w-full h-full opacity-40">
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -10, 0],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{
                                            duration: 4 + i,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="bg-primary/20 rounded-2xl"
                                    />
                                ))}
                            </div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full m-12"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Cpu className="text-primary w-32 h-32 blur-sm absolute opacity-20" />
                                <Terminal className="text-primary w-24 h-24" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
