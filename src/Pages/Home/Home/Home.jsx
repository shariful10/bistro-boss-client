import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import AboutLike from "../AboutLike/AboutLike";
import Featured from "../Featured/Featured";
import CallUs from "../CallUs/CallUs";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro | Home</title>
			</Helmet>
			<div className="max-w-screen-xl mx-auto">
				<Banner />
				<Category />
				<AboutLike />
				<PopularMenu />
				<CallUs />
				<Featured />
				<Testimonials />
			</div>
		</div>
	);
};

export default Home;
