import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteData';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${siteConfig.hero.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-industrial-dark" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-industrial-green font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                        {siteConfig.hero.company}
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tighter leading-none">
                        {siteConfig.hero.title}
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        {siteConfig.hero.subtitle}
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-transparent border border-industrial-green text-industrial-green font-bold uppercase tracking-widest overflow-hidden"
                        onClick={() => scrollToSection(siteConfig.nav.links[1].href)}
                    >
                        <span className="absolute inset-0 w-0 bg-industrial-green transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></span>
                        <span className="relative">{siteConfig.hero.cta}</span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
                <ChevronDown className="text-industrial-green" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-industrial-dark to-transparent z-20" />
            <div className="absolute top-1/4 left-10 w-1 h-24 bg-industrial-green/20 hidden md:block" />
            <div className="absolute bottom-1/4 right-10 w-24 h-1 bg-industrial-green/20 hidden md:block" />
        </section>
    );
};
