import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { cruiseJobs } from "../data/siteData.js";

function CruiseJobs() {
  const buildApplyLink = (category, role) =>
    `/contact?category=${encodeURIComponent(category)}&role=${encodeURIComponent(
      role
    )}`;

  return (
    <>
      <PageHeader title="Cruise Jobs" subtitle="Role categories and sample counts" />
      <section className="section">
        <div className="container">
          <div className="grid cols-2">
            {cruiseJobs.map((category) => (
              <div key={category.category} className="card">
                <div className="card-title">{category.category}</div>
                <ul className="list">
                  {category.roles.map((role) => (
                    <li key={`${category.category}-${role.name}`}>
                      <Link
                        className="apply-link"
                        to={buildApplyLink(category.category, role.name)}
                      >
                        <span>{role.name}</span>
                        <span className="apply-meta">({role.count}) Apply</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CruiseJobs;
