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
        I redesigned the website for{" "}
        <a
          className="text-trueblue hover:underline"
          href="https://creative-printing.com/"
          target="_blank"
          rel="noreferrer"
        >
          Creative Printing and Internet Services
        </a>{" "}
        in Boone, NC where I worked part time for almost three years of college.
      </p>
      <p className="pb-3 lg:pb-5">
        Working with WordPress, I overhauled the process of online orders and
        updated the home page design to better suit mobile devices and meet
        modern web design standards.
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
