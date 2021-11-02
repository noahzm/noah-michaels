import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { SRLWrapper } from "simple-react-lightbox";
import Masonry from "react-masonry-css";

const Boro = () => (
  <Layout>
    <Seo title="Boro" />
    <div className="lg:mx-48">
      <h1 className="uppercase pb-3 lg:pb-5 font-bold">Boro</h1>
      <p className="pb-3 lg:pb-5">
        Boro is an alternative hip-hip group formed in Greensboro, NC. For the
        release of their upcoming album, Pressure, I created album artwork,
        merch, and other promotional material.
      </p>
      <p className="pb-3 lg:pb-5">
        The design is inspired by{" "}
        <a
          className="underline hover:no-underline"
          href="https://en.wikipedia.org/wiki/Pen_%26_Pixel"
          target="_blank"
          rel="noreferrer"
        >
          Pen & Pixel
        </a>{" "}
        album covers from the '90s.
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
              src="../images/boro-pressure-mockup.jpg"
              alt="Boro Pressure Album Cover Mockup"
            />
          </div>
          <div>
            <div className="pb-3 lg:pb-5">
              <StaticImage
                src="../images/boro.jpg"
                alt="Boro Pressure Album Cover"
              />
            </div>
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/boro-tshirt-front.jpg"
              alt="Boro T-Shirt Front"
            />
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/boro-tshirt-back.jpg"
              alt="Boro T-Shirt Back"
            />
          </div>
        </Masonry>
      </SRLWrapper>
    </div>
  </Layout>
);

export default Boro;
