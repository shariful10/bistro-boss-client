import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
	FaShoppingCart,
	FaCalendarAlt,
	FaHome,
	FaEnvelope,
	FaUtensils,
	FaUsers,
	FaListUl,
	FaBook,
} from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { HiMenu, HiShoppingBag } from "react-icons/hi";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
	const [cart] = useCart();
	const [isAdmin] = useAdmin();

	// const isAdmin = true;

	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				<Outlet />
				<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
					Open drawer
				</label>
			</div>
			<div className="drawer-side bg-[#D1A054]">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 h-full text-[#151515] font-cinzel font-medium">
					{isAdmin ? (
						<>
							<li>
								<NavLink to="/dashboard/home">
									<FaHome className="h-6 w-6" /> ADMIN HOME
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/reservation">
									<FaUtensils className="h-6 w-6" /> ADD ITEMS
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/history">
									<FaListUl className="h-6 w-6" /> MANAGE ITEMS
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/history">
									<FaBook className="h-6 w-6" /> MANAGE BOOKINGS
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/allusers">
									<FaUsers className="h-6 w-6" /> ALL USERS
								</NavLink>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink to="/dashboard/home">
									<FaHome className="h-6 w-6" /> USER HOME
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/reservation">
									<FaCalendarAlt className="h-6 w-6" /> RESERVATION
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/history">
									<GiWallet className="h-6 w-6" /> PAYMENT HISTORY
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/mycart">
									<FaShoppingCart className="h-6 w-6" /> MY CART
									<span className="bg-red-500 badge text-[#ffffff] text-[16px] font-bold border-none">
										{cart?.length || 0}
									</span>
								</NavLink>
							</li>
						</>
					)}

					<div className="divider"></div>
					<li>
						<NavLink to="/">
							<FaHome className="h-6 w-6" /> HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/menu">
							<HiMenu className="h-6 w-6" /> MENU
						</NavLink>
					</li>
					<li>
						<NavLink to="/order/salad">
							<HiShoppingBag className="h-6 w-6" /> SHOP
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact">
							<FaEnvelope className="h-6 w-6" /> Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
