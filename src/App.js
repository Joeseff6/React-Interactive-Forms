import WelcomeView from "./components/WelcomeView";
import FirstForm from "./components/FirstForm";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        {/* <WelcomeView /> */}
        <FirstForm />
      </Wrapper>
    </div>
  );
}

export default App;
