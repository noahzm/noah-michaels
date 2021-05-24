import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

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
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact" />
        <div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first_name" className="block">
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="mt-1 focus:ring-noah-blue focus:border-noah-blue block w-full shadow-sm sm:text-sm border-noah-blue rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last_name" className="block">
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                className="mt-1 focus:ring-noah-blue focus:border-noah-blue block w-full shadow-sm sm:text-sm border-noah-blue rounded"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="email_address" className="block">
                Email address
              </label>
              <input
                type="text"
                name="email_address"
                id="email_address"
                autoComplete="email"
                className="mt-1 focus:ring-noah-blue focus:border-noah-blue block w-full shadow-sm sm:text-sm border-noah-blue rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                autoComplete="message"
                className="mt-1 focus:ring-noah-blue focus:border-noah-blue block w-full shadow-sm sm:text-sm border-noah-blue rounded-md"
              />
            </div>
          </div>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div className="py-3 text-right">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm rounded-md text-white bg-noah-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-noah-blue"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </Layout>
);

export default Contact;
