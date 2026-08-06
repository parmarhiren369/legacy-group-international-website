import { PAGE_X } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className={`flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row ${PAGE_X}`}>
        <div>
          © {new Date().getFullYear()} Legacy Digitronics Pvt. Ltd. All rights
          reserved.
        </div>

        <div className="tracking-wide">
          Crafted with precision · Since 2004
        </div>
      </div>
    </footer>
  );
}
