import PageHolger from "./components/page-holder";

export default function AboutMe() {
  return (
    <PageHolger>
      <h1 className="text-3xl text-center mb-2 font-semibold">
        Viacheslav Verchonov
      </h1>
      <h1 className="text-2xl text-center mb-4 font-semibold">
        Software Developer
      </h1>
      <p className="text-xl mb-2">
        I am Viacheslav (Slava) Verchonov, a results-driven Software Developer
        (3+ years) based in Toronto, Ontario, with a passion for crafting
        innovative and user-centric solutions. Armed with a Bachelors degree in
        Computer Programmer Analyst from Fanshawe College, my career journey
        showcases proficiency in a diverse range of technologies.
      </p>
      <p className="text-xl mb-4">
        As a detail-oriented problem solver, I thrive in collaborative
        environments, consistently delivering user-friendly and scalable web
        applications. Whether fixing over 300 client-reported bugs, implementing
        cutting-edge features, or ensuring SOC2 Compliance, my commitment to
        high standards, adaptability, and effective communication defines my
        professional ethos.
      </p>
      <div className="flex flex-wrap">
        <div className="grow">
          <h2 className="text-2xl mb-2 font-semibold">Front End</h2>
          <ul className="">
            <li className=" text-xl"> - ReactJS/NextJS</li>
            <li className=" text-xl"> - Redux/RTK Query</li>
            <li className=" text-xl"> - Jest</li>
            <li className=" text-xl"> - Tailwind/Bootstrap</li>
            <li className=" text-xl"> - Webpack</li>
            <li className=" text-xl"> - Typescript</li>
          </ul>
        </div>
        <div className="grow">
          <h2 className="text-2xl mb-2 font-semibold">Back End</h2>
          <ul className="">
            <li className=" text-xl"> - ExpressJS/NodeJS</li>
            <li className=" text-xl"> - Java/Spring Boot</li>
            <li className=" text-xl"> - Nodemon</li>
            <li className=" text-xl"> - MongoDB</li>
            <li className=" text-xl"> - PostgreSQL</li>
            <li className=" text-xl"> - MySQL</li>
          </ul>
        </div>
        <div className="grow">
          <h2 className="text-2xl mb-2 font-semibold">Cloud and other</h2>
          <ul className="">
            <li className=" text-xl"> - Docker</li>
            <li className=" text-xl"> - Nginx</li>
            <li className=" text-xl"> - AWS</li>
            <li className=" text-xl"> - Ubuntu/MacOS/Windows</li>
            <li className=" text-xl"> - IntelliJ IDEA/VS Code</li>
            <li className=" text-xl"> - Postman</li>
          </ul>
        </div>
      </div>
    </PageHolger>
  );
}
