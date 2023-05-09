import Link from "next/link";

interface FirstParamsPageProps {
  params: { first: string };
}

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default function FirstParamsPage({ params }: FirstParamsPageProps) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link className="underline underline-offset-2 mb-8" href="/">
        Go to home page
      </Link>
      <h1>First Params Page</h1>
      <p>Params: {JSON.stringify(params)}</p>
      <Link className="underline underline-offset-2 mt-8" href="/first/1/second/2">
        Go to second params page
      </Link>
    </main>
  );
}
