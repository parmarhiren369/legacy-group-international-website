import { createFileRoute } from "@tanstack/react-router";
import { Industries } from "@/components/site/Industries";
export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries — Legacy Digitronics" },
      {
        name: "description",
        content:
          "Legacy India serves 21+ industries — from automotive, chemical and construction to IT, energy, healthcare, finance, oil & gas and solar — with tailored outsourcing solutions.",
      },
      { property: "og:title", content: "Industries — Legacy Digitronics" },
      {
        property: "og:description",
        content:
          "Specialized outsourcing solutions across automotive, IT, energy, healthcare, finance, legal, oil & gas, solar and more.",
      },
    ],
  }),
  component: Industries,
});
