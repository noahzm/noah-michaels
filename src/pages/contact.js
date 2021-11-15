import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="lg:col-span-2 lg:mx-48">
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
              <label htmlFor="name" className=" block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="given-name"
                className="mt-1 focus:ring-black lg:text-3xl focus:border-black  block w-full border-black"
              />
            </div>

            <div className="col-span-6 lg:col-span-3">
              <label htmlFor="email_address" className="block  ">
                Email address
              </label>
              <input
                type="email"
                name="email_address"
                id="email_address"
                required
                autoComplete="email"
                className="mt-1 focus:ring-black lg:text-3xl focus:border-black block w-full border-black"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="message" className="block  ">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                required
                autoComplete="message"
                className="mt-1 focus:ring-black lg:text-3xl focus:border-black block w-full h-40 border-black"
              />
            </div>
          </div>
        </div>
        <div className="mt-3 text-right">
          <button
            type="submit"
            className="inline-flex justify-center  py-2 px-4 text-white border border-trueblue bg-trueblue hover:bg-whitehover:text-trueblue focus:border-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </Layout>
);

export default Contact;
