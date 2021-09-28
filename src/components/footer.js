import React from "react";
import PropTypes from "prop-types";

const Footer = ({ marqueeText }) => {
  return (
    <footer className="sticky inset-x-0 bottom-0 py-4 lg:py-8">
        <div className="z-10 relative flex overflow-x-hidden dark:text-gray-100 text-gray-900">
          <div className="animate-marquee whitespace-nowrap lg:text-2xl">
            <span className="mx-4">{marqueeText}</span>
            <span className="mx-4 ">{marqueeText}</span>
            <span className="mx-4 ">{marqueeText}</span>
            <span className="mx-4 ">{marqueeText}</span>
            <span className="mx-4 ">{marqueeText}</span>
          </div>

          <div className="lg:text-2xl absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="mx-4 ">{marqueeText}</span>
            <span className="mx-4 ">{marqueeText}</span>
            <span className="mx-4 ">{marqueeText}</span>
            <span className="mx-4 ">{marqueeText}</span>
            <span className="mx-4 ">{marqueeText}</span>
          </div>
        </div>
    </footer>
  );
};

Footer.propTypes = {
  marqueeText: PropTypes.string,
};

Footer.defaultProps = {
  marqueeText: ``,
};

export default Footer;
