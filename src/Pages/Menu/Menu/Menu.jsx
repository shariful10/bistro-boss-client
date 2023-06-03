import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionCover from "../../Shared/Cover/SectionCover";

const Menu = () => {
	const [menu] = useMenu();

	const dessert = menu.filter((item) => item.category === "dessert");
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const pizza = menu.filter((item) => item.category === "pizza");
	const offered = menu.filter((item) => item.category === "offered");

	return (
		<div>
			<Helmet>
				<title>Bistro | Our Menu</title>
			</Helmet>
			<Cover img={menuImg} heading={"OUR MENU"} />
			{/* Offer Menu */}
			<div className="max-w-7xl mx-auto my-[50px] md:mt-[130px]">
				<SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
				<MenuCategory items={offered} />
			</div>
			{/* Desert Menu */}
			<div className="max-w-7xl mx-auto my-[50px] md:mt-[130px]">
				<SectionCover img={dessertImg} heading={"dessert"} />
				<MenuCategory items={dessert} category={"dessert"} />
			</div>
			{/* Pizza Menu */}
			<div className="max-w-7xl mx-auto my-[50px] md:mt-[130px]">
				<SectionCover img={pizzaImg} heading={"Pizza"} />
				<MenuCategory items={pizza} category={"pizza"} />
			</div>
			{/* Salad Menu */}
			<div className="max-w-7xl mx-auto my-[50px] md:mt-[130px]">
				<SectionCover img={saladImg} heading={"Salad"} />
				<MenuCategory items={salad} category={"salad"} />
			</div>
			{/* Soup Menu */}
			<div className="max-w-7xl mx-auto my-[50px] md:mt-[130px]">
				<SectionCover img={soupImg} heading={"Soup"} />
				<MenuCategory items={soup} category={"soup"} />
			</div>
		</div>
	);
};

export default Menu;
