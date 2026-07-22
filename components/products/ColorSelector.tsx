"use client";

type Color = {
  name: string;
  hex: string;
};

type Props = {
  colors: Color[];
};

export default function ColorSelector({
  colors,
}: Props) {
  return (
    <div className="flex gap-4 flex-wrap">
      {colors.map((color) => (
        <div
          key={color.name}
          className="flex flex-col items-center gap-2"
        >
          <div
            className="w-10 h-10 rounded-full border-2 border-zinc-700"
            style={{
              backgroundColor: color.hex,
            }}
          />

          <span className="text-xs text-zinc-400">
            {color.name}
          </span>
        </div>
      ))}
    </div>
  );
}