import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp, viewport } from "@/lib/animations";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
  initials: string;
}

const STATIC_DATA = {
  rating: 5.0,
  count: 7,
  reviews: [
    {
      author: "Top Banden",
      rating: 5,
      text: "Erg tevreden met de renovatie van ons bedrijfspand. Ondanks dat bleek dat de originele bouw schots en scheef was hebben Bram en zijn team voor een super strak eindresultaat gezorgd en dat met een niet alledaags gevelprofiel. Het eindresultaat levert regelmatig complimenten op.",
      time: "4 maanden geleden",
      initials: "TB",
    },
    {
      author: "Seth Coolen",
      rating: 5,
      text: "Bradico is een ervaren ploeg dat alles kent over industriebouw. Ze hebben ervaring met nieuwbouw, gevelbekleding, renovaties en nog veel meer. Ze werken in een goed tempo door en zijn zeer probleemoplossend denkend. Een echte aanrader!",
      time: "4 maanden geleden",
      initials: "SC",
    },
    {
      author: "Justin Deckers",
      rating: 5,
      text: "Bradico levert vakwerk in de bouw- en metaalsector. Betrouwbaar, hoge kwaliteit en duidelijke communicatie. Afspraken worden nagekomen en het eindresultaat is top. Zeker een aanrader.",
      time: "4 maanden geleden",
      initials: "JD",
    },
    {
      author: "Kobe Vanaken",
      rating: 5,
      text: "Super firma, komt zijn afspraken na en een uitstekend resultaat.",
      time: "4 maanden geleden",
      initials: "KV",
    },
    {
      author: "Stef Lemmens",
      rating: 5,
      text: "Echte toppers in hun werk. Aanraders!",
      time: "4 maanden geleden",
      initials: "SL",
    },
    {
      author: "John Martens",
      rating: 5,
      text: "Proper afgewerkt. Een aanrader.",
      time: "2 maanden geleden",
      initials: "JM",
    },
  ] as Review[],
};

function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cls}
          fill={i <= rating ? "hsl(38 92% 50%)" : "none"}
          stroke={i <= rating ? "hsl(38 92% 50%)" : "hsl(0 0% 80%)"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const long = review.text.length > 160;
  const text = long && !expanded ? review.text.slice(0, 158) + "…" : review.text;

  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-soft h-full">
      <div className="flex items-start gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ background: "hsl(214 82% 50%)" }}
        >
          {review.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground leading-none truncate">{review.author}</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">{review.time}</p>
        </div>
        <Stars rating={review.rating} />
      </div>
      {review.text ? (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {text}
          {long && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="ml-1 text-accent font-medium hover:underline"
            >
              meer
            </button>
          )}
        </p>
      ) : null}
    </div>
  );
}

export const GoogleReviews = () => {
  const { rating, count, reviews } = STATIC_DATA;

  return (
    <section className="py-20 bg-soft" aria-label="Google Reviews">
      <div className="container-x">
        <motion.div
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Google Reviews
            </span>
            <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">
              Wat klanten zeggen
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-4xl font-black text-foreground tabular-nums">
                {rating.toFixed(1)}
              </span>
              <div>
                <Stars rating={Math.round(rating)} size="lg" />
                <p className="mt-1 text-xs text-muted-foreground">
                  {count} beoordelingen op Google
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Bradico+Bv/@51.1774564,5.057767,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent self-start sm:self-auto"
          >
            <ExternalLink className="h-4 w-4" />
            Bekijk alle reviews
          </a>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {reviews.slice(0, 6).map((r, i) => (
            <motion.div key={i} variants={staggerItem} className="flex">
              <ReviewCard review={r} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
