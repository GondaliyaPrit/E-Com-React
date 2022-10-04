import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History } from "swiper";
import im1 from "../img/1.png";
import im2 from "../img/2.png";
import im3 from "../img/3.png";

function DiscountSlider() {
  return (
    <>
      <div className="container">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
              loop: true,
            },
            // when window width is >= 768px
            2560: {
              width: 2560,
              slidesPerView: 4,
              loop: true,
            },
          }}
          spaceBetween={66}
          slidesPerView={3}
          navigation={true}
          loop={true}
          history={{
            key: "slide",
          }}
          modules={[Navigation, Pagination, History]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={im1} alt="main-banner" className="discount-card" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={im2} alt="main-banner" className="discount-card" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={im3} alt="main-banner" className="discount-card" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default DiscountSlider;
