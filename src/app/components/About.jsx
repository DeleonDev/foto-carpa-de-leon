import { Suspense } from "react";
import Loading from "./elements/Loading";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-lightblue">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="about-title">
              <span>Acerca de Nosotros</span>
            </h2>
            <p className="about-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, maiores at? Non sed autem sunt, placeat quod neque
              maxime quam at voluptas, ullam illo architecto quo, quaerat
              tempora aliquam vitae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
          <div className="col-md-4">
            <div className="about-img">
              <Suspense fallback={<Loading />}>
                <Image
                  src="/images/about/outside.png"
                  width={360}
                  height={360}
                  alt="Local"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
