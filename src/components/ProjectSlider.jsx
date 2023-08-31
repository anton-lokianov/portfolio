import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

const projectSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "",
        },
        {
          title: "title",
          path: "",
        },
        {
          title: "title",
          path: "",
        },
        {
          title: "title",
          path: "",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "",
        },
        {
          title: "title",
          path: "",
        },
        {
          title: "title",
          path: "",
        },
        {
          title: "title",
          path: "",
        },
      ],
    },
  ],
};

const ProjectSlider = () => {
  return <Swiper></Swiper>;
};

export default ProjectSlider;
