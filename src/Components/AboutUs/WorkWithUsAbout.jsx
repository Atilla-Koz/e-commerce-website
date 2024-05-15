import pink from '../../assets/AboutUS/pink.png';

export default function WorkWithUsAbout() {
  return (
    <section className="flex flex-col items-center gap-8 bg-[#2A7CC7] w-full h-[520px] mb-8 lg:flex-row lg:justify-between lg:h-[636px]">
      <div className="lg:flex lg:flex-col lg:items-end lg:w-[50%]">
        <div className="flex flex-col items-center gap-8 w-[414px] h-[388px] mt-[60px] lg:mt-0 ">
          <h5 className="text-white lg:w-[440px]">WORK WITH US</h5>
          <h2 className="text-white w-[274px] h-[120px] text-center lg:w-[440px]">
            Now Let’s grow Yours
          </h2>
          <p className="text-white text-center w-[257px] h-[80px] lg:w-[440px]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button className="p-[15px 40px 15px 40px] radius-white border border-white">
            <h6 className="text-white">Button</h6>
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={pink} />
      </div>
    </section>
  );
}
