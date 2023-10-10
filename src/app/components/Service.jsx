"use client";

import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import SectionTitle from "./elements/SectionTitle";
import ServiceCard from "./elements/ServiceCard";
import SectionLoading from "./loading/SectionLoading";
import Loading from "./elements/Loading";

export default function ServiceSection() {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setServicesData(data.services);
    }
    fetchData();
  }, []);

  if (!servicesData)
    return (
      <SectionLoading>
        <SectionTitle
          title="Servicios"
          subtitle="Nuestros"
          subtitle2="Servicios"
        />
      </SectionLoading>
    );

  return (
    <section id="service" className="section-padding">
      <div className="container">
        <SectionTitle
          title="Servicios"
          subtitle="Nuestros"
          subtitle2="Servicios"
        />
        <div className="row">
          <Suspense fallback={<Loading />}>
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
              >
                {service.description}
              </ServiceCard>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
