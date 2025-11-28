import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { siteConfig } from '../config/siteData';
import { Menu, X } from 'lucide-react';

// import { useTheme } from '../hooks/useTheme';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    // const { theme, toggleTheme } = useTheme();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? 'bg-industrial-dark/90 backdrop-blur-md border-industrial-green/20 py-4'
                : 'bg-transparent border-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2" aria-label="Logo">
                    <img src="/mtc-logo.jpg" alt="MTC Logo" className="h-10 w-auto" />
                    <span className="text-2xl font-display font-bold tracking-tighter text-white">
                        {siteConfig.nav.logo}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {siteConfig.nav.links.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollToSection(link.href)}
                            className="text-sm font-medium text-gray-300 hover:text-industrial-green transition-colors uppercase tracking-widest"
                        >
                            {link.label}
                        </button>
                    ))}

                    {/* <button
                        onClick={toggleTheme}
                        className="p-2 text-gray-300 hover:text-industrial-green transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button> */}

                    <a href={`tel:${siteConfig.footer.contact.phone}`} className="px-6 py-2 bg-industrial-green text-industrial-dark font-bold uppercase tracking-wider skew-x-[-12deg] hover:bg-white transition-colors">
                        <span className="skew-x-[12deg] inline-block">Đặt hàng</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    {/* <button
                        onClick={toggleTheme}
                        className="text-gray-300 hover:text-industrial-green transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button> */}
                    <button
                        className="text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-industrial-dark border-b border-industrial-green/20"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {siteConfig.nav.links.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollToSection(link.href)}
                                className="text-left text-lg font-medium text-gray-300 hover:text-industrial-green transition-colors uppercase tracking-widest"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};
