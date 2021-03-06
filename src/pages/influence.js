import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const Influence = () => (
  <Layout>
    <Seo title="Influence" />
    <div className="lg:mx-48">
      <h1 className="font-sans lg:text-3xl text-2xl">Influence Book</h1>
      <p className="py-3 lg:py-5">
        Typeset and bound a coffee table book.{" "}
        <a
          className="text-trueblue hover:underline"
          href="https://drive.google.com/file/d/1W1f75Taaf1u3gLipnA4E8-gWwWnlFENc/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Click here to view the book
        </a>
      </p>
      <div className="pb-3 lg:pb-5">
        <StaticImage src="../images/influence-book.png" alt="Influence Book" />
      </div>
    </div>
  </Layout>
);

export default Influence;
