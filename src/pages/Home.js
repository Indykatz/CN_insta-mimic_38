// import LoginForm from "../components/Form";
// import { useState } from "react";
import SignOrLog from "../components/signOrLog";
import { Description } from "../css/App.styled";
const Home = () => {
  // const [user, setUser] = useState([]);
  return (
    <div>
      <div>
        <Description>Home</Description>
        <SignOrLog />
        {/* setter={setUser} - goes in signinlog*/}
        {/* <h1>{user}</h1> */}
      </div>
    </div>
  );
};

export default Home;
