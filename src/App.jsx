// react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// css
import GlobalStyles from "./styles/GlobalStyles";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Technology from "./Pages/Technology/Technology";
import Project from "./Pages/Project/Project";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/tecnologias" element={<Technology />} />
          <Route path="/projetos" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
