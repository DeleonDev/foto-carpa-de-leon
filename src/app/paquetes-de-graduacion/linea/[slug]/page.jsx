"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Loading from "@/app/components/elements/Loading";
import SectionTitle from "@/app/components/elements/SectionTitle";
import { Suspense } from "react";
import SectionLoading from "@/app/components/loading/SectionLoading";
import ModelPanel from "@/app/components/ModelPanel";

export default function Page({ params }) {
  const [modelData, setModelData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setModelData(data[params.slug]);
    }
    fetchData();
  }, [params.slug]);

  if (!modelData)
    return (
      <SectionLoading>
        <Header />
        <SectionTitle subtitle="Linea" subtitle2={params.slug} />
      </SectionLoading>
    );

  return (
    <>
      <Header />

      <section
        id="graduacionPackages"
        className="section-padding"
        data-aos="fade-up"
      >
        <div className="container">
          <SectionTitle subtitle="Linea" subtitle2={params.slug} />
          <div className="row">
            <Suspense fallback={<Loading />}>
              {modelData.map((model, index) => (
                <ModelPanel
                  key={index}
                  model={model}
                  index={index}
                  slug={params.slug}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
