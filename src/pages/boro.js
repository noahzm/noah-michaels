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
      <h1 className="underline pb-3 lg:pb-5">Boro</h1>
      <p className="pb-3 lg:pb-5">
        Boro is an alternative hip-hop group formed in Greensboro, NC. For the
        release of their upcoming album, Pressure, I created album artwork and
        merchandise.
      </p>
      <p className="pb-3 lg:pb-5">
        The album artwork is inspired by{" "}
        <a
          className="text-trueblue hover:underline"
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
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/boro.jpg"
              alt="Boro Pressure Album Cover"
            />
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/boro-tshirt-2-front.png"
              alt="Boro Laughter T-Shirt Front"
            />
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/boro-tshirt-2-back.png"
              alt="Boro Laughter T-Shirt Back"
            />
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/boro-tshirt-front.png"
              alt="Boro Call My Name T-Shirt Front"
            />
          </div>
          <div className="pb-3 lg:pb-5">
            <StaticImage
              src="../images/boro-tshirt-back.png"
              alt="Boro Call My Name T-Shirt Back"
            />
          </div>
        </Masonry>
      </SRLWrapper>
    </div>
  </Layout>
);

export default Boro;
