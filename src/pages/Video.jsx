import PageHeader from "../components/PageHeader.jsx";
import { placeholders } from "../data/siteData.js";

function Video() {
  return (
    <>
      <PageHeader title={placeholders.video.title} />
      <section className="section">
        <div className="container">
          <div className="notice">
            <p>{placeholders.video.body}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;
