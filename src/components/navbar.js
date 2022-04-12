import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="text-trueblue z-10 sticky top-0 inset-x-0 p-4 lg:p-8">
      <div className="lg:text-3xl text-xl flex justify-between">
        <Link to="/" className="flex-grow hover:underline ">
          {siteTitle}
        </Link>
        <Link
          to="/about"
          className="hover:underline pr-4 lg:pr-8"
          activeClassName="underline"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="hover:underline pr-4 lg:pr-8"
          activeClassName="underline"
        >
          Contact
        </Link>
        <a
          className="hover:underline"
          href="https://github.com/noahzm"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />{" "}
        </a>
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
