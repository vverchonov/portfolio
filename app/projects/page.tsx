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
          href={"https://www.zigger.io/"}
          projectName={"ZIGGER"}
          img={"./test"}
          projectDescription={
            "Full-stack Twitter/X analytics platform built with React and NodeJS. Features include tweet tracking with custom scoring algorithm based on follower metrics, Telegram bot integration for authentication, user management with ban functionality, and real-time memecoin market tracking. Backend utilizes Twitter API integration, Web3.js for blockchain interaction, SolScan API for coin metrics, MongoDB for data persistence, and Redis for performance optimization through caching. Frontend powered by React, Axios for API communication, and Tailwind CSS for styling."
          }
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
          href={"https://www.stackedburger.ca/"}
          projectName={"STACKED BURGER"}
          img={"./test"}
          projectDescription={
            "NextJS landing page refresh project featuring an engaging contact form to drive customer engagement. Built with Tailwind CSS, integrated nodemailer for form handling, and enhanced with CSS animations. Includes embedded Google Maps for location visibility and comprehensive SEO optimization. Project focused on modernizing the existing website with improved design and product presentation to better showcase their offerings."
          }
        />
        <Project
          href={"https://cheapbannersgta.vercel.app/"}
          projectName={"FAST BANNERS GTA"}
          img={"./test"}
          projectDescription={
            "Full-stack e-commerce application (NextJS/NodeJS) for custom signage products with order tracking and admin panel functionality. Frontend features include shopping cart, file upload system, and react-fast-marquee integration. Backend built with NodeJS, MongoDB for data management, and Stripe for payment processing. Includes comprehensive order tracking, statistics dashboard, and admin panel for order management. Project is currently in active development phase."
          }
        />
        <Project
          href={"https://s-club-landing.vercel.app/"}
          projectName={"CHERRY LIPS SHOWBAR"}
          img={"./test"}
          projectDescription={
            "NextJS landing page for a Ukrainian night club featuring modern design and animations. Built with Tailwind CSS for styling, Framer Motion for smooth animations, and integrated nodemailer for contact form functionality. Implements SEO best practices for optimal search engine visibility. Project is currently in active development phase, focusing on performance optimization and user experience enhancement."
          }
        />
        <Project
          href={"https://www.tarotofmeme.com/"}
          projectName={"TAROT OF MEME"}
          img={"./test"}
          projectDescription={
            "Full-stack memecoin platform featuring dynamic visual animations and airdrop functionality. Frontend built with ReactJS, Framer Motion for advanced animations, Web3.js for crypto wallet integration, and Tailwind CSS for styling. Backend implemented with NodeJS, Web3.js for blockchain interactions, and MongoDB for data persistence. Includes automated airdrop distribution system that handles token distribution to registered users. Project showcases creative UI/UX with engaging animations while maintaining robust cryptocurrency functionality."
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
          projectName={"SMOKING BEAR($MOB)"}
          img={"./test"}
          projectDescription={
            "NextJS(Typescript) crypto project utilizes AR(augmented reality) and 3d visualization with three-js, language localization(English/Chinese), Web3 wallet connections, build with Tailwind, framer-motion, grid and flex containers, .env. Application is mobile friendly. Web-application includes mini-game build on Canvas. Hoster via private-server, containerization with Docker, version controlled with Git."
          }
          href={"https://smobsolana.com/en"}
        />
        <Project
          projectName={"PEPE THE PLANE($PEPE)"}
          img={"./test"}
          projectDescription={
            "ReactJS(Typescript) project powered by Tailwind(CSS), framer-motion, react-quick-marquee, webpack, grid and flex containers. Application is mobile friendly. Includes Canvas mini-game. Hoster via Vercel, version controlled with Git."
          }
          href={"https://www.pepeplane.com/"}
        />
        {/* <Project
          projectName={"NDA(IN PROGRESS)"}
          img={"./test"}
          projectDescription={
            "MERN(MongoDB, ExpressJS, React, NodeJS, Typescript) full-stack crypto project to satisfy aiprdrop and presale functionality as well as landing page for the business. Transfers crypto to the signed members, distributes presale coins to the signed members, utilizes best security practices, validations, middlewares and UI/UX friendly messages. Application is mobile friendly. Frontend hosten via Vercel, backend via AWS ES2, database via MongoDB cluster, version controlled with Git, domain provided by GoDaddy."
          }
        /> */}
      </div>
    </PageHolder>
  );
}
