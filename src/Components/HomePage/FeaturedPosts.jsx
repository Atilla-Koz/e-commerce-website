import one from '../../assets/Featured/1.png';
import two from '../../assets/Featured/2.png';
import four from '../../assets/Featured/4.png';

export default function FeaturedPosts() {
  return (
    <section className="flex flex-col items-center gap-32 pt-24 w-full h-[1214px] lg:w-full lg:h-[632px]">
      <div className="flex flex-col items-center gap-2 w-[248px] h-[122px]">
        <h4 className="text-softText">Featured Products</h4>
        <h3 className="text-title">THE BEST SERVICES</h3>
        <p className="text-softText">
          Problems trying to resolve the conflict between{' '}
        </p>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-around flex flex-col gap-32 ">
        <div className="flex flex-col justify-between  items-center gap-4  ">
          <img src={one} />
          <h3 className="text-title">Easy Wins</h3>
          <p className="text-softText ">Get your best looking smile now!</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 x">
          <img src={two} />
          <h3 className="text-title ]">Concrete</h3>
          <p className="text-softText  ">Get your best looking smile now!</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4">
          <img src={four} />
          <h3 className="text-title"> Hack Growth</h3>
          <p className="text-softText">Get your best looking smile now!</p>
        </div>
      </div>
    </section>
  );
}
