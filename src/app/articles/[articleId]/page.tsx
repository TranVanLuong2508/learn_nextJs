"use client";
import Link from "next/link";
import // useParams,
// useSearchParams,
"next/navigation";
import { use } from "react";
export default function ArticleDetail({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "sp" | "fr" }>;
}) {
  // const pr = useParams();
  // const srp = useSearchParams();
  // console.log("chek params", typeof pr.articleId);
  // console.log("chek  search params", srp.get("lang"));
  const { articleId } = use(params);
  const { lang } = use(searchParams);
  return (
    <>
      <div>
        <h1>News articleId is: {articleId}</h1>
        <p>Reading in language:{lang} </p>
        <div>
          <Link href={`/articles/${articleId}?lang=English`}>English</Link>
          <Link href={`/articles/${articleId}?lang=Spanish`}>Spanish</Link>
          <Link href={`/articles/${articleId}?lang=French`}>French</Link>
        </div>
      </div>
    </>
  );
}
