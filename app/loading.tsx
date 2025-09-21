export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-black/20 border-t-black/80 animate-spin" />
        <p className="text-sm text-neutral-500">Loading page…</p>
      </div>
    </div>
  );
}