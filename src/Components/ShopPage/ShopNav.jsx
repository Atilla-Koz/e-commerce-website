import { Link } from 'react-router-dom';
import ok from '../../assets/ShopPage/ShopNav/ok.svg';

export default function ShopNav() {
  return (
    <section className="w-full h-[202px] flex flex-col items-center gap-8 pt-16">
      <div>
        <h3>Shop</h3>
      </div>
      <div className="flex flex-row gap-4">
        <Link className="text-title" to="/">
          Home
        </Link>
        <img src={ok} />
        <Link to="/shop">Shop</Link>
      </div>
    </section>
  );
}
