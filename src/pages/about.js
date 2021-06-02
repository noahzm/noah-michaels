import * as React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1 className="text-3xl lg:text-4xl lg:pb-5 pb-3 font-display">About</h1>
    <div className="grid gap-3 lg:gap-5 grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-center">
        <StaticImage
          src="../images/noah-michaels.jpg"
          alt="Noah Michaels Portrait"
          imgClassName="border-2 border-noah-blue rounded"
        />
      </div>
      <div>
        <p className="lg:text-xl lg:pb-5 pb-3">
          Hey, I'm Noah Michaels, a digital designer and illustrator based in
          Raleigh, NC.
        </p>
        <p className="lg:text-xl lg:pb-5 pb-3">
          I studied Graphic Arts and Imaging Technology and Business at
          Appalachian State University in Boone, NC. With a concentration in
          cross-media production, I have the tools to communicate through
          multiple mediums such as print, packaging, and website design.
        </p>
        <p className="lg:text-xl lg:pb-5 pb-3">
          This website is coded and designed myself using Netlify, GatsbyJS,
          TailwindCSS, and Adobe Webfonts.
        </p>
        <AniLink
          cover
          to="/"
          className="font-display lg:text-2xl hover:underline"
        >
          Return Home &#10550;
        </AniLink>
      </div>
    </div>
  </Layout>
);

export default About;
