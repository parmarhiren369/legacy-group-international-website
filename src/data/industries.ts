import chemical from "@/assets/industries/chemical.jpg";
import construction from "@/assets/industries/construction.jpg";
import cybersecurity from "@/assets/industries/cybersecurity.jpg";
import energy from "@/assets/industries/energy.jpg";
import engineering from "@/assets/industries/engineering.jpg";
import equipment from "@/assets/industries/equipment.jpg";
import finance from "@/assets/industries/finance.jpg";
import healthcare from "@/assets/industries/healthcare.jpg";
import hospitality from "@/assets/industries/hospitality.jpg";
import industrial from "@/assets/industries/industrial.jpg";
import insurance from "@/assets/industries/insurance.jpg";
import legal from "@/assets/industries/legal.jpg";
import lifesciences from "@/assets/industries/lifesciences.jpg";
import oilgas from "@/assets/industries/oilgas.jpg";
import printing from "@/assets/industries/printing.png";
import sales from "@/assets/industries/sales.jpg";
import service from "@/assets/industries/service.png";
import solar from "@/assets/industries/solar.png";
import steel from "@/assets/industries/steel.png";

export type Industry = {
  slug: string;
  name: string;
  image: string;
  eyebrow: string;
  description: string;
  focusAreas: string[];
};

// Single source of truth for every industry page.
// Add a new industry here and it automatically gets a working
// /industries/{slug} page — no new route files needed.
export const industries: Industry[] = [
  {
    slug: "chemical",
    name: "Chemical",
    image: chemical,
    eyebrow: "Process & Compliance",
    description:
      "We support chemical manufacturers and distributors with specialized recruitment, regulatory-aware data operations, and demand generation for a sector where safety, compliance, and technical expertise are non-negotiable.",
    focusAreas: [
      "Technical & compliance-focused recruitment",
      "Distributor and buyer database enrichment",
      "Lead generation for industrial chemical suppliers",
      "Regulatory-aware data governance",
    ],
  },
  {
    slug: "construction-architecture",
    name: "Construction & Architecture",
    image: construction,
    eyebrow: "Build & Design",
    description:
      "From project engineers to design leads, we help construction and architecture firms scale project teams quickly while building pipelines of commercial and residential development opportunities.",
    focusAreas: [
      "Project & site talent recruitment",
      "Bid and tender lead generation",
      "CRM management for developer relationships",
      "Market research on regional development pipelines",
    ],
  },
  {
    slug: "it-cybersecurity",
    name: "IT & Cybersecurity",
    image: cybersecurity,
    eyebrow: "Secure & Scale",
    description:
      "We help IT and cybersecurity firms hire specialized engineering talent and build enterprise pipelines, combining technical recruitment with account-based business development for complex security sales cycles.",
    focusAreas: [
      "Engineering & security specialist recruitment",
      "Enterprise account-based BD",
      "Technical support & L1-L3 delivery teams",
      "Threat-landscape market research",
    ],
  },
  {
    slug: "energy-battery-storage",
    name: "Energy & Battery Storage",
    image: energy,
    eyebrow: "Power the Transition",
    description:
      "As energy storage scales globally, we help developers and manufacturers build technical teams and commercial pipelines to keep pace with utility-scale and distributed project demand.",
    focusAreas: [
      "Grid & storage engineering recruitment",
      "Utility & developer lead generation",
      "Supply chain & vendor database management",
      "Project pipeline research & tracking",
    ],
  },
  {
    slug: "engineering",
    name: "Engineering",
    image: engineering,
    eyebrow: "Precision Talent",
    description:
      "We deliver engineering talent across disciplines — mechanical, electrical, civil, and process — alongside business development support for firms competing on technical capability and delivery speed.",
    focusAreas: [
      "Discipline-specific engineering recruitment",
      "RFP and project lead generation",
      "Client & vendor CRM operations",
      "Competitive & market research",
    ],
  },
  {
    slug: "equipment-leasing-financing",
    name: "Equipment Leasing & Financing",
    image: equipment,
    eyebrow: "Capital & Assets",
    description:
      "We support equipment leasing and financing companies with named-account business development and clean, enriched CRM data to identify and pursue capital-intensive buyers across sectors.",
    focusAreas: [
      "Named-account BD & deal-desk support",
      "Lessee & buyer database enrichment",
      "Financial and credit research support",
      "Portfolio & pipeline reporting",
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    image: finance,
    eyebrow: "Trust & Precision",
    description:
      "We help financial services firms hire compliance-conscious talent and build qualified pipelines of institutional and commercial clients through disciplined, research-backed outreach.",
    focusAreas: [
      "Financial services recruitment",
      "Institutional client lead generation",
      "Regulatory-compliant data management",
      "Market & competitive intelligence",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    image: healthcare,
    eyebrow: "Care & Compliance",
    description:
      "We support healthcare organizations with credentialed clinical and administrative recruitment, patient-safe data governance, and outreach that respects the sensitivity of the sector.",
    focusAreas: [
      "Clinical & administrative recruitment",
      "HIPAA-aware data management",
      "Provider & payer business development",
      "Patient support & technical helpdesk teams",
    ],
  },
  {
    slug: "hospitality-food-beverages",
    name: "Hospitality / Food & Beverages",
    image: hospitality,
    eyebrow: "Service at Scale",
    description:
      "We help hospitality and F&B brands staff seasonal and permanent roles quickly, while running always-on customer support and demand generation to keep locations full and guests happy.",
    focusAreas: [
      "Seasonal & permanent staffing support",
      "Guest experience & support operations",
      "Vendor & supplier database management",
      "Local market & demand research",
    ],
  },
  {
    slug: "industrial-safety-gears",
    name: "Industrial Safety Gears",
    image: industrial,
    eyebrow: "Protect the Workforce",
    description:
      "We support safety equipment manufacturers and distributors with B2B lead generation and technical recruitment, connecting products with the industrial buyers who need them most.",
    focusAreas: [
      "B2B distributor & buyer lead generation",
      "Technical sales recruitment",
      "Compliance-focused product database management",
      "Procurement & spend research",
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    image: insurance,
    eyebrow: "Risk & Relationships",
    description:
      "We help insurers and brokers scale underwriting and sales teams while running compliant, high-volume lead generation and CRM operations across commercial and personal lines.",
    focusAreas: [
      "Underwriting & sales recruitment",
      "Compliant lead generation programs",
      "Policyholder database management",
      "Claims & support operations",
    ],
  },
  {
    slug: "legal",
    name: "Legal",
    image: legal,
    eyebrow: "Precision & Discretion",
    description:
      "We support law firms and legal departments with confidential, credential-verified recruitment and research-grade knowledge process support for case preparation and client development.",
    focusAreas: [
      "Confidential legal recruitment",
      "Case research & KPO support",
      "Client development & BD support",
      "Document & records data management",
    ],
  },
  {
    slug: "life-sciences-pharmaceuticals",
    name: "Life Sciences & Pharmaceuticals",
    image: lifesciences,
    eyebrow: "Research to Market",
    description:
      "We help life sciences and pharma organizations hire regulatory-aware talent and build physician and institutional pipelines with the precision this heavily regulated sector demands.",
    focusAreas: [
      "R&D & regulatory affairs recruitment",
      "HCP & institutional lead generation",
      "Compliant data & MDM operations",
      "Competitive & clinical market research",
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    image: oilgas,
    eyebrow: "Energy Infrastructure",
    description:
      "We support upstream, midstream, and downstream operators with specialized technical recruitment and vendor/supplier business development across global energy infrastructure projects.",
    focusAreas: [
      "Technical & field operations recruitment",
      "Vendor & supplier BD",
      "Asset & procurement database management",
      "Project & market research",
    ],
  },
  {
    slug: "printing-packaging",
    name: "Printing & Packaging",
    image: printing,
    eyebrow: "Production & Supply",
    description:
      "We help printing and packaging companies build B2B pipelines and source production talent, keeping fast-moving manufacturing and fulfillment operations fully staffed.",
    focusAreas: [
      "Production & operations recruitment",
      "B2B buyer lead generation",
      "Supplier & client CRM management",
      "Packaging trend & competitor research",
    ],
  },
  {
    slug: "sales-marketing",
    name: "Sales & Marketing",
    image: sales,
    eyebrow: "Revenue Talent",
    description:
      "We help sales and marketing organizations scale quota-carrying and campaign teams fast, backed by data-driven pipeline generation that fuels their own growth engines.",
    focusAreas: [
      "Sales & marketing talent recruitment",
      "Full-funnel demand generation",
      "CRM hygiene & attribution support",
      "Competitive positioning research",
    ],
  },
  {
    slug: "service-industry",
    name: "Service Industry",
    image: service,
    eyebrow: "Always-On Support",
    description:
      "We help service-based businesses staff customer-facing roles and run reliable, always-on support operations that keep client relationships strong at scale.",
    focusAreas: [
      "Customer-facing staffing support",
      "24x7 support & helpdesk operations",
      "Client database & CRM management",
      "Service demand research",
    ],
  },
  {
    slug: "solar-energy",
    name: "Solar Energy",
    image: solar,
    eyebrow: "Clean Power Growth",
    description:
      "We help solar developers, EPCs, and installers hire technical talent and build homeowner and commercial pipelines as the sector scales across new and existing markets.",
    focusAreas: [
      "Solar engineering & installation recruitment",
      "Residential & commercial lead generation",
      "Incentive & rebate program research",
      "Installer & vendor database management",
    ],
  },
  {
    slug: "steel-metal-alloys",
    name: "Steel, Metal & Alloys",
    image: steel,
    eyebrow: "Heavy Industry",
    description:
      "We support steel, metal, and alloy producers with technical recruitment and B2B business development, connecting mills and fabricators with the buyers driving industrial demand.",
    focusAreas: [
      "Plant & technical operations recruitment",
      "B2B distributor & buyer BD",
      "Commodity pricing & market research",
      "Supplier database management",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
