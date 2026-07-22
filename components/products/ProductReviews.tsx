const reviews = [
  {
    name: "Thanawat",
    bike: "Honda FORZA 350",
    rating: 5,
    comment:
      "งาน CNC สวยมาก น้ำหนักเบา ใส่ตรงรุ่น ขับแล้วฟิลลิ่งดีขึ้นอย่างชัดเจน",
  },
  {
    name: "Nattapong",
    bike: "Yamaha XMAX",
    rating: 5,
    comment:
      "สีอโนไดซ์สวย งานประกอบเนียนมาก คุ้มค่ากับราคา",
  },
  {
    name: "Piyawat",
    bike: "Honda PCX",
    rating: 5,
    comment:
      "ติดตั้งง่าย ไม่ต้องดัดแปลง ร้านบริการดี ประทับใจมาก",
  },
];

export default function ProductReviews() {
  return (
    <section className="mt-24">

      <h2 className="mb-10 text-4xl font-black">
        Customer Reviews
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">

        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-purple-500 hover:-translate-y-1"
          >
            <div className="text-yellow-400 text-xl">
              {"★".repeat(review.rating)}
            </div>

            <p className="mt-5 leading-8 text-zinc-300 italic">
              "{review.comment}"
            </p>

            <div className="mt-8 border-t border-zinc-800 pt-5">
              <p className="font-bold">
                {review.name}
              </p>

              <p className="text-sm text-zinc-500">
                {review.bike}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}