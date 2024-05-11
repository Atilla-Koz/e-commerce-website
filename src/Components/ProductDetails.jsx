import Footer from './Footer';
import Header from './Header';
import Pick from './HomePage/Pick';
import Description from './ProductDetail/Description';
import ProductdetailHero from './ProductDetail/ProductHero';
import ShopNav from './ShopPage/ShopNav';

export default function ProductDetails() {
  return (
    <div>
      <Header />
      <ShopNav />
      <ProductdetailHero />
      <Description />
      <Pick />
      <Footer />
    </div>
  );
}
