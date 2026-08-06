export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row lg:px-10">
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