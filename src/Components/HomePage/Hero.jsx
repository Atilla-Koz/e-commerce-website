import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../App.css';
import gin from '../../assets/Hero/heroimg.svg';

export default function Hero() {
  return (
    <div className="pt-[1rem]">
      <section className="flex justify-center items-center ">
        <div className="w-11/12 h-[722px] ">
          <Swiper className="">
            <SwiperSlide className="flex lg:flex-row flex-col  lg:items-center rounded-3xl bg-gradient-to-r from-blue-200 to-teal-200 hover:from-teal-200 hover:to-blue-200 transition duration-500 ease-in-out">
              <div className="flex flex-1 flex-col lg:items-start items-center ">
                <h5 className="text-[#2A7CC7]">SUMMER 2024</h5>
                <h1 className="pb-[1rem]">NEW COLLECTION</h1>
                <h4>We know how large objects will act, </h4>
                <h4 className="pb-6">but things on a small scale.</h4>
                <button className="p-[15px 40px 15px 40px] bg-[#23A6F0] ]">
                  <h3 className="text-white">SHOP NOW</h3>
                </button>
              </div>
              <div className="flex-1 ">
                <img
                  className="lg:absolute bottom-1 right-1 "
                  src={gin}
                  alt="ginger"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex lg:flex-row flex-col  lg:items-center rounded-3xl bg-gradient-to-r from-blue-200 to-teal-200 hover:from-teal-200 hover:to-blue-200 transition duration-500 ease-in-out">
              <div className="flex flex-1 flex-col lg:items-start items-center ">
                <h5 className="text-[#2A7CC7]">SUMMER 2024</h5>
                <h1 className="pb-[1rem]">NEW COLLECTION</h1>
                <h4>We know how large objects will act, </h4>
                <h4 className="pb-6">but things on a small scale.</h4>
                <button className="p-[15px 40px 15px 40px] bg-[#23A6F0] ]">
                  <h3 className="text-white">SHOP NOW</h3>
                </button>
              </div>
              <div className="flex-1 ">
                <img
                  className="lg:absolute bottom-1 right-1 "
                  src={gin}
                  alt="ginger"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}
