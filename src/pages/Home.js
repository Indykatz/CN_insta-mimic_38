// import LoginForm from "../components/Form";
// import { useState } from "react";
// import { Navigate } from "react-router-dom";
import SignOrLog from "../components/signOrLog";
import { Description } from "../css/App.styled";


const Home = ({ user, setUser }) => {
  // const [user, setUser] = useState([]);
  // const [logBool, setLogBool] = useState(false);
  return (
    <div>
      <div>
        <Description>Home</Description>
        <SignOrLog setter={setUser} user={user} />
        <h1>{user}</h1>
        {/* {user && <Navigate to="/Photos" />} */}
      </div>
    </div>
  );
};

export default Home;
