import { notFound } from "next/navigation";

import { db } from "@/db";
import SnippetEditForm from "@/components/SnippetEditForm";

interface Props {
  params: {
    snippetId: string;
  };
}
export default async function SnippetEditPage({
  params: { snippetId }
}: Props) {
  const id = parseInt(snippetId);
  isNaN(id) && notFound();

  const snippet = await db.snippet.findFirst({
    where: { id }
  });

  if (!snippet) notFound();

  return (
    <div>
      <h1 className="text-2xl">
        Editing snippet with title &quot;{snippet.title.toUpperCase()}&quot;
      </h1>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
