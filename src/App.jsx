import "./App.css";
import Router from "./components/Router";
import "bootstrap-icons/font/bootstrap-icons.css";
import ModeProvider from "./theme/ModeProvider";
import UserProvider from "./context/UserProvider";
function App() {
  return (
    <>
      <UserProvider>
        <ModeProvider>
          <Router />
        </ModeProvider>
      </UserProvider>
    </>
  );
}

export default App;
