import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="flex-col w-full text-center flex-center">
      <h1 className="head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompt</span>
      </h1>
      <p className="desc">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
