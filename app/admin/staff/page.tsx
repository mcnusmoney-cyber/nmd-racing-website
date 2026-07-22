export default function StaffPage() {
  const staffs = [
    {
      name: "ช่างหนุ่ย",
      role: "หัวหน้าช่าง",
      department: "Workshop",
      status: "Active",
    },
    {
      name: "ฝ่ายขาย NMD",
      role: "Sales Manager",
      department: "Sales",
      status: "Active",
    },
    {
      name: "ช่าง A",
      role: "Technician",
      department: "Workshop",
      status: "Active",
    },
    {
      name: "ช่าง B",
      role: "Technician",
      department: "Workshop",
      status: "Active",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-black">
          Staff Management
        </h1>

        <button className="bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 rounded-2xl font-bold">
          + Add Staff
        </button>
      </div>

      <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-950">
            <tr>
              <th className="text-left p-5">Name</th>
              <th className="text-left p-5">Role</th>
              <th className="text-left p-5">Department</th>
              <th className="text-left p-5">Status</th>
            </tr>
          </thead>

          <tbody>
            {staffs.map((staff) => (
              <tr
                key={staff.name}
                className="border-t border-zinc-800"
              >
                <td className="p-5 font-bold text-fuchsia-400">
                  {staff.name}
                </td>

                <td className="p-5">
                  {staff.role}
                </td>

                <td className="p-5">
                  {staff.department}
                </td>

                <td className="p-5 text-green-400">
                  {staff.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}