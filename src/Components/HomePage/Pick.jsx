import i1 from '../../assets/Pick/1.svg';
import i2 from '../../assets/Pick/2.svg';
import i3 from '../../assets/Pick/3.svg';
import i4 from '../../assets/Pick/4.svg';
import i5 from '../../assets/Pick/5.svg';
import i6 from '../../assets/Pick/6.svg';

export default function Pick() {
  return (
    <div className="flex lg:flex-row flex-col justify-around items-center gap-8 pt-24 pb-24">
      <img className=" max-w-[50%]" src={i1} alt="1" />
      <img className=" max-w-[50%]" src={i2} alt="2" />
      <img className=" max-w-[50%]" src={i3} alt="3" />
      <img className=" max-w-[50%]" src={i4} alt="4" />
      <img className=" max-w-[50%]" src={i5} alt="5" />
      <img className=" max-w-[50%]" src={i6} alt="6" />
    </div>
  );
}
