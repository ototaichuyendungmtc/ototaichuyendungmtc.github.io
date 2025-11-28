import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { ArrowLeft, Shield, Zap, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageCarousel } from '../components/ImageCarousel';

export const ProductDetailPage = () => {
    const { id } = useParams();

    // Find product across all categories
    let product = null;
    let category = null;

    for (const cat of siteConfig.featuredProducts.categories) {
        const found = cat.products.find(p => p.name.replace(/\s+/g, '-').toLowerCase() === id);
        if (found) {
            product = found;
            category = cat;
            break;
        }
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-industrial-dark flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link to="/" className="text-industrial-green hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-industrial-dark min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-industrial-green mb-8 transition-colors">
                    <ArrowLeft size={20} /> Trở về Trang chủ
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <ImageCarousel images={product.images} alt={product.name} />
                        <div className="absolute -bottom-6 -right-6 w-full h-full border border-industrial-green/20 -z-10 rounded-lg" />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-white"
                    >
                        <div className="mb-2">
                            <span className="text-industrial-green font-mono text-sm tracking-widest uppercase">
                                {category?.label}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{product.name}</h1>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">{product.description}</p>

                        {/* Key Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {product.specs.map((spec, idx) => (
                                <div key={idx} className="bg-white/5 p-4 rounded border border-white/10">
                                    <span className="block text-gray-400 text-sm mb-1">{spec.label}</span>
                                    <span className="block text-xl font-bold text-white">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Features List */}
                        {/* Product Parameters */}
                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-industrial-green/10 rounded text-industrial-green">
                                    <Truck size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase tracking-wider">Tải trọng hàng hóa</span>
                                    <span className="font-medium">{product.parameters?.payload || "Đang cập nhật"}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-industrial-green/10 rounded text-industrial-green">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase tracking-wider">Động cơ</span>
                                    <span className="font-medium">{product.parameters?.engine || "Đang cập nhật"}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-industrial-green/10 rounded text-industrial-green">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase tracking-wider">Khung gầm</span>
                                    <span className="font-medium">{product.parameters?.chassis || "Đang cập nhật"}</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`tel:${siteConfig.footer.contact.phone}`} className="px-8 py-4 bg-industrial-green text-industrial-dark font-bold text-center uppercase tracking-widest hover:bg-white transition-colors rounded">
                                Liên hệ đặt hàng
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products Carousel */}
                {category && (
                    <div className="border-t border-white/10 pt-16">
                        <h3 className="text-2xl font-display font-bold text-white mb-8">Các sản phẩm liên quan</h3>

                        <div className="relative group">
                            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                                {category.products
                                    .filter(p => p.name !== product?.name)
                                    .map((relatedProduct, idx) => (
                                        <Link
                                            key={idx}
                                            to={`/product/${relatedProduct.name.replace(/\s+/g, '-').toLowerCase()}`}
                                            className="min-w-[300px] w-[300px] snap-start bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-industrial-green/50 transition-colors group/card"
                                        >
                                            <div className="aspect-video overflow-hidden">
                                                <img
                                                    src={relatedProduct.images[0]}
                                                    alt={relatedProduct.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="text-lg font-bold text-white mb-2 group-hover/card:text-industrial-green transition-colors">
                                                    {relatedProduct.name}
                                                </h4>
                                                <div className="flex justify-between text-sm text-gray-400">
                                                    <span>{relatedProduct.specs[0].value}</span>
                                                    <span>{relatedProduct.specs[1].value}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
