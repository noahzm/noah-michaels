import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import { useStaticQuery, graphql } from "gatsby";

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
      <div className="flex flex-col min-h-screen justify-between dark:bg-gray-900 bg-gray-100">
        <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="container m-auto px-4 pb-4 text-noah-blue dark:text-noah-yell">
          {children}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
