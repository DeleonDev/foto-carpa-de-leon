"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Loading from "@/app/components/elements/Loading";
import SectionTitle from "@/app/components/elements/SectionTitle";
import Thumbnail from "@/app/components/elements/Thumbnail";
import { Suspense } from "react";
import Quote from "@/app/components/elements/WhatsappQuote";
import SectionLoading from "@/app/components/loading/SectionLoading";

export default function Photography() {
  const [photographyData, setPhotographyData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setPhotographyData(data.photography);
    }
    fetchData();
  }, []);

  if (!photographyData)
    return (
      <SectionLoading>
        <Header />
        <SectionTitle subtitle="Fotografía y Videografía" subtitle2="Social" />
      </SectionLoading>
    );

  return (
    <>
      <Header>
        <div className="col-sm-12 d-flex justify-content-center align-items-center">
          <div className="btn-group" role="group">
            <button type="button" className="btn bg-primary">
              <a href="#social_photography">Social</a>
            </button>
            <button type="button" className="btn bg-primary">
              <a href="#graduation_photography">Graduaciones</a>
            </button>
            <button type="button" className="btn bg-primary">
              <a href="#political_photography">Politicas</a>
            </button>
          </div>
        </div>
      </Header>

      {/* Social */}
      <section
        id="social_photography"
        className="section-padding"
        data-aos="fade-up"
      >
        <div className="container">
          <SectionTitle
            subtitle="Fotografía y Videografía"
            subtitle2="Social"
          />
          <div className="row">
            <Suspense fallback={<Loading />}>
              {photographyData.social.map((photo) => (
                <Thumbnail
                  key={photo.alt}
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  subtitle={photo.subtitle}
                >
                  <div className="d-flex justify-content-between">
                    <Quote
                      text={`un servicio de *Fotografía para ${photo.alt}*`}
                      className={"w-50"}
                    >
                      <i className="fas fa-camera"></i>
                      Cotizar
                    </Quote>
                    <Quote
                      text={`un servicio de *Videografía para ${photo.alt}*`}
                      className={"w-50"}
                    >
                      <i className="fas fa-video"></i>
                      Cotizar
                    </Quote>
                  </div>
                </Thumbnail>
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Graduaciones */}
      <section
        id="graduation_photography"
        className="section-padding bg-lightblue"
        data-aos="fade-up"
      >
        <div className="container">
          <SectionTitle
            subtitle="Fotografía y Videografía"
            subtitle2="Graduaciones"
          />
          <div className="row">
            <Suspense fallback={<Loading />}>
              {photographyData.graduations.map((photo) => (
                <Thumbnail
                  key={photo.alt}
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  subtitle={photo.subtitle}
                >
                  <div className="d-flex justify-content-between">
                    <Quote
                      text={`un servicio de *Fotografía para ${photo.alt}*`}
                      className={"w-50"}
                    >
                      <i className="fas fa-camera"></i>
                      Cotizar
                    </Quote>
                    <Quote
                      text={`un servicio de *Videografía para ${photo.alt}*`}
                      className={"w-50"}
                    >
                      <i className="fas fa-video"></i>
                      Cotizar
                    </Quote>
                  </div>
                </Thumbnail>
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Politicas */}
      <section
        id="political_photography"
        className="section-padding"
        data-aos="fade-up"
      >
        <div className="container">
          <SectionTitle
            subtitle="Fotografía y Videografía"
            subtitle2="Politicas"
          />
          <div className="row d-flex justify-content-center">
            <Suspense fallback={<Loading />}>
              {photographyData.political.map((photo) => (
                <Thumbnail
                  key={photo.alt}
                  col="col-md-4"
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  subtitle={photo.subtitle}
                >
                  <div className="d-flex justify-content-between">
                    <Quote
                      text={`un servicio de *Fotografía para ${photo.alt}*`}
                      className={"w-50"}
                    >
                      <i className="fas fa-camera"></i>
                      Cotizar
                    </Quote>
                    <Quote
                      text={`un servicio de *Videografía para ${photo.alt}*`}
                      className={"w-50"}
                    >
                      <i className="fas fa-video"></i>
                      Cotizar
                    </Quote>
                  </div>
                </Thumbnail>
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
