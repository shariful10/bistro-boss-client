import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import FoodBtn from "../../Shared/FoodBtn/FoodBtn";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, category }) => {
	return (
		<div>
			<div className="mt-12 grid md:grid-cols-2 gap-6 mx-4 md:mx-0">
				{items.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<Link to={`/order/${category}`}>
				<FoodBtn btnTitle={"ORDER NOW"} />
			</Link>
		</div>
	);
};

export default MenuCategory;
