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
          path: "/storeproject.png",
        },
        {
          title: "title",
          path: "/mediaproject.png",
        },
        {
          title: "title",
          path: "/cryptoproject.png",
        },
        {
          title: "title",
          path: "/vacationproject.png",
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
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]">
      {projectSlider.slides.map((slide, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer h-full">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="relative flex rounded-lg overflow-hidden items-center justify-center group h-full">
                <div className="flex items-center justify-center relative w-full h-full overflow-hidden group">
                  <img src={image.path} alt="" className="object-fit w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">title part 1</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        title part 2
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default ProjectSlider;
