import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ContactMe from "./pages/ContactMe";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/:id" element={<ProjectDetail />} />
          <Route exact path="/contactme" element={<ContactMe />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
