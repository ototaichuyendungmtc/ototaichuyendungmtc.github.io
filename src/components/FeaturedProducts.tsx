import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { ArrowRight, Plus } from 'lucide-react';

export const FeaturedProducts = () => {
    const [activeTabId, setActiveTabId] = useState(siteConfig.featuredProducts.categories[0].id);

    const activeCategory = siteConfig.featuredProducts.categories.find(c => c.id === activeTabId);

    const handleDownloadCSV = () => {
        const headers = ['Category', 'Name', 'Description', 'Specs', 'Payload', 'Engine', 'Chassis'];
        const rows: string[] = [];

        siteConfig.featuredProducts.categories.forEach(category => {
            category.products.forEach(product => {
                const specs = product.specs.map(s => `${s.label}: ${s.value}`).join('; ');
                const row = [
                    category.label,
                    product.name,
                    product.description,
                    specs,
                    product.parameters?.payload || '',
                    product.parameters?.engine || '',
                    product.parameters?.chassis || ''
                ].map(field => `"${field.replace(/"/g, '""')}"`);
                rows.push(row.join(','));
            });
        });

        const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'products.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="fleet" className="py-24 bg-industrial-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-industrial-green/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        {siteConfig.featuredProducts.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        {siteConfig.featuredProducts.subtitle}
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {siteConfig.featuredProducts.categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTabId(category.id)}
                            className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 border border-industrial-green ${activeTabId === category.id
                                ? 'bg-industrial-green text-industrial-dark shadow-[0_0_20px_rgba(0,255,65,0.3)]'
                                : 'bg-transparent text-industrial-green hover:bg-industrial-green/10'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTabId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {activeCategory?.products.slice(-12).map((product, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white/5 border border-white/10 hover:border-industrial-green/50 transition-colors duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/90 to-transparent opacity-60" />

                                    {/* Overlay Icon */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-industrial-green/20 backdrop-blur flex items-center justify-center text-industrial-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Plus size={16} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col justify-end grow">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-industrial-green transition-colors grow">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {product.description}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        {product.specs.map((spec, sIdx) => (
                                            <div key={sIdx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
                                                <span className="text-gray-400">{spec.label}</span>
                                                <span className="text-white font-mono">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        to={`/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`}
                                        className="w-full py-3 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-industrial-green hover:text-industrial-dark transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                                    >
                                        Xem Chi tiết <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <button onClick={handleDownloadCSV} className="inline-flex items-center gap-2 text-industrial-green hover:text-white transition-colors uppercase tracking-widest text-sm font-bold group">
                        Tải xuống Danh mục
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};
