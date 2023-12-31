import Link from "next/link";
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

      <form
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Field of Prompt{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <div className="gap-4 mx-3 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2 text-sm text-white rounded-full bg-primary-orange"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
