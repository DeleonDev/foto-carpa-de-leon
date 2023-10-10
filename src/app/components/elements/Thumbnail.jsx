import Image from "next/image";
import Quote from "./WhatsappQuote";

export default function Thumbnail({
  col,
  src,
  alt,
  title,
  subtitle,
  quoteWidth,
  children,
}) {
  return (
    <div className={col ? col : "col-sm-6 col-md-4"}>
      <div className="thumbnail text-center">
        <Image src={src} width={350} height={350} alt={alt} />
        <div className="caption">
          <h3>{title}</h3>
          <p>{subtitle}</p>
          {children ? (
            children
          ) : (
            <Quote text={`un servicio de *${alt}*`} className={quoteWidth} />
          )}
        </div>
      </div>
    </div>
  );
}
