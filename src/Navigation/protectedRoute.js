import { Navigate } from "react-router-dom";
import { getLocalData } from "../utils/helper";
const ProtectedRoute = ({ children }) => {
    const token = getLocalData('token') || '';
    if (!token) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }
    return children;
  };

export default ProtectedRoute;