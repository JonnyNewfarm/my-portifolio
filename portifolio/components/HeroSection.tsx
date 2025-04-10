"use client";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const firstParagraph = useRef(null);
  const secondParagraph = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,

        onUpdate: (event) => (direction = event.direction * -1),
      },
      x: "-200px",
    });

    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent < -100) {
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
    <main className="h-screen w-full relative overflow-hidden">
      <Image
        fill
        className="object-cover z-10"
        alt="image"
        src={"/jonny5.jpg"}
        quality={100}
        priority
      />

      <div className="z-30 absolute top-[80vh] md:top-[45vh] right-[25vw] md:right-[10vw] xl:right-[17vw]  text-white text-2xl ">
        <h1 className="leading-[1.1] tracking-[-0.01em]">Jonas Nygaard</h1>
        <h1 className="leading-[1.1] tracking-[-0.01em]">
          Designer & Developer
        </h1>
      </div>

      <div className="absolute z-30 top-[50vh] md:top-[70vh]">
        <div
          ref={slider}
          className="relative text-white flex whitespace-nowrap"
        >
          <p
            ref={firstParagraph}
            className="font-bold text-[120px]  m-2.5 uppercase"
          >
            developer & designer -
          </p>

          <p
            ref={secondParagraph}
            className="font-bold text-[120px] z-50 left-[100%] absolute m-2.5 uppercase"
          >
            developer & designer -
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
