import { useEffect } from "react";
// import "./App.css";
import { PostedPic } from "../css/photos.styled";

const PicPosts = ({ photos, setPhotos }) => {
  //   const [photos, setPhotos] = useState([]); // goes in app.js

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  }); // }[],) - see andys code

  return (
    <div className="App">
      {photos.map((item, index) => {
        return (
          <div>
            <h2>{item.author}</h2>
            <PostedPic src={item.download_url} alt="Random Pic" />
          </div>
        );
      })}
    </div>
  );
};

export default PicPosts;
