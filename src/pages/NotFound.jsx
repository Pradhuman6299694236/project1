import PageHeader from "../components/PageHeader.jsx";

function NotFound() {
  return (
    <>
      <PageHeader title="Page Not Found" />
      <section className="section">
        <div className="container">
          <p>The page you are looking for does not exist.</p>
        </div>
      </section>
    </>
  );
}

export default NotFound;
