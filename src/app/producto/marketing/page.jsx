"use client";

import React, { useState, useEffect } from "react";
import Carousel from "@/app/components/Carousel";
import Header from "@/app/components/Header";
import CarouselItem from "@/app/components/elements/CarouselItem";
import Loading from "@/app/components/elements/Loading";
import SectionTitle from "@/app/components/elements/SectionTitle";
import { Suspense } from "react";
import SectionLoading from "@/app/components/loading/SectionLoading";

export default function Marketing() {
  const [marketingData, setMarketingData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setMarketingData(data.marketing);
    }
    fetchData();
  }, []);

  if (!marketingData)
    return (
      <SectionLoading>
        <Header />
        <SectionTitle subtitle2="Publicidad" />
      </SectionLoading>
    );

  return (
    <>
      <Header />

      {/* Social */}
      <section id="marketing" className="section-padding" data-aos="fade-up">
        <div className="container">
          <SectionTitle subtitle2="Publicidad" />
          <div className="row">
            <Suspense fallback={<Loading />}>
              <Carousel target="marketingCarousel">
                {marketingData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    active={item.active}
                    title={item.title}
                    image={item.image}
                  />
                ))}
              </Carousel>
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
