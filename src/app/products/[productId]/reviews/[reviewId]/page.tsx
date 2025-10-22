// src/app/products/[productId]/page.tsx
import React from "react";
import { notFound, redirect } from "next/navigation";

const getRamdomInit = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;

  const ramdom = getRamdomInit(2);

  if (ramdom === 1) {
    throw new Error("This is error from id");
  }

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products"); // go to home
  }

  return (
    <div>
      <h1>review Product : {productId}</h1>
      <p>review ID: {reviewId}</p>
    </div>
  );
}
