import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ExternalLink, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/achievemens/1740736097826.jpg';
import img2 from '../assets/achievemens/1740736123253.jpg';

const Achievements = () => {
    const images = [img1, img2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const achievements = [
        {
            icon: <Trophy className="text-yellow-400" />,
            title: "3rd Place – SRM Project Expo 2025",
            desc: "Recognized in the AI and Edge Computing Category for innovative problem solving at SRM Project Expo 2025. This project explored the intersection of low-latency computer vision and distributed edge nodes.",
            tag: "Innovation",
            category: "AI & Edge Computing",
            date: "Jan 2025",
            link: "https://www.linkedin.com/posts/artificial-intelligence-and-data-science-easwari-engineering-college-527a91289_techtitans-saram2025-innovationunlocked-activity-7301176490111442944-VVVo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYSRKoBb4M1ZkTG_Myzs6uIKQnQDe2m5oc"
        }
    ];

    return (
        <section id="achievements" className="py-24 bg-dark-bg/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-2"
                    >
                        Success Stories
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Key Achievements
                    </motion.h2>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="bg-dark-card/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] hover:border-primary/20 transition-all duration-500 flex flex-col lg:flex-row group relative overflow-hidden shadow-2xl"
                            >
                                {/* Slideshow Section */}
                                <div className="lg:w-2/5 h-80 sm:h-96 lg:h-auto relative overflow-hidden bg-black">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentIndex}
                                            src={images[currentIndex]}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.7 }}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </AnimatePresence>

                                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-card via-transparent to-transparent opacity-90" />

                                    {/* Navigation Dots */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                                        {images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentIndex(i)}
                                                className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-4' : 'bg-white/30'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Arrow Controls */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100 z-20"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100 z-20"
                                    >
                                        <ChevronRight size={20} />
                                    </button>

                                    <div className="absolute top-8 left-8 z-20">
                                        <div className="px-3 py-1 bg-primary/80 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none group-hover:opacity-[0.04] transition-opacity">
                                        <Trophy size={280} className="text-primary rotate-12" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <div className="p-3 bg-dark-bg rounded-xl border border-white/5 text-yellow-400 group-hover:scale-105 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-1 italic">
                                                    {item.category}
                                                </span>
                                                <div className="flex items-center gap-3 text-dark-muted text-[10px] font-bold uppercase tracking-widest">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar size={12} /> {item.date}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 underline decoration-primary/30">
                                                        <MapPin size={12} /> Easwari Engineering College
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-dark-muted text-lg leading-relaxed mb-10 max-w-xl">
                                            {item.desc}
                                        </p>

                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-3 bg-primary/10 hover:bg-primary text-primary hover:text-white py-3 px-6 rounded-xl font-bold transition-all group/btn border border-primary/20 hover:border-primary/40 shadow-lg"
                                        >
                                            <span className="uppercase text-[10px] tracking-[0.2em]">Verify Credential</span>
                                            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
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

export default Achievements;
