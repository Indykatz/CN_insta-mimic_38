// import { useEffect } from "react";
import { useState } from "react";
// import "./App.css";
import { PostedPic, Button, Username } from "../css/photos.styled";

const PicPosts = ({ photos, setPhotos }) => {
  //   const [photos, setPhotos] = useState([]); // goes in app.js
  const [click, setCLick] = useState(false);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  //
  // useEffect(() => {
  //   fetchImages();
  // }); // }[],) - see andys code

  return (
    <div className="App">
      <Button onClick={(e) => fetchImages()}>Click Me!</Button>
      {/*  */}
      {click ? (
        <Button onClick={() => setCLick((prevClick) => !prevClick)}>
          Logout
        </Button>
      ) : (
        <Button onClick={() => setCLick((prevClick) => !prevClick)}>
          Login
        </Button>
      )}

      {/*  */}
      {photos.map((item, index) => {
        return (
          <div>
            <Username>{item.author}</Username>
            <PostedPic src={item.download_url} alt="Random Pic" />
          </div>
        );
      })}
    </div>
  );
};

export default PicPosts;
