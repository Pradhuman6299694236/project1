import PageHeader from "../components/PageHeader.jsx";
import { housekeepingPage } from "../data/siteData.js";

function Housekeeping() {
  return (
    <>
      <PageHeader title="Housekeeping Services" />
      <section className="section">
        <div className="container">
          {housekeepingPage.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="grid cols-2" style={{ marginTop: "2rem" }}>
            <div className="card">
              <div className="card-title">Regular Cleaning</div>
              <ul className="list">
                {housekeepingPage.regularCleaning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="card-title">Deep Cleaning</div>
              <ul className="list">
                {housekeepingPage.deepCleaning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="card-title">Specialized Cleaning</div>
              <ul className="list">
                {housekeepingPage.specializedCleaning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="card-title">Benefits</div>
              <ul className="list">
                {housekeepingPage.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Housekeeping;
