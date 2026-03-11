import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/user/Home";
import Header from "./user/Header";
import Dashboard from "../pages/admin/Dashboard";
import Sidebar from "./admin/Sidebar";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={ <h1>Page not found</h1> } />
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
                      innerWidth < 1025 ? "0% 100%" : "17.5% 82.5%",
                  }}
                >
                  <Sidebar/>
                  <div>
                    <h1>Header</h1>
                    <Outlet />
                  </div>
                </div>
              </>
            }
          >
            <Route path="*" element={ <h1>Page does not exists</h1> } />
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
