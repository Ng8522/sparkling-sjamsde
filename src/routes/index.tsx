import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Plus, Ambulance, Activity, HeartPulse, GraduationCap, Droplets, Truck, LifeBuoy, ArrowRight } from "lucide-react";
import ambulanceImg from "@/assets/ambulance.jpg";
import communityImg from "@/assets/community.jpg";

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
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
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
            <a href="#donate" className="hover:text-primary transition-colors">Events</a>
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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              <span className="h-px w-8 bg-primary" />
              Pro Utilitate Hominum · Est. 1908
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance mb-6">
              Serve with heart. Give with love.{" "}
              <span className="text-primary">For the Service of Mankind.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[58ch] mb-10">
              Professional emergency medical response and community care across Selangor — sustained by volunteers, clinicians and your generosity.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:0333715005"
                className="inline-flex items-center gap-2 h-12 px-6 bg-primary text-primary-foreground font-medium rounded-md hover:bg-secondary transition-colors shadow-sm"
              >
                <Phone className="size-4" />
                Request Ambulance
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 h-12 px-6 bg-accent text-accent-foreground font-medium rounded-md hover:bg-muted transition-colors border border-border"
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
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl shadow-primary/10 ring-1 ring-border"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-lg hidden md:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Response Time</div>
              <div className="text-2xl font-semibold tabular-nums">&lt; 15 min</div>
              <div className="text-xs text-muted-foreground">Selangor metro average</div>
            </div>
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
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <img
            src={communityImg}
            alt="St John volunteers caring for the community"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full aspect-[3/2] object-cover rounded-2xl ring-1 ring-border"
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

      {/* Donation CTA */}
      <section id="donate" className="max-w-7xl mx-auto px-6 pb-24">
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
                A non-profit humanitarian organisation providing first aid, nursing and ambulance services to the public since 1908.
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
