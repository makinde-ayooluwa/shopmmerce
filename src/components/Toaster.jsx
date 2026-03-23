import { useState } from "react";

export default function Toaster({status, message}) {
  const [toasterStyle, setToasterStyle] = useState({
    position: "absolute",
    left: "90%",
    top: "2.5%",
    transition: "all 0.75s ease-in-out",
    opacity:"1",
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
      {message}
    </div>
  );
}
