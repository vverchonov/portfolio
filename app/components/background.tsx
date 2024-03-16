"use client";
import "@/app/styling/background.css";
import { useMemo } from "react";
import Marquee from "react-fast-marquee";

const words = [
  " React Redux NextJS Typescript ",
  " Express.js Node.js ",
  " Java Spring Boot ",
  " Tailwind Bootstrap Animations ",
  " Docker AWS Ngix ",
];

export default function Background() {
  const getWords = () => {
    return words.map((word, index) => {
      const direction = useMemo(() => {
        return index % 2 === 0 ? "left" : "right";
      }, [index]);

      return (
        <Marquee
          className="marquee"
          key={word}
          direction={direction}
          speed={Math.floor(Math.random() * 50 + 20)}
        >
          <p className="item">{word}</p>
        </Marquee>
      );
    });
  };

  return (
    <div className="background">
      <div className="items-holder">{getWords()}</div>
    </div>
  );
}
