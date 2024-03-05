import Link from "next/link";

import { db } from "@/db";

export default async function HomePage() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="my-4 flex flex-nowrap justify-between btn btn-primary"
      >
        <div className="text-start">{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-4 uppercase">
        Home PAge
      </h1>
      {renderedSnippets}
    </div>
  );
}
//flex justify-between items-center p-2 border rounded
