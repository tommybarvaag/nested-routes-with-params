import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Index Page</h1>
      <Link className="underline underline-offset-2" href="/first/1">
        Go to first params page
      </Link>
      <Link className="underline underline-offset-2" href="/first/1/second/2">
        Go to second params page
      </Link>
    </main>
  );
}
