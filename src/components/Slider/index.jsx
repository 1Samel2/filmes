import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import { getImages } from "../../utils/getimages";
import * as C from "./styles";

export default function Slider({ info, title, ...props }) {
  return (
    <C.Container>
      <h2>{title}</h2>

      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        spaceBetween={10}
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <C.Content {...props}>
              <img
                src={getImages(item.poster_path || item.profile_path || "")}
                alt=""
              />
              <h3> {item.title || item.name}</h3>
            </C.Content>
          </SwiperSlide>
        ))}
      </Swiper>
    </C.Container>
  );
}
