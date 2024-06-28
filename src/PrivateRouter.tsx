import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    element: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const isAuthenticated = () => {
        const accessToken = localStorage.getItem("accessToken");
        return !accessToken;
    };

    return isAuthenticated() ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
