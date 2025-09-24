import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/navabr/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/about_us/AboutUs";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Team from "./components/team/Team";
import WebDevelopment from "./pages/webDevelopment/WebDevelopment";
import UiUxDesigner from "./pages/UiUxDesigner/UiUxDesigner";
import AiEmbededApplication from "./pages/AiApplication/AiEmbededApplication";
import MobileApplication from "./pages/MobileApplication/MobileApplication";
import ProductScope from "./pages/ProductScope/ProductScope";
import DedicatedTeams from "./pages/DedicatedTeams/DedicatedTeams";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (


    < BrowserRouter >
    <ScrollToTop />
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux-design" element={<UiUxDesigner />} />
        <Route path="/ai-embedded-applications" element={<AiEmbededApplication />} />
        <Route path="/mobile-development" element={<MobileApplication />} />
        <Route path="/product-scope" element={<ProductScope />} />
        <Route path="/dedicated-teams" element={<DedicatedTeams />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter >
  );
}
export default App;
