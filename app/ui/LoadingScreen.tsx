export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-neutral-300 dark:border-neutral-700 border-t-neutral-900 dark:border-t-neutral-100 animate-spin" />
        <p className="text-sm text-neutral-600 dark:text-neutral-300">Loading page...</p>
      </div>
    </div>
  );
}
