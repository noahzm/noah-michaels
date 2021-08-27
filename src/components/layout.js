import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import Footer from "./footer";
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
      <div className="flex flex-col min-h-screen justify-between">
        <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="container m-auto px-4 text-noah-blue">
          {children}
        </main>
        <Footer marqueeText="WORK IN PROGRESS" />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
