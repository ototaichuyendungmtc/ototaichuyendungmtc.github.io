import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { Plus } from 'lucide-react';

export const Gallery = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    return (
        <section id="gallery" ref={targetRef} className="h-[300vh] bg-industrial-dark relative">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase">
                        {siteConfig.gallery.title}
                    </h2>
                    <div className="w-24 h-2 bg-industrial-green mt-4" />
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-[20vw]">
                    {siteConfig.gallery.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 group overflow-hidden border border-white/10 bg-industrial-gray"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-display font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-industrial-green uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    Xem Dự án
                                </p>
                            </div>

                            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-industrial-green hover:text-black">
                                <Plus />
                            </div>
                        </div>
                    ))}

                    {/* End Card */}
                    <div className="h-[60vh] w-[40vw] flex-shrink-0 flex items-center justify-center border border-white/10 bg-industrial-gray/50">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Khám phá Tất cả Dự án</h3>
                            <Link to="/gallery" className="px-6 py-3 border border-industrial-green text-industrial-green hover:bg-industrial-green hover:text-black transition-colors uppercase tracking-widest">
                                Xem Lưu trữ
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
