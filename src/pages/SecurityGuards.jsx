import PageHeader from "../components/PageHeader.jsx";
import { placeholders } from "../data/siteData.js";

function SecurityGuards() {
  return (
    <>
      <PageHeader title={placeholders.securityGuards.title} />
      <section className="section">
        <div className="container">
          <div className="notice">
            <p>{placeholders.securityGuards.body}</p>
            <button className="button" type="button">Apply Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecurityGuards;
