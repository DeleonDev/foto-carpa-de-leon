import Loading from "../elements/Loading";

export default function SectionLoading( {children} ) {
  return (
    <section id="service" className="section-padding">
      <div className="container">
        {children}
        <div className="row">
          <Loading />
        </div>
      </div>
    </section>
  );
}
