import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import FoodBtn from "../../Shared/FoodBtn/FoodBtn";

const PopularMenu = () => {
	const [menu] = useMenu();
	const popular = menu.filter((item) => item.category === "popular");
	
	// const [menu, setMenu] = useState([]);

	// useEffect(() => {
	// 	fetch("menu.json")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			const populatItems = data.filter((item) => item.category === "popular");
	// 			setMenu(populatItems);
	// 		});
	// }, []);

	return (
		<section>
			<SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
			<div className="mt-12 grid md:grid-cols-2 gap-6 mx-4 md:mx-0">
				{popular.map(
					(item) => <MenuItem key={item._id} item={item}></MenuItem>
				)}
			</div>
			<FoodBtn btnTitle={'View Full Menu'} />
		</section>
	);
};

export default PopularMenu;
