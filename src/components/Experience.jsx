import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Machine Learning Intern",
            company: "VyBog India Pvt. Ltd.",
            duration: "Dec 2024 – Jan 2025",
            location: "On-site / Chennai",
            description: "Developed intelligent recruitment systems focusing on natural language processing and candidate ranking algorithms.",
            achievements: [
                "Built an end-to-end resume parsing pipeline using spaCy and regex for structured data extraction",
                "Developed resume-job matching models using TF-IDF, Word2Vec, and cosine similarity",
                "Evaluated models using accuracy, precision, recall, and F1-score to ensure high-quality matches",
                "Delivered a system that significantly improved candidate-job alignment accuracy"
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-2"
                    >
                        Career Path
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Professional Experience
                    </motion.h2>
                </div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors pb-8"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />

                            <div className="bg-dark-card border border-white/5 p-8 rounded-3xl hover:bg-slate-800/50 transition-all group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <div className="flex items-center text-dark-muted text-sm font-medium bg-dark-bg px-3 py-1 rounded-full border border-white/5">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.duration}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-6 text-sm text-dark-muted italic font-medium">
                                    <div className="flex items-center">
                                        <Briefcase size={14} className="mr-1" />
                                        {exp.company}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin size={14} className="mr-1" />
                                        {exp.location}
                                    </div>
                                </div>

                                <p className="text-dark-text/80 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((item, iIdx) => (
                                        <li key={iIdx} className="flex items-start text-sm text-dark-muted">
                                            <span className="text-primary mr-2 font-bold">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
