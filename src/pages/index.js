import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="text-3xl lg:text-4xl font-display">Welcome</h1>
    <br />
    <p className="lg:text-xl">
      This website is currently under construction and content is still being
      added.
    </p>
    <br />
    <div className="grid gap-3 lg:gap-5 grid-cols-1 lg:grid-cols-2">
      <div>
        <Link to="/creative-printing-website" className="hover:underline">
          <StaticImage
            src="../images/creative-printing.png"
            alt="Creative Printing Website"
            imgClassName="border-2 border-noah-blue rounded"
          />
          <p className="lg:text-xl">Creative Printing Website</p>
        </Link>
      </div>
      <div>
        <StaticImage
          src="../images/influence-book.png"
          alt="Influence Coffee Table Book"
          imgClassName="border-2 border-noah-blue rounded"
        />
        <p className="lg:text-xl">Influence Coffee Table Book</p>
      </div>
      <div>
        <StaticImage
          src="../images/art.png"
          alt="Illustration"
          imgClassName="border-2 border-noah-blue rounded"
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
