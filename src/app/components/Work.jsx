"use client";

import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import SectionTitle from "./elements/SectionTitle";
import Loading from "./elements/Loading";
import WorkCards from "./elements/WorkCards";
import SectionLoading from "./loading/SectionLoading";

export default function WorkSection() {
  const [worksData, setWorksData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setWorksData(data.works);
    }
    fetchData();
  }, []);

  if (!worksData)
    return (
      <section className="section-padding bg-lightblue">
      <SectionLoading>
        <SectionTitle title="Trabajos" subtitle="Nuestros" subtitle2="Trabajos" />
      </SectionLoading>

      </section>
    );

  return (
    <section
      id="work"
      className="section-padding bg-lightblue"
      data-aos="fade-up"
    >
      <div className="container-fluid">
        <SectionTitle
          title="Trabajos"
          subtitle="Nuestros"
          subtitle2="Trabajos"
        />
        <div className="portfolio-section">
          <div className="row">
            <ul className="portfolio">
              <li className="filter active" data-filter="all">
                Todo
              </li>
              <li className="filter" data-filter=".photography">
                Fotografía
              </li>
              <li className="filter" data-filter=".videography">
                Videografía
              </li>
              <li className="filter" data-filter=".marketing">
                Publicidad
              </li>
              <li className="filter" data-filter=".souvernirs">
                Souvenirs
              </li>
            </ul>
          </div>
          <div className="portfo-in" id="mixItUp">
            <div className="row work-posts grid">
              <Suspense fallback={<Loading />}>
                {worksData.map((work, index) => (
                  <WorkCards
                    key={index}
                    filter={work.filter}
                    image={work.image}
                    category={work.category}
                  >
                    {work.text}
                  </WorkCards>
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
