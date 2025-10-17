// src/app/products/[productId]/page.tsx
import React from "react";

// Type cho props mà Next.js App Router truyền vào
type PageProps = {
  params: {
    productId: string;
  };
};

export default function Page(pageProps: PageProps) {
  const { productId } = pageProps.params;

  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
