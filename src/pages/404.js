import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not Found" />
    <h1 className="text-3xl lg:text-4xl">Page Not Found</h1>
    <br />
    <p className="font-serif lg:text-xl">
      I can't seem to find the page you were looking for.
    </p>
    <br />
    <Link to="/" className="lg:text-2xl hover:underline">
      Return Home &#10550;
    </Link>
  </Layout>
);

export default NotFoundPage;
