import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CreativePrinting = () => (
  <Layout>
    <Seo title="Creative Printing" />
    <div className="lg:mx-48">
      <h1 className="uppercase text-center text-xl lg:text-2xl">
        Creative Printing
      </h1>
      <p className="lg:text-xl py-3 lg:py-5">
        Redesigned the website for{" "}
        <a
          className="underline hover:no-underline"
          href="https://creative-printing.com/"
          target="_blank"
          rel="noreferrer"
        >
          Creative Printing and Internet Services
        </a>{" "}
        in Boone, NC. Overhauled the process of online orders and updated the
        home page design.
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
