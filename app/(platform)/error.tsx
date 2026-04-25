"use client";

import { useEffect } from "react";

export default function PlatformError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("[Platform Error Boundary]", error);
  }, [error]);

  return (
    <div className="mx-auto mt-20 w-full max-w-md rounded-2xl border border-black/10 p-6 text-center">
      <h2 className="mb-2 text-xl font-semibold text-red-600">
        Something went wrong
      </h2>
      <p className="mb-4 text-sm text-black/60">{error.message}</p>
      <button
        onClick={unstable_retry}
        className="rounded-xl bg-black px-4 py-2 text-sm text-white"
      >
        Try again
      </button>
    </div>
  );
}
