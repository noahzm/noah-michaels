import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Seo from "../components/seo";

const Success = () => (
  <Layout>
    <Seo title="Success" />
    <div className="text-3xl lg:text-4xl lg:pb-5 pb-3">Success</div>
    <div className="grid gap-3 lg:gap-5 grid-cols-1 lg:grid-cols-2">
      <div>
        <p className="lg:text-xl font-serif">
          I have received your message and will get back to you as soon as I
          can.
        </p>
        <Link to="/" className="lg:text-2xl hover:underline">
          Return Home &#10550;
        </Link>
      </div>
    </div>
  </Layout>
);

export default Success;
