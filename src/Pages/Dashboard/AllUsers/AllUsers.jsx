import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
	const [axiosSecure] = useAxiosSecure();
	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await axiosSecure.get("/users");
		return res.data;
	});

	const handleMakeAdmin = (user) => {
		fetch(`${import.meta.env.VITE_URL}/users/admin/${user._id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					toast.success(`${user.name} is an Admin Now!`, {
						duration: 1000,
					});
					refetch();
				}
			});
	};

	const handleDelete = (user) => {};

	return (
		<div className="my-container">
			<Helmet>
				<title>Bistro Boss | All Users</title>
			</Helmet>
			<div className="p-[50px] bg-white shadow-2xl md:mx-[425px] md:my-[130px]">
				<h2 className="text-2xl md:text-[32px] font-cinzel font-bold mb-4 uppercase">
					Total Users: {users.length}
				</h2>
				<div className="overflow-x-auto">
					<table className="table table-zebra">
						<thead>
							<tr>
								<th className="t-head"></th>
								<th className="t-head">NAME</th>
								<th className="t-head">EMAIL</th>
								<th className="t-head">ROLE</th>
								<th className="t-head">ACTION</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={user._id}>
									<th>{index + 1}</th>
									<td className="t-data">{user.name}</td>
									<td className="t-data">{user.email}</td>
									<td className="t-data">
										{user.role === "admin" ? (
											"Admin"
										) : (
											<button
												onClick={() => handleMakeAdmin(user)}
												className="btn-role">
												<FaUserShield className="h-6 w-4 mx-auto" />
											</button>
										)}
									</td>
									<td>
										<button
											onClick={() => handleDelete(user)}
											className="btn-delt">
											<FaTrashAlt className="h-6 w-4 mx-auto" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllUsers;
