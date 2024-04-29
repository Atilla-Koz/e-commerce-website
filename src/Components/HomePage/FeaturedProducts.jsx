import pro from '../../assets/FeaturedProducts/product.png';

export default function FeaturedProducts() {
  return (
    <section className="flex flex-col items-center pt-16 gap-16">
      <h3>BESTSELLER PRODUCTS</h3>
      <p className="">Problems trying to resolve the conflict between </p>
      <div className="flex flex-col items-center gap-2">
        <img src={pro} alt="product" />
        <h5>Graphic Design</h5>
        <a>English Deaartment</a>
        <h5 className="text-oldP flex flex-row gap-2">
          $16.48 <h5 className="text-newP">$6.48</h5>
        </h5>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={pro} alt="product" />
        <h5>Graphic Design</h5>
        <a>English Deaartment</a>
        <h5 className="text-oldP flex flex-row gap-2">
          $16.48 <h5 className="text-newP">$6.48</h5>
        </h5>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={pro} alt="product" />
        <h5>Graphic Design</h5>
        <a>English Deaartment</a>
        <h5 className="text-oldP flex flex-row gap-2">
          $16.48 <h5 className="text-newP">$6.48</h5>
        </h5>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={pro} alt="product" />
        <h5>Graphic Design</h5>
        <a>English Deaartment</a>
        <h5 className="text-oldP flex flex-row gap-2">
          $16.48 <h5 className="text-newP">$6.48</h5>
        </h5>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={pro} alt="product" />
        <h5>Graphic Design</h5>
        <a>English Deaartment</a>
        <h5 className="text-oldP flex flex-row gap-2">
          $16.48 <h5 className="text-newP">$6.48</h5>
        </h5>
      </div>
      <button className="w-[256px] h-[52px] p-[15px 40px 15px 40px] rounded-md text-click border border-click">
        LOAD MORE PRODUCTS
      </button>
    </section>
  );
}
