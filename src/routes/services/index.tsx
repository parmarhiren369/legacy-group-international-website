import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Legacy Digitronics" },
      {
        name: "description",
        content:
          "RPO, BPO, KPO, MRO, technical support, lead generation, business development, database management and digital marketing — engineered for enterprise scale.",
      },
      { property: "og:title", content: "Services — Legacy Digitronics" },
      {
        property: "og:description",
        content:
          "Nine service lines grouped across Recruitment, Business Growth, Data & CRM, Marketing, Technology and Design.",
      },
    ],
  }),
  component: Services,
});
