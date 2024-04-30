import one from '../../assets/NavIcon/1.png';
import two from '../../assets/NavIcon/2.png';

export default function NavIcon() {
  return (
    <section className="flex flex-col items-center w-[414px] h-[1402px]">
      <div className="flex flex-col items-center text-icon w-[a309px] h-[84px]">
        <h6 className="text-click"> Practice Advice</h6>
        <h2 className="text-title">Featured Posts</h2>
      </div>
      <div>
        <div className='w-[330px] h-[300px] bg-[src("../../assets/NavIcon/1.png")]'></div>
        <div></div>
      </div>
    </section>
  );
}
