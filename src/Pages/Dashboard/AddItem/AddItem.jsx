import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";

const imgHostingToken = import.meta.env.VITE_Image_Upload_Token;
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const AddItem = () => {
	const [axiosSecure] = useAxiosSecure();
	const { register, handleSubmit, reset } = useForm();
	const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append("image", data.image[0]);
		fetch(imgHostingURL, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgResponse) => {
				if (imgResponse.success) {
					const imgURL = imgResponse.data.display_url;
					const { name, price, category, recipe } = data;
					const newItem = {
						name,
						price: parseFloat(price),
						category,
						recipe,
						image: imgURL,
					};
					console.log(newItem);
					axiosSecure.post("/menu", newItem).then((data) => {
						console.log("After posting new menu item", data.data);
						if (data.data.insertedId) {
							reset();
							toast.success("Item Added Successfully", {
								duration: 1000,
							});
						}
					});
				}
			});
	};

	return (
		<div className="w-full">
			<Helmet>
				<title>Bistro Boss | Add Item</title>
			</Helmet>
			<SectionTitle subHeading="What's new?" heading="ADD AN ITEM" />
			<div className="max-w-7xl mx-auto mt-16 md:my-[50px] mb-[130px]">
				<form onSubmit={handleSubmit(onSubmit)} className="p-[50px] bg-[#F3F3F3]">
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text form-title">Recipe name*</span>
						</label>
						<input
							type="text"
							placeholder="Recipe name"
							{...register("name", { required: true, maxLength: 80 })}
							className="input input-bordered w-full input-placeholder"
						/>
					</div>
					<div className="md:flex gap-6 my-6">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text form-title">Category*</span>
							</label>
							<select
								{...register("category", { required: true })}
								defaultValue="Category"
								className="select select-bordered input-placeholder">
								<option disabled>Category</option>
								<option>Pizza</option>
								<option>Soups</option>
								<option>Drinks</option>
								<option>Salad</option>
								<option>Desserts</option>
							</select>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text form-title">Price*</span>
							</label>
							<input
								type="number"
								placeholder="Price"
								{...register("price", { required: true })}
								className="input input-bordered w-full input-placeholder"
							/>
						</div>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text form-title">Recipe Details*</span>
						</label>
						<textarea
							{...register("recipe", { required: true })}
							className="textarea textarea-bordered h-[250px] input-placeholder"
							placeholder="Recipe Details"></textarea>
					</div>
					<input
						className="capitalize mt-6 mb-8"
						type="file"
						{...register("image", { required: true })}
					/>
					<button type="submit" className="btn-item">
						Add Item{" "}
						<span>
							<FaUtensils className="h-5 w-5" />
						</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddItem;
