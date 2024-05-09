import type { Metadata } from "next";
import "./globals.css";
import "./styling/animations.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Background from "./components/background";
import Script from "next/script";
import { MotionConfig } from "framer-motion";

export const metadata: Metadata = {
  title: "Viacheslav's Portfolio",
  description: "Viacheslav Verchonov Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="flex-col">
        <Navbar />
        <Background />

        {children}

        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
        <ToastContainer className={"m-z"} />
      </body>
    </html>
  );
}
