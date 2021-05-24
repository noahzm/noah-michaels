import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CreativePrintingWebsite = () => (
  <Layout>
    <Seo title="Creative Printing Website" />
    <h1 className="text-3xl lg:text-4xl lg:pb-5 pb-3 font-display">
      Creative Printing Website
    </h1>
    <div className="grid gap-3 lg:gap-5 grid-cols-1 lg:grid-cols-2 pb-3 lg:pb-5">
      <div>
        <StaticImage
          src="../images/cp-1.png"
          alt="Creative Printing Website 1"
          imgClassName="border-2 border-noah-blue rounded"
        />
      </div>
      <div>
        <StaticImage
          src="../images/cp-2.png"
          alt="Creative Printing Website 2"
          imgClassName="border-2 border-noah-blue rounded"
        />
      </div>
    </div>
    <div>
      <p className="lg:text-xl">
        Redesigned the website for Creative Printing and Internet Services in
        Boone, NC. Overhauled process of online orders and home page design.
      </p>
      <br />
      <Link to="/" className="font-display lg:text-2xl hover:underline">
        Return Home &#10550;
      </Link>
    </div>
  </Layout>
);

export default CreativePrintingWebsite;
