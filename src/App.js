import { useState } from "react";
// styles
import { TheApp, Content } from "./css/App.styled";
import HeaderBanner from "./components/Header";
import Navbar from "./components/Navbar";
import FooterBanner from "./components/Footer";
// router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages for router dom
import Home from "./pages/Home";
import Photos from "./pages/Photos";

const App = ({ setter }) => {
  const [user, setUser] = useState([]);

  return (
    // all is flexed
    <TheApp>
      {/* is just a header bannner - stlyed compont*/}
      <HeaderBanner />
      {/* this is what routes this is where it begins - not a styled this is DOM  */}
      <BrowserRouter>
        {/* this is my nav bar not import in dom but will be needed for your dom - styled not div*/}
        <Navbar />
        {/* this is my styled component Content that is flex so responsive - not dom */}
        <Content>
          {/* DOM - routeS - as it says  */}
          <Routes>
            {/* ROUTE path */}
            <Route path="/" element={<Home user={user} setUser={setUser} />} />
            {/* next path  */}
            <Route
              path="/Photos"
              element={<Photos user={user} setter={setter} />}
            />
            {/* ends her */}
          </Routes>
          {/* flex ends here */}
        </Content>
        {/* footer */}
        <FooterBanner />
        {/* endes router */}
      </BrowserRouter>
      {/* ends app */}
    </TheApp>
  );
};

export default App;
