import { Nav } from "./Nav";
import { ScrollToTop } from "./ScrollToTop";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Users,
  Award,
} from "lucide-react";
import contactHero from "@/assets/images/contact-hero.webp";
import { PAGE_X } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    description: "+1 (248) 602-5270",
  },
  {
    icon: Mail,
    title: "Email",
    description: "info@legacygi.com",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Global Delivery Centers",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "Mon – Fri, 9:00 AM – 6:00 PM",
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "20+ Years Experience",
    description: "Trusted outsourcing partner since 2004.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Serving businesses across multiple industries worldwide.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Recruitment, Research, Technology & BPO specialists.",
  },
  {
    icon: Award,
    title: "98% Client Retention",
    description: "Long-term partnerships built on measurable results.",
  },
];

export function Contact() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">

      <ScrollToTop />

      <Nav />

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden py-24 lg:py-32 w-full">
          <div className={PAGE_X}>
            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#EE8021]">
                  CONTACT US
                </p>

                <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-5xl xl:text-6xl">
                  Let's Start
                  <br />
                  a Conversation.
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                  Whether you're looking for recruitment,
                  outsourcing, research, technical support,
                  or business solutions, our team is ready
                  to help.
                </p>

                <div className="mt-10 flex gap-4">
                  <a
  href="https://calendly.com/raj-kapoor"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-navy px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-navy/90 inline-flex items-center gap-2"
>
  Schedule Demo
  <ArrowUpRight className="h-4 w-4" />
</a>

                  <a
                    href="tel:+12159394490"
                    className="rounded-full border border-[#071330] px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#071330] hover:text-white"
                  >
                    Call Us
                  </a>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease }}
                className="relative"
              >
                <div className="overflow-hidden rounded-[30px] shadow-xl transition-transform duration-500 hover:-translate-y-1">
                  <img
                    src={contactHero}
                    alt="Contact Legacy Group International"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="py-20 bg-white w-full">
          <div className={PAGE_X}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">

              {contactCards.map((card, index) => {
                const Icon = card.icon;
                const isPhoneCard = card.title === "Call Us";
                const CardWrapper = isPhoneCard ? "a" : "div";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease }}
                    viewport={{ once: true, margin: "-60px" }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-gray-200
                      bg-white
                      p-8
                      shadow-xl
                      transition-all
                      duration-500
                      hover:border-[#EE8021]
                      hover:shadow-2xl
                    "
                  >
                    {/* ORANGE ACCENT BAR */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                      style={{
                        background: "#EE8021",
                      }}
                    />

                    {isPhoneCard ? (
                      <a href="tel:+12159394490" className="relative block">
                        <div className="text-3xl text-[#EE8021] transition-transform duration-500 group-hover:scale-110 sm:text-4xl">
                          {Icon ? <Icon className="h-8 w-8" /> : card.emoji}
                        </div>

                        <h3 className="mt-6 text-xl font-semibold">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-gray-600">
                          {card.description}
                        </p>
                      </a>
                    ) : (
                      <>
                        <div className="relative text-3xl text-[#EE8021] transition-transform duration-500 group-hover:scale-110 sm:text-4xl">
                          {Icon ? <Icon className="h-8 w-8" /> : card.emoji}
                        </div>

                        <h3 className="relative mt-6 text-xl font-semibold">
                          {card.title}
                        </h3>

                        <p className="relative mt-3 text-gray-600">
                          {card.description}
                        </p>
                      </>
                    )}
                  </motion.div>
                );
              })}

            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-24 bg-[#FAFAF8] w-full">
          <div className={`grid gap-16 lg:grid-cols-2 ${PAGE_X}`}>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl transition-shadow duration-500 hover:shadow-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#EE8021]">
                CONTACT US
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071330] sm:text-4xl lg:text-5xl">
                Let's Build
                <br />
                Something Great.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Whether you're looking for recruitment, outsourcing,
                research, or technology solutions, our specialists are
                ready to help you find the right solution.
              </p>

              <form className="mt-12 space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#FAFAF8]
                    px-6
                    py-5
                    text-[16px]
                    text-[#071330]
                    placeholder:text-gray-400
                    transition-all
                    duration-300
                    focus:border-[#EE8021]
                    focus:bg-white
                    focus:outline-none
                    focus:ring-4
                    focus:ring-[#EE8021]/20
                    focus:-translate-y-0.5
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#FAFAF8]
                    px-6
                    py-5
                    text-[16px]
                    text-[#071330]
                    placeholder:text-gray-400
                    transition-all
                    duration-300
                    focus:border-[#EE8021]
                    focus:bg-white
                    focus:outline-none
                    focus:ring-4
                    focus:ring-[#EE8021]/20
                    focus:-translate-y-0.5
                  "
                />

                <input
                  type="text"
                  placeholder="Company"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#FAFAF8]
                    px-6
                    py-5
                    text-[16px]
                    text-[#071330]
                    placeholder:text-gray-400
                    transition-all
                    duration-300
                    focus:border-[#EE8021]
                    focus:bg-white
                    focus:outline-none
                    focus:ring-4
                    focus:ring-[#EE8021]/20
                    focus:-translate-y-0.5
                  "
                />

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#FAFAF8]
                    px-6
                    py-5
                    text-[16px]
                    text-[#071330]
                    placeholder:text-gray-400
                    transition-all
                    duration-300
                    focus:border-[#EE8021]
                    focus:bg-white
                    focus:outline-none
                    focus:ring-4
                    focus:ring-[#EE8021]/20
                    focus:-translate-y-0.5
                    resize-none
                  "
                />

                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#EE8021]
                    px-10
                    py-5
                    font-semibold
                    text-[#071330]
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >
                  Schedule Consultation

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <div className="mt-8 flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex text-[#EE8021]">
                    ★★★★★
                  </div>

                  <span>
                    Trusted by businesses worldwide for over <strong>20 years</strong>
                  </span>
                </div>
              </form>
            </motion.div>

            {/* WHY CHOOSE US */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
                className="text-3xl font-bold sm:text-4xl"
              >
                Why Partner With Legacy?
              </motion.h2>

              <div className="mt-10 space-y-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease }}
                      viewport={{ once: true, margin: "-60px" }}
                      className="
group
relative
overflow-hidden
flex
items-start
gap-5
rounded-[28px]
border
border-gray-200
bg-white
p-8
shadow-lg
transition-all
duration-500
hover:-translate-y-2
hover:border-[#EE8021]
hover:shadow-2xl
"
                    >
                      <div
  aria-hidden
  className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
  style={{
    background: "#EE8021",
  }}
/>

                    <div
  className="
    relative
    flex
    h-16
    w-16
    flex-shrink-0
    items-center
    justify-center
    rounded-2xl
    bg-[#071330]
    text-[#EE8021]
    shadow-lg
    transition-all
    duration-500
    group-hover:rotate-6
    group-hover:scale-110
  "
>
  <Icon size={30} strokeWidth={2.2} />
</div>

                      <div className="relative">
                        <h3 className="text-lg font-semibold text-[#071330]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* GOOGLE MAP */}
        <section className="py-24 bg-white w-full">
          <div className={PAGE_X}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="mb-12 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#EE8021]">
                OUR LOCATION
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#071330] sm:text-4xl lg:text-5xl">
                Visit Our Office
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Connect with our team or visit one of our offices to discuss how Legacy Group International can support your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="overflow-hidden rounded-[32px] border border-gray-200 shadow-xl transition-shadow duration-500 hover:shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps?q=Detroit,+Michigan&output=embed"
                className="h-[500px] w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* CTA */}
       <section className="py-24 bg-[#377589] w-full">
          <div className={PAGE_X}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="relative overflow-hidden rounded-[36px] bg-[#377589] px-12 py-20 text-center text-white"
            >
              <p className="relative text-sm uppercase tracking-[0.35em] text-[#EE8021]">
                LET'S BUILD TOGETHER
              </p>

              <h2 className="relative mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to Transform
                <br />
                Your Business?
              </h2>

              <p className="relative mx-auto mt-8 max-w-3xl text-xl text-gray-300">
                Partner with Legacy Group International to build smarter teams,
                stronger operations, and sustainable business growth.
              </p>

              <a
                href="https://calendly.com/raj-kapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-[#EE8021] px-10 py-4 font-semibold text-[#071330] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Schedule a Consultation
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}
