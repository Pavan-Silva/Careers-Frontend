import image from "../../public/student.png";
import Image from "next/image";
import AnimationLayer from "./AnimationLayer";

const Hero = () => {
  return (
    <div className="h-svh w-full -mt-20 flex flex-col lg:justify-center lg:items-center bg-gradient-to-tr from-dark-orange from-5% to-light-orange to-45% ">
      <AnimationLayer />
      <div className="h-full max-w-[1280px] flex px-5 pt-5 pb-0 relative overflow-hidden">
        <div className="absolute w-clamp_image bottom-0 md:right-0 lg:hidden">
          <Image priority src={image} alt="student_image" />
        </div>

        <div className="mt-24 lg:mt-0 absolute lg:relative lg:place-self-center">
          <span className="font-medium text-white block text-clamp_title min-w-96">
            Join with us
          </span>

          <button className="text-sm py-4 px-7 mt-6 border border-black text-white bg-black rounded-full lg:text-lg lg:ml-1 hover:text-black hover:bg-transparent">
            Explore all jobs
          </button>
        </div>

        <div className="hidden w-clamp_image place-self-end ml-auto lg:block">
          <Image priority src={image} alt="student_image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
