"use client";
import "@/app/styling/background.css";
import Marquee from "react-fast-marquee";

const words = [
  " React Redux NextJS Typescript ",
  " Express.js Node.js ",
  " Java Spring Boot ",
  " Tailwind Bootstrap Animations ",
  " Docker AWS Ngix ",
];

export default function Background() {
  return (
    <div className="background">
      <div className="items-holder">
        {words.map((word, index) => {
          return (
            <Marquee
              className="marquee"
              key={word}
              direction={index % 2 === 0 ? "left" : "right"}
              speed={Math.floor(Math.random() * 50 + 20)}
            >
              <p className="item">{word}</p>
            </Marquee>
          );
        })}
      </div>
    </div>
  );
}
