import PageHeader from "../components/PageHeader.jsx";
import { placeholders } from "../data/siteData.js";

function AirlineJobs() {
  return (
    <>
      <PageHeader title={placeholders.airlineJobs.title} />
      <section className="section">
        <div className="container">
          <div className="notice">
            <p>{placeholders.airlineJobs.body}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AirlineJobs;
