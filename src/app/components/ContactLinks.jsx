import Link from "next/link";
import SectionTitle from "./elements/SectionTitle";

export default function ContactLinkSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionTitle
          title="Contacto"
          subtitle="Estamos para"
          subtitle2="servirte"
        />
        <div className="row">
          <div className="col-md-4">
            <div className="contact-item">
              <Link
                href="https://goo.gl/maps/c5rfYuH42vzwrdT36"
                target="_blank"
              >
                <div className="con-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Dirección</h4>
                <p>
                  1a. Oriente N.52-B
                  <br />
                  Col. Centro, Tapachula, Chiapas.
                </p>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <Link href="tel:9622874791" target="_blank">
                <div className="con-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h4>Teléfono</h4>
                <p>962 287 47 91</p>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <Link href="mailto:fotocarpa10@gmail.com" target="_blank">
                <div className="con-icon">
                  <i className="far fa-envelope"></i>
                </div>
                <h4>E-Mail</h4>
                <p>deleonhernandezricardo8@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
