"use client";

import Form from "@components/Form";
import React, { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<Record<string, string>>({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e: any) => {};

  return (
    <Form
      type="Create Post"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
