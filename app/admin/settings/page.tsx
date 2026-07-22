export default function SettingsPage() {
  return (
    <div>

      <h1 className="text-5xl font-black mb-10">
        Settings
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Company Information
          </h2>

          <div className="space-y-4">
            <input
              defaultValue="NMD Racing"
              className="w-full bg-zinc-800 rounded-xl p-4"
            />

            <input
              defaultValue="179/31 Bang Phli Yai, Bang Phli, Samut Prakan"
              className="w-full bg-zinc-800 rounded-xl p-4"
            />

            <input
              defaultValue="support@nmdracing.com"
              className="w-full bg-zinc-800 rounded-xl p-4"
            />
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Warranty Settings
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Warranty Period</span>
              <span className="text-fuchsia-400">
                12 Months
              </span>
            </div>

            <div className="flex justify-between">
              <span>Dealer Support</span>
              <span className="text-green-400">
                Enabled
              </span>
            </div>

            <div className="flex justify-between">
              <span>Claim System</span>
              <span className="text-green-400">
                Enabled
              </span>
            </div>

          </div>
        </div>

      </div>

      <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          System Status
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between">
            <span>Website</span>
            <span className="text-green-400">
              Online
            </span>
          </div>

          <div className="flex justify-between">
            <span>Warranty System</span>
            <span className="text-green-400">
              Active
            </span>
          </div>

          <div className="flex justify-between">
            <span>Database</span>
            <span className="text-yellow-400">
              Pending Integration
            </span>
          </div>

          <div className="flex justify-between">
            <span>Dealer Network</span>
            <span className="text-green-400">
              Active
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}