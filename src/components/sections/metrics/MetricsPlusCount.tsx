import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DrawOnScroll from "@/components/animation/DrawOnScroll";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Metric = { value: number; prefix?: string; suffix?: string; label: string; description?: string };

type MetricsPlusCountProps = {
  title?: string;
  items?: Metric[];
  ariaLabel?: string;
  className?: string;
};

const defaultItems: Metric[] = [
  { value: 24, label: "Rooms and suites" },
  { value: 120, suffix: "m", label: "To the beach" },
  { value: 98, suffix: "%", label: "Guests who return" },
];

const EASE_OUT: [number, number, number, number] = [0.25, 1, 0.5, 1];

const format = (value: number, decimals: number) => value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

const CountUp = ({ value, prefix = "", suffix = "", play, delay }: { value: number; prefix?: string; suffix?: string; play: boolean; delay: number }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const decimals = Number.isInteger(value) ? 0 : (String(value).split(".")[1]?.length ?? 0);

  useEffect(() => {
    const node = ref.current;
    if (!node || reduce) return;
    if (!play) {
      node.textContent = `${prefix}${format(0, decimals)}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: EASE_OUT,
      onUpdate: (latest) => {
        node.textContent = `${prefix}${format(latest, decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [play, reduce, value, prefix, suffix, decimals, delay]);

  return (
    <>
      <p className="sr-only">{String(value)}</p>
      <p ref={ref} aria-hidden="true" className="whitespace-nowrap tabular-nums">
        {`${prefix}${format(value, decimals)}${suffix}`}
      </p>
    </>
  );
};

const MetricsPlusCount = ({ title = "Villa Solenne in numbers", items = defaultItems, ariaLabel, className }: MetricsPlusCountProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const play = useInView(listRef, { once: true, amount: 0.3 });

  return (
    <section aria-label={ariaLabel ?? title ?? "Key figures"} className={cn("relative bg-background py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto flex w-[var(--container)] flex-col items-center text-center">
        {title && (
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] [font-family:var(--font-label)]"
          >
            {title}
          </motion.h2>
        )}
        <ul ref={listRef} className="mt-[clamp(2rem,4vw,3rem)] flex w-full flex-col items-center">
          {items.map((item, index) => (
            <li key={index} className="flex w-full flex-col items-center">
              {index > 0 && (
                <div className="my-[clamp(1rem,2vw,1.5rem)] h-8 w-px">
                  <DrawOnScroll d="M0.5 0 V32" viewBox="0 0 1 32" strokeWidth={1} className="h-8 text-current opacity-50" />
                </div>
              )}
              <motion.div initial={reduce ? false : "hidden"} whileInView="show" viewport={{ once: true, amount: 0.5 }} className="overflow-hidden pb-[0.08em]">
                <motion.div
                  variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 1.2, ease: EASE_OUT, delay: index * 0.08 } } }}
                  className="flex flex-wrap items-baseline justify-center gap-x-[0.3em] text-[length:clamp(2rem,1.2rem+2.9vw,3.5rem)] uppercase leading-[0.98] tracking-[-0.01em] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)]"
                >
                  <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} play={play} delay={0.15 + index * 0.08} />
                  <p className="[overflow-wrap:anywhere]">
                    {item.label}
                    <sup aria-hidden="true" className="ml-[0.15em] align-[0.9em] text-[0.32em] leading-none">+</sup>
                  </p>
                </motion.div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MetricsPlusCount;
