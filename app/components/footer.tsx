import Link from "next/link";



export default function Footer(){

    return(
        <footer className="bg-blue p-4 flex gap-3 justify-center text-2xl">
           <Link href="https://www.linkedin.com/in/viacheslav-verchonov/" rel="noopener noreferrer" target="_blank"><i className="devicon-linkedin-plain"></i> LinkedIn</Link>
           <Link href="https://drive.google.com/file/d/10iQh9-wnpBgQxl3FbOhk0E6Tuw--4pAi/view?usp=sharing" rel="noopener noreferrer" target="_blank"><i className="devicon-google-plain"></i> Resume PDF</Link>
           <Link href="https://github.com/vverchonov" rel="noopener noreferrer" target="_blank"><i className="devicon-github-original"></i> Github</Link>
        </footer>
    );
}

