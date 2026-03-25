import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/user/Home";
import Header from "./user/Header";
import Dashboard from "../pages/admin/Dashboard";
import Sidebar from "./admin/Sidebar";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import Products from "../pages/admin/Products";
import AuthentificationPage from "../pages/user/AuthentificationPage";
import { backendHost } from "../constants/backendHost";

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
  const [search, setSearch] = useState("");
  useEffect(() => {
    function displaySearch() {
      console.log(search);
    }
    displaySearch();
  }, [search]);
  const { user, setUser } = useContext(UserContext);
    async function fullUserData() {
      const response = await axios.post(`${backendHost}/api/getUser.php`, user, true);
      const resultData = await response.data;
      return resultData;
    }
    const userData = fullUserData();
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
                <Home userData={userData} />
              </>
            }
          />
          <Route path="/login" element={<AuthentificationPage auth="login" />} />
          <Route path="/signup" element={<AuthentificationPage auth="signup" />} />
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
                        position: "sticky",
                      }}
                    >
                      {/* TOGGLER */}
                      <button
                        style={{
                          zIndex: "20",
                          display: innerWidth < 1440 ? "block" : "none",
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
                        <input
                          type="text"
                          style={{
                            width: "300px",
                            border: "none",
                            background: "#cfcfcf",
                            padding: "10px",
                          }}
                          value={search}
                          placeholder="Type here to search"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                      <div style={{ display: "flex", gap: 10 }}>
                        {/* Notification */}
                        <div
                          style={{
                            borderRadius: "50%",
                            background: "#b2b2b2",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                          }}
                        >
                          <i className="bi bi-bell"></i>
                        </div>
                        {/* Messaging */}
                        <div
                          style={{
                            borderRadius: "50%",
                            background: "#b2b2b2",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                          }}
                        >
                          <i className="bi bi-chat"></i>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              padding: "0px",
                              gap: 0,
                              textAlign: "end",
                            }}
                          >
                            <h5>Cyndy Lilinbraga</h5>
                            <small>Super Admin</small>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src="/vite.svg"
                              style={{ borderRadius: "50%" }}
                              alt=""
                            />
                            <i className="bi bi-chevron-down"></i>
                          </div>
                        </div>
                        {/*  */}
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
            <Route path="products" element={<Products />} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
