import Image from 'next/image';

export default function Loading() {
  return (
    <div className="container-px flex min-h-[50vh] flex-col items-center justify-center py-20">
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={720}
        height={720}
        priority
        aria-hidden
        className="h-24 w-24 object-contain animate-pulse sm:h-28 sm:w-28"
      />
      <div className="mt-10 w-full max-w-3xl animate-pulse space-y-6">
        <div className="h-5 w-2/3 rounded-lg bg-brand-steel mx-auto" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-40 rounded-2xl bg-brand-steel" />
          ))}
        </div>
      </div>
    </div>
  );
}
