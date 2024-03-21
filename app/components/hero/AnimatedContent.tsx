import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function AnimatedContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(".title-box, .image, .search-bar", { opacity: 1 });
      return;
    }

    gsap.fromTo(
      ".title-box",
      { y: 0, opacity: 1 },
      {
        y: -300,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top top-=35%",
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      ".image",
      { y: 0, opacity: 1 },
      {
        y: 300,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top top-=55%",
          toggleActions: "play pause resume reverse",
        },
      }
    );

    gsap.fromTo(
      ".search-bar",
      { y: 0, opacity: 1 },
      {
        y: 100,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top top-=75%",
          toggleActions: "play pause resume reverse",
        },
      }
    );
  });

  return (
    <div className="flex w-full h-full justify-center" ref={container}>
      {children}
    </div>
  );
}
