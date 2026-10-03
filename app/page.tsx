import Link from "next/link";
import PageHolger from "./components/page-holder";
import Button from "./components/button";

export default function AboutMe() {
  return (
    <PageHolger>
      <h1 className="text-3xl text-center mb-2 font-semibold">
        Viacheslav Verchonov
      </h1>
      <h1 className="text-2xl text-center mb-4 font-semibold">
        Full-stack Developer
      </h1>
      <p className="text-xl mb-2">
        I am Viacheslav (Slava) Verchonov, a full-stack developer in Toronto. I
        currently build MealSuite&apos;s admin platform, the system behind a
        healthcare foodservice SaaS, with React 19, TypeScript, Tailwind CSS,
        and Material UI on the front end and Ruby on Rails with PostgreSQL on
        the back end. I hold a Bachelor&apos;s degree in Computer Programmer
        Analyst from Fanshawe College.
      </p>
      <p className="text-xl mb-4">
        Most of that work is Connect, which turns clinical data from
        PointClickCare, HL7, and other systems into resident profiles, diet
        orders, and tray tickets. Before MealSuite I spent two and a half years
        at Limelight on a financial-planning product, moving most of the app
        from KnockoutJS to React, cutting initial load time by about 40%, and
        keeping releases SOC 2 compliant. I work closely with product and
        design, and I use Claude and GitHub Copilot to move faster while
        keeping review standards high.
      </p>
      <div className="flex flex-wrap mb-4">
        <div className="grow">
          <h2 className="text-2xl mb-2 font-semibold">Front End</h2>
          <ul className="">
            <li className=" text-xl"> - React 19 / Next.js</li>
            <li className=" text-xl"> - TypeScript</li>
            <li className=" text-xl"> - Tailwind / Material UI</li>
            <li className=" text-xl"> - Redux / RTK Query</li>
            <li className=" text-xl"> - Webpack / Vite</li>
            <li className=" text-xl"> - Zod</li>
          </ul>
        </div>
        <div className="grow">
          <h2 className="text-2xl mb-2 font-semibold">Back End</h2>
          <ul className="">
            <li className=" text-xl"> - Ruby on Rails</li>
            <li className=" text-xl"> - Java / Spring Boot</li>
            <li className=" text-xl"> - Node.js / Express</li>
            <li className=" text-xl"> - PostgreSQL</li>
            <li className=" text-xl"> - MongoDB</li>
            <li className=" text-xl"> - REST APIs</li>
          </ul>
        </div>
        <div className="grow">
          <h2 className="text-2xl mb-2 font-semibold">Cloud and other</h2>
          <ul className="">
            <li className=" text-xl"> - Docker</li>
            <li className=" text-xl"> - GitHub Actions</li>
            <li className=" text-xl"> - Datadog / LogRocket</li>
            <li className=" text-xl"> - AWS</li>
            <li className=" text-xl"> - Claude / Copilot</li>
            <li className=" text-xl"> - Jira / Agile</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Link href={"/projects"}>
          <Button text="SEE MY PROJECTS" />
        </Link>
      </div>
    </PageHolger>
  );
}
