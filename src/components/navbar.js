import React from "react";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="z-10 sticky top-0 mx-auto inset-x-0 dark:bg-black dark:border-white">
      <div className="flex justify-between p-3 lg:p-5 dark:text-white">
        <AniLink
          cover
          bg="#0000FF"
          to="/about"
          className="lg:text-2xl self-center text-noah-blue hover:underline"
          activeClassName="underline"
        >
          About
        </AniLink>
        <AniLink
          cover
          to="/"
          className="text-2xl lg:text-5xl text-center font-display self-center text-noah-blue hover:underline"
          activeClassName=""
        >
          {siteTitle}
        </AniLink>
        <AniLink
          cover
          to="/contact"
          className="lg:text-2xl self-center text-noah-blue hover:underline"
          activeClassName="underline"
        >
          Contact
        </AniLink>
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
