import HeroSlider from "../components/HeroSlider.jsx";
import { heroSlides, homeSections } from "../data/siteData.js";

function Home() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <div>
              <span>{homeSections.about.label}</span>
              <h2>{homeSections.about.title}</h2>
            </div>
          </div>
          <div className="grid cols-2">
            <div>
              {homeSections.about.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="card">
              <div className="card-title">Core Strengths</div>
              <ul className="list">
                {homeSections.about.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <div>
              <span>Services</span>
              <h2>What we do</h2>
            </div>
          </div>
          <div className="grid cols-4">
            {homeSections.services.map((service) => (
              <div key={service.title} className="card small">
                <div className="card-title">{service.title}</div>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid cols-2">
            <div>
              <span className="section-title">What We Provide</span>
              <h2>Reliable support for manpower operations</h2>
            </div>
            <div className="card">
              <ul className="list">
                {homeSections.provide.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <div>
              <span>Experiences</span>
              <h2>Create meaningful experiences for employees</h2>
            </div>
          </div>
          <div className="grid cols-3">
            {homeSections.experiences.map((item) => (
              <div key={item.title} className="card small">
                <div className="card-title">{item.title}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <div>
              <span>Testimonials</span>
              <h2>What clients say</h2>
            </div>
          </div>
          <div className="grid cols-3">
            {homeSections.testimonials.map((item, index) => (
              <div key={`${item.name}-${index}`} className="card small">
                <p>"{item.quote}"</p>
                <div className="card-title">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <div>
              <span>Gallery</span>
              <h2>Operations and teams</h2>
            </div>
          </div>
          <div className="grid cols-3">
            {homeSections.gallery.map((item, index) => (
              <div key={`${item.title}-${index}`} className="card small">
                <div className="card-title">{item.title}</div>
                <p>Replace with the official gallery image.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid cols-2">
            <div>
              <span className="section-title">Mailing List</span>
              <h2>Get manpower updates</h2>
              <p>
                Subscribe to receive updates on manpower services, staffing
                opportunities, and new roles.
              </p>
            </div>
            <form className="form">
              <input className="input" type="text" placeholder="Full name" />
              <input className="input" type="email" placeholder="Email address" />
              <button className="button" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
