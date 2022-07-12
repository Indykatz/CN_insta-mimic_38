// setter - goes after password
export const signUp = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      method: "POST", // HTTP verb
      headers: { "Content-Type": "application/json" }, // sending Json data
      body: JSON.stringify({
        username,
        email,
        password,
      }), // body turned into JSON with stringify
    });
    const data = await response.json();
    console.log(data);
    // setter(data.user);
  } catch (error) {
    console.log(error);
  }
};
