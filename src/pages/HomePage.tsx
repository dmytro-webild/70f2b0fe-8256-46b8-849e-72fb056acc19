import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
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
          imageSrc="https://img.b2bpic.net/free-photo/beautiful-asian-woman-posing-pink-bikini-swimsuit-pareo-terrace-tropical-villa-smiling-happy-vacation-thailnad-sexy-body-summer-style_285396-5818.jpg"
          imageAlt="luxury villa with swimming pool"
          cta={{
            text: "Browse Homes",
            href: "#services"
          }}
        />
      </div>

      <div id="services" data-webild-section="ServicesNightList" data-webild-section-id="ServicesNightList-1" data-section="services" data-scene>
        <ServicesNightList
          items={[
            {
              title: "Targeted Search",
              description: "Custom filters and island listings aligned with your lifestyle criteria.",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-real-estate-agent-working_23-2150322086.jpg",
              imageAlt: "real estate agent pointing at property"
            },
            {
              title: "Contract Terms",
              description: "Focused strategy to secure fair purchase terms and clear closing conditions.",
              imageSrc: "https://img.b2bpic.net/free-photo/business-meeting-sales-manager-couple-customers_1262-20845.jpg",
              imageAlt: "business meeting with clients"
            },
            {
              title: "Closing Support",
              description: "On-site management for home inspections and thorough final walk-throughs.",
              imageSrc: "https://img.b2bpic.net/free-photo/business-people-working-together_23-2148826968.jpg",
              imageAlt: "business people working together in office"
            },
            {
              title: "Relocation Help",
              description: "Trusted local contacts for inter-island shipping, moving, and settling in.",
              imageSrc: "https://img.b2bpic.net/free-photo/pretty-european-positive-smiling-woman-summer-flying-dress-natural-day-light-villa-terrace-enjoying-beautiful-vacation-outdoor-sofa-with-pillows-tropical_343596-1135.jpg",
              imageAlt: "woman relaxing on villa terrace"
            },
            {
              title: "Concierge Care",
              description: "Full service property care and guidance for mainland and local clients.",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-positive-executive-work_1098-519.jpg",
              imageAlt: "portrait of a smiling businesswoman"
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/nature-summer-travel-beach-luxury_1203-4812.jpg"
          imageAlt="nature summer travel beach luxury"
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
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-tropical-coconut-palm-tree-with-chair-around-beach-sea-ocean-with-white-cloud-blue-sky_74190-13652.jpg",
              imageAlt: "Beautiful tropical coconut palm tree with chair around beach sea ocean with white cloud on blue sky"
            },
            {
              title: "Golf Resort",
              description: "12 min",
              imageSrc: "https://img.b2bpic.net/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302632.jpg",
              imageAlt: "tropical beach house at sunset"
            },
            {
              title: "Town Center",
              description: "18 min",
              imageSrc: "https://img.b2bpic.net/free-photo/interior-space-decorated-boho-style_23-2150771513.jpg",
              imageAlt: "modern living room with plants"
            },
            {
              title: "Kona Airport",
              description: "25 min",
              imageSrc: "https://img.b2bpic.net/free-photo/park-view_93675-130008.jpg",
              imageAlt: "lush tropical garden"
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
              quote: "Brynn was the best! Super helpful, skilled, and negotiated a great deal on our home purchase.",
              name: "Jessisita",
              role: "First-time buyer"
            },
            {
              quote: "Brynn is a fantastic realtor and hands down the best agent we have ever worked with in Hawaii.",
              name: "Richard & Todd",
              role: "Big Island buyers"
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/patio-balcony-with-chair-around-sea-ocean-view_74190-6863.jpg"
          imageAlt="Patio or Balcony with chair around sea and ocean view"
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
