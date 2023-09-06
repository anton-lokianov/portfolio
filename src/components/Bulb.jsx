import image from "../../public/bulb.png";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-0 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <img
        src={image}
        alt=""
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
