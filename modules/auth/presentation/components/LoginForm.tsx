"use client";

import { FormEvent, useState } from "react";
import { useLoginMutation } from "@/modules/auth/presentation/hooks/useLoginMutation";
import { useTenant } from "@/shared/hooks/useTenant";

export function LoginForm() {
  const tenant = useTenant();
  const loginMutation = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="mx-auto mt-20 w-full max-w-md rounded-2xl border border-black/10 p-6">
      <h1 className="mb-2 text-2xl font-semibold">Tenant Login</h1>
      <p className="mb-6 text-sm text-black/60">Current tenant: {tenant}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full rounded-xl border border-black/20 px-3 py-2"
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="w-full rounded-xl border border-black/20 px-3 py-2"
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="w-full rounded-xl bg-black px-3 py-2 text-white disabled:opacity-60"
          type="submit"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? "Signing in..." : "Sign in"}
        </button>
      </form>

      {loginMutation.isError ? (
        <p className="mt-3 text-sm text-red-600">
          {(loginMutation.error as Error).message}
        </p>
      ) : null}
    </div>
  );
}
