import Header from './Header';
import Footer from './Footer';
import ShopNav from './ShopPage/ShopNav';
import ShopHero from './ShopPage/ShopHero';
import ShopResults from './ShopPage/ShopResults';
export default function ShopPage() {
  return (
    <div>
      <Header />
      <ShopNav />
      <ShopHero />
      <ShopResults />
      <Footer />
    </div>
  );
}
