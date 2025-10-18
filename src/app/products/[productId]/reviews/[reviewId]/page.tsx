// src/app/products/[productId]/page.tsx
import React from "react";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>review Product : {productId}</h1>
      <p>review ID: {reviewId}</p>
    </div>
  );
}
