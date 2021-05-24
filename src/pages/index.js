import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Layout>
        <h2 className="text-3xl lg:text-4xl">Welcome!</h2>
        <br/>
        <p className="font-serif lg:text-xl">
          This website is currently under construction and content is still
          being added.
        </p>
        <br/>
        <div className="grid gap-3 lg:gap-5 grid-cols-1 lg:grid-cols-2">
          <div>
            <StaticImage
              src="../images/art.png"
              alt="Illustration"
              imgClassName="border-2 border-noah-blue rounded"
            />
          </div>
          <div>
            <StaticImage
              src="../images/art.png"
              alt="Illustration"
              imgClassName="border-2 border-noah-blue rounded"
            />
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
    </section>
  );
}
