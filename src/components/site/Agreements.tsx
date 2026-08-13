import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export function Agreements() {
  return (
    <div className="min-h-screen bg-white text-[#061B3A]">
      <Nav />

      <main>
        <section className="px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F58220]">
              Our Agreements
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
              Our Agreements
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#48617A]">
              Explore the agreements and partnerships that support Legacy Group
              International's commitment to delivering trusted, enterprise-grade
              solutions.
            </p>

            <div className="mt-12 rounded-3xl border border-[#DCE3E8] bg-white p-8 shadow-sm md:p-12">
              <h2 className="font-serif text-3xl">
                Our Agreements
              </h2>

              <p className="mt-5 text-base leading-7 text-[#48617A]">
                Legacy Group International maintains agreements and partnerships
                that support our clients, operations, and service delivery.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-[#F58220] px-7 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  View Agreement
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
