// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import b2 from "../img/b2.png";
import b1 from "../img/b1.png";
import b3 from "../img/b3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

function Herosection() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={b2} alt="main-banner" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={b1} alt="main-banner" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={b3} alt="main-banner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Herosection;
