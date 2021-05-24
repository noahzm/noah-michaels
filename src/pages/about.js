import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
  return (
    <section>
      <Navbar />
      <Layout>
        <div className="text-3xl lg:text-4xl lg:pb-5 pb-3">About</div>
        <div className="grid gap-3 lg:gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center">
            <StaticImage
              src="../images/noah-michaels.jpg"
              alt="Noah Michaels Portrait"
              imgClassName="border-2 border-noah-blue rounded"
            />
          </div>
          <div>
            <p className="lg:text-xl font-serif">
              Hey, I'm Noah Michaels, a digital designer and illustrator based
              in Raleigh, NC.
            </p>
            <br />
            <p className="lg:text-xl font-serif">
              I studied Graphic Arts and Imaging Technology and Business at
              Appalachian State University in Boone, NC. With a concentration in
              cross-media production, I have the tools to communicate through
              multiple mediums such as print, packaging, and website design.
            </p>
            <br />
            <Link to="/" className="lg:text-2xl hover:underline">
              Return Home &#10550;
            </Link>
          </div>
        </div>
      </Layout>
    </section>
  );
}
