import PageHeader from "../components/PageHeader.jsx";
import { placeholders } from "../data/siteData.js";

function Contact() {
  return (
    <>
      <PageHeader title={placeholders.contact.title} />
      <section className="section">
        <div className="container grid cols-2">
          <div className="notice">
            <p>{placeholders.contact.body}</p>
          </div>
          <form className="form">
            <input className="input" type="text" placeholder="Full name" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="text" placeholder="Subject" />
            <textarea className="textarea" placeholder="Message" />
            <button className="button" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
