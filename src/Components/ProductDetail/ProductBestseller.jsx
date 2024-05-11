import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import catal from '../../assets/ProductDetail/catal.png';

export default function ProductBestseller() {
  return (
    <section className="flex flex-col items-center gap-8  ">
      <h3>BESTSELLER PRODUCTS</h3>
      <div className="">
        <img src={catal} />
      </div>
      <div className="flex flex-col items-start gap-4 w-[75%]">
        <h5>Graphic Design</h5>
        <Link>English Department</Link>
        <span className="flex flex-row gap-4">
          <h5 className="text-softText">$16.48</h5>
          <h5 className="text-newP">$6.48</h5>
        </span>
      </div>
      <div className="">
        <img src={catal} />
      </div>
      <div className="flex flex-col items-start gap-4 w-[75%]">
        <h5>Graphic Design</h5>
        <Link>English Department</Link>
        <span className="flex flex-row gap-4">
          <h5 className="text-softText">$16.48</h5>
          <h5 className="text-newP">$6.48</h5>
        </span>
      </div>
      <div className="">
        <img src={catal} />
      </div>
      <div className="flex flex-col items-start gap-4 w-[75%]">
        <h5>Graphic Design</h5>
        <Link>English Department</Link>
        <span className="flex flex-row gap-4">
          <h5 className="text-softText">$16.48</h5>
          <h5 className="text-newP">$6.48</h5>
        </span>
      </div>
      <div className="">
        <img src={catal} />
      </div>
      <div className="flex flex-col items-start gap-4 w-[75%]">
        <h5>Graphic Design</h5>
        <Link>English Department</Link>
        <span className="flex flex-row gap-4">
          <h5 className="text-softText">$16.48</h5>
          <h5 className="text-newP">$6.48</h5>
        </span>
      </div>
      <div className="">
        <img src={catal} />
      </div>
      <div className="flex flex-col items-start gap-4 w-[75%]">
        <h5>Graphic Design</h5>
        <Link>English Department</Link>
        <span className="flex flex-row gap-4">
          <h5 className="text-softText">$16.48</h5>
          <h5 className="text-newP">$6.48</h5>
        </span>
      </div>
    </section>
  );
}
