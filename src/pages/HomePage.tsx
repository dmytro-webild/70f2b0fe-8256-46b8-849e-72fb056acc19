import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import ListingsTabbedSection from "@/components/sections/listings/ListingsTabbedSection";
import ServicesNightList from "@/components/sections/features/ServicesNightList";
import ProcessRouteLine from "@/components/sections/features/ProcessRouteLine";
import MetricsPlusCount from "@/components/sections/metrics/MetricsPlusCount";
import TestimonialPhotoQuote from "@/components/sections/testimonial/TestimonialPhotoQuote";
import FaqPlusAccordion from "@/components/sections/faq/FaqPlusAccordion";
import ContactPlumForm from "@/components/sections/contact/ContactPlumForm";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents" data-scene>
        <HeroArchPoster
          title="Brynn Bailey"
          script="Hawaii"
          labelLeft="Big Island"
          labelRight="Real Estate"
          marquee={[
            "Dream Homes",
            "Local Market",
            "Island Life"
          ]}
          imageSrc="https://images.pexels.com/photos/4321535/pexels-photo-4321535.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Brynn Bailey, REALTOR® | Compass Big Island"
          cta={{
            text: "Browse Listings",
            href: "#listings"
          }}
        />
      </div>

      <div id="listings" data-webild-section="ListingsTabbedSection" data-webild-section-id="ListingsTabbedSection-1" data-section="listings">
        <ListingsTabbedSection
          title="Featured Island Properties"
          script="Listings"
          subtitle="Explore handpicked luxury estates, oceanfront villas, and resort residences across Kohala, Kona, and Waimea."
        />
      </div>

      <div id="services" data-webild-section="ServicesNightList" data-webild-section-id="ServicesNightList-1" data-section="services" data-scene>
        <ServicesNightList
          items={[
            {
              title: "Targeted Search",
              description: "Custom filters and island listings aligned with your lifestyle criteria.",
              imageSrc: "https://images.pexels.com/photos/7641834/pexels-photo-7641834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brynn Bailey real estate targeted search"
            },
            {
              title: "Contract Terms",
              description: "Focused strategy to secure fair purchase terms and clear closing conditions.",
              imageSrc: "https://images.pexels.com/photos/40895087/pexels-photo-40895087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brynn Bailey negotiating contract terms with clients"
            },
            {
              title: "Closing Support",
              description: "On-site management for home inspections and thorough final walk-throughs.",
              imageSrc: "https://images.pexels.com/photos/8052271/pexels-photo-8052271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brynn Bailey closing support and escrow management"
            },
            {
              title: "Relocation Help",
              description: "Trusted local contacts for inter-island shipping, moving, and settling in.",
              imageSrc: "https://img.b2bpic.net/free-photo/patio-balcony-with-chair-around-sea-ocean-view_74190-6863.jpg?_wi=2",
              imageAlt: "Hawaii luxury home relocation"
            },
            {
              title: "Concierge Care",
              description: "Full service property care and guidance for mainland and local clients.",
              imageSrc: "https://images.pexels.com/photos/14156490/pexels-photo-14156490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brynn Bailey, REALTOR® Concierge Care"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8469937/pexels-photo-8469937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Brynn Bailey REALTOR® executive portrait"
          cta={{
            text: "Contact Brynn",
            href: "#contact-plum-form"
          }}
        />
      </div>

      <div id="process" data-webild-section="ProcessRouteLine" data-webild-section-id="ProcessRouteLine-1" data-section="process">
        <ProcessRouteLine
          aside="Big Island"
          items={[
            {
              title: "Kona Coast",
              description: "5 min",
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-tropical-coconut-palm-tree-with-chair-around-beach-sea-ocean-with-white-cloud-blue-sky_74190-13652.jpg?_wi=2",
              imageAlt: "Kona Coast beach ocean view"
            },
            {
              title: "Golf Resort",
              description: "12 min",
              imageSrc: "https://img.b2bpic.net/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302632.jpg?_wi=2",
              imageAlt: "Tropical beach house resort"
            },
            {
              title: "Town Center",
              description: "18 min",
              imageSrc: "https://img.b2bpic.net/free-photo/interior-space-decorated-boho-style_23-2150771513.jpg?_wi=2",
              imageAlt: "Luxury living space interior"
            },
            {
              title: "Kona Airport",
              description: "25 min",
              imageSrc: "https://img.b2bpic.net/free-photo/park-view_93675-130008.jpg?_wi=2",
              imageAlt: "Lush tropical grounds"
            }
          ]}
        />
      </div>

      <div id="metrics-plus-count" data-webild-section="MetricsPlusCount" data-webild-section-id="MetricsPlusCount-1" data-section="metrics-plus-count">
        <MetricsPlusCount
          title="Dedicated island representation"
          ariaLabel="Key performance metrics and service standards"
          items={[
            {
              value: 11,
              suffix: "/10",
              label: "Client care score"
            },
            {
              value: 100,
              suffix: "%",
              label: "Remote client support"
            },
            {
              value: 100,
              suffix: "%",
              label: "Local market coverage"
            },
            {
              value: 24,
              suffix: "/7",
              label: "Dedicated guidance"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPhotoQuote" data-webild-section-id="TestimonialPhotoQuote-1" data-section="testimonial" data-scene>
        <TestimonialPhotoQuote
          items={[
            {
              quote: "Brynn was THE BEST!! Super helpful, very knowledgeable, and negotiated a great deal for us on our purchase. I had a lot of questions since it was my first time purchasing a home and she was patient and responsive every time.",
              name: "Jessisita",
              role: "First-time Buyer"
            },
            {
              quote: "Brynn Bailey is a fantastic realtor, a one of a kind, hands down, the best real estate agent that we have ever worked with! Professional and knowledgeable about Big Island real estate.",
              name: "Richard & Todd",
              role: "Big Island Buyers"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7937690/pexels-photo-7937690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Brynn Bailey REALTOR® working with clients"
        />
      </div>

      <div id="faq-plus-accordion" data-webild-section="FaqPlusAccordion" data-webild-section-id="FaqPlusAccordion-1" data-section="faq-plus-accordion">
        <FaqPlusAccordion
          title="Before you start"
          script="QUESTIONS"
          items={[
            {
              title: "HOW DO WE SEARCH HOMES FROM MAINLAND?",
              description: "Select custom area filters online with remote assistance. I step in on-site for property visits, inspections, and walk-throughs whenever you are away."
            },
            {
              title: "WHAT LOCAL FACTORS AFFECT BIG ISLAND BUYING?",
              description: "We evaluate specific island microclimates, neighborhood pros and cons, and designated lava hazard zones before crafting any offer."
            },
            {
              title: "CAN YOU REPRESENT US AT INSPECTIONS?",
              description: "Yes. I attend inspections and final walk-throughs in person while coordinating directly with your mortgage broker and closing team."
            },
            {
              title: "DO YOU OFFER POST-CLOSING ASSISTANCE?",
              description: "Yes. I provide trusted local referrals for island shipping, moving companies, and trades to help you settle in easily."
            }
          ]}
          cta={{
            text: "Contact Brynn",
            href: "#contact-plum-form"
          }}
          ariaLabel="Frequently asked questions about Hawaii real estate"
        />
      </div>

      <div id="contact-plum-form" data-webild-section="ContactPlumForm" data-webild-section-id="ContactPlumForm-1" data-section="contact-plum-form">
        <ContactPlumForm
          title="Connect with Brynn"
          script="Aloha"
          options={[
            "Buying a home",
            "Selling a property",
            "Relocating to Hawaii"
          ]}
          submitText="Send Message"
          labels={{
            name: "Your Name",
            email: "Email Address",
            enquiry: "Interest Area",
            message: "Your Message",
            sending: "Sending...",
            sent: "Sent!",
            thanks: "Mahalo! Brynn will be in touch shortly."
          }}
        />
      </div>
    </>
  );
}
