import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="z-10 sticky top-0 inset-x-0 p-4 lg:p-8">
      <div className="flex justify-between">
        <Link
          to="/about"
          className="lg:text-2xl uppercase self-center text-gray-900 dark:text-gray-100 hover:underline"
          activeClassName="underline"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-2xl lg:text-4xl text-center uppercase self-center text-gray-900 dark:text-gray-100 hover:underline"
        >
          {siteTitle}
        </Link>
        <Link
          to="/contact"
          className="lg:text-2xl uppercase self-center text-gray-900 dark:text-gray-100 hover:underline"
          activeClassName="underline"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
