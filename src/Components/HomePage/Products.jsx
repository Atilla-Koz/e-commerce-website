import dc from '../../assets/Products/dc.png';
import ginger from '../../assets/Products/ginger.jpg';
import b from '../../assets/Products/b.jpg';

export default function Products() {
  return (
    <section className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center">
      <div
        className="w-[354px] h-[556px] flex items-end bg-cover bg-cente lg:w-[611px] lg:h-[572px]"
        style={{ backgroundImage: `url(${dc})` }}
      >
        <div className="flex flex-col pl-4 justify-evenly w-full h-[238px] bg-[#2D8BC0BF] lg:w-[420px] lg:h-[238px]">
          <h3 className="text-white">Top Product Of the Week</h3>
          <button className="w-[198]  h-[52px] p-[15px 40px 15px 40px] rounded-md text-white border border-dashed border-white">
            <span className="font-[700] text-[14px]"> EXPLORE ITEMS</span>
          </button>
        </div>
      </div>
      <section>
        <div
          className="w-[354px] h-[556px]  flex items-end bg-cover bg-center lg:h-[289px] lg:w-[557px]"
          style={{ backgroundImage: `url(${ginger})` }}
        >
          <div className="flex flex-col pl-4 justify-evenly w-full h-[238px] bg-[#2D8BC0BF] lg:w-[347px] lg:h-[173px]">
            <h3 className="text-white">Top Product Of the Week</h3>
            <button className="w-[198]  h-[52px] p-[15px 40px 15px 40px] rounded-md text-white border border-dashed border-white">
              <span className="font-[700] text-[14px]"> EXPLORE ITEMS</span>
            </button>
          </div>
        </div>
        <div
          className="w-[354px] h-[556px] flex items-end bg-cover bg-center lg:h-[289px] lg:w-[557px]"
          style={{ backgroundImage: `url(${b})` }}
        >
          <div className="flex flex-col pl-4 justify-evenly w-full h-[238px] bg-[#2D8BC0BF] lg:w-[347px] lg:h-[173px] ">
            <h3 className="text-white">Top Product Of the Week</h3>
            <button className="w-[198]  h-[52px] p-[15px 40px 15px 40px] rounded-md text-white border border-dashed border-white">
              <span className="font-[700] text-[14px]"> EXPLORE ITEMS</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
