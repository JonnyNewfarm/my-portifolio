"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface ValueProps {
  value: string;
  marginTop?: string;
  marginBottom?: string;
  textSize?: string;
}

const ScrollText = ({
  value,
  marginTop,
  marginBottom,
  textSize,
}: ValueProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.25"],
  });

  const words = value.split(" ");
  return (
    <div
      className={`w-full text-center p-8 sm:p-12 text-3xl sm:text-5xl md:${textSize} mt-${marginTop} -mb-[${marginBottom}]`}
    >
      <h1
        ref={container}
        className="flex flex-wrap justify-center items-center gap-3 max-w-full"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word range={[start, end]} progress={scrollYProgress} key={i}>
              {word}
            </Word>
          );
        })}
      </h1>
    </div>
  );
};

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: any;
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-3 inline-block">
      <span className="absolute opacity-[0.3]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default ScrollText;
