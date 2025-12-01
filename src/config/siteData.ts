import { type LucideIcon, History, Settings, HardHat, Handshake } from 'lucide-react';
import productData from '../data/products.json';

export interface NavItem {
    label: string;
    href: string;
}

export interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Product {
    name: string;
    images: string[];
    description: string;
    specs: { label: string; value: string }[];
    parameters?: {
        payload: string;
        engine: string;
        chassis: string;
    };
}

export interface ProductCategory {
    id: string;
    label: string;
    products: Product[];
}

export interface GalleryItem {
    src: string;
    alt: string;
    title: string;
}

export interface SiteConfig {
    nav: {
        logo: string;
        links: NavItem[];
    };
    hero: {
        company: string;
        title: string;
        subtitle: string;
        cta: string;
        backgroundImage: string;
    };
    features: {
        title: string;
        subtitle: string;
        items: Feature[];
    };
    featuredProducts: {
        title: string;
        subtitle: string;
        categories: ProductCategory[];
    };
    gallery: {
        title: string;
        items: GalleryItem[];
    };
    footer: {
        contact: {
            address: string;
            phone: string;
            email: string;
        };
        social: {
            platform: string;
            href: string;
        }[];
    };
}

export const siteConfig: SiteConfig = {
    nav: {
        logo: "METAL CREATE.,JSC",
        links: [
            { label: "Giới thiệu", href: "#features" },
            { label: "Sản phẩm", href: "#fleet" },
            { label: "Thư viện", href: "#gallery" },
            { label: "Liên hệ", href: "#footer" },
        ],
    },
    hero: {
        company: "CÔNG TY CỔ PHẦN METAL CREATE",
        title: "GIẢI PHÁP XE CHUYÊN DỤNG",
        subtitle: "Chuyên gia công & Chế tạo Xe Tải Chuyên Dụng - Xe Môi Trường.",
        cta: "Khám phá Sản phẩm",
        backgroundImage: "/mtc-bg.avif",
    },
    features: {
        title: "ĐỐI TÁC TIN CẬY CHO MỌI GIẢI PHÁP XE CHUYÊN DỤNG",
        subtitle: "Trong một thế giới đang vận hành không ngừng, mỗi nhiệm vụ đều đòi hỏi một công cụ chuyên biệt. Từ việc giữ gìn môi trường sống xanh - sạch - đẹp đến việc hiện thực hóa các dự án xây dựng quy mô lớn, phương tiện chuyên dụng đóng vai trò then chốt. Hiểu được điều đó, METAL CREATE.,JSC ra đời với sứ mệnh trở thành cánh tay nối dài đáng tin cậy, mang đến những giải pháp vận tải vượt trội, được thiết kế và gia công tối ưu cho từng nhu cầu cụ thể của khách hàng.",
        items: [
            {
                title: "KINH NGHIỆM SÂU RỘNG",
                description: "Với hơn 10 năm hoạt động trong ngành, chúng tôi thấu hiểu mọi yêu cầu kỹ thuật và bài toán thực tế của khách hàng.",
                icon: History,
            },
            {
                title: "CÔNG NGHỆ & CHẤT LƯỢNG VƯỢT TRỘI",
                description: "Áp dụng dây chuyền sản xuất hiện đại, vật liệu cao cấp, đảm bảo độ bền bỉ, an toàn và hiệu quả kinh tế lâu dài.",
                icon: Settings,
            },
            {
                title: "ĐỘI NGŨ KỸ THUẬT TẬN TÂM",
                description: "Đội ngũ kỹ sư, công nhân lành nghề, sẵn sàng tư vấn và thiết kế giải pháp TỐI ƯU NHẤT cho bạn.",
                icon: HardHat,
            },
            {
                title: "DỊCH VỤ TRỌN GÓI",
                description: "Từ tư vấn, thiết kế, gia công đến bảo hành, bảo dưỡng - tất cả đều có tại METAL CREATE.,JSC.",
                icon: Handshake,
            },
        ],
    },
    featuredProducts: {
        title: "SẢN PHẨM CHÍNH",
        subtitle: "Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực gia công, chế tạo, và lắp đặt thùng xe tải chuyên dụng với các dòng sản phẩm chính",
        categories: productData
    },
    gallery: {
        title: "Tin mới",
        items: [
            {
                src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
                alt: "Hoạt động Khai thác",
                title: "Khai thác Sâu",
            },
            {
                src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
                alt: "Công trường Xây dựng",
                title: "Xây dựng Đô thị",
            },
            {
                src: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2070&auto=format&fit=crop",
                alt: "Trung tâm Logistics",
                title: "Logistics Cảng",
            },
        ],
    },
    footer: {
        contact: {
            address: "Số 7, đường Trần Thủ Độ, Phường Thái Bình, Tỉnh Hưng Yên, Việt Nam",
            phone: "0949576767",
            email: "metalcreate123@gmail.com",
        },
        social: [
            { platform: "Zalo", href: "https://zalo.me/0949576767" },
            { platform: "Facebook", href: "https://www.facebook.com/" },
            { platform: "Youtube", href: "https://www.youtube.com/" },
        ],
    },
};
