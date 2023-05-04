import Link from "next/link";

interface SecondParamsPageProps {
  params: { first: string; second: string };
}

export const runtime = "experimental-edge";

export default function SecondParamsPage({ params }: SecondParamsPageProps) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link className="underline underline-offset-2 mb-8" href="/first/1">
        Go to first params page
      </Link>
      <h1>Second params page</h1>
      <p>Params: {JSON.stringify(params)}</p>
    </main>
  );
}
