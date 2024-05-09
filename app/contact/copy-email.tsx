"use client";

import { Flip, toast } from "react-toastify";

export default function CopyEmail() {
  const onEmailClick = () => {
    navigator.clipboard.writeText("vverchonov@gmail.com");
    toast.success("Email successfully copied to your clipboad", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  };

  return (
    <span onClick={onEmailClick} className="font-semibold cursor-pointer">
      vverchonov@gmail.com
    </span>
  );
}
