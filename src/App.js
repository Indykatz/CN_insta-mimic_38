import { useState } from "react";
import { TheApp, Content } from "./styles/App.styled";
import HeaderBanner from "./components/Header";
import PicPosts from "./components/PicPosts";
// import FooterBannner from "./components/Footer";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  return (
    <TheApp>
      <HeaderBanner />
      <Content>
        <PicPosts setPhotos={setPhotos} photos={photos} />
      </Content>
      {/* <FooterBannner /> */}
    </TheApp>
  );
};

export default App;
