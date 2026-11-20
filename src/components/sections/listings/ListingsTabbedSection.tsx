import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Bed, Bath, Square, ArrowUpRight, Tag, CheckCircle2 } from "lucide-react";

export type ListingItem = {
  id: string;
  title: string;
  location: string;
  price: string;
  category: string;
  specs: {
    beds?: number | string;
    baths?: number | string;
    sqft?: string;
    acres?: string;
  };
  statusTag?: string;
  imageSrc: string;
  imageAlt?: string;
  description: string;
  features?: string[];
  featured?: boolean;
};

export type ListingsTabbedSectionProps = {
  title?: string;
  script?: string;
  subtitle?: string;
  categories?: string[];
  listings?: ListingItem[];
  contactHref?: string;
};

export default function ListingsTabbedSection({
  title = "Featured Island Properties",
  script = "Properties",
  subtitle = "Explore curated luxury homes, oceanfront estates, and resort residences across Hawaii's Big Island.",
  categories = ["All Listings", "Oceanfront & Luxury", "Resort Communities", "Island Estates"],
  listings = [
    {
      id: "listing-1",
      title: "Kohala Coast Oceanfront Estate",
      location: "Kuki'o / Kohala Coast, HI",
      price: "$8,950,000",
      category: "Oceanfront & Luxury",
      specs: { beds: 5, baths: 6.5, sqft: "6,200" },
      statusTag: "Active Listing",
      imageSrc: "https://img.b2bpic.net/free-photo/patio-balcony-with-chair-around-sea-ocean-view_74190-6863.jpg?_wi=1",
      imageAlt: "Kohala Coast Oceanfront Estate with ocean views",
      description: "Spectacular contemporary oceanfront estate with seamless indoor-outdoor lanai living, infinity lap pool, and panoramic sunset views over the Pacific.",
      features: ["Private Lanai", "Infinity Lap Pool", "Ocean Sunset Views"],
      featured: true,
    },
    {
      id: "listing-2",
      title: "Kona Cliffside Luxury Villa",
      location: "Keauhou / Kailua-Kona, HI",
      price: "$5,400,000",
      category: "Oceanfront & Luxury",
      specs: { beds: 4, baths: 4.5, sqft: "4,800" },
      statusTag: "Exclusive",
      imageSrc: "https://img.b2bpic.net/free-photo/nature-summer-travel-beach-luxury_1203-4812.jpg",
      imageAlt: "Kona Cliffside Luxury Villa overlooking ocean",
      description: "Architectural masterpiece positioned above Keauhou Bay featuring custom teak details, private ocean balcony, and resort amenities.",
      features: ["Cliffside Position", "Custom Teak Details", "Teak Lanai"],
      featured: false,
    },
    {
      id: "listing-3",
      title: "Mauna Lani Resort Residence",
      location: "Mauna Lani Resort, HI",
      price: "$3,250,000",
      category: "Resort Communities",
      specs: { beds: 3, baths: 3.5, sqft: "3,100" },
      statusTag: "Active Listing",
      imageSrc: "https://img.b2bpic.net/free-photo/beautiful-tropical-coconut-palm-tree-with-chair-around-beach-sea-ocean-with-white-cloud-blue-sky_74190-13652.jpg?_wi=1",
      imageAlt: "Mauna Lani Resort Residence near beach club",
      description: "Gated luxury condo-villa overlooking championship golf fairways with private beach club access and concierge property management.",
      features: ["Golf Course View", "Beach Club Access", "Gated Security"],
      featured: true,
    },
    {
      id: "listing-4",
      title: "Waikoloa Beach Modern Condo",
      location: "Waikoloa Beach Resort, HI",
      price: "$1,890,000",
      category: "Resort Communities",
      specs: { beds: 2, baths: 2, sqft: "1,750" },
      statusTag: "Just Listed",
      imageSrc: "https://img.b2bpic.net/free-photo/interior-space-decorated-boho-style_23-2150771513.jpg?_wi=1",
      imageAlt: "Waikoloa Beach Modern Condo luxury interior",
      description: "Turnkey luxury resort home with gourmet kitchen, expansive covered terrace, and proven vacation rental potential.",
      features: ["Turnkey Furnished", "Covered Terrace", "Resort Pool"],
      featured: false,
    },
    {
      id: "listing-5",
      title: "Waimea Timber & Ranch Estate",
      location: "Waimea / Kamuela, HI",
      price: "$4,100,000",
      category: "Island Estates",
      specs: { beds: 4, baths: 4, sqft: "5,400", acres: "3.5" },
      statusTag: "Active Listing",
      imageSrc: "https://img.b2bpic.net/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302632.jpg",
      imageAlt: "Waimea Timber & Ranch Estate sanctuary",
      description: "Custom timber-framed upcountry sanctuary with expansive pasture views, fireplace-lit great room, and mountain breezes.",
      features: ["3.5 Acre Lot", "Timber Construction", "Mountain Views"],
      featured: true,
    },
    {
      id: "listing-6",
      title: "Holualoa Coffee Belt Sanctuary",
      location: "Holualoa / Kona Coffee Belt, HI",
      price: "$2,750,000",
      category: "Island Estates",
      specs: { beds: 3, baths: 3, sqft: "3,200", acres: "2.0" },
      statusTag: "Under Contract",
      imageSrc: "https://img.b2bpic.net/free-photo/park-view_93675-130008.jpg?_wi=1",
      imageAlt: "Holualoa Coffee Belt Sanctuary tropical grounds",
      description: "Tranquil hillside estate surrounded by native gardens and organic coffee trees, offering ocean views and total privacy.",
      features: ["2.0 Acre Orchard", "Sunset Views", "Private Driveway"],
      featured: false,
    },
  ],
  contactHref = "#contact-plum-form",
}: ListingsTabbedSectionProps) {
  const [activeTab, setActiveTab] = useState(categories[0] || "All Listings");

  const filteredListings = listings.filter((item) => {
    if (activeTab === "All Listings") return true;
    return item.category === activeTab;
  });

  return (
    <section className="py-[var(--section-space)] px-[var(--gutter)] bg-background text-foreground relative overflow-hidden">
      <div className="mx-auto max-w-[var(--max-w)] w-full">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-10 md:mb-14">
          <div className="flex items-center gap-3">
            <span className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] font-mono text-muted-foreground">
              Big Island Portfolio
            </span>
            <span className="h-px w-8 bg-border" />
            {script && (
              <span className="font-[family-name:var(--font-script)] font-normal text-accent text-[length:var(--text-h3)] leading-none capitalize">
                {script}
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
            <h2 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h1)] uppercase leading-[var(--heading-leading)] tracking-[var(--heading-tracking)]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[length:var(--text-body-lg)] text-muted-foreground max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-8 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-2.5 rounded-full text-[length:var(--text-small)] uppercase font-mono tracking-[var(--label-tracking)] transition-all duration-300 ${
                    isActive
                      ? "text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/40"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab}
                    {tab === "All Listings" && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-card text-muted-foreground"}`}>
                        {listings.length}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <span className="text-[length:var(--text-small)] font-mono text-muted-foreground hidden md:inline-block">
            Showing {filteredListings.length} {filteredListings.length === 1 ? "property" : "properties"}
          </span>
        </div>

        {/* Listings Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredListings.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="card group flex flex-col justify-between bg-card border border-border/80 overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div>
                  {/* Image & Status Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt || item.title}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {item.statusTag && (
                      <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-md text-foreground border border-border px-3 py-1 rounded-full text-[length:var(--text-label)] uppercase font-mono tracking-[var(--label-tracking)]">
                        {item.statusTag}
                      </span>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <span className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] font-normal tracking-tight">
                        {item.price}
                      </span>
                      <span className="text-[length:var(--text-label)] uppercase font-mono bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-[length:var(--text-small)] font-mono mb-1">
                        <MapPin className="size-3.5 text-primary" />
                        <span>{item.location}</span>
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] uppercase leading-snug group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[length:var(--text-small)] text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>

                    {/* Specs Row */}
                    <div className="flex items-center gap-4 py-3 border-y border-border/60 text-[length:var(--text-small)] text-foreground font-mono">
                      {item.specs.beds && (
                        <div className="flex items-center gap-1.5">
                          <Bed className="size-4 text-muted-foreground" />
                          <span>{item.specs.beds} Beds</span>
                        </div>
                      )}
                      {item.specs.baths && (
                        <div className="flex items-center gap-1.5">
                          <Bath className="size-4 text-muted-foreground" />
                          <span>{item.specs.baths} Baths</span>
                        </div>
                      )}
                      {item.specs.sqft && (
                        <div className="flex items-center gap-1.5">
                          <Square className="size-4 text-muted-foreground" />
                          <span>{item.specs.sqft} sqft</span>
                        </div>
                      )}
                      {item.specs.acres && (
                        <div className="flex items-center gap-1.5">
                          <Tag className="size-4 text-muted-foreground" />
                          <span>{item.specs.acres} AC</span>
                        </div>
                      )}
                    </div>

                    {/* Features Tags */}
                    {item.features && item.features.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.features.map((feat) => (
                          <span
                            key={feat}
                            className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground bg-background/50 px-2 py-0.5 rounded border border-border/40"
                          >
                            <CheckCircle2 className="size-3 text-primary" />
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <a
                    href={contactHref}
                    className="btn-secondary w-full group/btn justify-between"
                  >
                    <span className="btn-label">Inquire With Brynn</span>
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Section Footer Callout */}
        <div className="mt-14 p-8 rounded-[1.25rem] bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] uppercase mb-2">
              Looking for off-market properties or specific island locations?
            </h4>
            <p className="text-[length:var(--text-body)] text-muted-foreground max-w-2xl">
              Brynn provides tailored property searches and off-market opportunities across Kohala Coast, Kona, Waimea, and Hilo.
            </p>
          </div>
          <a href={contactHref} className="btn-primary whitespace-nowrap shrink-0">
            <span className="btn-label">Request Private Search</span>
          </a>
        </div>
      </div>
    </section>
  );
}
