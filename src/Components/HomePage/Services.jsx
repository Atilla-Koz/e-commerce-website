import white from '../../assets/OurServices/white.png';
import orange from '../../assets/OurServices/orange.png';

export default function Services() {
  return (
    <section className="flex flex-col items-center gap-8 w-[414px] h-[910px] pt-48">
      <div className="w-[280px] h-[336px] flex flex-col gap-4">
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
      <div className="flex flex-row">
        <img src={white} alt="" />
        <img src={orange} alt="" />
      </div>
    </section>
  );
}
