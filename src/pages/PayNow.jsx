import PageHeader from "../components/PageHeader.jsx";
import { placeholders } from "../data/siteData.js";

function PayNow() {
  return (
    <>
      <PageHeader title={placeholders.payNow.title} />
      <section className="section">
        <div className="container">
          <div className="notice">
            <p>{placeholders.payNow.body}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PayNow;
