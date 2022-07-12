// import { useState } from "react";
// import { signUp } from "../utlis";

// const SignOrLog = ({ setter }) => {
//   const [username, setUsername] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const submitHandler = async (e) => {
//     e.preventDefault(); // preventes default actions
//     await signUp(username, email, password, setter);
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//         <input onChange={(e) => setEmail(e.target.value)} placeholder="eMail" />
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SignOrLog;
