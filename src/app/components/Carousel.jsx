export default function Carousel({ target, children: items }) {
  return (
    <div id={target} className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators d-flex justify-content-center align-items-center">
        <li
          data-target={`#${target}`}
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target={`#${target}`} data-slide-to="1"></li>
        <li data-target={`#${target}`} data-slide-to="2"></li>
        <li data-target={`#${target}`} data-slide-to="3"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        {items}
      </div>
      <a
        className="left carousel-control"
        href={`#${target}`}
        role="button"
        data-slide="prev"
      >
        <span
          className="glyphicon glyphicon-chevron-left"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href={`#${target}`}
        role="button"
        data-slide="next"
      >
        <span
          className="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
