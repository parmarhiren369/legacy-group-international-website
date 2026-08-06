import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/lead-generation")({
  component: LeadGeneration,
});

// Lightweight count-up, no external dependency required.
function useCountUp(end: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let frame: number;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return value;
}

function RevenueGrowthCard() {
  const [inView, setInView] = useState(false);
  const count = useCountUp(247, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
    >
      <p className="text-sm font-medium text-slate-500">Revenue Growth</p>

      <h3 className="mt-2 font-sans text-5xl font-semibold text-[#EE8021]">
        +{count}%
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Average client pipeline growth
      </p>
    </motion.div>
  );
}

function LeadGeneration() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/15 blur-[140px]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto grid min-h-[85vh] w-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT SIDE */}
            <div className="max-w-3xl text-slate-900">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#EE8021]">
                Lead Generation
              </p>

              <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">
                Build a
                <span className="block bg-gradient-to-r from-[#EE8021] to-orange-500 bg-clip-text text-transparent">
                  Predictable Revenue Engine
                </span>
              </h1>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-[#EE8021]">
                  ✓ AI-Powered Outreach
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  ✓ Multi-Channel Campaigns
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  ✓ Qualified Decision Makers
                </div>
              </div>

              <div className="mt-20">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Trusted by teams using
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-10 text-lg font-medium text-black">
                  <span>Microsoft</span>
                  <span>Google</span>
                  <span>Salesforce</span>
                  <span>HubSpot</span>
                  <span>AWS</span>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
                Generate qualified leads, accelerate your sales pipeline, and
                connect with decision-makers through AI-powered research,
                precision targeting, and multi-channel outreach campaigns.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-full bg-[#EE8021] px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d96f1d] hover:shadow-xl hover:shadow-orange-500/40"
                >
                  Schedule Strategy Call
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 transition-all duration-300 hover:border-[#EE8021] hover:bg-orange-50 hover:text-[#EE8021]"
                >
                  View Our Process
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex justify-center">
              <div className="grid w-full max-w-md gap-5">
                <RevenueGrowthCard />

                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
                    <p className="text-sm text-slate-500">Qualified Leads</p>
                    <h4 className="mt-3 font-sans text-3xl font-semibold text-slate-900">
                      15K+
                    </h4>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
                    <p className="text-sm text-slate-500">Meetings</p>
                    <h4 className="mt-3 font-sans text-3xl font-semibold text-slate-900">
                      3.5K+
                    </h4>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      Email Deliverability
                    </span>
                    <span className="font-sans font-semibold text-green-600">
                      98.4%
                    </span>
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-slate-200">
                    <div className="h-3 w-[98%] rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LeadGeneration;
