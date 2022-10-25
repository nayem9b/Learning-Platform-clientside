import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
