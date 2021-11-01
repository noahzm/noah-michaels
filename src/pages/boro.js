import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const Boro = () => (
  <Layout>
    <Seo title="Boro" />
    <div className="lg:mx-48">
      <h1 className="uppercase text-center text-xl lg:text-2xl">Boro</h1>
      <p className="lg:text-xl py-3 lg:py-5">
        Boro is an alternative hip-hip group formed in Greensboro, NC.
      </p>
      <div className="pb-3 lg:pb-5">
        <StaticImage
          src="../images/boro.jpg"
          alt="Boro Pressure Album Cover"
        />
      </div>
    </div>
  </Layout>
);

export default Boro;
