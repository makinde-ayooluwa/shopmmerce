import { useState } from "react";

export default function Toaster({ status, message }) {
  const backgrounds = { error: "#ff0000", success: "#0dff00" };
  const [toasterStyle, setToasterStyle] = useState({
    position: "absolute",
    right: "2.5%",
    top: "2.5%",
    transition: "all 0.75s ease-in-out",
    opacity: "1",
    background: backgrounds[status],
    padding: 10,
    width:"200px",
    color:"#fff",
    display:"flex",
    justifyContent:"space-between"
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
    >
      <i className={status == "error" ? "bi bi-exclamation-triangle" : "bi bi-check"}></i>
      <p>{message}</p>
    </div>
  );
}
