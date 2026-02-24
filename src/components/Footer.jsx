import React from 'react';
import { Cloud } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center space-x-2">
                        <Cloud className="text-primary w-6 h-6" />
                        <span className="text-lg font-bold">Jagan<span className="text-primary">.S</span></span>
                    </div>

                    <div className="text-sm text-dark-muted font-medium">
                        © {new Date().getFullYear()} Jagan S. Built with React & Tailwind CSS.
                    </div>

                    <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="text-dark-muted hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-dark-muted hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
