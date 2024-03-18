import image from "../../public/illustration.png";
import Image from "next/image";
import AnimationLayer from "./AnimationLayer";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="h-svh w-full -mt-20 flex flex-col lg:justify-center lg:items-center bg-gradient-to-tr from-matte-black from-5% to-lime-green to-45% ">
      <AnimationLayer />

      <div className="h-full max-w-[1280px] flex justify-center px-5 pt-5 pb-0 relative overflow-hidden">
        <div className="absolute w-clamp_image bottom-0 md:right-0 lg:hidden">
          <Image priority src={image} alt="student_image" />
        </div>

        <SearchBar />

        <div className="mt-24 text-white max-w-[520px] lg:-mt-52 absolute lg:relative lg:place-self-center">
          <span className="font-medium block text-clamp_title min-w-96">
            Join with us
          </span>

          <span className="hidden lg:block text-xl ml-1 text-black text-opacity-55">
            Technology is global, so we are too. Wherever in the world you’re
            looking for a new role, chances are, we’re there.
          </span>

          <button className="text-sm py-4 px-7 mt-6 border border-black bg-black rounded-full lg:text-lg lg:ml-1 hover:text-black hover:bg-transparent">
            Explore all jobs
          </button>
        </div>

        <div className="hidden w-clamp_image place-self-end ml-auto -mr-20 lg:block">
          <Image priority src={image} alt="student_image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
