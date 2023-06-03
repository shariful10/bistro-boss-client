import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
	return (
		<div className="">
			<div className="featured-item bg-fixed mx-4 md:mx-0">
				<div className="bg-[#151515B2] py-[25px] md:py-[130px] md:px-[100px] text-white">
					<SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
					<div className="md:flex gap-[68px] justify-center items-center pt-6 md:pt-12 px-8 md:px-16">
						<div>
							<img className="z-10 mb-5 md:mb-0" src={featuredImg} alt="" />
						</div>
						<div className="opacity-100">
							<p className="text-2xl">May 20, 2023</p>
							<p className="text-2xl my-2">WHERE CAN I GET SOME?</p>
							<p className="text-xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
								voluptate facere, deserunt dolores maiores quod nobis quas quasi.
								Eaque repellat recusandae ad laudantium tempore consequatur
								consequuntur omnis ullam maxime tenetur.
							</p>
							<button className="text-white border-b-white hover:bg-[#1F2937] hover:border-b-[#1F2937] btn-animate mt-6">
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
