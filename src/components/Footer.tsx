import { siteConfig } from '../config/siteData';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="footer" className="bg-black text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-8 bg-industrial-green skew-x-[-12deg]" />
                            <span className="text-2xl font-display font-bold tracking-tighter text-white">
                                {siteConfig.nav.logo}
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            {siteConfig.hero.subtitle}
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-industrial-green">Liên hệ</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="shrink-0 text-industrial-green" size={20} />
                                <span>{siteConfig.footer.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="shrink-0 text-industrial-green" size={20} />
                                <span>{siteConfig.footer.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="shrink-0 text-industrial-green" size={20} />
                                <span>{siteConfig.footer.contact.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-industrial-green">Liên kết</h4>
                        <ul className="space-y-2">
                            {siteConfig.nav.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-industrial-green">Tin tức</h4>
                        <p className="text-gray-400 mb-4 text-sm">Đăng ký nhận thông tin mới nhất</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="ENTER EMAIL"
                                className="bg-white/5 border border-white/10 px-4 py-2 text-white outline-none focus:border-industrial-green w-full"
                            />
                            <button className="bg-industrial-green text-black px-4 font-bold hover:bg-white transition-colors">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} {siteConfig.nav.logo}. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {siteConfig.footer.social.map((social) => (
                            <a
                                key={social.platform}
                                href={social.href}
                                className="text-gray-500 hover:text-industrial-green transition-colors text-sm uppercase tracking-wider"
                            >
                                {social.platform}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 border border-white/10 hover:bg-industrial-green hover:text-black hover:border-industrial-green transition-all rounded-full group"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};
