import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GalleryDetailPage = () => {
  const [selectedItem, setSelectedItem] = useState<typeof siteConfig.gallery.items[0] | null>(null);

  // Duplicate items to simulate a larger gallery for this demo
  const allItems = [...siteConfig.gallery.items, ...siteConfig.gallery.items, ...siteConfig.gallery.items];

  return (
    <div className="bg-industrial-dark min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-industrial-green mb-4 transition-colors">
              <ArrowLeft size={20} /> Trở về Trang chủ
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              Thư viện Hoạt động Toàn cầu
            </h1>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0 max-w-md text-right">
            Tài liệu hình ảnh về máy móc hạng nặng Titan được triển khai trong các điều kiện khắc nghiệt trên toàn cầu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allItems.map((item, idx) => (
            <motion.div
              key={idx}
              layoutId={`gallery-item-${idx}`}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5 cursor-pointer"
            >
              <motion.img
                layoutId={`gallery-img-${idx}`}
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-industrial-green text-xs font-mono uppercase tracking-widest mb-1 block">
                  Nhật ký Dự án #{1000 + idx}
                </span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-industrial-gray border border-white/10 rounded-lg overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-industrial-green hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 aspect-video lg:aspect-auto">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-industrial-dark/50">
                  <span className="text-industrial-green font-mono text-sm tracking-widest uppercase mb-2">
                    Dự án Mật
                  </span>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Được triển khai tại các khu vực rủi ro cao, đơn vị này thể hiện khả năng vượt trội trong quản lý tải trọng và thích ứng địa hình.
                    Hoạt động với hiệu suất cao nhất dưới áp lực môi trường khắc nghiệt.
                  </p>

                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Địa điểm</span>
                      <span className="text-white">Khu 7, Neo-Tokyo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Ngày</span>
                      <span className="text-white">2045.11.21</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Trạng thái</span>
                      <span className="text-industrial-green">Hoạt động</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
