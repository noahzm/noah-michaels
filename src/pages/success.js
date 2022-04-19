import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Success = () => (
  <Layout>
    <Seo title="Success" />
    <div className="lg:mx-48">
      <h1 className="font-sans">Sent!</h1>
      <p className="mt-3 lg:mt-5">
        I have received your message and will get back to you as soon as I can.
      </p>
    </div>
  </Layout>
);

export default Success;
