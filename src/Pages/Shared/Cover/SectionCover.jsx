import React from "react";

const SectionCover = ({ heading, img }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${img})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="py-[40px] md:py-[120px] px-[30px] md:px-[112px] mb-[92px]">
			<div className="py-5 md:py-[96px] px-5 md:px-[167px] bg-[#15151599] text-center">
				<h2 className="uppercase text-[30px] md:text-[45px] text-white font-semibold">{heading}</h2>
				<p className="text-white text-[16px]">
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type
					specimen book.
				</p>
			</div>
		</div>
	);
};

export default SectionCover;
