// react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// css
import GlobalStyles from "./styles/GlobalStyles";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// pages
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
