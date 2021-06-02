import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not Found" />
    <h1 className="text-3xl lg:text-4xl font-display pb-3 lg:pb-5">
      Page Not Found
    </h1>
    <p className="lg:text-xl pb-3 lg:pb-5">
      I can't seem to find the page you are looking for.
    </p>
    <AniLink cover to="/" className="lg:text-2xl hover:underline font-display">
      Return Home &#10550;
    </AniLink>
  </Layout>
);

export default NotFoundPage;
