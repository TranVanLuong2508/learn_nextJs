// src/app/products/[productId]/page.tsx
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
