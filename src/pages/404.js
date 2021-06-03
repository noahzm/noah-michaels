import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not Found" />
    <div className="lg:px-48 lg:pt-24">
      <h1 className="text-3xl lg:text-4xl font-display pb-3 lg:pb-5">
        Page Not Found!
      </h1>
      <p className="lg:text-xl pb-3 lg:pb-5">
        Are you lost?
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
