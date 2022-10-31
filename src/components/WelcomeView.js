const WelcomeView = () => {
  return (
    <>
      <header className="welcome-header">
        <h1>Welcome!</h1>
        <p>This is an interactive form written by Joseph Soria</p>
        <p>
          All information here is stored <em>locally</em>, and will not be
          written to a database!
        </p>
        <p>Shall we begin?</p>
      </header>
      <button className="start-button"> Let's begin!</button>
    </>
  );
};

export default WelcomeView;
