import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
};

const page = () => {
  return (
    <>
      <div>Blog</div>
      <Link href="/about">Go to about</Link>
    </>
  );
};

export default page;
