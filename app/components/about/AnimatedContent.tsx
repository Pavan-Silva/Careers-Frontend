import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const blockItems = ["about", "work", "stack"];

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
      return;
    }

    blockItems.map((item) => {
      gsap.fromTo(
        `.${item}`,
        { y: 150, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: `.${item}`,
            start: "top bottom",
            toggleActions: "play pause resume reverse",
          },
        }
      );
    });
  });

  return (
    <div className="w-full h-full" ref={container}>
      {children}
    </div>
  );
}
