"use client";

import Button from "../components/button";

export default function ContactForm() {
  //TODO add state

  return (
    <form action="#" className="space-y-4">
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
          className=" bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <Button text="Send message" />
    </form>
  );
}
