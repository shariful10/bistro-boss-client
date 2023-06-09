import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
	const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
	const { category } = useParams();
	const initialIndex = categories.indexOf(category.toLowerCase());
	const [tabIndex, setTabIndex] = useState(initialIndex);
	const [menu] = useMenu();
	console.log(category);
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const pizza = menu.filter((item) => item.category === "pizza");
	const drinks = menu.filter((item) => item.category === "drinks");
	const dessert = menu.filter((item) => item.category === "dessert");

	return (
		<div>
			<Helmet>
				<title>Bistro | Oreder Food</title>
			</Helmet>
			<Cover img={shopImg} heading={"OUR MENU"} />
			<div className="max-w-7xl md:mx-auto my-[50px] md:my-[130px] mx-4">
				<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
					<TabList className="text-center">
						{categories.map((category) => (
							<Tab key={category.toUpperCase()}>{category.toUpperCase()}</Tab>
						))}
					</TabList>
					<TabPanel>
						<OrderTab items={salad} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={pizza} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={soup} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={dessert} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={drinks} />
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default Order;
