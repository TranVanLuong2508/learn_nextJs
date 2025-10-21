// src/app/products/[productId]/page.tsx
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  const title: string = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${productId}`);
    }, 100);
  });
  return {
    title: title,
    description: `This is detail desciption for product ${productId}`,
  };
};

export default async function Page({ params }: Props) {
  const productId = (await params).productId;

  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
