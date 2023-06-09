import React, { useContext, useState } from "react";
import img from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
	const [showPass, setShowPass] = useState(false);
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password).then((res) => {
			const loggedUser = res.user;
			console.log(loggedUser);
			updateUserProfile(data.name, data.url)
				.then(() => {
					const saveUser = { name: data.name, email: data.email };
					fetch("https://bistro-boss-server-flame.vercel.app/users", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(saveUser),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.insertedId) {
								toast.success("User Created Successfully", {
									duration: 1000,
								});
								navigate("/");
							}
						});
				})
				.catch((err) => {
					console.log(err);
					toast.error("Something Went Wrong", {
						duration: 5000,
					});
				});
		});
		reset();
	};

	return (
		<div style={{ backgroundImage: `url(${bgImg})` }} className="py-[135px] px-[175px]">
			<Helmet>
				<title>Bistro | Sign Up</title>
			</Helmet>
			<div
				style={{
					backgroundImage: `url(${bgImg})`,
					boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
				}}
				className="md:flex justify-center items-center gap-[196px]">
				<img src={img} alt="" />
				<div className="w-full md:w-1/4 mt-[58px] mb-11">
					<h2 className="text-[40px] font-bold text-center">Sign Up</h2>
					<form onSubmit={handleSubmit(onSubmit)} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								name="name"
								type="text"
								{...register("name", { required: true })}
								placeholder="Type here"
								className="input input-bordered"
							/>
							{errors.name && <span className="text-red-600">Name is required</span>}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								name="email"
								type="email"
								{...register("email", { required: true })}
								placeholder="Type here"
								className="input input-bordered"
							/>
							{errors.email && (
								<span className="text-red-600">Email is required</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<input
								name="photo"
								type="url"
								{...register("url", { required: true })}
								placeholder="Type here"
								className="input input-bordered"
							/>
							{errors.url && (
								<span className="text-red-600">Photo URL is required</span>
							)}
						</div>
						<div className="form-control">
							<label className="label flex justify-between items-center">
								<span className="label-text">Password</span>
								<span onClick={() => setShowPass(!showPass)}>
									{showPass ? <FaEyeSlash /> : <FaEye />}
								</span>
							</label>
							<input
								name="password"
								{...register("password", {
									required: true,
									minLength: 6,
									maxLength: 20,
									pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
								})}
								type={showPass ? "text" : "password"}
								placeholder="Enter your password"
								className="input input-bordered"
							/>
							{errors.password?.type === "required" && (
								<p className="text-red-600">Password is required</p>
							)}
							{errors.password?.type === "minLength" && (
								<p className="text-red-600">Password must be 6 characters or max</p>
							)}
							{errors.password?.type === "maxLength" && (
								<p className="text-red-600">
									Password must be 20 characters or less
								</p>
							)}
							{errors.password?.type === "pattern" && (
								<p className="text-red-600">
									Password must have one uppercase, one lowercase, one number and
									one special character
								</p>
							)}
						</div>
						<input className="btn-submit btn-animate" type="submit" value="Sign Up" />
					</form>
					<Link to="/login">
						<p className="text-center text-xl text-[#D1A054] font-medium">
							Already registered?{" "}
							<span className="underline hover:text-blue-600">Go to log in</span>
						</p>
					</Link>
					<SocialLogin />
				</div>
			</div>
		</div>
	);
};

export default SignUp;
