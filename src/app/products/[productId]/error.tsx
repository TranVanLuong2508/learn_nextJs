"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErroBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <>
      {" "}
      <h2>Đã có lỗi xảy ra: {error.message}</h2>
      <button onClick={() => reload()}>Thử lại</button>
    </>
  );
}
