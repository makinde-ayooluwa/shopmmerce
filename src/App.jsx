import "./App.css";
import Router from "./components/Router";
import "bootstrap-icons/font/bootstrap-icons.css";
import ModeProvider from "./theme/ModeProvider";
function App() {
  return (
    <>
      <ModeProvider>
        <Router />
      </ModeProvider>
    </>
  );
}

export default App;
