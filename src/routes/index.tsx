import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Plus, Ambulance, Activity, HeartPulse, GraduationCap, Droplets, Truck, LifeBuoy, ArrowRight, MapPin, Clock, Heart, X, Smartphone } from "lucide-react";
import ambulanceImg from "@/assets/ambulance.jpg";
import communityImg from "@/assets/community.jpg";
import appMockupImg from "@/assets/app-mockup.jpg";

const DONATE_URL = "#donate";

const events = [
  {
    date: "15 JUN",
    day: "Sat",
    title: "Community Blood Donation Drive",
    location: "Klang Parade, Klang",
    time: "9:00 AM – 4:00 PM",
    tag: "Blood Donation",
  },
  {
    date: "22 JUN",
    day: "Sat",
    title: "Public First Aid & CPR Course",
    location: "SJAM HQ, Selangor",
    time: "8:30 AM – 5:00 PM",
    tag: "Training",
  },
  {
    date: "06 JUL",
    day: "Sat",
    title: "Mobile Clinic — Kg. Sungai Pinang",
    location: "Klang District",
    time: "10:00 AM – 3:00 PM",
    tag: "Outreach",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "St John Ambulans Malaysia — Selangor Darul Ehsan" },
      {
        name: "description",
        content:
          "24-hour ambulance, haemodialysis, first aid training and community medical services across Selangor. Serve with heart. Give with love.",
      },
      { property: "og:title", content: "St John Ambulans Malaysia — Selangor" },
      {
        property: "og:description",
        content:
          "Emergency medical response, haemodialysis, first aid courses and humanitarian services across Selangor.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const services = [
  { icon: Ambulance, title: "24 Hr Ambulance", desc: "Rapid emergency evacuation and inter-hospital transfers with advanced life support.", tag: "Available Now", live: true, href: "tel:0333715005", cta: "03-3371 5005" },
  { icon: Truck, title: "Bariatric Ambulance", desc: "Specialised heavy-duty transport with bariatric lifting equipment.", tag: "On Request", href: "tel:0333715005", cta: "03-3371 5005" },
  { icon: Activity, title: "Haemodialysis", desc: "Subsidised dialysis treatment for community members with kidney conditions.", tag: "Klang Centre", href: "tel:0333735005", cta: "03-3373 5005" },
  { icon: GraduationCap, title: "Public First Aid Classes", desc: "Accredited CPR and emergency trauma certification for individuals and corporates.", tag: "Monthly Intake", href: "mailto:user.selangor@sjam.org.my", cta: "Enquire" },
  { icon: HeartPulse, title: "Public Duty Standby", desc: "Trained medical standby for sporting events, concerts and public gatherings.", tag: "Book Ahead", href: "mailto:user.selangor@sjam.org.my", cta: "Request" },
];

const community = [
  { n: "01", icon: Droplets, title: "Blood Donation Drives", desc: "Regular drives across Selangor to support the national blood bank reserves." },
  { n: "02", icon: Truck, title: "Mobile Clinic", desc: "Bringing basic medical consultation and health screenings to underserved areas." },
  { n: "03", icon: LifeBuoy, title: "Disaster Relief", desc: "Rapid deployment teams for flood response and large-scale emergency management." },
];

function StJohnCross({ className = "" }: { className?: string }) {
  return (
    <div className={`grid place-items-center bg-primary text-primary-foreground rounded-md ${className}`}>
      <Plus className="size-3/5" strokeWidth={2.5} />
    </div>
  );
}

function Index() {
  const [adOpen, setAdOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Floating Side Donate Button */}
      <a
        href={DONATE_URL}
        aria-label="Donate to SJAM SDE"
        className="group fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2 bg-gradient-to-b from-secondary to-primary text-primary-foreground py-5 px-2.5 rounded-l-xl shadow-2xl shadow-primary/30 hover:px-3.5 transition-all"
      >
        <Heart className="size-5 fill-current" />
        <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-semibold tracking-[0.2em] uppercase">
          Donate Now
        </span>
        <span className="size-2 rounded-full bg-primary-foreground animate-pulse" />
      </a>

      {/* Fixed Dismissible Donation Ad */}
      {adOpen && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-2xl shadow-primary/20 ring-1 ring-primary/10">
            <button
              onClick={() => setAdOpen(false)}
              aria-label="Close"
              className="absolute top-2.5 right-2.5 size-7 grid place-items-center rounded-full bg-muted text-muted-foreground hover:bg-foreground hover:text-background transition-colors z-10"
            >
              <X className="size-3.5" />
            </button>
            <div className="bg-gradient-to-br from-primary to-secondary p-5 text-primary-foreground">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-primary-foreground/20 px-2 py-0.5 rounded">
                  Sponsored
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary-foreground/15 grid place-items-center shrink-0">
                  <Heart className="size-5 fill-current" />
                </div>
                <h3 className="font-semibold text-base leading-snug pr-6">
                  Support our life-saving mission.
                </h3>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground leading-snug">
                Every contribution helps us serve the community.
              </p>
              <a
                href={DONATE_URL}
                onClick={() => setAdOpen(false)}
                className="inline-flex items-center gap-1.5 h-9 px-4 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-secondary transition-colors shrink-0"
              >
                Donate
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Banner */}
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

      {/* Navigation */}
      <header className="bg-background border-b border-border sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <StJohnCross className="size-10" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">St John Ambulans Malaysia</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Selangor Darul Ehsan</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#community" className="hover:text-primary transition-colors">Community</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#events" className="hover:text-primary transition-colors">Events</a>
            <a
              href="#donate"
              className="inline-flex items-center gap-1.5 h-9 px-4 bg-primary text-primary-foreground rounded-md hover:bg-secondary transition-colors"
            >
              <Plus className="size-4" strokeWidth={2.5} />
              Donate
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative gradient + cross pattern */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
            color: "var(--primary)",
          }}
        />
        <div className="absolute -top-32 -right-32 size-[36rem] rounded-full bg-secondary/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20 grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-5 bg-primary/10 px-3 py-1.5 rounded-full">
              <span className="size-1.5 rounded-full bg-primary" />
              SJAM SDE · Est. 1990 · Pro Utilitate Hominum
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-balance leading-[1.05] mb-6">
              Serve with heart. Give with love.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                For the Service of Mankind.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[58ch] mb-10">
              Professional emergency medical response and community care across Selangor — sustained by volunteers, clinicians and your generosity.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:0333715005"
                className="inline-flex items-center gap-2 h-12 px-6 bg-primary text-primary-foreground font-medium rounded-md hover:bg-secondary transition-colors shadow-lg shadow-primary/20"
              >
                <Phone className="size-4" />
                Request Ambulance
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 h-12 px-6 bg-card text-foreground font-medium rounded-md hover:bg-muted transition-colors border border-border"
              >
                View Services
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={ambulanceImg}
              alt="St John Ambulance Malaysia ambulance on duty"
              width={1024}
              height={1280}
              className="w-full max-w-sm mx-auto aspect-[3/4] object-cover rounded-2xl shadow-2xl shadow-primary/15 ring-1 ring-border"
            />
            <div className="absolute -top-3 -right-3 size-16 rounded-full bg-secondary text-secondary-foreground grid place-items-center shadow-lg rotate-12">
              <div className="text-center leading-tight">
                <div className="text-[9px] font-semibold uppercase tracking-widest opacity-80">Since</div>
                <div className="text-base font-bold tabular-nums">1990</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-y border-border bg-card/60 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { v: "35+", l: "Years in Selangor" },
              { v: "24/7", l: "Emergency Ready" },
              { v: "1,200+", l: "Active Volunteers" },
              { v: "50k+", l: "Lives Touched" },
            ].map((s) => (
              <div key={s.l} className="px-4 md:px-8 py-6 text-center md:text-left">
                <div className="text-2xl md:text-3xl font-semibold text-primary tabular-nums">{s.v}</div>
                <div className="text-[11px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-muted/40 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-3">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-[20ch]">
                Emergency & medical services, around the clock.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-[40ch]">
              Accredited healthcare support for residents, organisations and event organisers across Selangor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className="group bg-card p-7 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all flex flex-col"
              >
                <div className="size-11 rounded-lg bg-primary/10 text-primary grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{s.desc}</p>
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {s.live && <span className="size-2 rounded-full bg-secondary animate-pulse" />}
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {s.tag}
                    </span>
                  </div>
                  <a href={s.href} className="text-sm font-medium text-primary hover:text-secondary inline-flex items-center gap-1">
                    {s.cta}
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          <img
            src={communityImg}
            alt="St John volunteers caring for the community"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full max-w-md mx-auto aspect-[4/3] object-cover rounded-2xl ring-1 ring-border shadow-xl shadow-primary/10"
          />
          <div>
            <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-3">
              Rakan St John · Community
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">For the people, by the people.</h2>
            <p className="text-muted-foreground mb-10 max-w-[48ch]">
              Beyond emergencies, our volunteers run programmes that bring care to where it's needed most.
            </p>
            <div className="space-y-7">
              {community.map((c) => (
                <div key={c.n} className="flex gap-5 group">
                  <div className="shrink-0 size-11 rounded-lg bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 flex items-center gap-2">
                      <span className="text-xs text-muted-foreground tabular-nums">{c.n}</span>
                      {c.title}
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-[42ch]">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-muted/40 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-3">
                Upcoming Events
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-[22ch]">
                Join us at our next community event.
              </h2>
            </div>
            <a
              href="#events"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary self-start md:self-auto"
            >
              View all events
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {events.map((e) => {
              const [day, month] = e.date.split(" ");
              return (
                <article
                  key={e.title}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col"
                >
                  <div className="flex items-stretch border-b border-border">
                    <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground p-5 flex flex-col items-center justify-center min-w-[88px]">
                      <div className="text-3xl font-bold tabular-nums leading-none">{day}</div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest mt-1 opacity-90">{month}</div>
                    </div>
                    <div className="flex-1 px-5 py-4 flex flex-col justify-center">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary mb-1">
                        {e.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{e.day}</span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg mb-4 leading-snug group-hover:text-primary transition-colors">
                      {e.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-5">
                      <div className="flex items-center gap-2">
                        <MapPin className="size-3.5 text-primary shrink-0" />
                        <span>{e.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="size-3.5 text-primary shrink-0" />
                        <span>{e.time}</span>
                      </div>
                    </div>
                    <a
                      href="#events"
                      className="mt-auto inline-flex items-center justify-between text-sm font-medium text-primary border-t border-border pt-4 hover:text-secondary"
                    >
                      Register / Details
                      <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section id="app" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-5 bg-primary/10 px-3 py-1.5 rounded-full">
              <Smartphone className="size-3.5" />
              SSMP Mobile App · Members Only
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
              Are you one of our members?{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Open the app for the latest event notifications.
              </span>
            </h2>
            <p className="text-muted-foreground max-w-[48ch] mb-8 leading-relaxed">
              The SSMP Mobile App is the official members portal for SJAM SDE — manage your duties, events, achievements and stay connected on the go.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-3 mb-10">
              {[
                "Member registration & activation",
                "Event calendar & management",
                "Duty hour tracking",
                "Member achievements",
                "Newsletter & announcements",
                "SOS emergency alert",
                "Role-based access (Admin / Exco)",
                "Real-time push notifications",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-5 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
                    <Plus className="size-3" strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/my/app/sjam-sde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 h-12 px-5 bg-card text-foreground font-medium rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.03 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] text-muted-foreground">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=my.org.sjamsde.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 h-12 px-5 bg-card text-foreground font-medium rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] text-muted-foreground">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative flex justify-center">
            <img
              src={appMockupImg}
              alt="SJAM SDE mobile app preview on smartphone"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full max-w-sm aspect-square object-cover rounded-2xl ring-1 ring-border shadow-2xl shadow-primary/10"
            />
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary/60 animate-ping" />
                <span className="relative inline-flex rounded-full size-2.5 bg-secondary" />
              </span>
              <span className="text-xs font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section id="donate" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-80 block mb-4">Support Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
              Fuel life-saving work with your generosity.
            </h2>
            <p className="opacity-90 mb-8 text-lg">
              Your donation maintains our ambulance fleet and subsidises dialysis treatment for low-income patients.
            </p>
            <a
              href="https://sde.sjamsde.org.my/"
              className="inline-flex items-center gap-2 h-12 px-7 bg-background text-primary font-semibold rounded-md hover:bg-card transition-colors shadow-lg"
            >
              <Plus className="size-4" strokeWidth={2.8} />
              Make a Secure Donation
            </a>
          </div>
          <div className="absolute -right-16 -bottom-20 opacity-[0.08] pointer-events-none">
            <Plus className="size-[28rem]" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-muted/50 border-t border-border pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12 pb-16 border-b border-border">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <StJohnCross className="size-9" />
                <span className="font-semibold">SJAM Selangor</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-[42ch] mb-6 leading-relaxed">
                A non-profit humanitarian organisation providing first aid, nursing and ambulance services to the public. SJAM SDE has served Selangor since 1990, under SJAM Malaysia (est. 1908).
              </p>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <p>Selangor Darul Ehsan, Malaysia</p>
                <p>
                  Email:{" "}
                  <a href="mailto:user.selangor@sjam.org.my" className="text-primary hover:underline">
                    user.selangor@sjam.org.my
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-primary">Services</a></li>
                <li><a href="#community" className="hover:text-primary">Community Programs</a></li>
                <li><a href="#about" className="hover:text-primary">About SJAM</a></li>
                <li><a href="#donate" className="hover:text-primary">Donate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Hotlines</h4>
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Ambulance · 24/7</p>
                  <a href="tel:0333715005" className="text-lg font-semibold tabular-nums text-primary hover:text-secondary">
                    03-3371 5005
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Haemodialysis Centre</p>
                  <a href="tel:0333735005" className="text-lg font-semibold tabular-nums text-primary hover:text-secondary">
                    03-3373 5005
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} St John Ambulans Malaysia, Selangor Darul Ehsan. All rights reserved.</p>
            <p className="font-medium tracking-wider uppercase">Pro Utilitate Hominum</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
