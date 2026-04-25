"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-semibold">Critical Error</h1>
          <p className="mb-4 text-sm text-black/60">
            {error.digest
              ? `Reference: ${error.digest}`
              : "Please refresh the page."}
          </p>
          <button
            onClick={unstable_retry}
            className="rounded-xl bg-black px-4 py-2 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
