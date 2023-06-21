import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { RiEBike2Fill } from "react-icons/ri";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const AdminHome = () => {
	const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure();

	const { data: stats = {} } = useQuery({
		queryKey: ["admin-stats"],
		queryFn: async () => {
			const res = await axiosSecure("/admin-stats");
			return res.data;
		},
	});

	const { data: chartData = [] } = useQuery({
		queryKey: ["chart-data"],
		queryFn: async () => {
			const res = await axiosSecure("/order-stats");
			return res.data;
		},
	});
	const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

	const getPath = (x, y, width, height) => {
		return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
			y + height / 3
		}
		${x + width / 2}, ${y}
		C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
		Z`;
	};

	const TriangleBar = (props) => {
		const { fill, x, y, width, height } = props;

		return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
	};

	// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<div className="max-w-7xl mx-auto mt-[50px]">
			<h2 className="text-[32px] text-[#151515] font-cinzel font-semibold">
				Hi, {user?.displayName}!
			</h2>
			<div className="grid md:grid-cols-4 gap-[25px] mt-[24px] mb-8">
				<div className="bg-gradient-purple rounded-lg flex gap-6 items-center text-white justify-center py-[34px]">
					<GiWallet className="h-[50px] w-[50px]" />
					<div className="">
						<h2 className="text-[40px] font-inter font-extrabold">
							${stats?.revenue?.toFixed(2)}
						</h2>
						<h4 className="text-2xl font-inter">Revenue</h4>
					</div>
				</div>
				<div className="bg-gradient-gold rounded-lg flex gap-6 items-center text-white justify-center py-[34px]">
					<FaUsers className="h-[50px] w-[50px]" />
					<div className="">
						<h2 className="text-[40px] font-inter font-extrabold">{stats.users}</h2>
						<h4 className="text-2xl font-inter">Customers</h4>
					</div>
				</div>
				<div className="bg-gradient-pink rounded-lg flex gap-6 items-center text-white justify-center py-[34px]">
					<LuChefHat className="h-[50px] w-[50px]" />
					<div>
						<h2 className="text-[40px] font-inter font-extrabold">{stats.products}</h2>
						<h4 className="text-2xl font-inter">Menu Items</h4>
					</div>
				</div>
				<div className="bg-gradient-sky rounded-lg flex gap-6 items-center text-white justify-center py-[34px]">
					<RiEBike2Fill className="h-[50px] w-[50px]" />
					<div>
						<h2 className="text-[40px] font-inter font-extrabold">{stats.orders}</h2>
						<h4 className="text-2xl font-inter">Orders</h4>
					</div>
				</div>
			</div>
			<div className="md:flex">
				<div className="w-1/2">
					<BarChart
						width={500}
						height={300}
						data={chartData}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5,
						}}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="category" />
						<YAxis />
						<Bar
							dataKey="total"
							fill="#8884d8"
							shape={<TriangleBar />}
							label={{ position: "top" }}>
							{chartData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={colors[index % 20]} />
							))}
						</Bar>
					</BarChart>
				</div>
				<div className="">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart width={400} height={400}>
							<Pie
								data={chartData}
								cx="50%"
								cy="50%"
								labelLine={false}
								label={renderCustomizedLabel}
								outerRadius={80}
								fill="#8884d8"
								dataKey="count">
								{chartData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={colors[index % colors.length]}
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
