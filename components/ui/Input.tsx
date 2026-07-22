interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className="
        w-full
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        px-5
        py-4
        text-white
        placeholder:text-zinc-500
        focus:border-purple-500
        outline-none
      "
    />
  );
}