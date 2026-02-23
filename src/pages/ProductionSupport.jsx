import PageHeader from "../components/PageHeader.jsx";
import { placeholders } from "../data/siteData.js";

function ProductionSupport() {
  return (
    <>
      <PageHeader title={placeholders.productionSupport.title} />
      <section className="section">
        <div className="container">
          <div className="notice">
            <p>{placeholders.productionSupport.body}</p>
            <button className="button" type="button">Apply Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductionSupport;
