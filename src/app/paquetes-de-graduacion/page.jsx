"use client";

import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Header from "../components/Header";
import Loading from "../components/elements/Loading";
import SectionTitle from "../components/elements/SectionTitle";
import SectionLoading from "../components/loading/SectionLoading";
import PhotographicLinesCard from "../components/elements/PhotographicLinesCard";

export default function Page() {
  const [packagesData, setPackagesData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setPackagesData(data.graduationPackages);
    }
    fetchData();
  }, []);

  if (!packagesData)
    return (
      <SectionLoading>
        <Header />
        <SectionTitle subtitle="Paquetes de" subtitle2="Graduación" />
      </SectionLoading>
    );

  return (
    <>
      <Header />

      {/* Social */}
      <section
        id="graduacionPackages"
        className="section-padding"
        data-aos="fade-up"
      >
        <div className="container">
          <SectionTitle subtitle="Paquetes de" subtitle2="Graduación" />
          <div className="cards">
            <Suspense fallback={<Loading />}>
              {packagesData.map((packages, index) => (
                <PhotographicLinesCard
                  key={index}
                  category={packages.category}
                  image={packages.image}
                  modelCount={packages.modelCount}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis reiciendis iste tempore ullam. Saepe magni
                  quaerat reiciendis aliquam quibusdam numquam, et sunt
                  recusandae obcaecati, sit enim perspiciatis veniam accusantium
                  voluptatem?
                </PhotographicLinesCard>
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
