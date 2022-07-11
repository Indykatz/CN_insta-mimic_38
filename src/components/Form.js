const LoginForm = ({
  handleSubmit,
  userInput,
  setUserInput,
  passInput,
  setPassInput,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              value={passInput}
              onChange={(e) => {
                setPassInput(e.target.value);
              }}
            />
          </label>
          <input className="submitButton" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
