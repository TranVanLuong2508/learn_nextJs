import React from "react";

export default function productDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Feature product</h2>
    </>
  );
}
