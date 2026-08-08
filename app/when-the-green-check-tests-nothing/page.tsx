import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "When the green check tests nothing | Lingli Yang",
  description: "A case study on verification practices and intellectual honesty from a summer internship building multi-tenant infrastructure.",
};

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors mb-8"
        >
          ← Back to home
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12">
          When the green check tests nothing
        </h1>

        {/* Content sections */}
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Context */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Context</h2>
            <p className="text-foreground/80 leading-relaxed">
              Over a three-month internship at a tax-relief SaaS startup, I owned the
              platform layer — multi-tenancy, infrastructure-as-code, and cross-team
              coordination. The most valuable thing I learned there wasn't a framework.
              It was a habit: never trust a control just because it reports success.
            </p>
          </section>

          {/* The pattern */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              The pattern: a control that reports success and does nothing
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Three separate times, I found a check that existed, passed, and protected
              nothing. An audit gate called a method that didn't exist — wrapped in a
              broad try/except by design, so it rejected inputs correctly while logging
              zero records; I caught it through static type-checking, not testing. A CI
              gate had never compiled at all, quietly producing zero jobs on every run.
              A type-check gate was configured to never fail, reporting green while
              real errors sat underneath it. The lesson generalized: a green check only
              tells you what it tested. So I started verifying bidirectionally — feed it
              something that should fail and confirm it's caught, then something that
              should pass and confirm it isn't. A check that blocks everything is as
              useless as one that blocks nothing.
            </p>
          </section>

          {/* Intellectual honesty */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Intellectual honesty
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Two moments taught me more than any feature I shipped. Early on, I reversed
              my own hosting recommendation: a real cost analysis proved the design doc
              I'd written was wrong, and changing my conclusion meant admitting the first
              version was. Later, I built the exact thing I'd spent the summer hunting —
              a billing alarm that treated missing data as OK, showing green while
              monitoring nothing. I only caught it because I checked instead of assumed,
              and changed it to an honest state that says "I have nothing to judge on"
              rather than "all clear." I keep this one on the page on purpose: I knew the
              failure mode cold, and still walked into it.
            </p>
          </section>

          {/* What I took away */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              What I took away
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Merge ≠ deploy — verify against the live system, not the main branch.
              Investigate before you write the claim, not after. And a control nobody
              knows the convention for isn't a control at all.
            </p>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-divider">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            ← Back to portfolio
          </Link>
        </div>
      </article>
    </main>
  );
}
