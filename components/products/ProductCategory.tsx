type Props = {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function ProductCategory({
  categories,
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
            value === category
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
              : "border border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-purple-500 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}