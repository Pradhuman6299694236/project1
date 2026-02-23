function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <div className="breadcrumbs">Home / {title}</div>
      </div>
    </section>
  );
}

export default PageHeader;
