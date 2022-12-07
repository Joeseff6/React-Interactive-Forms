const WelcomeView = () => {
  return (
    <section className="welcome-section">
      <header className="welcome-header">
        <h1>Welcome!</h1>
        <p>The following is a set of forms that will ask basic questions about yourself</p>
        <p>Feel free to answer how you please and enjoy!</p>
        <p className="disclaimer">
          Disclaimer: All information here is stored <em>locally</em>, and will
          not be written to a database!
        </p>
      </header>
      <button className="start-button"> Let's begin!</button>
    </section>
  );
};

export default WelcomeView;
