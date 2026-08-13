import { createFileRoute } from "@tanstack/react-router";
import Agreements from "@/components/site/Agreements";

export const Route = createFileRoute("/agreements")({
  component: Agreements,
});
