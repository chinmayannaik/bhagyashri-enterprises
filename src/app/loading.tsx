export default function Loading() {
  return (
    <div className="container-px py-20">
      <div className="animate-pulse space-y-8">
        <div className="h-8 w-40 rounded-full bg-brand-steel" />
        <div className="h-14 w-3/4 rounded-2xl bg-brand-steel" />
        <div className="h-5 w-1/2 rounded-lg bg-brand-steel" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-52 rounded-2xl bg-brand-steel" />
          ))}
        </div>
      </div>
    </div>
  );
}
