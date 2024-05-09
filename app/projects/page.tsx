"use client";
import PageHolder from "../components/page-holder";
import { Project } from "./project";

export default function ProjectsPage() {
  return (
    <PageHolder>
      <h1 className="text-3xl text-center mb-2 font-semibold">Projects</h1>
      <p className="text-sm mb-4 text-center">
        All project were completed to meet requirments, designs and ideas
        provided by clients.
      </p>
      <div className="flex-container">
        <Project
          projectName={"SMOKING BEAR($MOB)"}
          img={"./test"}
          projectDescription={
            "NextJS(Typescript) crypto project utilizes AR(augmented reality) and 3d visualization with three-js, language localization(English/Chinese), Web3 wallet connections, build with Tailwind, framer-motion, grid and flex containers, .env. Application is mobile friendly. Web-application includes mini-game build on Canvas. Hoster via private-server, containerization with Docker, version controlled with Git."
          }
          href={"https://smobsolana.com/en"}
        />
        <Project
          href={"https://luxury-signs-demo.vercel.app/"}
          projectName={"LUXURY DESIGN SIGNS"}
          img={"./test"}
          projectDescription={
            "NextJS(Typescript) project powered by Tailwind(CSS), framer-motion, react-quick-marquee, sliders, emailjs API, Google reviews API, grid and flex containers. Application is mobile friendly. Hoster via Vercel, version controlled with Git, domain provided by GoDaddy. Website is STILL in development, we are working on SEO planning, finishing up designs and business price calculator!"
          }
        />
        <Project
          projectName={"ALON THE ALIEN($ALON)"}
          img={"./test"}
          projectDescription={
            "NextJS(Typescript) crypto project build with Tailwind(CSS), framer-motion animations, embed elements and utilizing creative UI/UX approach, grid and flex containers. Application is mobile friendly. Hoster via private-server, containerization with Docker, version controlled with Git."
          }
          href={"https://alonthealien.com/"}
        />
        <Project
          href={"https://www.pepeplane.com/"}
          projectName={"PEPE THE PLANE($PEPE)"}
          img={"./test"}
          projectDescription={
            "ReactJS(Typescript) project powered by Tailwind(CSS), framer-motion, react-quick-marquee, webpack, grid and flex containers. Application is mobile friendly. Includes Canvas mini-game. Hoster via Vercel, version controlled with Git."
          }
        />
        <Project
          projectName={"NDA(IN PROGRESS)"}
          img={"./test"}
          projectDescription={
            "MERN(MongoDB, ExpressJS, React, NodeJS, Typescript) full-stack crypto project to satisfy aiprdrop and presale functionality as well as landing page for the business. Transfers crypto to the signed members, distributes presale coins to the signed members, utilizes best security practices, validations, middlewares and UI/UX friendly messages. Application is mobile friendly. Frontend hosten via Vercel, backend via AWS ES2, database via MongoDB cluster, version controlled with Git, domain provided by GoDaddy."
          }
        />
      </div>
    </PageHolder>
  );
}
