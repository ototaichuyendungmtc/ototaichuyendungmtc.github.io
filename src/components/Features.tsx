import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteData';

export const Features = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="features" className="py-24 bg-industrial-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {siteConfig.features.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        {siteConfig.features.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {siteConfig.features.items.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="group p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <feature.icon size={64} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-industrial-green/20 flex items-center justify-center mb-6 group-hover:bg-industrial-green transition-colors duration-300">
                                    <feature.icon className="text-industrial-green group-hover:text-industrial-dark transition-colors duration-300" size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-industrial-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
