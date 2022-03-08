import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";
import { SRLWrapper } from "simple-react-lightbox";
import Masonry from "react-masonry-css";

const Grouch = () => (
  <Layout>
    <Seo title="Grouch" />
    <div className="lg:mx-48">
      <h1 className="underline pb-3 lg:pb-5">Grouch</h1>
      <p className="pb-3 lg:pb-5">
        <a
          className="text-trueblue hover:underline"
          href="https://grouch.bigcartel.com/"
          target="_blank"
          rel="noreferrer"
        >
          Grouch
        </a>{" "}
        is a DIY skate hardware brand / possible art collective in the works.
      </p>
      <SRLWrapper>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {" "}
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/grouchhardwaredesign.png"
              alt="Grouch Skate Hardware"
            />
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/grouchorange.png"
              alt="Orange Grouch T-Shirt"
            />
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/grouchblack.png"
              alt="Black Grouch T-Shirt"
            />
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/grouchwhite.png"
              alt="White Grouch T-Shirt"
            />
          </div>
        </Masonry>
      </SRLWrapper>
    </div>
  </Layout>
);

export default Grouch;
