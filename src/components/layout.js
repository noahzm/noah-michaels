import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import { useStaticQuery, graphql } from "gatsby";
import SimpleReactLightbox from "simple-react-lightbox";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <SimpleReactLightbox>
        <div className=" flex flex-col min-h-screen justify-between">
          <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main className="font-serif text-xl lg:text-3xl container m-auto px-4 pb-4 text-black">
            {children}
          </main>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
