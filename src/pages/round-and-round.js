import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const RoundAndRound = () => (
  <Layout>
    <Seo title="Round and Round" />
    <div className="lg:mx-48">
      <h1 className="font-sans lg:text-3xl text-2xl pb-3 lg:pb-5">Round and Round</h1>
      <p className="pb-3 lg:pb-5">
        Created a short loop inspired by the song,{" "}
        <a
          className="text-trueblue hover:underline"
          href="https://g.co/kgs/jFxX5p"
          target="_blank"
          rel="noreferrer"
        >
          Landmine by VR Sex
        </a>
        .
      </p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kXbrBTRV37w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </Layout>
);

export default RoundAndRound;
