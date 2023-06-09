import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
	const [menu, , refetch] = useMenu();
	const [axiosSecure] = useAxiosSecure();

	const handleDelete = (item) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/menu/${item._id}`).then((res) => {
					console.log("Delete", res.data);
					if (res.data.deletedCount > 0) {
						Swal.fire("Deleted!", "Your file has been deleted.", "success");
						refetch();
					}
				});
			}
		});
	};

	return (
		<div className="w-full">
			<Helmet>
				<title>Bistro Boss | Manage Items</title>
			</Helmet>
			<SectionTitle subHeading={"Hurry Up!"} heading={"MANAGE ALL ITEMS"} />
			<div className="max-w-7xl mx-auto px-[120px] my-[50px] md:mt-16">
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th className="t-head"></th>
								<th className="t-head md:pl-[50px] md:pr-[55px]">ITEM IMAGE</th>
								<th className="t-head">ITEM NAME</th>
								<th className="t-head md:pl-[56px] md:pr-[194px]">PRICE</th>
								<th className="t-head">ACTION</th>
								<th className="t-head">ACTION</th>
							</tr>
						</thead>
						<tbody>
							{menu.map((item, index) => (
								<tr key={item._id}>
									<th>{index + 1}</th>
									<td className="md:pl-[50px] md:pr-[55px]">
										<div>
											<img
												className="w-[75px] h-[75px]"
												src={item.image}
												alt="Food Image"
											/>
										</div>
									</td>
									<td className="t-data">{item.name}</td>
									<td className="t-data md:pl-[56px] md:pr-[194px]">
										${item.price}
									</td>
									<td>
										<button
											// onClick={() => handleUpdate(item)}
											className="btn-role">
											<FaRegEdit className="h-6 w-4 mx-auto" />
										</button>
									</td>
									<td>
										<button
											onClick={() => handleDelete(item)}
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

export default ManageItems;
