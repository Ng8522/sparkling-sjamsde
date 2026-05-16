import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, Heart, RefreshCw, Smartphone } from "lucide-react";

import { MockSuccess, SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { donationCampaigns } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [{ title: "Donate — SJAM Selangor" }, { name: "description", content: "Support ambulance, dialysis and training programmes." }],
  }),
});

const amounts = [50, 100, 250, 500, 1000];
const methods = [
  { id: "fpx", label: "FPX Online Banking", icon: Smartphone },
  { id: "duitnow", label: "DuitNow QR", icon: Smartphone },
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
] as const;

function DonatePage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [method, setMethod] = useState<(typeof methods)[number]["id"]>("fpx");
  const [campaign, setCampaign] = useState(donationCampaigns[0].id);

  const finalAmount = customAmount ? Number(customAmount) : amount;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("success");
  }

  if (step === "success") {
    return (
      <SiteLayout>
        <section className="max-w-7xl mx-auto px-6 py-16">
          <MockSuccess
            title="Thank you for your generosity"
            description={`Mock receipt #SJAM-${Date.now().toString().slice(-6)} — RM ${finalAmount}${recurring ? " / month" : ""} via ${method.toUpperCase()}. Tax receipt would be emailed in production.`}
          >
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="outline">
                <Link to="/">Back to home</Link>
              </Button>
              <Button type="button" onClick={() => setStep("form")}>
                Make another donation
              </Button>
            </div>
          </MockSuccess>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">Donation platform · Mock</span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 max-w-2xl">
            Fuel life-saving work with your generosity.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl">
            FPX, DuitNow, cards, recurring gifts and campaign tracking — simulated for stakeholder review.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1fr_340px] gap-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Choose a campaign</CardTitle>
              <CardDescription>Track impact by programme (mock progress).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {donationCampaigns.map((c) => {
                const pct = Math.round((c.raised / c.goal) * 100);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCampaign(c.id)}
                    className={cn(
                      "w-full text-left rounded-lg border p-4 transition-colors",
                      campaign === c.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40",
                    )}
                  >
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>{c.title}</span>
                      <span className="text-muted-foreground">{pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      RM {c.raised.toLocaleString()} raised of RM {c.goal.toLocaleString()}
                    </p>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Amount</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {amounts.map((a) => (
                  <Button
                    key={a}
                    type="button"
                    variant={amount === a && !customAmount ? "default" : "outline"}
                    onClick={() => {
                      setAmount(a);
                      setCustomAmount("");
                    }}
                  >
                    RM {a}
                  </Button>
                ))}
              </div>
              <div>
                <Label htmlFor="custom">Custom amount (RM)</Label>
                <Input
                  id="custom"
                  type="number"
                  min={1}
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="mt-1.5 max-w-xs"
                />
              </div>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} className="rounded border-input" />
                <RefreshCw className="size-4 text-primary" />
                Monthly recurring donation
              </label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment method</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-3">
              {methods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMethod(m.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-lg border p-4 text-sm font-medium transition-colors",
                    method === m.id ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/40",
                  )}
                >
                  <m.icon className="size-6" />
                  {m.label}
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Donor details</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required placeholder="Ahmad bin Ali" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email (tax receipt)</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="phone">Mobile</Label>
                <Input id="phone" placeholder="012-345 6789" className="mt-1.5" />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
            <Heart className="size-4" />
            Complete mock payment · RM {finalAmount || "—"}
          </Button>
        </form>

        <aside className="space-y-4">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <p className="text-sm opacity-90 mb-2">Your gift supports</p>
              <ul className="text-sm space-y-2 opacity-95">
                <li>· 24-hour ambulance fleet</li>
                <li>· Subsidised haemodialysis</li>
                <li>· Community training & outreach</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground">
            Production: iPay88 / FPX integration, donor CRM, automated tax receipts (per assessment §7).
          </p>
        </aside>
      </div>
    </SiteLayout>
  );
}
