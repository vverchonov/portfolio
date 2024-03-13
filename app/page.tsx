import Image from "next/image";
import Navbar from "./components/navbar";
import PageHolger from "./components/page-holder";

export default function AboutMe() {
  return (

      <PageHolger>
        <h1 className="text-3xl text-center mb-2 font-semibold">Viacheslav Verchonov</h1>
        <h1 className="text-2xl text-center mb-4 font-semibold">Software Developer</h1>
        <p className="text-xl mb-4">
        I am Viacheslav (Slava) Verchonov, a results-driven Software Developer (3+ years) based in Toronto, Ontario, with a passion for crafting innovative and user-centric solutions. 
        Armed with a Bachelor's degree in Computer Programmer Analyst from Fanshawe College, my career journey showcases proficiency in a diverse range of technologies. 
        As a detail-oriented problem solver, I thrive in collaborative environments, consistently delivering user-friendly and scalable web applications. 
        Whether fixing over 300 client-reported bugs, implementing cutting-edge features, or ensuring SOC2 Compliance, 
        my commitment to high standards, adaptability, and effective communication defines my professional ethos. 
        </p>
        <div className="flex">
          <div className="w-1/3">
            <h2 className="text-2xl mb-2 font-semibold">Front End</h2>
            <ul className="">
              <li className=" text-xl"> - React 11-17</li>
              <li className=" text-xl"> - NextJS</li>
              <li className=" text-xl"> - Redux</li>
              <li className=" text-xl"> - Jest</li>
              <li className=" text-xl"> - RTK Query</li>
              <li className=" text-xl"> - Tailwind/Bootstrap</li>
              <li className=" text-xl"> - Webpack</li>
              <li className=" text-xl"> - Typescript</li>
            </ul>
          </div>
          <div className="w-1/3">
            <h2 className="text-2xl mb-2 font-semibold">Back End</h2>
            <ul className="">
              <li className=" text-xl"> - ExpressJs</li>
              <li className=" text-xl"> - NodeJs</li>
              <li className=" text-xl"> - Java</li>
              <li className=" text-xl"> - Spring Boot</li>
              <li className=" text-xl"> - MongoDB</li>
              <li className=" text-xl"> - Postgresql</li>
              <li className=" text-xl"> - MySql</li>
            </ul>
          </div>
          <div className="w-1/3">
            <h2 className="text-2xl mb-2 font-semibold">Cloud and Bundling</h2>
            <ul className="">
              <li className=" text-xl"> - Docker</li>
              <li className=" text-xl"> - NodeJs</li>
              <li className=" text-xl"> - Java</li>
              <li className=" text-xl"> - Spring Boot</li>
            </ul>
          </div>
        </div>
      </PageHolger>
  );
}
