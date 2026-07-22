"use client";

const reviews = [
  {
    name: "ช่างหนุ่ย การันตี",
    bike: "FORZA 350",
    review:
      "งาน CNC เนียนมาก น้ำหนักเบากว่าที่คิด สีม่วงสวยมาก ใส่แล้วรถดูพรีเมียมขึ้นทันที",
  },
  {
    name: "คุณเอ Bangkok Riders",
    bike: "XMAX 300",
    review:
      "ขับทางไกลแล้วรู้สึกได้เลยว่าล้อบาลานซ์ดีมาก งานประกอบระดับสูงจริง ๆ",
  },
  {
    name: "Dealer เชียงใหม่",
    bike: "RONIN VI Series",
    review:
      "ลูกค้าชอบมาก โดยเฉพาะสีม่วงกับสีทอง ขายง่ายและงานสวยเกินราคา",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="text-purple-400 tracking-[0.3em] mb-4">
            CUSTOMER REVIEWS
          </div>

          <h2 className="text-5xl font-black mb-6">
            TRUSTED BY RIDERS
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Feedback from riders and dealers across Thailand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="
                bg-zinc-950/70
                border border-zinc-800
                rounded-3xl
                p-8
                backdrop-blur-xl
                hover:border-purple-500/50
                transition
              "
            >
              <div className="text-purple-400 text-5xl mb-4">
                "
              </div>

              <p className="text-zinc-300 leading-relaxed mb-8">
                {review.review}
              </p>

              <div className="font-bold text-white">
                {review.name}
              </div>

              <div className="text-zinc-500">
                {review.bike}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}