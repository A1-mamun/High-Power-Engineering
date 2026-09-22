import type { Metadata } from "next";
import { Award, Target, Users, Globe2 } from "@/components/icons";

import { company } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about High Power Engineering Limited — 200+ engineers delivering world-class power generation, electrical infrastructure, and turnkey industrial solutions since 2010.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            {company.tagline}
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in {company.founded}, {company.name} has grown to
                become one of South Asia&apos;s most trusted industrial
                services companies. We specialize in power generation,
                electrical infrastructure, and turnkey engineering projects.
              </p>
              <p>
                From our headquarters in Dhaka, we serve clients across
                Bangladesh and beyond — delivering reliable, efficient, and
                sustainable power solutions to factories, hospitals,
                commercial buildings, and utility providers.
              </p>
              <p>
                Our team of over 200 engineers, technicians, and project
                managers bring decades of combined experience to every
                project. We don&apos;t just supply equipment — we deliver
                peace of mind.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat label="Years of Experience" value={`${new Date().getFullYear() - company.founded}+`} />
            <Stat label="Projects Completed" value="500+" />
            <Stat label="Engineers & Staff" value="200+" />
            <Stat label="Client Satisfaction" value="98%" />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="section-title">Our Values</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={Award}
              title="Quality"
              description="Only world-class materials and components from certified manufacturers."
            />
            <ValueCard
              icon={Target}
              title="Precision"
              description="Every project delivered on time, on spec, and on budget."
            />
            <ValueCard
              icon={Users}
              title="People"
              description="A team of dedicated engineers and lifetime support."
            />
            <ValueCard
              icon={Globe2}
              title="Reach"
              description="Serving clients across South Asia with regional offices."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="text-3xl font-extrabold text-primary">{value}</div>
      <div className="mt-1 text-sm font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}