import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import one from '../../assets/ShopPage/ShopNav/ShopResults/1.svg';
import two from '../../assets/ShopPage/ShopNav/ShopResults/2.svg';

export default function ShopResults() {
  return (
    <section className="w-full h-[216px] flex flex-col items-center gap-4">
      <h6 className="text-softText">Showing all 12 results</h6>
      <div className="text-softText flex flex-row justify-center gap-4">
        <h6 className="mt-[10px]">Views:</h6>
        <button className="w-[46px] h-[46px]">
          <img
            src={one}
            alt="two"
            className="border border-softText p-4 max-w-max-content"
          />
        </button>
        <button className="w-[46px] h-[46px]">
          <img
            src={two}
            alt="two"
            className="border border-softText p-4 max-w-max-content"
          />
        </button>
      </div>
      <div className="flex flex-row gap-4">
        <select
          className="w-[141px] h-[50px] border border-softText bg-[#DDDDDD]"
          name="cars"
          id="cars"
        >
          <option value="Popularity">Popularity</option>
          <option value="Popularity">Popularity</option>
          <option value="Popularity">Popularity</option>
          <option value="Popularity">Popularity</option>
        </select>

        <button className="w-[94px] h-[50px] border border-softText bg-click text-white">
          Filter
        </button>
      </div>
    </section>
  );
}
