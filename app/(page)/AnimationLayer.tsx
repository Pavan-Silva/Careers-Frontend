"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import JobCard from "./JobCard";

const cards = [
  { location: "Colombo", title: "Associate Software Engineer", color: "white" },
  { location: "Gampaha", title: "System Administrator", color: "pink" },
  { location: "Jaffna", title: "Quality Assurance Personnel", color: "green" },
  { location: "Singapore", title: "Full Stack Developer", color: "white" },
  { location: "Dubai", title: "Junior Sofware Intern", color: "pink" },
  { location: "India", title: "BI Analyst", color: "green" },
];

const AnimationLayer = () => {
  const cards1 = useRef(null);
  const cards2 = useRef(null);

  let yPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  });

  const animation = () => {
    if (yPercent <= -100) {
      yPercent = 0;
    }

    gsap.set(cards1.current, { yPercent: yPercent });
    gsap.set(cards2.current, { yPercent: yPercent });

    yPercent += 0.025 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="hidden w-full h-full absolute lg:flex flex-col overflow-hidden">
      <div className="ml-auto mr-20" ref={cards1}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index % 2 == 0
                ? "ml-72"
                : index % 3 == 0
                ? "pt-24 ml-80"
                : "pt-32"
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

      <div className="ml-auto mr-20" ref={cards2}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index % 2 == 0
                ? "ml-72"
                : index % 3 == 0
                ? "pt-24 ml-80"
                : "pt-32"
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
    </div>
  );
};

export default AnimationLayer;
