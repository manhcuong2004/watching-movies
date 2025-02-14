import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Kiểm tra token

  return token ? children : <Navigate to="/" replace />; // Nếu chưa đăng nhập, chuyển về "/"
};

export default PrivateRoute;
