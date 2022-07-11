import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  }, [photos]); //every time user's value changes, useEffect will run again

  return (
    <div className="App">
      {photos.map((item, index) => {
        return (
          <div>
            <h2>{item.author}</h2>
            <img src={item.download_url} alt="Random Pic" />
          </div>
        );
      })}
    </div>
  );
};

export default App;
