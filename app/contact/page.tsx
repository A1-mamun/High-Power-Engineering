import { Mail, Phone, MapPin, Send } from "lucide-react";

import { company, contactEmails } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Get in touch with our engineering team. We typically respond
            within one business day.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <ContactCard
              icon={MapPin}
              title="Address"
              lines={[company.address]}
            />
            <ContactCard
              icon={Phone}
              title="Phone"
              lines={[company.phone]}
              href={`tel:${company.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon={Mail}
              title="Email"
              lines={contactEmails}
            />
          </div>

          <div className="rounded-lg border bg-white p-8 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Full Name</label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Email Address</label>
                <Input type="email" placeholder="you@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Phone</label>
                <Input placeholder="+880 1XXX-XXXXXX" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Subject</label>
                <Input placeholder="Project inquiry" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold">Message</label>
                <Textarea placeholder="Tell us about your project..." />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" variant="default" size="lg">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
}) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-base font-bold">{title}</h3>
      </div>
      <div className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
        {lines.map((line, i) =>
          href ? (
            <a
              key={i}
              href={href}
              className="hover:text-primary transition-colors"
            >
              {line}
            </a>
          ) : (
            <span key={i}>{line}</span>
          )
        )}
      </div>
    </div>
  );
}