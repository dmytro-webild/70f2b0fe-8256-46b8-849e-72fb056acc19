import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowUpRight,
  Tag,
  CheckCircle2,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  photoCount?: string;
  totalPhotos?: number;
  statusTag?: string;
  listedBy?: string;
  imageSrc: string;
  photos?: string[];
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

function ListingCard({
  item,
  contactHref,
}: {
  item: ListingItem;
  contactHref: string;
}) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photosList = item.photos && item.photos.length > 0 ? item.photos : [item.imageSrc];
  const totalPhotos = item.totalPhotos || photosList.length;

  const currentImageSrc = photosList[currentPhotoIndex % photosList.length];

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="card group flex flex-col justify-between bg-card border border-border/80 overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div>
        {/* Image Carousel & Badges */}
        <motion.div
          className="relative aspect-[16/10] overflow-hidden bg-muted group/carousel select-none cursor-grab active:cursor-grabbing"
          onPanEnd={(_: unknown, info: PanInfo) => {
            if (info.offset.x < -30) {
              handleNext();
            } else if (info.offset.x > 30) {
              handlePrev();
            }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhotoIndex}
              src={currentImageSrc}
              alt={`${item.imageAlt || item.title} - Photo ${currentPhotoIndex + 1}`}
              initial={{ opacity: 0.7, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.7, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="size-full object-cover transition-transform duration-500 group-hover/carousel:scale-105 pointer-events-none"
              loading="lazy"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 opacity-80 group-hover/carousel:opacity-60 transition-opacity pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="bg-black/75 backdrop-blur-md text-white border border-white/20 px-2.5 py-1 rounded-full text-[length:var(--text-label)] font-mono tracking-wider flex items-center gap-1.5 shadow-sm">
                <Camera className="size-3.5 text-primary-foreground" />
                <span>
                  {currentPhotoIndex + 1}/{totalPhotos}
                </span>
              </span>
              {item.listedBy && (
                <span className="bg-background/90 backdrop-blur-md text-foreground border border-border/80 px-2.5 py-1 rounded-full text-[length:var(--text-label)] uppercase font-mono tracking-[var(--label-tracking)] shadow-sm">
                  {item.listedBy}
                </span>
              )}
            </div>

            {item.statusTag && item.statusTag !== item.listedBy && (
              <span className="bg-primary/90 backdrop-blur-md text-primary-foreground px-2.5 py-1 rounded-full text-[length:var(--text-label)] uppercase font-mono tracking-[var(--label-tracking)] font-medium shadow-sm">
                {item.statusTag}
              </span>
            )}
          </div>

          {/* Prev / Next Controls */}
          {totalPhotos > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 size-8 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
                aria-label="Previous photo"
              >
                <ChevronLeft className="size-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 size-8 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
                aria-label="Next photo"
              >
                <ChevronRight className="size-4" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-11 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15">
                {Array.from({ length: Math.min(totalPhotos, 8) }).map((_, dotIdx) => {
                  const maxDots = Math.min(totalPhotos, 8);
                  const activeDotIndex =
                    totalPhotos > maxDots
                      ? Math.floor((currentPhotoIndex / (totalPhotos - 1)) * (maxDots - 1))
                      : currentPhotoIndex;
                  const isActive = dotIdx === activeDotIndex;
                  return (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (totalPhotos <= maxDots) {
                          setCurrentPhotoIndex(dotIdx);
                        } else {
                          setCurrentPhotoIndex(Math.round((dotIdx / (maxDots - 1)) * (totalPhotos - 1)));
                        }
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? "w-4 bg-primary-foreground" : "w-1.5 bg-white/40 hover:bg-white/80"
                      }`}
                      aria-label={`Go to photo ${dotIdx + 1}`}
                    />
                  );
                })}
              </div>
            </>
          )}

          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white z-10 pointer-events-none">
            <span className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] font-normal tracking-tight drop-shadow-sm">
              {item.price}
            </span>
            <span className="text-[length:var(--text-label)] uppercase font-mono bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
              {item.category}
            </span>
          </div>
        </motion.div>

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
          <div className="flex items-center gap-4 py-3 border-y border-border/60 text-[length:var(--text-small)] text-foreground font-mono flex-wrap">
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
  );
}

export default function ListingsTabbedSection({
  title = "Brynn Bailey’s Transactions",
  script = "Properties",
  subtitle = "Explore current active listings and featured transactions represented by Brynn Bailey on the Big Island.",
  categories = ["All Listings", "Oceanfront & Luxury", "Resort Communities", "Island Estates"],
  listings = [
    {
      id: "listing-1",
      title: "78-7079 Holuaki Loop",
      location: "Kailua-Kona, HI 96740",
      price: "$1,950,000",
      category: "Oceanfront & Luxury",
      specs: { beds: 3, baths: 3, sqft: "1,887", acres: "0.13" },
      totalPhotos: 25,
      photoCount: "1/25",
      statusTag: "Virtual Tour",
      listedBy: "Listed By Compass",
      imageSrc: "https://images.pexels.com/photos/16671106/pexels-photo-16671106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      photos: [
        "https://images.pexels.com/photos/16671106/pexels-photo-16671106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/6001883/pexels-photo-6001883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/7464676/pexels-photo-7464676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/8052271/pexels-photo-8052271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/6965499/pexels-photo-6965499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/9394297/pexels-photo-9394297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/4321535/pexels-photo-4321535.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      ],
      imageAlt: "78-7079 Holuaki Loop luxury oceanview home in Kailua-Kona",
      description: "Exceptional 3 bedroom, 3 bathroom residence featuring 1,887 sqft of island living on a 0.13-acre lot with interactive virtual tour.",
      features: ["Listed By Compass", "Virtual Tour", "0.13 Acres"],
      featured: true,
    },
    {
      id: "listing-2",
      title: "75-5813 Nani Kailua Place",
      location: "Kailua-Kona, HI 96740",
      price: "$1,099,000",
      category: "Island Estates",
      specs: { beds: 3, baths: 2, sqft: "1,620", acres: "0.35" },
      totalPhotos: 30,
      photoCount: "1/30",
      statusTag: "Open: 11/21 09:00AM - 11:30AM",
      listedBy: "Listed By Compass",
      imageSrc: "https://images.pexels.com/photos/15516328/pexels-photo-15516328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      photos: [
        "https://images.pexels.com/photos/15516328/pexels-photo-15516328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/40895087/pexels-photo-40895087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/7641834/pexels-photo-7641834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/6297086/pexels-photo-6297086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/34710864/pexels-photo-34710864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/8469937/pexels-photo-8469937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/7937690/pexels-photo-7937690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      ],
      imageAlt: "75-5813 Nani Kailua Place single family home in Kailua-Kona",
      description: "Spacious Kailua-Kona residence featuring 3 bedrooms, 2 bathrooms, 1,620 sqft, and an expansive 0.35-acre lot with open house tour.",
      features: ["Listed By Compass", "Open: 11/21 9-11:30AM", "0.35 Acres"],
      featured: true,
    },
    {
      id: "listing-3",
      title: "78-7190 Holua At Mauna Loa, Unit 55",
      location: "Kailua-Kona, HI 96740",
      price: "$575,000",
      category: "Resort Communities",
      specs: { beds: 3, baths: 3, sqft: "1,504" },
      totalPhotos: 20,
      photoCount: "1/20",
      statusTag: "Active Listing",
      listedBy: "Listed By Compass",
      imageSrc: "https://images.pexels.com/photos/31908808/pexels-photo-31908808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      photos: [
        "https://images.pexels.com/photos/31908808/pexels-photo-31908808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/14156490/pexels-photo-14156490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/3445683/pexels-photo-3445683.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/6001883/pexels-photo-6001883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      ],
      imageAlt: "78-7190 Holua At Mauna Loa Unit 55 resort condo in Kailua-Kona",
      description: "Desirable 3 bedroom, 3 bathroom resort condo offering 1,504 sqft of turn-key coastal living at Holua At Mauna Loa.",
      features: ["Listed By Compass", "Unit 55", "1,504 Sqft"],
      featured: true,
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
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : "bg-card text-muted-foreground"
                        }`}
                      >
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
              <ListingCard key={item.id} item={item} contactHref={contactHref} />
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
