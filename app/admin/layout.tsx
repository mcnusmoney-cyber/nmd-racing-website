import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}