import React from "react";

const FoodBtn = ({ btnTitle }) => {
	return (
		<div className="text-center md:mb-[50px]">
			<button className="text-[#1F2937] hover:text-white hover:bg-[#1F2937] border-b-[#1F2937] btn-animate">
				{btnTitle}
			</button>
		</div>
	);
};

export default FoodBtn;
