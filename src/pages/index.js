import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
      <div className="relative">
        <AniLink cover to="/creative-printing-website">
          <div>
            <h1 className="lg:text-xl border-b border-noah-blue mb-3">
              Creative Printing Website &#8674;
            </h1>
            <StaticImage
              src="../images/creative-printing.png"
              alt="Creative Printing Website"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-noah-blue">
            <h2 className="text-center lg:text-xl text-white">
              Creative Printing Website
            </h2>
          </div>
        </AniLink>
      </div>
      <div className="relative">
        <AniLink cover to="#">
          <div>
            <h1 className="lg:text-xl border-b border-noah-blue mb-3">
              Influence Book &#8674;
            </h1>
            <StaticImage
              src="../images/influence-book.png"
              alt="Influence Book"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-noah-blue">
            <h2 className="text-center lg:text-xl text-white">
              Influence Book
            </h2>
          </div>
        </AniLink>
      </div>
      <div className="relative">
        <AniLink cover to="#">
          <div>
            <h1 className="lg:text-xl border-b border-noah-blue mb-3">
              Placeholder &#8674;
            </h1>
            <StaticImage
              src="https://picsum.photos/1000/667?grayscale&random=1"
              alt="Placeholder Image"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-noah-blue">
            <h2 className="text-center lg:text-xl text-white">Placeholder</h2>
          </div>
        </AniLink>
      </div>
      <div className="relative">
        <AniLink cover to="#">
          <div>
            <h1 className="lg:text-xl border-b border-noah-blue mb-3">
              Placeholder &#8674;
            </h1>
            <StaticImage
              src="https://picsum.photos/1000/667?grayscale&random=2"
              alt="Placeholder Image"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-noah-blue">
            <h2 className="text-center lg:text-xl text-white">Placeholder</h2>
          </div>
        </AniLink>
      </div>
      <div className="relative">
        <AniLink cover to="#">
          <div>
            <h1 className="lg:text-xl border-b border-noah-blue mb-3">
              Placeholder &#8674;
            </h1>
            <StaticImage
              src="https://picsum.photos/1000/667?grayscale&random=3"
              alt="Placeholder Image"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-noah-blue">
            <h2 className="text-center lg:text-xl text-white">Placeholder</h2>
          </div>
        </AniLink>
      </div>
      <div className="relative">
        <AniLink cover to="#">
          <div>
            <h1 className="lg:text-xl border-b border-noah-blue mb-3">
              Placeholder &#8674;
            </h1>
            <StaticImage
              src="https://picsum.photos/1000/667?grayscale&random=4"
              alt="Placeholder Image"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-noah-blue">
            <h2 className="text-center lg:text-xl text-white">Placeholder</h2>
          </div>
        </AniLink>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
