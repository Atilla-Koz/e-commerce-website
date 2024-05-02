import white from '../../assets/OurServices/white.png';
import orange from '../../assets/OurServices/orange.png';

export default function Services() {
  return (
    <section className="flex flex-col items-center gap-8 w-full h-[910px] pt-48 lg:flex lg:flex-row-reverse lg:justify-center lg:gap-24 lg:w-full lg:h-[658px] ">
      <div className="w-[280px] h-[336px] flex flex-col gap-4 lg:w-[447px] lg:h-[246px] ">
        <h5 className="text-click">Featured Products</h5>
        <h2 className="text-title">We love what we do</h2>
        <p className="text-softText">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <p className="text-softText pt-8">
          {' '}
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <img className="lg:w-[217px] lg:h-[498px]" src={white} alt="" />
        <img className="lg:w-[280px] lg:h-[498px]" src={orange} alt="" />
      </div>
    </section>
  );
}
