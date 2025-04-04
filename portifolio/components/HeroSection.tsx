"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  const firstParagraph = useRef(null);
  const secondParagraph = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0,
        onUpdate: (event) => (direction = event.direction * -1),
      },
      x: "-300px",
    });

    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent == -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstParagraph.current, { xPercent: xPercent });
    gsap.set(secondParagraph.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };

  return (
    <main className="h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 inset-0 h-screen w-full z-20 bg-stone-900/25" />
      <Image
        fill
        className="object-cover z-10"
        alt="image"
        src={"/herosection3.jpg"}
        priority
      />

      <div className="absolute z-30 top-[70vh]">
        <div ref={slider} className="relative flex whitespace-nowrap">
          <p
            ref={firstParagraph}
            className="font-bold text-[150px]  m-2.5 uppercase"
          >
            developer & designer -
          </p>

          <p
            ref={secondParagraph}
            className="font-bold text-[150px] z-50 left-[100%] absolute m-2.5 uppercase"
          >
            developer & designer -
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
