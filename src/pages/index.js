import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
      <div className="relative">
        <Link to="/creative-printing">
          <div>
            <h1 className="align-center lg:text-3xl border-b border-black mb-3 ">
              Creative Printing &#8594;
            </h1>
            <StaticImage
              src="../images/creative-printing.png"
              alt="Creative Printing"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition z-10 flex justify-center items-center inset-0 absolute bg-black">
            <h2 className="text-center lg:text-3xl text-white">
              Creative Printing
            </h2>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="/grouch">
          <div>
            <h1 className="lg:text-3xl border-b border-black mb-3 ">
              Grouch &#8594;
            </h1>
            <StaticImage src="../images/grouch.png" alt="Grouch" />
          </div>
          <div className="opacity-0 hover:opacity-100 transition z-10 flex justify-center items-center inset-0 absolute bg-black">
            <h2 className="text-center lg:text-3xl text-white">Grouch</h2>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="/influence">
          <div>
            <h1 className="lg:text-3xl border-b border-black mb-3 ">
              Influence Book &#8594;
            </h1>
            <StaticImage
              src="../images/influence-book.png"
              alt="Influence Book"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition z-10 flex justify-center items-center inset-0 absolute bg-black">
            <h2 className="text-center lg:text-3xl text-white">
              Influence Book
            </h2>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="/round-and-round">
          <div>
            <h1 className="lg:text-3xl border-b border-black mb-3 ">
              Round and Round &#8594;
            </h1>
            <StaticImage
              src="../images/round-and-round.png"
              alt="Round and Round"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition z-10 flex justify-center items-center inset-0 absolute bg-black">
            <h2 className="text-center lg:text-3xl text-white">
              Round and Round
            </h2>
          </div>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
