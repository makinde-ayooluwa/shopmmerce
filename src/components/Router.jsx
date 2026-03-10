import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/user/Home";
import Header from "./user/Header";

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
                <h1>Sidebar</h1>
                <Outlet />
              </>
            }
          >
            <Route index element={<>Dashboard</>} />
            <Route path="dashboard" element={<>Dashboard</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
