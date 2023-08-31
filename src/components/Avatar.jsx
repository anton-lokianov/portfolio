import image from "../assets/avatar2.png";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <img
        src={image}
        alt=""
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
