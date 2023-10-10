import Image from "next/image";

export default function PhotographicLinesCard({
  category,
  image,
  modelCount,
  children: description,
}) {
  const href = `paquetes-de-graduacion/linea/${category}/`;

  return (
    <div className="card-item">
      <div className="post-slide">
        <div className="post-img">
          <a href={href}>
            <Image src={image} width={360} height={180} alt={category} />
          </a>
        </div>
        <div className="post-content">
          <div className="post-models">
            <span className="model">Modelos</span>
            <span className="count">{modelCount}</span>
          </div>
          <h5 className="post-title text-capitalize">
            <a href={href}>&quot;{category}&quot;</a>
          </h5>
          <p className="post-description">{description}</p>
        </div>
        <a href={href}>
          <ul className="post-bar">
            <li className="text-white">
              <i className="fa fa-plus"></i> Ver modelos y colores{" "}
            </li>
          </ul>
        </a>
      </div>
    </div>
  );
}
