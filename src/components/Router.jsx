import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/user/Home";
import Header from "./user/Header";
import Dashboard from "../pages/admin/Dashboard";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
                <div style={{
                  display: "grid",
                  gridTemplateColumns:"20% 80%"
                }}>
                  <h1>Sidebar</h1>
                  <Outlet/>
                </div>
              </>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<>Dashboard</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
