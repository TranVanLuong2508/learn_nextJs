"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleCLick = () => {
    console.log("check place order");
    router.push("/");
  };
  return (
    <>
      <h1>Order prodcut</h1>
      <button onClick={handleCLick}>Place order</button>
    </>
  );
}
