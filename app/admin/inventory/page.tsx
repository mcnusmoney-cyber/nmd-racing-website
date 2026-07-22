export default function InventoryPage() {
  const inventory = [
    {
      model: "RONIN VI FORZA",
      color: "Black",
      stock: 24,
    },
    {
      model: "RONIN VI FORZA",
      color: "Gold",
      stock: 11,
    },
    {
      model: "RONIN VI FORZA",
      color: "Purple",
      stock: 8,
    },
    {
      model: "RONIN XMAX",
      color: "Black",
      stock: 15,
    },
    {
      model: "RONIN PCX",
      color: "Purple",
      stock: 6,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-black">
          Inventory Management
        </h1>

        <button className="bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 rounded-2xl font-bold">
          + Add Stock
        </button>
      </div>

      <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-950">
            <tr>
              <th className="text-left p-5">Model</th>
              <th className="text-left p-5">Color</th>
              <th className="text-left p-5">Stock</th>
              <th className="text-left p-5">Status</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item, index) => (
              <tr
                key={index}
                className="border-t border-zinc-800"
              >
                <td className="p-5 font-bold text-fuchsia-400">
                  {item.model}
                </td>

                <td className="p-5">
                  {item.color}
                </td>

                <td className="p-5">
                  {item.stock} คู่
                </td>

                <td className="p-5">
                  {item.stock > 10
                    ? "พร้อมขาย"
                    : item.stock > 5
                    ? "ใกล้หมด"
                    : "ต้องผลิตเพิ่ม"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}