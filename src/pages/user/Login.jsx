import axios from "axios";
import { useContext, useRef, useState } from "react";
import { backendHost } from "../../constants/backendHost";
import Toaster from "../../components/Toaster";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [loginResponse, setLoginResponse] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const toasterRef = useRef();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const inputStyle = {
    width: "300px",
    border: "1px solid #979797cb",
    background: "transparent",
    color: "#fff",
    padding: 15,
    borderRadius: 40,
  };
  async function handleLogin() {
    const response = await axios.post(
      `${backendHost}/login.php`,
      formInputs,
      true,
    );
    const data = await response.data;
    if (data && data.status == "success") {
      setUser({ ...formInputs, password: "*************************" });
      setLoginResponse({ ...data });
    }
    console.log(data);
  }
  return (
    <>
      {loginResponse == null ? (
        ""
      ) : (
        <Toaster
          status={loginResponse.status}
          message={loginResponse.message}
        />
      )}
      <div
        style={{
          backgroundColor: "#fff",
          position: "absolute",
          left: "90%",
          top: "2.5%",
        }}
        ref={toasterRef}
      ></div>
      <div
        style={{
          width: "350px",
          borderRadius: "40px",
          border: "1px solid #979797cb",
          padding: 20,
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(100px)",
          color: "#fff",
          justifySelf: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "light",
            lineHeight: "30px",
          }}
        >
          Login to your account
        </h2>
        <div
          style={{
            padding: 20,
            display: "grid",
            justifyContent: "center",
            alignItems: "stretch",
            gap: 20,
          }}
        >
          <input
            style={inputStyle}
            type="text"
            value={formInputs.email}
            onChange={(e) =>
              setFormInputs({ ...formInputs, email: e.target.value })
            }
            placeholder="Email address"
          />
          <input
            style={inputStyle}
            type="password"
            value={formInputs.password}
            onChange={(e) =>
              setFormInputs({ ...formInputs, password: e.target.value })
            }
            placeholder="Password"
          />
          {/* <div
            style={{
              display: "flex",
              justifyContent: "start",
              gap: 5,
              color: "#fff",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => console.log(e.target.checked)}
            />
            <p>Keep me logged in</p>
          </div> */}
          <button
            style={{
              ...inputStyle,
              justifySelf: "center",
              cursor: "pointer",
              background: "#eae",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
