export default function NotificationsPage() {
  const notifications = [
    {
      title: "เคลมใหม่",
      message: "มีคำขอเคลมใหม่เลขที่ CLM-252530",
      time: "5 นาทีที่แล้ว",
      type: "claim",
    },
    {
      title: "สมัครดิลเลอร์ใหม่",
      message: "ร้าน NMD Korat ส่งใบสมัครตัวแทนจำหน่าย",
      time: "20 นาทีที่แล้ว",
      type: "dealer",
    },
    {
      title: "สต็อกใกล้หมด",
      message: "RONIN VI FORZA สีทอง เหลือ 3 คู่",
      time: "1 ชั่วโมงที่แล้ว",
      type: "inventory",
    },
    {
      title: "เป้าหมายยอดขาย",
      message: "ดิลเลอร์เชียงใหม่ทำยอดได้ 100% ของเป้าหมาย",
      time: "3 ชั่วโมงที่แล้ว",
      type: "sales",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-black">
          Notifications
        </h1>
      </div>

      <div className="space-y-4">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-bold text-fuchsia-400">
                {item.title}
              </h2>

              <span className="text-zinc-500 text-sm">
                {item.time}
              </span>
            </div>

            <p className="text-zinc-300">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}