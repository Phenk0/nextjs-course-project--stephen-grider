"use client";
import { useFormStatus } from "react-dom";

interface Props {
  label: string;
  type: string;
  additionalClasses?: string;
}
export default function BtnSubmitForm({
  label,
  type,
  additionalClasses
}: Props) {
  const { pending } = useFormStatus();
  if (pending) {
    return (
      <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-[2px]">
        <span className="loading loading-spinner text-accent" />
      </div>
    );
  }
  return (
    <button className={`btn btn-${type} text-xl ${additionalClasses}`}>
      {label}
    </button>
  );
}
