import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Gallery } from '../components/Gallery';

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <FeaturedProducts />
            <Gallery />
        </>
    );
};
