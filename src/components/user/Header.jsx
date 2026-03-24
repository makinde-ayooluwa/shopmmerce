import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Header() {
  const [buttonStyle, setButtonStyle] = useState({
    padding: 10,
    borderRadius: "6px",
    border: "2px solid black",
    borderOffset: "5px",
    textDecoration: "none",
  });
  const { user } = useContext(UserContext);
  const phoneWidth = 768;
  const [headerLinksStyle, setHeaderLinksStyle] = useState({
    display: innerWidth < phoneWidth ? "grid" : "flex",
    justifyContent: innerWidth < phoneWidth ? "center" : "",
    alignItems: "center",
    gap: 90,
    position: innerWidth < phoneWidth ? "absolute" : "relative",
    left: innerWidth < phoneWidth ? 0 : "",
    background: innerWidth < phoneWidth ? "#fff" : "",
    boxShadow: innerWidth < phoneWidth ? "0 4px 15px rgba(0,0,0,0.2)" : "",
    width: innerWidth < phoneWidth ? "100%" : "",
    textAlign: "center",
    zIndex: 20,
    transform: innerWidth < phoneWidth ? "translateY(-100%)" : "",
    marginTop: "-10px",
  });
  const headerLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Categories",
      link: "/categories",
    },
  ];
  function toggleNavbar() {
    setHeaderLinksStyle({
      ...headerLinksStyle,
      marginTop: headerLinksStyle.marginTop == "0%" ? "-10px" : "0%",
      transform:
        headerLinksStyle.transform == "translateY(70%)"
          ? "translateY(-100%)"
          : "translateY(70%)",
    });
  }
  return (
    <>
      <div style={{ width: "100%", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div>
            <h1>🍔</h1>
          </div>
          {/* Mobile screen area */}
          <div style={headerLinksStyle}>
            {/* Header Links */}
            <div
              style={{
                display: innerWidth < phoneWidth ? "grid" : "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              {headerLinks.map((link) => (
                <Link
                  style={{
                    textDecoration: "none",
                    borderRadius: 12,
                    padding: 10,
                    color: "#000",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                  key={link.id}
                  to={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* Register and Login */}
            <div
              style={{
                display: innerWidth < phoneWidth ? "grid" : "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
              }}
            >
              {user == null ? (
                <>
                  <Link
                    to="/signup"
                    style={{
                      ...buttonStyle,
                      background: "#fff",
                      color: "#000",
                    }}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    style={{
                      ...buttonStyle,
                      background: "#f9d800",
                      color: "#fff",
                    }}
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  <img
                    src="/vite.svg"
                    style={{
                      border: "1px solid black",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </>
              )}
            </div>
          </div>
          {/* Navbar Toggler */}
          <div
            onClick={() => toggleNavbar()}
            style={{
              display: innerWidth < phoneWidth ? "block" : "none",
            }}
          >
            <button>Toggle</button>
          </div>
        </div>
      </div>
    </>
  );
}
