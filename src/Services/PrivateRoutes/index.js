import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { LoadingScreen } from "../../Componentes/Loading";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <LoadingScreen fadeOut={false} />;

  if (!user) return <Navigate to="/loginBan" replace />;

  return children;
};

export default PrivateRoute;
