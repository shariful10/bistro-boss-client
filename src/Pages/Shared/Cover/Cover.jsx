import React from "react";

const Cover = ({ img, heading }) => {
	return (
		<div
			style={{ backgroundImage: `url(${img})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
			className="px-[30px] md:px-[200px] pt-[150px] md:pt-[240px] pb-[50px] md:pb-[110px]">
			<div className="px-[39x.5px] py-[50px] md:py-[145.5px] bg-[#15151599] text-center text-white">
				<h1 className="text-4xl md:text-[88px] font-bold mb-3 md:mb-10">{heading}</h1>
				<h4 className="text-xl md:text-2xl font-semibold">Would you like to try a dish?</h4>
			</div>
		</div>
	);
};

export default Cover;
