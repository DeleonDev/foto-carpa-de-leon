import Image from "next/image";

export default function WorkCards({ filter, image, category, children }) {
  return (
    <div className={`col-md-6 col-sm-6 mix ${filter}`} data-bound="">
      <div className="port-item">
        <a href={image} className="image-pop">
          <figure className="image-effect">
            <Image src={image} width={953} height={634} alt={category}  />
            <figcaption>
              <p>{children}</p>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
}
