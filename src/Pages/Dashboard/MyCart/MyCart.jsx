import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "./../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
	const [cart, refetch] = useCart();
	const total = cart.reduce((sum, item) => sum + item.price, 0);

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
				fetch(`http://localhost:5000/carts/${item._id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log('data', data);
						
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire("Deleted!", 
							"Your file has been deleted.", 
							"success");
						}
					});
			}
		});
	};

	return (
		<div className="w-full max-w-7xl mx-auto">
			<Helmet>
				<title>Bistro Boss | My Cart</title>
			</Helmet>
			<div className="bg-white p-[50px] shadow-xl px-[210px]">
				<div className="flex justify-between items-center font-bold font-cinzel mt-[50px] mb-8">
					<h2 className="text-2xl md:text-[32px] uppercase">
						Total orders: {cart.length}
					</h2>
					<h2 className="text-2xl md:text-[32px] uppercase">Total Price: ${total}</h2>
					<button className="btn-pay">Pay</button>
				</div>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th className="t-head">#</th>
								<th className="t-head md:pl-[50px] md:pr-[55px]">Item image</th>
								<th className="t-head">item name</th>
								<th className="t-head">price</th>
								<th className="t-head">action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item, index) => (
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

export default MyCart;
