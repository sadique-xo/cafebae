import Link from "next/link";
import { Heart, Instagram, MessageCircle } from "lucide-react";
import { FOOTER } from "@/data/cafe-data";

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-brand-canvas border-t-2 border-border">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            {FOOTER.name}
          </h3>
          <p className="text-primary font-semibold inline-flex items-center justify-center gap-2 flex-wrap">
            <Heart
              className="h-4 w-4 shrink-0 fill-primary/25 text-primary"
              strokeWidth={2}
              aria-hidden
            />
            {FOOTER.tagline}
          </p>
          <p className="text-muted-foreground text-sm mt-2">{FOOTER.brands}</p>
        </div>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href={FOOTER.social.instagramBae}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Cafe BAE Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href={FOOTER.social.instagramYellow}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="YELLOW Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href={FOOTER.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-muted-foreground text-sm mb-4">
          <a
            href={`tel:${FOOTER.phone.replace(/\s/g, "")}`}
            className="hover:text-primary transition-colors"
          >
            {FOOTER.phone}
          </a>
        </p>
        <div className="text-center text-muted-foreground text-sm space-y-1">
          <p>{FOOTER.legal}</p>
          <p>
            Created by{" "}
            <Link
              href={FOOTER.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Sadique (sadique.co)
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
