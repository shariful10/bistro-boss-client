import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Ligin/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/menu",
				element: <Menu />,
			},
			{
				path: "/order/:category",
				element: <Order />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
			{
				path: "secret",
				element: (
					<PrivateRoute>
						<Secret />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: "userhome",
				element: <UserHome />,
			},
			{
				path: "mycart",
				element: <MyCart />,
			},
			{
				path: "payment",
				element: <Payment />,
			},
			// Admin Route
			{
				path: "adminhome",
				element: (
					<AdminRoute>
						<AdminHome />
					</AdminRoute>
				),
			},
			{
				path: "allusers",
				element: (
					<AdminRoute>
						<AllUsers />
					</AdminRoute>
				),
			},
			{
				path: "addItem",
				element: (
					<AdminRoute>
						<AddItem />
					</AdminRoute>
				),
			},
			{
				path: "manageitems",
				element: (
					<AdminRoute>
						<ManageItems />
					</AdminRoute>
				),
			},
		],
	},
]);
