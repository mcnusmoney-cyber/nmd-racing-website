"use client";

const analytics = [
  {
    title: "Website Visitors",
    value: "24,531",
    change: "+18%",
    color: "text-blue-400",
  },

  {
    title: "LINE Clicks",
    value: "1,824",
    change: "+25%",
    color: "text-green-400",
  },

  {
    title: "Warranty Registrations",
    value: "482",
    change: "+12%",
    color: "text-purple-400",
  },

  {
    title: "Claims Submitted",
    value: "17",
    change: "-4%",
    color: "text-red-400",
  },

  {
    title: "Conversion Rate",
    value: "7.8%",
    change: "+1.2%",
    color: "text-yellow-400",
  },

  {
    title: "Dealer Applications",
    value: "32",
    change: "+8%",
    color: "text-cyan-400",
  },
];

const topPages = [
  {
    page: "/products/forza",
    views: 9421,
  },

  {
    page: "/products/xmax",
    views: 8132,
  },

  {
    page: "/warranty/register",
    views: 4321,
  },

  {
    page: "/claim/new",
    views: 2123,
  },
];

export default function AnalyticsDashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          Analytics Dashboard
        </h1>

        <p className="text-zinc-400 mb-10">
          NMD Racing Intelligence Center
        </p>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          mb-10
        ">
          {analytics.map((item) => (
            <div
              key={item.title}
              className="
                bg-zinc-900
                border border-zinc-800
                rounded-3xl
                p-8
              "
            >
              <div className="text-zinc-400 mb-4">
                {item.title}
              </div>

              <div className={`text-5xl font-black ${item.color}`}>
                {item.value}
              </div>

              <div className="mt-4 text-green-400">
                {item.change}
              </div>
            </div>
          ))}
        </div>

        <div className="
          bg-zinc-900
          border border-zinc-800
          rounded-3xl
          p-8
        ">
          <h2 className="text-3xl font-bold mb-8">
            Top Pages
          </h2>

          {topPages.map((page) => (
            <div
              key={page.page}
              className="
                flex
                justify-between
                py-4
                border-b
                border-zinc-800
              "
            >
              <div className="text-zinc-300">
                {page.page}
              </div>

              <div className="font-bold text-purple-400">
                {page.views.toLocaleString()} views
              </div>
            </div>
          ))}
        </div>

      </div>

    </main>
  );
}