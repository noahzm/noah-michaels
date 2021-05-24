import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav className="z-10 sticky top-0 mx-auto inset-x-0 dark:bg-black dark:border-white">
      <div className="flex justify-between p-3 lg:p-5 dark:text-white">
        <Link
          to="/about"
          className="lg:text-2xl self-center text-noah-blue hover:underline"
          activeClassName="underline"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-2xl lg:text-5xl text-center font-display self-center text-noah-blue hover:underline"
          activeClassName=""
        >
          Noah Michaels
        </Link>
        <a
          href="mailto:hello@noah.graphics"
          className="lg:text-2xl self-center text-noah-blue hover:underline"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
