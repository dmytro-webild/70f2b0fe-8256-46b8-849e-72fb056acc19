import { Outlet } from "react-router-dom";
import NavbarSealCorner from "@/components/navbars/NavbarSealCorner";
import FooterPlumPhone from "@/components/sections/footer/FooterPlumPhone";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="outline" data-card="frame" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarSealCorner
          brand="Brynn Bailey"
          cta={{
            text: "Get in Touch",
            href: "#contact-plum-form"
          }}
          navItems={[
            { name: "Listings", href: "#listings" },
            { name: "Services", href: "#services" },
            { name: "Buying Process", href: "#process" },
            { name: "Testimonials", href: "#testimonial" },
            { name: "FAQ", href: "#faq-plus-accordion" },
            { name: "Contact", href: "#contact-plum-form" }
          ]}
        />
      </header>
      <main className="flex-grow" data-button="outline" data-card="frame" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterPlumPhone
          brand="Brynn Bailey"
          phone="808-255-7512"
          email="brynn.bailey@compass.com"
          address={[
            "Compass Real Estate",
            "Big Island, Hawaii"
          ]}
          columns={[
            {
              title: "Navigation",
              links: [
                {
                  text: "About Brynn",
                  href: "#hero"
                },
                {
                  text: "Services",
                  href: "#services"
                },
                {
                  text: "Buying Process",
                  href: "#process"
                }
              ]
            },
            {
              title: "Explore",
              links: [
                {
                  text: "Featured Listings",
                  href: "#listings"
                },
                {
                  text: "Client Results",
                  href: "#metrics-plus-count"
                },
                {
                  text: "Testimonials",
                  href: "#testimonial"
                },
                {
                  text: "FAQ",
                  href: "#faq-plus-accordion"
                }
              ]
            },
            {
              title: "Social Media",
              links: [
                {
                  text: "Concierge Page",
                  href: "https://www.compass.com/concierge"
                },
                {
                  text: "Facebook",
                  href: "https://facebook.com"
                },
                {
                  text: "Instagram",
                  href: "https://instagram.com"
                },
                {
                  text: "LinkedIn",
                  href: "https://linkedin.com"
                }
              ]
            }
          ]}
          legal="© 2026 Brynn Bailey. REALTOR® RB-24267. All rights reserved."
          toTopText="Back to top"
        />
      </footer>
    </div>
  );
}
