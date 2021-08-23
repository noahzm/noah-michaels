import * as React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CreativePrintingWebsite = () => (
  <Layout>
    <Seo title="Creative Printing Website" />
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 pb-3 lg:pb-5">
      <div>
        <StaticImage
          src="../images/cp-1.png"
          alt="Creative Printing Website 1"
        />
      </div>
      <div>
        <StaticImage
          src="../images/cp-2.png"
          alt="Creative Printing Website 2"
        />
      </div>
    </div>
    <div>
      <p className="lg:text-xl pb-3 lg:pb-5">
        Redesigned the website for Creative Printing and Internet Services in
        Boone, NC. Overhauled process of online orders and home page design.
      </p>
      <AniLink
        cover
        to="/"
        className="lg:text-xl hover:underline"
      >
        Return Home &#10550;
      </AniLink>
    </div>
  </Layout>
);

export default CreativePrintingWebsite;
