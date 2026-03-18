import AnimatedBackground from "../../components/user/AnimatedBackground";
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
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Animation */}
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimatedBackground />
        </div>
        {getAuthType()}
      </div>
    </>
  );
}
