"use client";
import gsap from "gsap";
import { useRef } from "react";
import JobCard from "./JobCard";
import { useGSAP } from "@gsap/react";
import { ScrollShadow } from "@nextui-org/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const cards = [
  { location: "Colombo", title: "Associate Software Engineer", color: "white" },
  { location: "Gampaha", title: "System Administrator", color: "pink" },
  { location: "Jaffna", title: "Quality Assurance Personnel", color: "green" },
  { location: "Singapore", title: "Full Stack Developer", color: "white" },
  { location: "Dubai", title: "Junior Sofware Intern", color: "pink" },
  { location: "India", title: "Business Analyst", color: "green" },
];

const AnimatedCards = () => {
  const cards1 = useRef(null);
  const cards2 = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  gsap.registerPlugin(useGSAP);

  let yPercent = 0;
  let direction = -1;

  useGSAP(() => {
    requestAnimationFrame(animation);
  });

  const animation = () => {
    if (prefersReducedMotion) {
      gsap.set(cards1.current, { yPercent: -10 });
      return;
    }

    if (yPercent <= -100) {
      yPercent = 0;
    }

    gsap.set(cards1.current, { yPercent: yPercent });
    gsap.set(cards2.current, { yPercent: yPercent });

    yPercent += 0.025 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <ScrollShadow
      visibility="both"
      hideScrollBar
      className="card-layer hidden w-full max-w-[1280px] h-full absolute lg:flex flex-col overflow opacity-0"
    >
      <div className="ml-auto" ref={cards1}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index % 2 == 0
                ? "pt-32"
                : index % 3 == 0
                ? "pt-24 ml-80"
                : "ml-72"
            }`}
          >
            <JobCard
              location={card.location}
              title={card.title}
              color={card.color}
            />
          </div>
        ))}
      </div>

      <div className="ml-auto" ref={cards2}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index % 2 == 0
                ? "pt-32"
                : index % 3 == 0
                ? "pt-24 ml-80"
                : "ml-72"
            }`}
          >
            <JobCard
              location={card.location}
              title={card.title}
              color={card.color}
            />
          </div>
        ))}
      </div>
    </ScrollShadow>
  );
};

export default AnimatedCards;
