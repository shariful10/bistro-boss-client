import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="my-[150px] md:my-[242px]">
				<img
					className="mx-auto shadow-2xl"
					src="https://i.ibb.co/Kyv8wkh/loading.png"
					alt="Cup Image"
				/>
				<h1 className="text-center text-3xl md:text-5xl font-bold font-cinzel mt-5 md:w-2/6 mx-auto">
					Welcome to Bistro Boss Restaurant
				</h1>
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
