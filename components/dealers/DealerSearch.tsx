type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function DealerSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search by province..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none transition focus:border-purple-500"
    />
  );
}