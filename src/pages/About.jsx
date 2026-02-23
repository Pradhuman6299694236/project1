import PageHeader from "../components/PageHeader.jsx";
import { aboutPage } from "../data/siteData.js";

function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="R.S. Yadav Manpower Solution" />
      <section className="section">
        <div className="container">
          {aboutPage.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="card">
            <div className="card-title">Expertise</div>
            <ul className="list">
              {aboutPage.expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
