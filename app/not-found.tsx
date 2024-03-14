import Link from "next/link";
import PageHolder from "./components/page-holder";
import "@/app/styling/404.css";
import Button from "./components/button";

export default function NotFound() {
  return (
    <PageHolder>
      <div className="div404">404</div>
      <div className="text-center text-xl">Page cannot be found</div>
      <div className="text-center text-xl">You can type any gibberish URL and end up here :)</div>
      <Link href="/">
        <Button text="Return to Home page" />
      </Link>
    </PageHolder>
  );
}
