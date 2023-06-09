import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
	return (
		<div className="text-center mt-12 w-4/5 md:w-4/12 mx-auto">
			<p className="text-[16px] md:text-xl text-[#D99904] font-inter italic mb-4">--- {subHeading} ---</p>
			<h3 className="text-2xl md:text-[40px] font-inter border-y-4 py-3 md:py-5">{heading}</h3>
		</div>
	);
};

export default SectionTitle;
