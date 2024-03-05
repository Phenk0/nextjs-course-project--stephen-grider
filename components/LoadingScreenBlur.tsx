import { useFormStatus } from "react-dom";
export default function LoadingScreenBlur() {
  const { pending } = useFormStatus();
  if (pending)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-[2px]">
        <span className="loading loading-spinner text-accent" />
      </div>
    );
}
