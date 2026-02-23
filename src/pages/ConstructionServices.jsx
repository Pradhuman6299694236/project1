import PageHeader from "../components/PageHeader.jsx";
import { constructionPage } from "../data/siteData.js";

function ConstructionServices() {
  return (
    <>
      <PageHeader title="Construction Services" />
      <section className="section">
        <div className="container grid cols-2">
          <div className="card">
            <div className="card-title">Building Construction</div>
            <p>{constructionPage.building.intro}</p>
            <ul className="list">
              {constructionPage.building.disciplines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="card-title">Interior Designing Service</div>
            <p>{constructionPage.interior.intro}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConstructionServices;
