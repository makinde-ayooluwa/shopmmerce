import Login from "./Login";
import Signup from "./SignUp";

export default function AuthentificationPage({ auth }) {
  function getAuthType() {
    switch (auth) {
      case "login":
        return <Login />;
        break;
      case "signup":
        return <Signup />;
        break;
    }
  }
  return (
    <>
      <div
        style={{
          background: "rgb(255, 255, 255)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {getAuthType()}
      </div>
    </>
  );
}
