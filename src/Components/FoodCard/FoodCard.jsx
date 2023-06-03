import React from "react";

const FoodCard = ({ item }) => {
	const { image, price, name, recipe } = item;

	return (
		<div className="card card-compact w-full bg-[#F3F3F3] rounded-none">
			<img src={image} alt="Shoes" />
			<p className="absolute right-5 top-5 bg-slate-900 text-white py-3 px-6 rounded-lg text-[16px] font-semibold">${price}</p>
			<div className="rounded-none py-8 px-10">
				<h2 className="text-2xl font-semibold text-center">{name}</h2>
				<p className="text-[16px] mt-2 mb-6">{recipe}</p>
				<div className="text-center">
					<button className="btn-animate text-[#BB8506] border-b-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827]">
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
