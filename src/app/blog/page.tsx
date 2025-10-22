import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
};

const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Internal delay");
    }, 3000);
  });
  return (
    <>
      <div>
        {" "}
        <h1>My Blog</h1>
      </div>
      <Link href="/about">Go to about</Link>
    </>
  );
};

export default Blog;
