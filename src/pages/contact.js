import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <h1 className="text-3xl lg:text-4xl lg:pb-5 pb-3">Contact</h1>
    <div className="md:col-span-2">
      <form
        action="/success"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="Contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact" />
        <div>
          <div className="grid grid-cols-6 gap-3 lg:gap-5">
            <div className="col-span-6 lg:col-span-3">
              <label htmlFor="name" className="lg:text-xl block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="mt-1 focus:ring-noah-blue lg:text-xl  focus:border-noah-blue block w-full shadow-sm border-noah-blue rounded-md font-serif"
              />
            </div>

            <div className="col-span-6 lg:col-span-3">
              <label htmlFor="email_address" className="block lg:text-xl ">
                Email address
              </label>
              <input
                type="email"
                name="email_address"
                id="email_address"
                autoComplete="email"
                className="mt-1 font-serif lg:text-xl focus:ring-noah-blue focus:border-noah-blue block w-full shadow-sm border-noah-blue rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="message" className="block lg:text-xl ">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                autoComplete="message"
                className="mt-1 font-serif lg:text-xl  focus:ring-noah-blue focus:border-noah-blue block w-full h-40 shadow-sm border-noah-blue rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="py-3 text-right">
          <button
            type="submit"
            className="inline-flex justify-center lg:text-xl py-2 px-4 border border-transparent shadow-sm rounded-md text-white bg-noah-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-noah-blue"
          >
            Send
          </button>
        </div>
      </form>
      <Link to="/" className="lg:text-2xl hover:underline">
        Return Home &#10550;
      </Link>
    </div>
  </Layout>
);

export default Contact;
