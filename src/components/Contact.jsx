import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github />,
            url: "https://github.com/jagandevloper",
            color: "hover:text-white"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin />,
            url: "https://www.linkedin.com/in/jagandevloper/",
            color: "hover:text-blue-400"
        },
        {
            name: "Email",
            icon: <Mail />,
            url: "mailto:jagan.techdev@gmail.com",
            color: "hover:text-primary"
        }
    ];

    return (
        <section id="contact" className="py-24 bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Connect</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary non-italic">something scalable.</span></h2>

                        <p className="text-dark-muted text-lg mb-12 max-w-md">
                            Whether you're looking for a cloud integration expert or just want to talk tech, feel free to reach out. I'm always open to discussing new projects and opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 bg-dark-card rounded-xl border border-white/5 group-hover:border-primary/20 transition-all">
                                    <Mail className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-dark-muted uppercase font-bold tracking-widest">Email Me</p>
                                    <a href="mailto:jagan.techdev@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">jagan.techdev@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 bg-dark-card rounded-xl border border-white/5 group-hover:border-primary/20 transition-all">
                                    <Phone className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-dark-muted uppercase font-bold tracking-widest">Call Me</p>
                                    <a href="tel:9342301913" className="text-lg font-bold hover:text-primary transition-colors">+91 9342301913</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 bg-dark-card rounded-xl border border-white/5 group-hover:border-primary/20 transition-all">
                                    <MapPin className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-dark-muted uppercase font-bold tracking-widest">Location</p>
                                    <p className="text-lg font-bold">Chennai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-12">
                            {socialLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    className={`p-4 bg-dark-card rounded-2xl border border-white/5 ${link.color} transition-all hover:-translate-y-1 hover:border-primary/20 shadow-lg`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Minimal Contact Form placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-dark-card border border-white/5 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Send size={120} />
                        </div>

                        <form className="space-y-6 relative">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-dark-muted mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-dark-bg border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-dark-muted mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-dark-bg border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-dark-muted mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-dark-bg border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-dark-muted mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-dark-bg border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/20 flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
