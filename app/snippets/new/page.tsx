"use client";
import { useFormState } from "react-dom";

import Input from "@/components/Input";
import { createSnippet } from "@/actions";
import BtnSubmitForm from "@/components/BtnSubmitForm";

export default function SnippetsNewPage() {
  const [formState, action] = useFormState(createSnippet, {
    message: ""
  });
  return (
    <form action={action}>
      <h3 className="font-bold m-3 text-2xl">Create s Snippet</h3>
      <div className="flex flex-col gap-4">
        <Input label="Title" />

        <Input label="Code" type="textarea" />

        <BtnSubmitForm
          label="Create"
          type="primary"
          additionalClasses="btn-outline"
        />
      </div>
      {formState.message && (
        <div
          role="alert"
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-fit alert alert-warning"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: {formState.message}</span>
        </div>
      )}
    </form>
  );
}
