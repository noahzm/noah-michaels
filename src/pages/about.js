import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className="lg:mx-48">
      <p className="lg:text-2xl lg:pb-5 pb-3">
        Noah Michaels is a graphic designer based in Raleigh, NC.
      </p>
      <p className="lg:text-2xl lg:pb-5 pb-3">
        He studied Graphic Arts and Imaging Technology with a concentration in
        Cross Media Production and a minor in Business at Appalachian State
        University in Boone, NC.
      </p>
      <p className="lg:text-2xl">
        He focuses on applying graphic messaging across different
        forms of media such as web, email, print, cover wraps, etc. to
        communicate to various markets.
      </p>
    </div>
  </Layout>
);

export default About;
