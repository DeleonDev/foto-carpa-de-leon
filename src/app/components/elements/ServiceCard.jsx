export default function ServiceCard({ title, icon, children: description }) {
  return (
    <div className="col-md-3">
      <div className="service-item">
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
