import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../App.css';

export default function Hero() {
  return (
    <div className="hero">
      <section className="flex justify-center items-center ">
        <div className="w-11/12 h-[622px] ">
          <Swiper className="mySwiper">
            <SwiperSlide className="rounded-3xl bg-gradient-to-r from-blue-200 to-teal-200 hover:from-teal-200 hover:to-blue-200 transition duration-500 ease-in-out flex items-center justify-center">
              <div className="flex flex-1 flex-col items-start">
                <h5>SUMMER 2024</h5>
                <h1>NEW COLLECTION</h1>
                <h4>We know how large objects will act, </h4>
                <h4>but things on a small scale.</h4>
                <button>SHOP NOW</button>
              </div>
              <div className="flex flex-1"></div>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient-to-r from-blue-200 to-teal-200 hover:from-teal-200 hover:to-blue-200 transition duration-500 ease-in-out flex items-center justify-center">
              2
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}
