import { Light } from "three";
import Button from "../components/button";
import Link from "next/link";

export const Project = (props: any) => {
  return (
    <div className="bg-white p-8 h-full border gap-4 rounded-xl flex flex-col">
      <p className="text-left text-xl font-bold">{props.projectName}</p>
      {/* <img src={props.img} alt="project image" /> */}
      <p>{props.projectDescription}</p>
      {props.href && (
        <Link href={props.href} target="_blank" className="mt-auto">
          <Button text="Go to Website" />
        </Link>
      )}
    </div>
  );
};
