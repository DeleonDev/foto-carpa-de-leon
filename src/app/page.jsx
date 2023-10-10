import Script from "next/script";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import ServiceSection from "./components/Service";
import WorkSection from "./components/Work";
import Header from "./components/Header";
import ContactLinkSection from "./components/ContactLinks";

export default function Home() {
  return (
    <>
      <Header isHome />

      {/* Sections */}
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <WorkSection />
      <ContactLinkSection />

      {/* Scripts */}
      <Script src="js/headline.js" strategy="lazyOnload" />
      <Script src="js/jquery.waypoints.min.js" strategy="lazyOnload" />
      <Script src="js/jquery.counterup.min.js" strategy="lazyOnload" />
      <Script src="js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="js/jquery.mixitup.js" strategy="lazyOnload" />
      <Script src="js/jquery.lineProgressbar.js" strategy="lazyOnload" />
      <Script src="js/main.js" strategy="lazyOnload" />
      <Script src="js/contact.js" strategy="lazyOnload" />
    </>
  );
}
