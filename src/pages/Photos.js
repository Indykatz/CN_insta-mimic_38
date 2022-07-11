import { useState } from "react";
import PicPosts from "../components/PicPosts";
import { Description } from "../css/App.styled";

const Photos = () => {
  const [photos, setPhotos] = useState([]); // here its is
  return (
    <div>
      <Description>Insta-mimic</Description>
      <PicPosts setPhotos={setPhotos} photos={photos} />
    </div>
  );
};

export default Photos;
