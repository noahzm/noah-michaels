import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="lg:col-span-2 lg:px-48 lg:pt-24">
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
                required
                autoComplete="given-name"
                className="mt-1 focus:ring-noah-blue lg:text-xl focus:border-noah-blue block w-full border-noah-blue"
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
                required
                autoComplete="email"
                className="mt-1 lg:text-xl focus:ring-noah-blue focus:border-noah-blue block w-full border-noah-blue"
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
                required
                autoComplete="message"
                className="mt-1 lg:text-xl focus:ring-noah-blue focus:border-noah-blue block w-full h-40 border-noah-blue"
              />
            </div>
          </div>
        </div>
        <div className="py-3 text-right">
          <button
            type="submit"
            className="font-display inline-flex justify-center lg:text-xl py-2 px-4 text-white border border-noah-blue bg-noah-blue hover:bg-white hover:text-noah-blue focus:border-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </Layout>
);

export default Contact;
