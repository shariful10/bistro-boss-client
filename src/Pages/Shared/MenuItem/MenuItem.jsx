import React from "react";

const MenuItem = ({ item }) => {
	const { image, price, name, recipe } = item;

	return (
		<div className="md:flex space-x-4 mb-12">
			<img className="w-[120px] rounded-b-[200px] rounded-tr-[200px] mb-5 md:mb-0" src={image} alt="" />
			<div>
				<h3 className="uppercase text-xl text-[#151515]">{name} ------------------</h3>
				<p className="text-[16px] text-[#737373]">{recipe}</p>
			</div>
			<p className="text-xl text-[#BB8506]">${price}</p>
		</div>
	);
};

export default MenuItem;
