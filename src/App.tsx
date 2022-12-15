import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Zoom } from "swiper";
import "./App.css";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: 'url("/rotn.png")',
          WebkitBackgroundSize: "cover",
          width: "400px",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          // draggable={false}
          // scrollbar={{ draggable: false }}
          // allowTouchMove={false}
          direction={"horizontal"}
          // noSwiping={true}
          zoom={{ maxRatio: 1.5, minRatio: 1 }}
          onSlideChangeTransitionEnd={(swiper) => {
            swiper.zoom.in();
          }}
          style={{
            marginTop: "30px",
            marginLeft: "50px",
            width: "1000px",
            height: "auto",
            position: "absolute",
          }}
          modules={[Pagination, Navigation, Zoom]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src="/baseball.png" style={{ width: "222px" }} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src="/sweater.png" style={{ width: "222px" }} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
