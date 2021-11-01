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
            <h1 className="align-center lg:text-xl border-b border-gray-900 dark:border-gray-100 mb-3 uppercase">
              Creative Printing &#8594;
            </h1>
            <StaticImage
              src="../images/creative-printing.png"
              alt="Creative Printing"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-gray-900 dark:bg-gray-100 uppercase">
            <h2 className="text-center lg:text-xl text-gray-100 dark:text-gray-900">
              Creative Printing
            </h2>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="/influence">
          <div>
            <h1 className="lg:text-xl border-b border-gray-900 dark:border-gray-100 mb-3 uppercase">
              Influence Book &#8594;
            </h1>
            <StaticImage
              src="../images/influence-book.png"
              alt="Influence Book"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-gray-900 dark:bg-gray-100 uppercase">
            <h2 className="text-center lg:text-xl text-gray-100 dark:text-gray-900">
              Influence Book
            </h2>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="/boro">
          <div>
            <h1 className="lg:text-xl border-b border-gray-900 dark:border-gray-100 mb-3 uppercase">
              Boro &#8594;
            </h1>
            <StaticImage
              src="../images/boro.png"
              alt="Boro"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-gray-900 dark:bg-gray-100 uppercase">
            <h2 className="text-center lg:text-xl text-gray-100 dark:text-gray-900">
              Boro
            </h2>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="#">
          <div>
            <h1 className="lg:text-xl border-b border-gray-900 dark:border-gray-100 mb-3 uppercase">
              Placeholder &#8594;
            </h1>
            <StaticImage
              src="https://picsum.photos/1000/667?grayscale&random=2"
              alt="Placeholder Image"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-gray-900 dark:bg-gray-100 uppercase">
            <h2 className="text-center lg:text-xl text-gray-100 dark:text-gray-900">
              Placeholder
            </h2>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="#">
          <div>
            <h1 className="lg:text-xl border-b border-gray-900 dark:border-gray-100 mb-3 uppercase">
              Placeholder &#8594;
            </h1>
            <StaticImage
              src="https://picsum.photos/1000/667?grayscale&random=3"
              alt="Placeholder Image"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-gray-900 dark:bg-gray-100 uppercase">
            <h2 className="text-center lg:text-xl text-gray-100 dark:text-gray-900">
              Placeholder
            </h2>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="#">
          <div>
            <h1 className="lg:text-xl border-b border-gray-900 dark:border-gray-100 mb-3 uppercase">
              Placeholder &#8594;
            </h1>
            <StaticImage
              src="https://picsum.photos/1000/667?grayscale&random=4"
              alt="Placeholder Image"
            />
          </div>
          <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-10 flex justify-center items-center inset-0 absolute bg-gray-900 dark:bg-gray-100 uppercase">
            <h2 className="text-center lg:text-xl text-gray-100 dark:text-gray-900">
              Placeholder
            </h2>
          </div>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
