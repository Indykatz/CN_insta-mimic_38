import { TheApp, Content } from "./css/App.styled";
import HeaderBanner from "./components/Header";
import Navbar from "./components/Navbar";
import FooterBanner from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";

const App = () => {
  return (
    <TheApp>
      <HeaderBanner />
      <BrowserRouter>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Photos" element={<Photos />} />
          </Routes>
        </Content>
        <FooterBanner />
      </BrowserRouter>
    </TheApp>
  );
};

export default App;
