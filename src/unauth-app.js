import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";

const UnauthApp = () => {
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default UnauthApp;