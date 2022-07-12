import { useEffect } from "react";
// import { useState } from "react";
// import "./App.css";
import { PostedPic, Username } from "../css/photos.styled";

const PicPosts = ({ photos, setPhotos, user }) => {
  //   const [photos, setPhotos] = useState([]); // goes in app.js

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  //
  useEffect(() => {
    fetchImages(setPhotos);
  },[]); // }[],) - see andys code

  return (
    <div>
      {/* <Button onClick={(e) => fetchImages()}>Click Me!</Button> */}
      {/*  */}

      {/*  */}
      {user && photos.map((item, index) => {
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
