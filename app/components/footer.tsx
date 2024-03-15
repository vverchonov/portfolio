import Link from "next/link";
import CopyEmail from "../contact/copy-email";

export default function Footer() {
  return (
    <footer className="bg-blue p-4 flex flex-col gap-3 justify-center text-2xl">
      <div className="flex gap-3 justify-center">
        <Link
          className="scale-hover"
          href="https://www.linkedin.com/in/viacheslav-verchonov/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="devicon-linkedin-plain"></i> LinkedIn
        </Link>
        <Link
          className="scale-hover"
          href="https://drive.google.com/file/d/10iQh9-wnpBgQxl3FbOhk0E6Tuw--4pAi/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="devicon-google-plain"></i> Resume PDF
        </Link>
        <Link
          className="scale-hover"
          href="https://github.com/vverchonov"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="devicon-github-original"></i> Github
        </Link>
      </div>
      <div className="flex gap-3 justify-center">
        <CopyEmail />
      </div>
    </footer>
  );
}
