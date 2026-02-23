import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Notes from "./pages/Notes.jsx";
import ManagementTeam from "./pages/ManagementTeam.jsx";
import CruiseJobs from "./pages/CruiseJobs.jsx";
import AirlineJobs from "./pages/AirlineJobs.jsx";
import ConstructionServices from "./pages/ConstructionServices.jsx";
import ProductionSupport from "./pages/ProductionSupport.jsx";
import SecurityGuards from "./pages/SecurityGuards.jsx";
import Housekeeping from "./pages/Housekeeping.jsx";
import Video from "./pages/Video.jsx";
import Contact from "./pages/Contact.jsx";
import PayNow from "./pages/PayNow.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="notes" element={<Notes />} />
          <Route path="management-team" element={<ManagementTeam />} />
          <Route path="cruise-jobs" element={<CruiseJobs />} />
          <Route path="airline-jobs" element={<AirlineJobs />} />
          <Route path="services/construction" element={<ConstructionServices />} />
          <Route path="services/production-support" element={<ProductionSupport />} />
          <Route path="services/security-guards" element={<SecurityGuards />} />
          <Route path="services/housekeeping" element={<Housekeeping />} />
          <Route path="video" element={<Video />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pay-now" element={<PayNow />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
