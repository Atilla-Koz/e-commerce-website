import two from '../../assets/ShopPage/ShopNav/ShopHero/2.png';
import three from '../../assets/ShopPage/ShopNav/ShopHero/3.png';

export default function ShopHero() {
  return (
    <search className="w-full h-[1628px] flex flex-col items-center justify-center gap-4 bg-[#FAFAFA] lg:flex-row lg:h-[271px] lg:pb-[3rem]">
      <img className="lg:w-[204] lg:h-[223px]" src={three} />
      <img className="lg:w-[204] lg:h-[223px]" src={two} />
      <img className="lg:w-[204] lg:h-[223px]" src={three} />
      <img className="lg:w-[204] lg:h-[223px]" src={two} />
      <img className="lg:w-[204] lg:h-[223px]" src={three} />
    </search>
  );
}
