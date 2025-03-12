"use client";

import React, { useState } from "react";

export const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section
      className="flex flex-col w-72 max-md:w-auto max-md:min-w-[200px] max-sm:items-center max-sm:w-full"
      aria-label="Newsletter subscription"
    >
      <h2 className="mb-5 text-xl font-medium text-orange-300">Newsletter</h2>
      <form
        onSubmit={handleSubmit}
        className="flex h-10 max-sm:w-full max-sm:max-w-72"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Enter your email
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-0 w-60 h-10 text-xl text-sky-100 bg-gray-800 rounded-l border-[none] max-sm:flex-1 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
        <button
          type="submit"
          className="flex justify-center items-center w-12 h-10 bg-blue-600 rounded-r cursor-pointer border-[none] text-[white] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
          aria-label="Subscribe to newsletter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </form>
    </section>
  );
};
