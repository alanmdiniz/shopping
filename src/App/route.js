import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../components/Home";
import Login from "../components/Login";

const AppRoutes = () => {
  const userLoggedSession = localStorage.getItem('shopping/username');
  const { userLogged } = useSelector((state) => state.users);

  return (
    <Router>
      <Routes>
        <Route path="/" element={(userLogged || userLoggedSession) ? <Home /> : <Login />} />
        <Route path="/checkout" element={<Home page="checkout" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
