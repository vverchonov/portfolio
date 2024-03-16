"use client";

import { useState } from "react";
import Button from "../components/button";
import emailjs from "@emailjs/nodejs";
import { Flip, toast } from "react-toastify";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [subject, setSubject] = useState("");

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onMsgChange = (e: any) => {
    setMsg(e.target.value);
  };

  const onSubjectChange = (e: any) => {
    setSubject(e.target.value);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
        {
          email: email,
          msg: msg,
          subject: subject,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string,
        },
      )
      .then(
        () => {
          toast.success(
            "Thank you for your request. I will get back to you in 1-3 business day(s).",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Flip,
            },
          );
        },
        (error) => {
          toast.error(
            "Error while sending message. Please let me know if the service is down. Thank you!",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Flip,
            },
          );
        },
      );
    setEmail("");
    setMsg("");
    setSubject("");
  };

  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="font-medium block mb-1 text-black text-lg"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          className=" bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="font-medium block mb-1 text-black text-lg"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={onSubjectChange}
          className="bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
          placeholder="Let me know how I can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="font-medium block mb-1 text-black text-lg"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={6}
          value={msg}
          onChange={onMsgChange}
          className=" bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <Button onClick={sendEmail} text="Send message" />
    </form>
  );
}
