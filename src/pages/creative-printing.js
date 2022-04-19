import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CreativePrinting = () => (
  <Layout>
    <Seo title="Creative Printing" />
    <div className="lg:mx-48">
      <h1 className="underline pb-3 lg:pb-5">Creative Printing</h1>
      <p className="pb-3 lg:pb-5">
        Redesigned the website for{" "}
        <a
          className="text-trueblue hover:underline"
          href="https://creative-printing.com/"
          target="_blank"
          rel="noreferrer"
        >
          Creative Printing and Internet Services
        </a>{" "}
        in Boone, NC.
      </p>
      <p className="pb-3 lg:pb-5">
        Working with WordPress and the Elementor plugin, the site's theme and
        homepage was updated to better suit mobile devices and meet modern web
        design standards. The online ordering was made the focus of the homepage
        to attract business to customers who were not able to come by the shop
        to place an order.
      </p>
      <div className="pb-3 lg:pb-5">
        <StaticImage
          src="../images/cp-1.png"
          alt="Creative Printing Website Screenshot #1"
        />
      </div>
      <div>
        <StaticImage
          src="../images/cp-2.png"
          alt="Creative Printing Website Screenshot #2"
        />
      </div>
    </div>
  </Layout>
);

export default CreativePrinting;
