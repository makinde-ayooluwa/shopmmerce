import { useState } from "react";

export default function Toaster({ status, message }) {
  const backgrounds = { error: "#ff0000", success: "#056c00" };
  const [toasterStyle, setToasterStyle] = useState({
    position: "absolute",
    justifySelf:"center",
    top: "2.5%",
    transition: "all 0.5s ease-in-out",
    opacity: "1",
    background: backgrounds[status],
    padding: 10,
    width:"300px",
    color:"#fff",
    display:"flex",
    justifyContent:"center",
    padding: 10,
    borderRadius: 12,
  });
  return (
    <div
      onClick={() =>
        setToasterStyle({
          ...toasterStyle,
          opacity: "0",
        })
      }
      style={toasterStyle}
      className="fade"
    >
      <div style={{display:"flex",gap: 10}}>
        <i className={status == "error" ? "bi bi-exclamation-triangle" : "bi bi-check"}></i>
      <p>{message}</p>
      </div>
    </div>
  );
}
