import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const Influence = () => (
  <Layout>
    <Seo title="Influence" />
    <div className="lg:mx-48">
      <h1 className="uppercase text-center text-xl lg:text-2xl">Influence</h1>
      <p className="lg:text-xl py-3 lg:py-5">
        Designed a book for a class on the finishing process of print
        production.
      </p>
      <div className="pb-3 lg:pb-5">
        <StaticImage
          src="../images/influence-book.png"
          alt="Influence Book"
        />
      </div>
    </div>
  </Layout>
);

export default Influence;
