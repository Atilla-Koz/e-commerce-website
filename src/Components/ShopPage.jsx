import Header from './Header';
import Footer from './Footer';
import ShopNav from './ShopPage/ShopNav';
import ShopHero from './ShopPage/ShopHero';
import ShopResults from './ShopPage/ShopResults';
import ShopProductCards from './ShopPage/ShopProductCards';
export default function ShopPage() {
  return (
    <div>
      <Header />
      <ShopNav />
      <ShopHero />
      <ShopResults />
      <ShopProductCards />
      <Footer />
    </div>
  );
}
