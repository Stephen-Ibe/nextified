import React from "react";

type Props = {
  type: any;
  post: any;
  setPost: any;
  submitting: any;
  handleSubmit: any;
};

const Form = ({ type, post, setPost, submitting, handleSubmit }: Props) => {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{type}</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
    </section>
  );
};

export default Form;
