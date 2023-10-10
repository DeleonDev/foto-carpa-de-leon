import Image from "next/image";
import Quote from "./WhatsappQuote";

export default function CarouselItem({ active, image, title }) {
  return (
    <div className={`item ${active ? "active" : ""}`}>
      <Image src={image} width={1170} height={615} alt={title} />
      <div className="carousel-caption">
        <h3>{title}</h3>
        <Quote text={`el servicio de *publicidad ${title}*`} />
      </div>
    </div>
  );
}
