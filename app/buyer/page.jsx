"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function BuyerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("Buyer");

  useEffect(() => {
    async function loadBuyer() {
      const supabase = createClient();
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        router.replace("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, role")
        .eq("id", userData.user.id)
        .single();

      if (profile?.role !== "buyer") {
        router.replace(profile?.role === "farmer" ? "/farmer" : "/login");
        return;
      }

      setName(profile.full_name || "Buyer");
      setLoading(false);
    }

    loadBuyer();
  }, [router]);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/");
  }

  if (loading) {
    return <main className="flex min-h-screen items-center justify-center bg-[#f8faf5] text-emerald-950">Loading your account...</main>;
  }

  return (
    <main className="min-h-screen bg-[#f8faf5] px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between border-b border-slate-200 pb-5">
          <a href="/" className="text-lg font-bold text-emerald-950">KrishiSetu</a>
          <button type="button" onClick={handleLogout} className="rounded-xl border border-emerald-900/15 bg-white px-4 py-2 text-sm font-semibold text-emerald-950">Logout</button>
        </header>
        <section className="mt-10 rounded-[2rem] bg-emerald-950 p-8 text-amber-100 shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100/70">Buyer account</p>
          <h1 className="mt-4 text-3xl font-bold">Welcome, {name}</h1>
          <p className="mt-3 max-w-xl text-amber-100/80">Your buyer account is ready. Produce discovery and purchasing features will be added next.</p>
        </section>
      </div>
    </main>
  );
}