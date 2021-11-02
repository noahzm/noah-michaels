import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not Found" />
    <div className="lg:mx-48">
      <h1 className="uppercase">
        Page Not Found!
      </h1>
      <p className="mt-3 lg:mt-5">Are you lost?</p>
    </div>
  </Layout>
);

export default NotFoundPage;
