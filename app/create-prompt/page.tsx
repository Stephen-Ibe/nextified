"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<Record<string, string>>({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user?.email,
        }),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
