import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Success = () => (
  <Layout>
    <Seo title="Success" />
    <div className="lg:px-48 lg:pt-24">
      <h1 className="text-3xl lg:text-4xl lg:pb-5 pb-3 font-display">Sent!</h1>
      <p className="lg:text-xl pb-3 lg:pb-5">
        I have received your message and will get back to you as soon as I can.
      </p>
    </div>
  </Layout>
);

export default Success;
