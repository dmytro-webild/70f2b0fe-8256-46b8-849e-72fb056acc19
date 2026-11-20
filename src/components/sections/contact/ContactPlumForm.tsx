import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import EraTitle from "@/components/kit/EraTitle";
import EraArchWindow from "@/components/kit/EraArchWindow";
import { useKitMotion, usePreloadImages } from "@/components/kit/kitMotion";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type Detail = { label: string; value: string; href?: string };

export type SocialLink = {
  name: string;
  href: string;
  icon?: string;
};

export type FormLabels = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  sending?: string;
  sent?: string;
  thanks?: string;
};

type ContactPlumFormProps = {
  title?: string;
  script?: string;
  options?: string[];
  labels?: FormLabels;
  submitText?: string;
  imageSrc?: string;
  imageAlt?: string;
  details?: Detail[];
  socialLinks?: SocialLink[];
  ariaLabel?: string;
  className?: string;
};

const defaultSocialLinks: SocialLink[] = [
  { name: "Brynn’s Concierge Page", href: "https://www.compass.com/concierge", icon: "concierge" },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

const renderSocialIcon = (icon?: string) => {
  switch (icon) {
    case "facebook":
      return (
        <svg className="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "concierge":
    default:
      return (
        <svg className="h-5 w-5 shrink-0 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
  }
};

const ContactPlumForm = ({
  title = "Work with Brynn Bailey",
  script = "Aloha",
  options = ["Sell", "Buy", "Rent"],
  labels,
  submitText = "Send Message",
  imageSrc,
  imageAlt = "Brynn Bailey REALTOR®",
  details = [],
  socialLinks = defaultSocialLinks,
  ariaLabel,
  className,
}: ContactPlumFormProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const timer = useRef<number>(undefined);
  const sectionRef = useRef<HTMLElement>(null);
  usePreloadImages(sectionRef, "200%");

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state !== "idle") return;
    const form = event.currentTarget;
    setState("sending");
    timer.current = window.setTimeout(() => {
      setState("sent");
      form.reset();
    }, 1200);
  };

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: kit.base, ease: kit.ease, delay },
  });

  return (
    <section ref={sectionRef} aria-label={ariaLabel ?? title} className={cn("relative bg-secondary py-[var(--section-space)] text-secondary-foreground", className)}>
      <div className="mx-auto grid w-[var(--container)] grid-cols-1 gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col gap-[clamp(2.5rem,5vw,4rem)]">
          <EraTitle text={title} script={script} align="left" className="max-w-[4.5em]" />
          <motion.form {...fade(0.2)} onSubmit={onSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">
                  {labels?.firstName ?? "First Name"}
                </p>
                <input
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="First Name"
                  className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground placeholder:text-secondary-foreground/40 outline-none transition-colors duration-300 focus:border-secondary-foreground"
                />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">
                  {labels?.lastName ?? "Last Name"}
                </p>
                <input
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Last Name"
                  className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground placeholder:text-secondary-foreground/40 outline-none transition-colors duration-300 focus:border-secondary-foreground"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">
                  {labels?.email ?? "Email"}
                </p>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="email@example.com"
                  className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground placeholder:text-secondary-foreground/40 outline-none transition-colors duration-300 focus:border-secondary-foreground"
                />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">
                  {labels?.phone ?? "Phone"}
                </p>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="808-000-0000"
                  className="border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground placeholder:text-secondary-foreground/40 outline-none transition-colors duration-300 focus:border-secondary-foreground"
                />
              </label>
            </div>

            {options.length > 0 && (
              <label className="flex flex-col gap-2">
                <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">
                  {labels?.interest ?? "I am interested in:"}
                </p>
                <select
                  name="interest"
                  defaultValue={options[0]}
                  className="cursor-pointer border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground outline-none transition-colors duration-300 focus:border-secondary-foreground"
                >
                  {options.map((option) => (
                    <option key={option} value={option} className="bg-secondary text-secondary-foreground">
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="flex flex-col gap-2">
              <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">
                {labels?.message ?? "Message"}
              </p>
              <textarea
                name="message"
                rows={3}
                placeholder="Share your goals or questions about Hawaii real estate..."
                className="resize-none border-0 border-b border-secondary-foreground/30 bg-transparent py-2 text-[length:var(--text-body)] text-secondary-foreground placeholder:text-secondary-foreground/40 outline-none transition-colors duration-300 focus:border-secondary-foreground"
              />
            </label>

            <div className="flex items-center gap-6">
              <button type="submit" disabled={state !== "idle"} className="btn-secondary disabled:cursor-default">
                {state === "sending" ? (labels?.sending ?? "Sending...") : state === "sent" ? (labels?.sent ?? "Sent!") : submitText}
              </button>
              <p aria-live="polite" className="text-[length:var(--text-small)] text-secondary-foreground/75">
                {state === "sent" ? (labels?.thanks ?? "Mahalo! Brynn will be in touch shortly.") : ""}
              </p>
            </div>
          </motion.form>
        </div>

        <div className="flex flex-col gap-8 justify-between">
          {imageSrc && (
            <div className="flex w-full flex-col border border-secondary-foreground/25 p-2 min-h-[18rem] lg:flex-1">
              <EraArchWindow className="aspect-[4/3] w-full lg:aspect-auto lg:flex-1">
                <Media src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              </EraArchWindow>
            </div>
          )}

          {details.length > 0 && (
            <motion.dl {...fade(0.3)} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {details.map((detail, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <dt className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">{detail.label}</dt>
                  <dd className="text-[length:var(--text-body)] leading-[1.5] [overflow-wrap:anywhere]">
                    {detail.href ? (
                      <a href={detail.href} className="hover:underline transition-all">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}

          {socialLinks.length > 0 && (
            <motion.div {...fade(0.4)} className="flex flex-col gap-4 border-t border-secondary-foreground/20 pt-6">
              <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-secondary-foreground/75">
                Social Media & Concierge
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-secondary-foreground/20 bg-secondary-foreground/5 px-4 py-3 text-[length:var(--text-small)] font-medium text-secondary-foreground transition-all duration-200 hover:border-secondary-foreground/50 hover:bg-secondary-foreground/10"
                  >
                    {renderSocialIcon(social.icon)}
                    <span className="truncate">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPlumForm;

