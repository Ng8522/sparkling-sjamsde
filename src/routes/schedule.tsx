import { useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";

import { ScheduleCalendarBoard } from "@/components/schedule-calendar-board";
import { MockSuccess, SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { courses, getCourseById } from "@/lib/mock-data";
import { getAllScheduleEntries, type ScheduleEntry } from "@/lib/calendar-schedule";

export const Route = createFileRoute("/schedule")({
  component: SchedulePage,
  head: () => ({
    meta: [{ title: "Events & Courses — SJAM Selangor" }],
  }),
});

function SchedulePage() {
  const navigate = useNavigate();
  const entries = useMemo(() => getAllScheduleEntries(), []);
  const [booking, setBooking] = useState<{ courseId: string; sessionDate: string } | null>(null);
  const [done, setDone] = useState(false);

  const course = booking ? getCourseById(booking.courseId) : null;
  const onRequestCourses = courses.filter((c) => c.sessions.length === 0);

  if (done && course) {
    return (
      <SiteLayout>
        <section className="max-w-7xl mx-auto px-6 py-16">
          <MockSuccess
            title="Course registration received (mock)"
            description={`You are booked for "${course.title}" on ${booking?.sessionDate}. Payment link would be emailed in production.`}
          >
            <Button asChild variant="outline">
              <Link to="/schedule">Back to calendar</Link>
            </Button>
          </MockSuccess>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="bg-muted/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase flex items-center gap-2">
            <CalendarDays className="size-3.5" />
            Events & courses · Mock
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">Community calendar</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            One calendar for public events and training courses. Select a date, then choose an item to register.
            Member-only tools remain in the SSMP mobile app.
          </p>
        </div>
      </section>

      <ScheduleCalendarBoard
        combined
        entries={entries}
        kindLabel="item"
        emptyDayMessage="Nothing scheduled on this date. Try another day or another month."
        onSelectEntry={(entry: ScheduleEntry) => {
          if (entry.kind === "event" && entry.eventId) {
            navigate({ to: "/events/$eventId", params: { eventId: entry.eventId } });
          } else if (entry.kind === "course" && entry.courseId && entry.sessionId) {
            setBooking({ courseId: entry.courseId, sessionDate: entry.sessionId });
          }
        }}
        footerNote={
          onRequestCourses.length > 0 ? (
            <span>
              <strong className="text-foreground">Courses on request:</strong>{" "}
              {onRequestCourses.map((c) => c.title).join(", ")} —{" "}
              <a href="mailto:user.selangor@sjam.org.my" className="text-primary hover:underline">
                enquire by email
              </a>
            </span>
          ) : undefined
        }
      />

      {booking && course && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" role="dialog">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Book course — {course.title}</CardTitle>
              <CardDescription>
                {new Date(booking.sessionDate + "T12:00:00").toLocaleDateString("en-MY", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </CardDescription>
            </CardHeader>
            <form
              className="px-6 pb-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <div>
                <Label htmlFor="c-name">Full name</Label>
                <Input id="c-name" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="c-email">Email</Label>
                <Input id="c-email" type="email" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="c-ic">MyKad / Passport</Label>
                <Input id="c-ic" required className="mt-1.5" />
              </div>
              <div className="flex gap-2 pt-2">
                <Button type="button" variant="outline" className="flex-1" onClick={() => setBooking(null)}>
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Pay RM {course.fee} (mock)
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </SiteLayout>
  );
}
