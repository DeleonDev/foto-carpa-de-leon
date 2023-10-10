export default function SectionTitle({ title, subtitle, subtitle2 }) {
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="section-title">
          <span className="title-bottom">{title}</span>
          <h2>
            {subtitle} <span>{subtitle2}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
