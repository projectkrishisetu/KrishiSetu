import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f3f6ed] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-emerald-950/10 bg-white/90 px-4 py-2 text-sm font-medium text-emerald-950 shadow-sm shadow-emerald-950/5">
              <ShieldCheck className="h-4 w-4 text-emerald-950" />
              Verified Farmers • Transparent Prices • Direct Pickup
            </div> */}
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
              From Farm to Buyer,
              <span className="block text-amber-700">Without the Uncertainty.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
              KrishiSetu helps farmers find verified buyers and helps buyers source fresh produce directly from farms.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#produce"
                className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-6 py-3 text-base font-semibold text-amber-100 shadow-lg shadow-emerald-950/15 hover:bg-emerald-900"
              >
                Explore Produce
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#farmer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-900/15 bg-white px-6 py-3 text-base font-semibold text-emerald-950 shadow-sm shadow-slate-900/5 hover:bg-slate-100"
              >
                Sell Your Produce
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-emerald-950/5 bg-white/90 p-4 shadow-sm shadow-emerald-950/5">
                <p className="text-sm font-semibold text-emerald-950">Farmer Asking Price</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">Clear and direct</p>
              </div>
              <div className="rounded-3xl border border-emerald-950/5 bg-white/90 p-4 shadow-sm shadow-emerald-950/5">
                <p className="text-sm font-semibold text-emerald-950">APMC Reference Price</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">Market-informed context</p>
              </div>
              <div className="rounded-3xl border border-emerald-950/5 bg-white/90 p-4 shadow-sm shadow-emerald-950/5">
                <p className="text-sm font-semibold text-emerald-950">Buyer Pickup</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">Straightforward process</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-12 top-12 h-32 w-32 rounded-full bg-emerald-200/70 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 bottom-12 h-40 w-40 rounded-full bg-amber-200/80 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5">
              <img
                src="https://images.unsplash.com/photo-1504450755720-7f13b7be2b82?auto=format&fit=crop&w=1200&q=80"
                alt="Farmer and buyer talking in a fresh green field"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
