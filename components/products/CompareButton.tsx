type Props = {
  onClick?: () => void;
};

export default function CompareButton({
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl border border-purple-500 px-5 py-2 text-sm font-bold text-purple-400 transition hover:bg-purple-600 hover:text-white"
    >
      Compare
    </button>
  );
}