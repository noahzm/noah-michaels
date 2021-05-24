import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Seo from "../components/seo";

const Success = () => (
  <Layout>
    <Seo title="Success" />
    <h1 className="text-3xl lg:text-4xl lg:pb-5 pb-3 font-display">Sent!</h1>
    <div>
      <p className="lg:text-xl">
        I have received your message and will get back to you as soon as I can.
      </p>
      <br />
      <Link to="/" className="font-display lg:text-2xl hover:underline">
        Return Home &#10550;
      </Link>
    </div>
  </Layout>
);

export default Success;
