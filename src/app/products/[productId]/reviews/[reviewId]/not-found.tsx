// app/not-found.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  console.log("check path name", pathName.split("/"));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-2">404 - Not Found</h1>
      <p className="text-gray-600 mb-6">
        Rất tiếc, tài nguyên bạn tìm không có.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
}
