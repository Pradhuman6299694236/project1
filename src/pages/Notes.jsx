import PageHeader from "../components/PageHeader.jsx";
import { notesPage } from "../data/siteData.js";

function Notes() {
  return (
    <>
      <PageHeader title="Notes from CEO/Director" />
      <section className="section">
        <div className="container grid cols-2">
          <div className="card">
            <div className="tag">CEO</div>
            <h3>{notesPage.ceo.name}</h3>
            <p>{notesPage.ceo.title}</p>
            {notesPage.ceo.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="card">
            <div className="tag">Director</div>
            <h3>{notesPage.director.name}</h3>
            <p>{notesPage.director.title}</p>
            {notesPage.director.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Notes;
