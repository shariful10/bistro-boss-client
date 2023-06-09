import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
	const { _id, image, price, name, recipe } = item;
	const { user } = useContext(AuthContext);
	const [, refetch] = useCart();
	const navigate = useNavigate();
	const location = useLocation();

	const handleAddToCart = (item) => {
		console.log(item);
		if (user && user.email) {
			const cartItem = { menuItemId: _id, name, image, price, email: user.email };
			fetch("https://bistro-boss-server-flame.vercel.app/carts", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(cartItem),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						refetch(); // Refetch cart to update the number of items in the batch
						toast.success("Food Added To The Cart", {
							duration: 1000,
						});
					}
				});
		} else {
			toast.error("You Have To Login First To Order The Food", {
				duration: 5000,
			});
			navigate("/login", { state: { from: location } });
		}
	};

	return (
		<div className="card card-compact w-full bg-[#F3F3F3] rounded-none">
			<img src={image} alt="Shoes" />
			<p className="absolute right-5 top-5 bg-slate-900 text-white py-3 px-6 rounded-lg text-[16px] font-semibold">
				${price}
			</p>
			<div className="rounded-none py-8 px-10">
				<h2 className="text-2xl font-semibold text-center">{name}</h2>
				<p className="text-[16px] mt-2 mb-6">{recipe}</p>
				<div className="text-center">
					<button
						onClick={() => handleAddToCart(item)}
						className="btn-animate text-[#BB8506] border-b-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827]">
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
