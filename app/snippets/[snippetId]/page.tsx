import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { deleteSnippet } from "@/actions";
import BtnSubmitForm from "@/components/BtnSubmitForm";
interface Props {
  params: {
    snippetId: string;
  };
}

export default async function SnippetShowPage({ params }: Props) {
  isNaN(parseInt(params.snippetId)) && notFound();

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(params.snippetId)
    }
  });

  if (!snippet) notFound();

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2 text-2xl">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="btn btn-accent text-xl"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <BtnSubmitForm
              label="Delete"
              type="error"
              additionalClasses="btn-outline"
            />
          </form>
        </div>
      </div>
      <div className="mockup-code bg-secondary text-secondary-content">
        {snippet.code.split("\n").map((line, index) => (
          <pre data-prefix={index + 1} key={index}>
            <code>{line}</code>
          </pre>
        ))}
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      snippetId: snippet.id.toString()
    };
  });
}
