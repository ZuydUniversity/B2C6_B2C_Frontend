import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
	element: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
	const isAuthenticated = () => {
		const accessToken = localStorage.getItem("accessToken");
		const tokenTimestamp = localStorage.getItem("tokenTimestamp");

		if (!accessToken || !tokenTimestamp) return false;

		const now = new Date().getTime();
		const tokenAge = now - parseInt(tokenTimestamp, 10);

		if (tokenAge > 15 * 60 * 1000) {
			localStorage.removeItem("accessToken");
			localStorage.removeItem("tokenTimestamp");

			return false;
		}

		return true;
	};

	return isAuthenticated() ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
