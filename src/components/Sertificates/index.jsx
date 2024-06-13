import {Component} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// image
import image1 from "../../assets/images/sertificate_1.png";
import image2 from "../../assets/images/sertificate_2.png";
import image3 from "../../assets/images/sertificate_3.png";
import image4 from "../../assets/images/sertificate_4.png";
import image5 from "../../assets/images/sertificate_5.png";
import "./Sertificates.scss";
export class Sertificates extends Component {
  render() {
    return (
      <div className='container some'>
        <h2 className='section-heading'>
          Качество продукции подтверждают{" "}
          <span className='highlighted-text'>сертификаты</span>
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{clickable: true}}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <img src={image1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt='' />
          </SwiperSlide>
        </Swiper>
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>
    );
  }
}

export default Sertificates;
