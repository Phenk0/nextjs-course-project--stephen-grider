interface Props {
  label: string;
  name?: string;
  type?: string;
}

export default function Input({ label, type = "text", name }: Props) {
  return (
    <div className="flex gap-4">
      <label htmlFor={name || label.toLowerCase()} className="w-12">
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          type={type}
          name={name || label.toLowerCase()}
          className="w-full input input-bordered"
          id={name || label.toLowerCase()}
        />
      ) : (
        <textarea
          name={name || label.toLowerCase()}
          className="w-full textarea textarea-bordered"
          id={name || label.toLowerCase()}
        />
      )}
    </div>
  );
}
