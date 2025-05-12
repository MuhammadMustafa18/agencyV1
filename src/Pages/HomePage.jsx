// App.jsx
import { useNavigate } from "react-router-dom";
import Hero from "../components/hero/Hero";
import ProjectsSection from "../components/projects/Projects";
import Footer from "../components/Footer/Footer";
import AppBox from "../components/appointment/AppBox";
import Request from "../components/Request/Request";
import Problems from "../components/Problems/Problems";
import Solutions from "../components/solutions/Solutions";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-900 font-primary">
      <Hero />
      <div className="text-center mt-4">
        
      </div>
      <Request />
      <Problems />
      <Solutions />
      <ProjectsSection />
      <AppBox />

    </div>
  );
}

export default HomePage;
