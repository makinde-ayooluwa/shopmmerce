import axios from "axios";
import { useContext, useState } from "react";
import { backendHost } from "../../constants/backendHost";
import Toaster from "../../components/Toaster";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [signupResponse, setSignupResponse] = useState(null);
  const { setUser } = useContext(UserContext);
  const [formInputs, setFormInputs] = useState({
    fullname:"",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const inputStyle = {
    width: "300px",
    border: "1px solid #979797cb",
    background: "transparent",
    color: "#fff",
    padding: 15,
    borderRadius: 40,
  };
  const [isSigningUp, setIsSigningUp] = useState(false);
  async function handleSignup() {
    setIsSigningUp(true);
    const response = await axios.post(
      `${backendHost}/api/signup.php`,
      formInputs,
      true,
    );
    const data = await response.data;
    if (data) {
      setSignupResponse({ ...data });
    }
    if (data.status == "success") {
      setUser({ ...formInputs, password: "*************************" });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    console.log(data);
      setIsSigningUp(false);
  }
  return (
    <>
      {signupResponse == null ? (
        ""
      ) : (
        <Toaster
          status={signupResponse.status}
          message={signupResponse.message}
        />
      )}
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
          Signup
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
            value={formInputs.fullname}
            onChange={(e) =>
              setFormInputs({ ...formInputs, fullname: e.target.value })
            }
            placeholder="Fullname"
          />
          <input
            style={inputStyle}
            type="email"
            value={formInputs.email}
            onChange={(e) =>
              setFormInputs({ ...formInputs, email: e.target.value })
            }
            placeholder="Email Address"
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
            onClick={handleSignup}
            disabled={isSigningUp}
          >
            {isSigningUp == true ? (
              <>
                <p>Signing up ....</p>
              </>
            ) : (
              <>
                <p>Signup</p>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
