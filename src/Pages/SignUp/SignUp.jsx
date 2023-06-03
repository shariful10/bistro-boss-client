import React, { useContext, useState } from "react";
import img from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../Providers/AuthProvider";

const SignUp = () => {
	const [showPass, setShowPass] = useState(false);
	const { createUser } = useContext(AuthContext);

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
		});
		reset();
	};

	// const handleReset = () => {
	// 	 // Call the reset function from useForm hook
	//   };

	return (
		<div style={{ backgroundImage: `url(${bgImg})` }} className="py-[180px] px-[175px]">
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
							{errors.name && (
								<span className="text-red-600">This field is required</span>
							)}
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
								<span className="text-red-600">This field is required</span>
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
					<p className="text-center text-xl font-medium text-[#444444] mt-6 mb-4">
						Or sign in with
					</p>
					<div className="flex justify-center gap-14">
						<div className="border border-[#444444] hover:border-[#D1A054B2] hover:bg-[#D1A054B2] p-[14px] rounded-full">
							<FaFacebookF className="h-6 w-6" />
						</div>
						<div className="border border-[#444444] hover:border-[#D1A054B2] hover:bg-[#D1A054B2] p-[14px] rounded-full">
							<FaGoogle className="h-6 w-6" />
						</div>
						<div className="border border-[#444444] hover:border-[#D1A054B2] hover:bg-[#D1A054B2] p-[14px] rounded-full">
							<FaGithub className="h-6 w-6" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
