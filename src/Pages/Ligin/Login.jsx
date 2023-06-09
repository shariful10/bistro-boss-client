import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import img from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
	// const captchaRef = useRef(null);
	const [showPass, setShowPass] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		// console.log(email, password);
		signIn(email, password)
			.then((res) => {
				const user = res.user;
				console.log(user);
				toast.success("Successfully Login", {
					duration: 1000,
				});
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				toast.error("Something Went Wrong", {
					duration: 5000,
				});
			});
	};

	const handleValidateCaptcha = (e) => {
		const user_captcha_value = e.target.value;
		console.log(user_captcha_value);

		if (validateCaptcha(user_captcha_value)) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	};

	return (
		<div style={{ backgroundImage: `url(${bgImg})` }} className="py-[155px] px-[175px]">
			<Helmet>
				<title>Bistro | Login</title>
			</Helmet>
			<div
				style={{
					backgroundImage: `url(${bgImg})`,
					boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
				}}
				className="flex justify-center items-center gap-[196px]">
				<img src={img} alt="" />
				<div className="card flex-shrink-0 w-full md:w-1/4 mt-[58px] mb-11">
					<h2 className="text-[40px] font-bold text-center">Login</h2>
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								required
								name="email"
								type="email"
								placeholder="Type here"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label flex justify-between items-center">
								<span className="label-text">Password</span>
								<span onClick={() => setShowPass(!showPass)}>
									{showPass ? <FaEyeSlash /> : <FaEye />}
								</span>
							</label>
							<input
								required
								name="password"
								type={showPass ? "text" : "password"}
								placeholder="Enter your password"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-[#5D5FEF] font-semibold">
									<LoadCanvasTemplate />
								</span>
							</label>
							<input
								type="text"
								name="captcha"
								// ref={captchaRef}
								onBlur={handleValidateCaptcha}
								placeholder="Type captcha here"
								className="input input-bordered"
							/>
							<div className="">
								<input type="checkbox" name="" id="" />
								<span className="ml-2">Validate Captcha</span>
							</div>
						</div>
						<input
							disabled={false}
							className="btn-submit btn-animate"
							type="submit"
							value="Sign In"
						/>
					</form>
					<Link to="/signup">
						<p className="text-center text-xl text-[#D1A054] font-medium">
							New here?{" "}
							<span className="underline hover:text-blue-600">
								Create a New Account
							</span>
						</p>
					</Link>
					<SocialLogin />
				</div>
			</div>
		</div>
	);
};

export default Login;
