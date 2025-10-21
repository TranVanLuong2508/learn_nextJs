import Link from "next/link";
export default function App() {
  return (
    <>
      <h1>Welcome home</h1>
      <div>
        {" "}
        <Link href={"/products"} className="block">
          Got to products page
        </Link>
      </div>
      <div>
        {" "}
        <Link href={"/about"}>Got to about page</Link>
      </div>
      <div>
        {" "}
        <Link href={"/forgot-password"}>Got to forgot-password page</Link>
      </div>
      <div>
        {" "}
        <Link href={"/register"}>Got to register page</Link>
      </div>
      <div>
        {" "}
        <Link href={"/login"}>Got to login page</Link>
      </div>
      <div>
        {" "}
        <Link href={"/articles/breaking-news-123?lang=English"}>
          Read English article
        </Link>
        <Link href={"/articles/breaking-news-123?lang=French"}>
          Read French article
        </Link>
      </div>
    </>
  );
}
