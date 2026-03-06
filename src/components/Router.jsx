import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/user/Home";
import Header from "./user/Header";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={
              <>
                <Home/>
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
