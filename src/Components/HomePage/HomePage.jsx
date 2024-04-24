import Header from '../Header';
import Hero from './Hero';
import NavIcon from './NavIcon';
import Pick from './Pick';
import Products from './Products';
import FeaturedProducts from './FeaturedProducts';
import Services from './Services';
import FeaturedPosts from './FeaturedPosts';
import Footer from '../Footer';

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <NavIcon />
      <Pick />
      <Products />
      <FeaturedProducts />
      <Services />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
