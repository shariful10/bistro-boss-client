import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SocialLogin = () => {
	const { googleSignIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const handleGoogleSignIn = () => {
		googleSignIn().then((res) => {
			const loggedInUser = res.user;
			const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
			fetch("https://bistro-boss-server-flame.vercel.app/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(saveUser),
			})
				.then((res) => res.json())
				.then(() => {
					toast.success("Successfully Login", {
						duration: 1000,
					});
					navigate(from, { replace: true });
				});
		});
	};

	return (
		<>
			<p className="text-center text-xl font-medium text-[#444444] mt-6 mb-4">
				Or sign in with
			</p>
			<div className="flex justify-center gap-14">
				<div className="border border-[#444444] hover:border-[#D1A054B2] hover:bg-[#D1A054B2] p-[14px] rounded-full">
					<FaFacebookF className="h-6 w-6" />
				</div>
				<div
					onClick={handleGoogleSignIn}
					className="border border-[#444444] hover:border-[#D1A054B2] hover:bg-[#D1A054B2] p-[14px] rounded-full">
					<FaGoogle className="h-6 w-6" />
				</div>
				<div className="border border-[#444444] hover:border-[#D1A054B2] hover:bg-[#D1A054B2] p-[14px] rounded-full">
					<FaGithub className="h-6 w-6" />
				</div>
			</div>
		</>
	);
};

export default SocialLogin;
