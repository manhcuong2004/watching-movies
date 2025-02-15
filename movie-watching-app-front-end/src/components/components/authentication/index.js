import { Navigate } from "react-router-dom";
const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null; 
};
const PrivateRoute = ({ children }) => {
  const token = getCookie("token"); 

  return token ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
