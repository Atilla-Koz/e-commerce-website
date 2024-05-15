import i1 from '../../assets/Pick/1.svg';
import i2 from '../../assets/Pick/2.svg';
import i3 from '../../assets/Pick/3.svg';
import i4 from '../../assets/Pick/4.svg';
import i5 from '../../assets/Pick/5.svg';
import i6 from '../../assets/Pick/6.svg';
export default function AboutBrand() {
  return (
    <div className="flex flex-col justify-around items-center gap-8 pt-24 pb-24">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-center w-[287px] lg:w-full">
          Big Companies Are Here
        </h2>
        <p className="text-center w-[328px] lg:w-full">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{' '}
        </p>
      </div>
      <div className="flex flex-col justify-around items-center gap-8 pt-24 pb-24 lg:flex-row lg:w-full">
        <img className=" max-w-[50%]" src={i1} alt="1" />
        <img className=" max-w-[50%]" src={i2} alt="2" />
        <img className=" max-w-[50%]" src={i3} alt="3" />
        <img className=" max-w-[50%]" src={i4} alt="4" />
        <img className=" max-w-[50%]" src={i5} alt="5" />
        <img className=" max-w-[50%]" src={i6} alt="6" />
      </div>
    </div>
  );
}
