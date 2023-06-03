import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
	return (
		<>
			<section>
				<SectionTitle
					subHeading={"From 11:00am to 10:00pm"}
					heading={"ORDER ONLINE"}
				/>
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper mt-[48px] mb-[90px] relative">
					<SwiperSlide>
						<img src={slide1} alt="image" />
						<h3 className="text-3xl text-white text-center uppercase absolute top-[20rem] left-[6rem]">
							Salads
						</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide2} alt="image" />
						<h3 className="text-3xl text-white text-center uppercase absolute top-[20rem] left-[6rem]">
							pizzas
						</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide3} alt="image" />
						<h3 className="text-3xl text-white text-center uppercase absolute top-[20rem] left-[6rem]">
							Soups
						</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide4} alt="image" />
						<h3 className="text-3xl text-white text-center uppercase absolute top-[20rem] left-[4rem]">
							desserts
						</h3>
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide5} alt="image" />
						<h3 className="text-3xl text-white text-center uppercase absolute top-[20rem] left-[6rem]">
							Salads
						</h3>
					</SwiperSlide>
				</Swiper>
			</section>
		</>
	);
};

export default Category;
