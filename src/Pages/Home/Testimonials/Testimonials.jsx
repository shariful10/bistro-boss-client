import React, { useEffect, useState } from "react";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_URL}/reviews`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<section className="my-[50px] md:my-[130px]">
			<SectionTitle subHeading="What Our Clients Say" heading={"TESTIMONIALS"} />
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className="mx-16 flex flex-col items-center justify-center">
							<Rating
								className="my-12"
								style={{ maxWidth: 180 }}
								value={review.rating}
								readOnly
							/>
							<FaQuoteLeft className="h-[100px] w-[100px] mb-10" />
							<p className="text-center mb-2">{review.details}</p>
							<h3 className="text-[32px] text-[#CD9003] font-medium">
								{review.name}
							</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="grid grid-cols-2"></div>
		</section>
	);
};

export default Testimonials;
