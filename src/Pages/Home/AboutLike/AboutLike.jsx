import React from "react";
import img from "../../../assets/home/chef-service.jpg";

const AboutLike = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${img})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="py-[40px] md:py-[120px] px-[30px] md:px-[112px] mb-[92px]">
			<div className="py-5 md:py-[96px] px-5 md:px-[167px] bg-white text-center">
				<h2 className="uppercase text-[45px] text-[#151515]">Bistro Boss</h2>
				<p className="text-[#151515] text-[16px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero
					accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni
					aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
				</p>
			</div>
		</div>
	);
};

export default AboutLike;
