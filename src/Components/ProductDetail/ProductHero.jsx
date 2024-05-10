import yc from '../../assets/ProductDetail/yellowC.jpg';
import gc from '../../assets/ProductDetail/greenC.jpg';
import lyc from '../../assets/ProductDetail/LyellowC.jpg';
import star from '../../assets/ProductDetail/star.png';
import fav from '../../assets/ProductDetail/fav.svg';
import basket from '../../assets/ProductDetail/basket.svg';
import eye from '../../assets/ProductDetail/eye.svg';

export default function ProductdetailHero() {
  return (
    <section className="flex flex-col items-center gap-8 w-full h-[991px]">
      <div className="flex flex-col gap-4">
        <img src={yc} />
        <div className="flex flex-row gap-4">
          <img src={gc} />
          <img src={lyc} />
        </div>
      </div>
      <div className="flex flex-col items-start ml-6 mr-6 gap-4">
        <h4 className="text-headerTop">Floating Phone</h4>
        <div className="flex flex-row gap-4">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <h6 className="text-softText">10 Reviews</h6>
        </div>
        <h3 className="text-headerTop">$1,139.33</h3>
        <div className="flex flex-row gap-2">
          <h6 className="text-softText">Availability:</h6>
          <h6 className="text-softText">:</h6>
          <h6 className="text-click">In Stock </h6>
        </div>
        <div className="flex flex-col items-center">
          <p className="pb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className="border-softText w-full"></hr>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[16px] h-[16px] bg-click rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#2DC071] rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></div>
        </div>
        <div className="flex flex-row justify-center gap-2 pt-6">
          <button className="w-[148px] h-[44px] border border-softText bg-click text-white">
            Select Options
          </button>
          <img src={fav} />
          <img src={basket} />
          <img src={eye} />
        </div>
      </div>
    </section>
  );
}
