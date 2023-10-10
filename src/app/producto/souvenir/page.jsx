"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Loading from "@/app/components/elements/Loading";
import SectionTitle from "@/app/components/elements/SectionTitle";
import Thumbnail from "@/app/components/elements/Thumbnail";
import { Suspense } from "react";
import SectionLoading from "@/app/components/loading/SectionLoading";

export default function Souvenir() {
  const [souvenirData, setSouvenirData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setSouvenirData(data.souvenir);
    }
    fetchData();
  }, []);

  if (!souvenirData)
    return (
      <SectionLoading>
        <Header />
        <SectionTitle subtitle2="Souvenirs" />
      </SectionLoading>
    );

  return (
    <>
      <Header />

      {/* Social */}
      <section id="marketing" className="section-padding" data-aos="fade-up">
        <div className="container">
          <SectionTitle subtitle2="Souvenirs" />
          <div className="row">
            <Suspense fallback={<Loading />}>
              {souvenirData.map((souvenir, index) => (
                <Thumbnail
                  key={index}
                  src={souvenir.src}
                  alt={souvenir.alt}
                  title={souvenir.title}
                  subtitle={souvenir.subtitle}
                  quoteWidth={"w-100"}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
