"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { getSupabaseConfig } from "@/lib/supabase/config";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      if (!getSupabaseConfig()) {
        throw new Error("Owner login is not configured yet. Add the Supabase environment variables and redeploy.");
      }

      const supabase = createSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) throw new Error("Unable to sign in. Check your email and password.");

      const { data: isAdmin, error: adminError } = await supabase.rpc("is_portfolio_admin");
      if (adminError || !isAdmin) {
        await supabase.auth.signOut();
        throw new Error("This account is not authorized to access the portfolio inbox.");
      }

      router.replace("/admin");
      router.refresh();
    } catch (error) {
      console.error("Portfolio admin login failed:", error);
      setErrorMessage(error instanceof Error ? error.message : "Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="px-4 pb-24 pt-36">
        <div className="mx-auto max-w-md rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Private owner access</p>
            <h1 className="text-3xl font-bold text-foreground">Portfolio Login</h1>
            <p className="mt-3 text-sm text-muted-foreground">Sign in to manage contact messages.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="owner-email" className="text-sm font-medium text-foreground">Owner email</label>
              <input
                id="owner-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="owner-password" className="text-sm font-medium text-foreground">Password</label>
              <input
                id="owner-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              />
            </div>
            {errorMessage && (
              <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                {errorMessage}
              </p>
            )}
            <Button type="submit" disabled={isSubmitting} className="w-full bg-sky-500 text-white hover:bg-sky-600">
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
