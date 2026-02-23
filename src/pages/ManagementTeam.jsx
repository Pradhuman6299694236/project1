import PageHeader from "../components/PageHeader.jsx";
import { managementTeam } from "../data/siteData.js";

function ManagementTeam() {
  return (
    <>
      <PageHeader title="Management Team" />
      <section className="section">
        <div className="container">
          <div className="grid cols-3">
            {managementTeam.map((member) => (
              <div key={member.name} className="card small">
                <div className="card-title">{member.name}</div>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ManagementTeam;
