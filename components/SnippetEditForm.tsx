"use client";
import { useState } from "react";
import { Snippet } from "@prisma/client";
import Editor, { OnChange } from "@monaco-editor/react";

import { editSnippet } from "@/actions";
import BtnSubmitForm from "@/components/BtnSubmitForm";

interface Props {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: Props) {
  const [code, setCode] = useState<string>(snippet.code);
  // const [isPending, startTransition] = useTransition();
  const handleEditorChange: OnChange = (value = "") => {
    setCode(value);
  };

  // Good example of server action in CLIENT component
  // function handleEditSubmit() {
  //   startTransition(async () => {
  //     await editSnippet(snippet.id, code);
  //   });
  // }

  //  working on browsers without javascript
  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <BtnSubmitForm label="Submit changes" type="accent" />
      </form>

      {/*{!isPending && (*/}
      {/*  <button onClick={handleEditSubmit} className="btn btn-accent">*/}
      {/*    Submit changes*/}
      {/*  </button>*/}
      {/*)}*/}
      {/*{isPending && <LoadingScreenBlur />}*/}
    </>
  );
}
