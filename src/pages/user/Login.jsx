import axios from "axios";
import { useState } from "react";
import { backendHost } from "../../constants/backendHost";

export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const inputStyle = {
    width: "350px",
    border: "1px solid #979797cb",
    background: "transparent",
    color: "#fff",
    padding: 20,
    borderRadius: 40,
  };
  function handleLogin(){
    const response = axios.post(`${backendHost}/login.php`,formInputs,true);
    const data = response.data;
    console.log(data)
  }
  return (
    <div
      style={{
        width: "400px",
        borderRadius: "40px",
        border: "1px solid #979797cb",
        padding: 20,
        background: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(100px)",
        color: "#fff",
      }}
    >
      <h2
        style={{ textAlign: "center", fontWeight: "light", lineHeight: "30px" }}
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
        <div
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
        </div>
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
  );
}
