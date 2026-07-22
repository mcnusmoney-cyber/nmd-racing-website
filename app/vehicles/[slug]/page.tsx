interface VehiclePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function VehicleSlugPage({
  params,
}: VehiclePageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          {slug.toUpperCase()}
        </h1>

        <p className="text-zinc-400">
          NMD Racing Vehicle Collection
        </p>
      </div>
    </main>
  );
}