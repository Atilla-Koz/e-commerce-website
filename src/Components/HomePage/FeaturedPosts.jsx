import one from '../../assets/Featured/1.png';
import two from '../../assets/Featured/2.png';
import three from '../../assets/Featured/3.png';
import four from '../../assets/Featured/4.png';

export default function FeaturedPosts() {
  return (
    <section className="flex flex-col items-center gap-32 pt-24 w-[414px] h-[1214px]">
      <div className="flex flex-col items-center gap-2 w-[248px] h-[122px]">
        <h4 className="text-softText">Featured Products</h4>
        <h3 className="text-title">THE BEST SERVICES</h3>
        <p className="text-softText">
          Problems trying to resolve the conflict between{' '}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 ">
        <img src={one} />

        <h3 className="text-title">Easy Wins</h3>
        <p className="text-softText ">Get your best looking smile now!</p>
      </div>
      <div className="flex flex-col items-center gap-4 x">
        <img src={two} />
        <h3 className="text-title ]">Concrete</h3>
        <p className="text-softText w-[207px]">
          Defalcate is most focused in helping you discover your most beautiful
          smile
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={four} />
        <h3 className="text-title"> Hack Growth</h3>
        <p className="text-softText">
          Overcame any hurdle or any other problem.
        </p>
      </div>
    </section>
  );
}
