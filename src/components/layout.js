import React from "react";

export default function Layout({ children }) {
  return (
    <div className="dark:bg-black">
      <div className="m-3 lg:m-5 lg:mx-52 dark:text-white text-noah-blue">
        {children}
      </div>
    </div>
  );
}
