"use client";
import image from "../../../public/illustration.png";
import Image from "next/image";
import AnimatedCards from "./AnimatedCards";
import SearchBar from "./SearchBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedContent from "./AnimatedContent";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const Hero = () => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".image, .title-box, .search-box, .card-layer", {
          opacity: 1,
        });

        return;
      }

      gsap.to(".card-layer", { opacity: 1, duration: 5 });

      const tl = gsap.timeline();
      tl.fromTo(".image", { y: 200, opacity: 0 }, { opacity: 1, y: 0 });
      tl.fromTo(".title-box", { y: -200, opacity: 0 }, { opacity: 1, y: 0 });
      tl.fromTo(".search-bar", { y: 200, opacity: 0 }, { opacity: 1, y: 0 });
    },

    { scope: container }
  );

  return (
    <div
      className="h-svh w-full -mt-20 flex flex-col lg:justify-center lg:items-center bg-gradient-to-tr from-matte-black from-5% to-lime-green to-45%"
      ref={container}
    >
      <AnimatedCards />

      <div className="h-full max-w-[1280px] flex justify-center px-5 pt-5 pb-0 relative overflow-hidden">
        <div className="image opacity-0 absolute w-clamp_image h-auto bottom-0 md:right-0 lg:hidden">
          <Image
            priority
            src={image}
            quality={65}
            width={800}
            height={900}
            alt="student_image"
          />
        </div>

        <AnimatedContent>
          <div className="title-box opacity-0 mt-24 h-fit w-fit text-white max-w-[520px] mr-auto lg:-mt-52 lg:place-self-center">
            <span className="font-medium block text-clamp_title">
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

          <div className="image opacity-0 hidden w-clamp_image h-auto place-self-end ml-auto -mr-20 lg:block">
            <Image
              priority
              quality={65}
              width={800}
              height={900}
              src={image}
              alt="student_image"
            />
          </div>

          <SearchBar />
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Hero;
