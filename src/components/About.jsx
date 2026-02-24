import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, GraduationCap, Award } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <GraduationCap className="text-secondary" size={24} />,
            title: "B.Tech in AI & Data Science",
            desc: "Easwari Engineering College (2023-Present). Current CGPA: 8.28/10."
        },
        {
            icon: <Award className="text-primary" size={24} />,
            title: "Project Excellence",
            desc: "3rd Place winner at SRM Project Expo 2025 in AI & Edge Computing."
        },
        {
            icon: <Cpu className="text-purple-400" size={24} />,
            title: "Machine Learning",
            desc: "Hands-on experience in NLP, YOLOv8, and Explainable AI (XAI)."
        }
    ];

    return (
        <section id="about" className="py-24 bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-2"
                    >
                        Behind the Code
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Professional Summary
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-dark-muted text-lg leading-relaxed">
                            I am an <span className="text-white font-semibold">AI and Full-Stack development enthusiast</span> with hands-on experience in deep learning, computer vision, data analytics, and end-to-end application development.
                        </p>
                        <p className="text-dark-muted text-lg leading-relaxed">
                            Skilled in building <span className="text-white font-semibold">scalable web applications</span> and integrating machine learning models into real-world systems, I focus on delivering efficient, explainable, and user-focused solutions across healthcare and analytics.
                        </p>
                        <div className="pt-4 flex items-center space-x-4">
                            <div className="h-px flex-1 bg-white/10"></div>
                            <span className="text-xs font-mono text-dark-muted italic">Building the future of intelligent systems</span>
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-primary/20 transition-all hover:translate-x-2 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-dark-bg rounded-xl border border-white/5 group-hover:border-primary/20 transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 transition-colors group-hover:text-primary">{item.title}</h4>
                                        <p className="text-dark-muted leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
