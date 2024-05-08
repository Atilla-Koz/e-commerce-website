import two from '../../assets/ShopPage/ShopNav/ShopHero/2.png';
import three from '../../assets/ShopPage/ShopNav/ShopHero/3.png';

export default function ShopHero() {
  return (
    <search className="w-full h-[1628px] flex flex-col items-center gap-4">
      <img src={three} />
      <img src={two} />
      <img src={three} />
      <img src={two} />
      <img src={three} />
    </search>
  );
}
