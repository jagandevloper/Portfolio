import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            skills: [
                "Cloud Infrastructure & Global Network",
                "Cloud Security, Security & Support"
            ],
            link: "#"
        },
        {
            title: "GitHub Foundations",
            issuer: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            skills: [
                "Git & GitHub Version Control",
                "Collaboration & Workflow Management"
            ],
            link: "#"
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-dark-bg/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-2"
                    >
                        Professional
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Certifications
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-dark-card border border-white/5 p-8 rounded-3xl overflow-hidden group shadow-xl"
                        >
                            {/* Spotlight effect */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col h-full relative z-10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="p-3 bg-dark-bg rounded-xl border border-primary/20 flex items-center justify-center">
                                        <img
                                            src={cert.logo}
                                            alt={`${cert.issuer} logo`}
                                            className="w-8 h-8 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{cert.title}</h3>
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-widest border border-emerald-500/20 transition-all group/link ml-2"
                                            >
                                                <span>Verified</span>
                                                <ExternalLink size={10} />
                                            </a>
                                        </div>
                                        <p className="text-dark-muted text-[10px] font-bold uppercase tracking-widest mb-6">{cert.issuer}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 flex-1">
                                    {cert.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="flex items-center space-x-3 text-xs text-dark-text/70">
                                            <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                                            <span>{skill}</span>
                                        </div>
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

export default Certifications;
