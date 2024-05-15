import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import bigE from '../../assets/AboutUS/bigE.png';
import pE from '../../assets/AboutUS/pE.png';
import asian from '../../assets/AboutUS/asian.png';
import mE from '../../assets/AboutUS/mE.png';
import sE from '../../assets/AboutUS/sE.png';

export default function AboutHero() {
  return (
    <section className="pt-[10rem] flex flex-col items-center  h-[950px]">
      <div className="w-11/12 h-[722px] ">
        <Swiper className="w-[100%] h-[100%]">
          <SwiperSlide className="flex flex-col items-center gap-16 ">
            <div className="flex flex-col items-center gap-8">
              <h6 className="text-title font-[700] text-[40px]">ABOUT US</h6>
              <p className="text-softText text-[20px] w-[271px] h-[120px]">
                We know how large objects will act, but things on a small scale
                just do not act that way.
              </p>
              <Link to="/about">
                <button className="p-[15px 40px 15px 40px] bg-[#23A6F0] ]">
                  <h6 className="text-white">Get Quote Now</h6>
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <img src={bigE} />
                <img className="absolute top-[1px]" src={asian} />
                <img className="absolute" src={pE} />
                <img className="absolute right-[1px] top-[1px]" src={pE} />
                <img className="absolute left-[1px] top-[1px]" src={mE} />
                <img className="absolute right-[1px]" src={sE} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center gap-16 ">
            <div className="flex flex-col items-center gap-8">
              <h6 className="text-title font-[700] text-[40px]">ABOUT US</h6>
              <p className="text-softText text-[20px] w-[271px] h-[120px]">
                We know how large objects will act, but things on a small scale
                just do not act that way.
              </p>
              <Link to="/about">
                <button className="p-[15px 40px 15px 40px] bg-[#23A6F0] ]">
                  <h6 className="text-white">Get Quote Now</h6>
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <img src={bigE} />
                <img className="absolute top-[1px]" src={asian} />
                <img className="absolute" src={pE} />
                <img className="absolute right-[1px] top-[1px]" src={pE} />
                <img className="absolute left-[1px] top-[1px]" src={mE} />
                <img className="absolute right-[1px]" src={sE} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
