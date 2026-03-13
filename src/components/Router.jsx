import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/user/Home";
import Header from "./user/Header";
import Dashboard from "../pages/admin/Dashboard";
import Sidebar from "./admin/Sidebar";
import { useState } from "react";

export default function Router() {
  const [sidebarStyle, setSidebarStyle] = useState({
    boxShadow: "0 2px 2px rgba(0,0,0,0.2)",
    height: "100vh",
    display: "grid",
    width: innerWidth < 1440 ? "300px" : "17.5%",
    overflowY: "scroll",
    transform: innerWidth < 1440 ? "translateX(-100%)" : "translateX(0%)",
    transition: "all 0.75s ease-in-out",
    background: innerWidth < 1440 ? "#ccc" : "#fff",
    position: "fixed",
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route
            index
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <Header />
                <h1>Categories</h1>
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      innerWidth < 1440 ? "0% 100%" : "17.5% 82.5%",
                  }}
                >
                  <div style={{}}>
                    <Sidebar
                    sidebarStyle={sidebarStyle}
                    setSidebarStyle={setSidebarStyle}
                  />
                  </div>
                  {/* ADMIN HEADER */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid",
                        borderColor: "#000",
                        padding: "7.5px",
                        alignItems: "center",
                        position:"sticky"
                      }}
                    >
                      {/* TOGGLER */}
                      <button
                        style={{
                          zIndex: "20",
                          visibility: innerWidth < 1440 ? "visible" : "hidden",
                          border: "none",
                          background: "transparent",
                          fontSize: "25px",
                        }}
                        onClick={() =>
                          setSidebarStyle({
                            ...sidebarStyle,
                            transform:
                              sidebarStyle.transform == "translateX(0%)"
                                ? "translateX(-100%)"
                                : "translateX(0%)",
                          })
                        }
                      >
                        <i className="bi bi-x"></i>
                      </button>
                      {/* OTHERS */}
                      <div
                        style={{
                          display: "flex",
                          gap: 15,
                        }}
                      >
                        
                      </div>
                    </div>
                    <Outlet />
                  </div>
                </div>
              </>
            }
          >
            <Route path="*" element={<h1>Page does not exists</h1>} />
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
