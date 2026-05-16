import { Link, useRouterState } from "@tanstack/react-router";
import { CheckCircle2, Phone, Plus } from "lucide-react";
import type { ReactNode } from "react";

import { StoreDownloadBadges } from "@/components/store-download-badges";
import { cn } from "@/lib/utils";

export function StJohnCross({ className = "" }: { className?: string }) {
  return (
    <div className={cn("grid place-items-center bg-primary text-primary-foreground rounded-md", className)}>
      <Plus className="size-3/5" strokeWidth={2.5} />
    </div>
  );
}

export function EmergencyBanner() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-4">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary-foreground/60 animate-ping" />
            <span className="relative inline-flex rounded-full size-2.5 bg-primary-foreground" />
          </span>
          <span className="text-xs font-medium tracking-widest uppercase">24hr Emergency Hotline</span>
          <a href="tel:0333715005" className="text-base font-semibold tabular-nums hover:underline">
            03-3371 5005
          </a>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm opacity-80">
          <Phone className="size-3.5" />
          <span>Haemodialysis: 03-3373 5005</span>
        </div>
      </div>
    </div>
  );
}

const navLinks: { label: string; to: "/" | "/schedule" | "/volunteer" }[] = [
  { label: "Home", to: "/" },
  { label: "Events & Courses", to: "/schedule" },
  { label: "Rakan St John", to: "/volunteer" },
];

function isNavActive(pathname: string, to: (typeof navLinks)[number]["to"]) {
  if (to === "/") return pathname === "/";
  if (to === "/schedule") return pathname === "/schedule" || pathname === "/events" || pathname === "/courses";
  return pathname === to;
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <StJohnCross className="size-10" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">St John Ambulans Malaysia</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Selangor Darul Ehsan</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn("hover:text-primary transition-colors", isNavActive(pathname, item.to) && "text-primary")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className={cn(
              "inline-flex items-center gap-1.5 h-9 px-4 bg-primary text-primary-foreground rounded-md hover:bg-secondary transition-colors",
              pathname === "/donate" && "ring-2 ring-primary/30",
            )}
          >
            <Plus className="size-4" strokeWidth={2.5} />
            Donate
          </Link>
        </nav>
        <Link
          to="/donate"
          className="lg:hidden inline-flex items-center gap-1.5 h-9 px-3 bg-primary text-primary-foreground rounded-md text-sm font-medium"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t border-border pt-16 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12 pb-12 border-b border-border">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <StJohnCross className="size-9" />
              <span className="font-semibold">SJAM Selangor</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-[42ch] leading-relaxed mb-5">
              Digital humanitarian service platform mock-up — web portal per SJAM SDE 2026 assessment.
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">SSMP mobile app</p>
            <StoreDownloadBadges />
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Portal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/donate" className="hover:text-primary">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-primary">
                  Events & courses calendar
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-primary">
                  Rakan St John
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Hotlines</h4>
            <p className="text-xs text-muted-foreground mb-1">Ambulance · 24/7</p>
            <a href="tel:0333715005" className="text-lg font-semibold tabular-nums text-primary">
              03-3371 5005
            </a>
          </div>
        </div>
        <p className="pt-8 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} St John Ambulans Malaysia, Selangor. Mock-up demo.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("min-h-screen bg-background text-foreground antialiased flex flex-col", className)}>
      <EmergencyBanner />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function MockSuccess({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center max-w-lg mx-auto">
      <div className="size-14 rounded-full bg-primary/15 text-primary grid place-items-center mx-auto mb-4">
        <CheckCircle2 className="size-8" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>
      {children}
    </div>
  );
}
