import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="text-trueblue z-10 sticky top-0 inset-x-0 p-4 lg:p-8">
      <div className="lg:text-3xl text-xl flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center hover:underline ">
          {siteTitle}
        </Link>
        <div className="w-full block w-auto">
          <ul className="flex flex-row space-x-8 mt-0">
            <li>
              <Link
                to="/about"
                className="hover:underline block p-0"
                activeClassName="underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline block p-0"
                activeClassName="underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                className="hover:underline block p-0"
                href="https://github.com/noahzm"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="1x" />{" "}
              </a>
            </li>
          </ul>
        </div>
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
